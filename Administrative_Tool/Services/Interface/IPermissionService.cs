using System.Collections.Generic;
using System.Threading.Tasks;
using Administrative_Tool.Models;

namespace Administrative_Tool.Services.Interface
{
    public interface IPermissionService
    {
        Task<IEnumerable<Permission>> GetAllPermission();
        Task<IEnumerable<Permission>> GetPermissionByRoleName(string role);
        Task<Permission> GetPermissionByName(string actionName);
    }
}
