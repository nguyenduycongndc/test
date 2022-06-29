using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Administrative_Tool.Models;

namespace Administrative_Tool.Services.Interface
{
    public interface IUserService
    {
        List<Object> GetAllUser(SearchUserModel searchUserModel);
        public CurrentUserModel GetDetailModels(int id);
        public Task<bool> CreateUse(CreateModel input, CurrentUserModel _userInfo);
        public Task<bool> UpdateUse(UpdateModel input, CurrentUserModel _userInfo);
        public Task<bool> DeleteUse(int Id, CurrentUserModel _userInfo);
        public Task<bool> ChangePassWordService(ChangePassWordModel input, int id);
    }
}
