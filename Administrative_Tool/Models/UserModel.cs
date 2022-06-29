using System;

namespace Administrative_Tool.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string UserName { get; set; }
        public int IsActive { get; set; }
    }
}
