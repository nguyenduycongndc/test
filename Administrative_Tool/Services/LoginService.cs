using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Administrative_Tool.Data;
using Administrative_Tool.Models;
using Administrative_Tool.Repo.Interface;
using Administrative_Tool.Services.Interface;
using Microsoft.Extensions.Configuration;


namespace Administrative_Tool.Services
{
    public class LoginService : ILoginService
    {
        private readonly ILogger<LoginService> _logger;
        private readonly IUserRepo userRepo;
        private readonly IConfiguration _config;

        public LoginService(ILogger<LoginService> logger, IUserRepo loginRepo, IConfiguration config)
        {
            _logger = logger;
            this.userRepo = loginRepo;
            _config = config;
        }
        public LoginModel Login(InputLoginModel inputModel)
        {
            try
            {
                LoginModel userdetai = null;
                if (inputModel.UserName != "" && inputModel.UserName != null && inputModel.PassWord != "" && inputModel.PassWord != null)
                {
                    var user =  userRepo.GetDetailByName(inputModel);
                    if (user == null)
                    {
                        return null;
                    }
                    userdetai = new LoginModel()
                    {
                        UserName = user.UserName,
                        Token = GenerateJwt(user),
                    };
                    var Au = AuthenticateUser(inputModel);

                }
                return userdetai;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return null;
            }
        }

        public string GenerateJwt(Users user)
        {

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
            };
            DateTime jwtDate = DateTime.UtcNow;

            //var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(GlobalSetting.Secret));
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);
            var expires = DateTime.UtcNow.AddHours(24);

            var token = new JwtSecurityToken(
                issuer: "http://::80",
                audience: "http://::80",
                claims,
                notBefore: jwtDate,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        private CurrentUserModel AuthenticateUser(InputLoginModel inputModel)
        {
            CurrentUserModel user = null;
            try
            {
                var data = userRepo.GetDetailByName(inputModel);
                user = new CurrentUserModel()
                {
                    Id = data.Id,
                    FullName = data.FullName,
                    UserName = data.UserName,
                    RoleId = data.RoleId,
                };
                return user;
            }
            catch (Exception ex)
            {
                _logger.LogError($"USER-LOGIN - {inputModel.UserName} : {ex.Message}!");
                return user;
            }
        }
    }
}
