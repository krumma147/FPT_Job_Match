using Microsoft.AspNetCore.SignalR;
using System.Collections.Concurrent;

namespace TestAPI.Services.HubService
{
    public class ChatHub : Hub
    {
        private static readonly ConcurrentDictionary<string, string> _users = new ConcurrentDictionary<string, string>();

        public override async Task OnConnectedAsync()
        {
            var username = Context.GetHttpContext().Request.Query["username"];
            _users[username] = Context.ConnectionId;
            await base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            var username = _users.FirstOrDefault(x => x.Value == Context.ConnectionId).Key;
            _users.TryRemove(username, out _);
            await base.OnDisconnectedAsync(exception);
        }

        public async Task SendMessage(string sender, string recipient, string message)
        {
            if (_users.TryGetValue(recipient, out var recipientConnectionId))
            {
                await Clients.Client(recipientConnectionId).SendAsync("ReceiveMessage", sender, message);
            }
        }
    }

}
