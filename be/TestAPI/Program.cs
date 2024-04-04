using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using TestAPI.Contextes;
using TestAPI.Services;
using TestAPI.Services.Email;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AuthDemoDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("AuthenDbContext") ?? throw new InvalidOperationException("Connection string 'AuthenDbContext' not found.")));

builder.Services.AddIdentity<IdentityUser, IdentityRole>(options =>
{
    options.Password.RequiredLength = 5;
}).AddEntityFrameworkStores<AuthDemoDbContext>()
.AddDefaultTokenProviders();
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters()
    {
        ValidateActor = true,
        ValidateIssuer = true, // Ensures the token issuer matches the configured issuer (ValidIssuer).
        ValidateAudience = true, // Ensures the token audience matches the configured audience (ValidAudience).
        RequireExpirationTime = true, // Ensures the token is signed with the configured key (IssuerSigningKey)
        ValidateIssuerSigningKey = true, // Ensures the token is not expired
        ValidIssuer = builder.Configuration.GetSection("Jwt:Issuer").Value, // Sets the expected issuer of the token (obtained from app settings)
        ValidAudience = builder.Configuration.GetSection("Jwt:Audience").Value, // Sets the expected audience of the token (obtained from app settings)
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!))
    };
});

// Add services to the container.
builder.Services.AddTransient<IAuthService, AuthService>();
builder.Services.AddTransient<IEmailService, EmailService>();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
