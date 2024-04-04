using System.Net.Mail;
using System.Net;

namespace TestAPI.Services.Email
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration _configuration;

        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task SendEmailAsync(string toEmail, string subject, string content)
        {
            var emailSettings = _configuration.GetSection("EmailSettings");
            var smtpClient = new SmtpClient
            {
                Host = emailSettings["MailServer"],
                Port = int.Parse(emailSettings["MailPort"]),
                EnableSsl = true,
                Credentials = new NetworkCredential(emailSettings["Sender"], emailSettings["Password"])
            };

            var mailMessage = new MailMessage
            {
                From = new MailAddress(emailSettings["Sender"], emailSettings["SenderName"]),
                Subject = subject,
                Body = content,
                IsBodyHtml = true
            };
            mailMessage.To.Add(toEmail);

            try
            {
                await smtpClient.SendMailAsync(mailMessage);
            }
            catch (Exception ex)
            {
                // Log or handle your exception
                throw;
            }
        }
    }
}
