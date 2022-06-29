using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Administrative_Tool.Data;
using Administrative_Tool.Models;
using Administrative_Tool.Repo.Interface;

namespace Administrative_Tool.Repo
{
    public class UserRepo : IUserRepo
    {
        private readonly SqlDbContext context;

        public UserRepo(SqlDbContext context)
        {
            this.context = context;
        }
        public List<Users> GetAll()
        {
            return context.Users.ToList();
        }
        public Users GetDetail(int id)
        {
            var query = (from x in context.Users
                         where x.Id.Equals(id)
                         select new Users
                         {
                             Id = x.Id,
                             UserName = x.UserName,
                             Password = x.Password,
                             IsActive = x.IsActive,
                             RoleId = x.RoleId,
                             FullName = x.FullName,
                             Email = x.Email,
                         }).FirstOrDefault();

            return query;
        }
        public async Task<bool> CreateUs(Users user, UsersRoles usersRoles)
        {
            await context.Users.AddAsync(user);
            await context.UsersRoles.AddAsync(usersRoles);
            await context.SaveChangesAsync();
            return true;
        }
        public async Task<bool> UpdateUs(Users user)
        {
            var updt = await context.Users.FindAsync(user.Id);
            updt.Id = user.Id;
            updt.UserName = user.UserName;
            updt.Password = user.Password;
            updt.Email = user.Email;
            updt.IsActive = user.IsActive;
            updt.ModifiedAt = user.ModifiedAt;
            updt.ModifiedBy = user.ModifiedBy;
            await context.SaveChangesAsync();
            return true;
        }
        public async Task<bool> DeleteUs(Users user)
        {
            var updt = await context.Users.FindAsync(user.Id);
            updt.Id = user.Id;
            updt.IsActive = 0;
            updt.DeletedAt = user.DeletedAt;
            updt.DeletedBy = user.DeletedBy;
            updt.IsDeleted = 0;
            await context.SaveChangesAsync();
            return true;
        }
        public Users GetDetailByName(InputLoginModel inputModel)
        {
            var query = (from x in context.Users
                         where x.UserName.Equals(inputModel.UserName) && x.Password.Equals(EncodeServerName(inputModel.PassWord))
                         select new Users
                         {
                             Id = x.Id,
                             UserName = x.UserName,
                             FullName = x.FullName,
                             Password = x.Password,
                             IsActive = x.IsActive,
                             RoleId = x.RoleId,
                         }).FirstOrDefault();

            return query;
        }
        public List<Users> CheckUser(string userName)
        {
            var query = (from x in context.Users
                         where x.UserName.Equals(userName)
                         select new Users
                         {
                             Id = x.Id,
                             UserName = x.UserName,
                             FullName = x.FullName,
                             IsActive = x.IsActive,
                             RoleId = x.RoleId,
                         }).ToList();

            return query;
        }
        public static string EncodeServerName(string serverName)
        {
            return Convert.ToBase64String(Encoding.UTF8.GetBytes(serverName));
        }
        public async Task<bool> ChangePassWordRepo(Users user)
        {
            var updt = await context.Users.FindAsync(user.Id);
            updt.Id = user.Id;
            updt.Password = EncodeServerName(user.Password);
            await context.SaveChangesAsync();
            return true;
        }
    }
}
