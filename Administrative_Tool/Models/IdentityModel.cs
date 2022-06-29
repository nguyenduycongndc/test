using System;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Administrative_Tool.Models
{
    public class Permission
    {
        /// <summary>
        /// Gets or sets id.
        /// </summary>
        [Key]
        public long Id { get; set; }

        /// <summary>
        /// Gets or sets name.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets description.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Gets or sets Permission Type.
        /// 0: Workspace permission; 1: System permission.
        /// </summary>
        public int PermissionType { get; set; }

        /// <summary>
        /// Gets or sets.
        /// </summary>
        public virtual ICollection<RolePermission> RolePermissions { get; set; }
    }

    public class RolePermission
    {
        /// <summary>
        /// Gets or sets.
        /// </summary>
        [ForeignKey("PermissionId")]
        [JsonIgnore]
        public virtual Permission Permission { get; set; }

        /// <summary>
        /// Gets or sets.
        /// </summary>
        [Key]
        [Column(Order = 0)]
        public long PermissionId { get; set; }

        /// <summary>
        /// Gets or sets.
        /// </summary>
        [Key]
        [Column(Order = 1)]
        public Guid RoleId { get; set; }
    }
}
