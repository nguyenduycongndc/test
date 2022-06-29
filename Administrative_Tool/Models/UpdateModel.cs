using System;

namespace Administrative_Tool.Models
{
    public class UpdateModel
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public int IsActive { get; set; }
        public string Name { get; set; }
    }
}
