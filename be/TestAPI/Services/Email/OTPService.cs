namespace TestAPI.Services.Email
{
    public class OTPService : IOTPService
    {
        public string GenerateOTP()
        {
            Random random = new Random();
            int otp = random.Next(100000, 999999); // Tạo một số ngẫu nhiên 6 chữ số.
            return otp.ToString();
        }
    }
}
