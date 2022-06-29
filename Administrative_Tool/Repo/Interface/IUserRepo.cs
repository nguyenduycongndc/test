using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Administrative_Tool.Data;
using Administrative_Tool.Models;

namespace Administrative_Tool.Repo.Interface
{
    public interface IUserRepo
    {
        List<Users> GetAll();
        public Users GetDetail(int id);
        Task<bool> CreateUs(Users user, UsersRoles usersRoles);
        Task<bool> UpdateUs(Users user);
        Task<bool> DeleteUs(Users user);
        Users GetDetailByName(InputLoginModel inputModel);
        List<Users> CheckUser(string userName);
        Task<bool> ChangePassWordRepo(Users user);
    }
}
