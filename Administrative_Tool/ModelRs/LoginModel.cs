using System;
using System.Text.Json.Serialization;

namespace Administrative_Tool.Models
{
    public class LoginModel
    {
        public string UserName { get; set; }

        public string Token { get; set; }
    }
    public class CurrentUserModel
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string UserName { get; set; }
        public int IsActive { get; set; }
        public string Email { get; set; }
        public int? RoleId { get; set; }
    }
    public class SearchUserModel
    {
        public string UserName { get; set; }
        public int IsActive { get; set; }
        [JsonPropertyName("start_number")]
        public int StartNumber { get; set; }
        [JsonPropertyName("page_size")]
        public int PageSize { get; set; }
    }
}
