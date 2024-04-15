using Microsoft.AspNetCore.SignalR;
namespace TestAPI.Services.HubService
{
    public class ServiceHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
