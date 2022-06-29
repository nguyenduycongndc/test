using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Administrative_Tool.Data;
using Administrative_Tool.Models;
using Administrative_Tool.Repo.Interface;
using Administrative_Tool.Services.Interface;

namespace Administrative_Tool.Services
{
    public class UserServices : IUserService
    {
        private readonly ILogger<UserServices> _logger;
        private readonly IUserRepo userRepo;
        public UserServices(IUserRepo userRepo, ILogger<UserServices> logger)
        {
            this.userRepo = userRepo;
            _logger = logger;
        }

        public List<Object> GetAllUser(SearchUserModel searchUserModel)
        {
            var qr = userRepo.GetAll();
            List<UserModel> lst = new List<UserModel>();
            var listUser = qr.Where(x => (x.UserName.ToLower().Contains(searchUserModel.UserName.ToLower()) || string.IsNullOrEmpty(searchUserModel.UserName))
                                          && (searchUserModel.IsActive == -1 || (searchUserModel.IsActive == 1 ? x.IsActive == 1 : x.IsActive == 0))).Select(x => new UserModel()
            {
                Id = x.Id,
                UserName = x.UserName,
                FullName = x.FullName,
                IsActive = x.IsActive,
            }).OrderBy(x => x.Id).ToList();
            var count = listUser.Count();
            lst =  listUser.Skip(searchUserModel.StartNumber).Take(searchUserModel.PageSize).ToList();
            var data = new List<Object> { lst, listUser.Count() };
            return data;
        }
        public CurrentUserModel GetDetailModels(int Id)
        {
            try
            {
                var data = userRepo.GetDetail(Id);

                var detailUs = new CurrentUserModel()
                {
                    Id = data.Id,
                    UserName = data.UserName,
                    FullName = data.FullName,
                    IsActive = data.IsActive,
                    Email = data.Email,
                    RoleId = data.RoleId,
                };

                return detailUs;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return null;
            }
        }
        public async Task<bool> CreateUse(CreateModel input, CurrentUserModel _userInfo)
        {
            try
            {
                var checkUser = userRepo.CheckUser(input.UserName);
                if (checkUser.Count() > 0)
                {
                    _logger.LogError("Tài khoản đã tồn tại");
                    return false;
                }
                if (input.UserName == "" || input.UserName == null || input.Password == "" || input.Password == null)
                {
                    return false;
                }
                //string salt = "";
                //string hashedPassword = "";
                //if (input != null)
                //{
                //    var pass = input.Password;
                //    salt = Crypto.GenerateSalt(); // salt key
                //    var password = input.Password + salt;
                //    hashedPassword = Crypto.HashPassword(password);
                //}
                string salt = "";
                string hashedPassword = "";
                //salt = Crypto.GenerateSalt(); // salt key
                var password = input.Password/* + salt*/;
                hashedPassword = EncodeServerName(password);
                Users us = new Users()
                {
                    FullName = input.UserName.Trim(),
                    UserName = input.UserName.ToLower(),
                    Password = hashedPassword,
                    IsActive = 1,
                    DateOfJoining = DateTime.Now,
                    CreatedAt = DateTime.Now,
                    SaltKey = salt,
                    RoleId = input.RoleId,
                    CreatedBy = _userInfo.Id,
                };
                var _userrole = new UsersRoles
                {
                    roles_id = input.RoleId,
                    Users = us
                };
                return await userRepo.CreateUs(us, _userrole);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return false;
            }
        }
        public async Task<bool> UpdateUse(UpdateModel input, CurrentUserModel _userInfo)
        {
            try
            {
                var checkUser = userRepo.CheckUser(input.UserName);
                if (checkUser.Count() > 1)
                {
                    _logger.LogError("Tài khoản đã tồn tại");
                    return false;
                }
                var data = userRepo.GetDetail(input.Id);
                if (data == null) return false;
                data.Id = input.Id;
                data.UserName = input.UserName.ToLower();
                data.FullName = input.Name.Trim().ToLower();
                data.Email = input.Email.ToLower().Trim();
                //data.IsActive = input.IsActive;
                data.ModifiedAt = DateTime.Now;
                data.ModifiedBy = _userInfo.Id;
                return await userRepo.UpdateUs(data);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return false;
            }
        }
        public async Task<bool> DeleteUse(int id, CurrentUserModel _userInfo)
        {
            try
            {
                var data = userRepo.GetDetail(id);
                if (data == null) return false;
                data.DeletedAt = DateTime.Now;
                data.DeletedBy = _userInfo.Id;
                data.IsDeleted = 0;
                return await userRepo.DeleteUs(data);
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public static string EncodeServerName(string serverName)
        {
            return Convert.ToBase64String(Encoding.UTF8.GetBytes(serverName));
        }
        public async Task<bool> ChangePassWordService(ChangePassWordModel input, int id)
        {
            try
            {
                var data = userRepo.GetDetail(id);
                if (data == null) return false;
                if (EncodeServerName(input.PassWordOld) != data.Password)
                {
                    _logger.LogError("Mật khẩu cũ không chính xác");
                    return false;
                }
                if (input.PassWordNew != input.ConfirmPassWordNew)
                {
                    _logger.LogError("Xác nhận mật khẩu không chính xác");
                    return false;
                }
                data.Id = input.Id;
                data.Password = input.PassWordNew;
                return await userRepo.ChangePassWordRepo(data);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return false;
            }
        }
    }
}
