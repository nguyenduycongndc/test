﻿////function callApi_multipleselect(selector, placeholder) {
////    $("#" + selector).select2({
////        placeholder: placeholder,
////        minimumInputLength: 0,
////        multiple: true,
////        closeOnSelect: true,
////        ajax: {
////            headers: { "Authorization": "Bearer " + sessionStorage['SessionToken'] },
////            url: apiConfig.api.host_user_service + apiConfig.api.systemusergroup.controller + apiConfig.api.systemusergroup.action.select.path,
////            dataType: 'json',
////            data: function (params) {
////                var query = {
////                    q: params.term,
////                    type: 'public'
////                }
////                return query;
////            },
////            processResults: function (data) {
////                return {
////                    results: $.map(data.data, function (item) {
////                        return {
////                            text: item.full_name,
////                            id: item.id
////                        }
////                    })
////                };
////            },
////            cache: true
////        }
////    });
//}


function fnDeleteSuccess(rspn) {
    swal({
        title: "Thông báo",
        text: 'Bạn có chắc chắn muốn xoá bản ghi' + ' ' + '"' + rspn.fullName + '"',
        type: 'warning',
        showCancelButton: !0,
        //}, function (isConfirm) {
        //    if (isConfirm) {
        //        fnDeleteUser(rspn.id);
        //    }
    }).then((isConfirm) => {
        if (isConfirm.value == true) {
            fnDeleteUser(rspn.id);
        }
        return false;
    });
}
function Delete(id) {
    fnGetDetail(null, id);
}

function UnitTypeActive(id, input) {
    var status = 1;
    //if ($(input).hasClass("active")) {
    if ($(input).prop("checked") == false) {
        status = 0;
    }
    fnActive(id, status);
}
function updateUserSuccess(data) {
    if (data != false) {
        toastr.success("Thêm mới thành công");
        setTimeout(function () {
            openView(0, 0)
        }, 2000);
    }
    else {
        toastr.error("Thêm mới thất bại");
        //setTimeout(function () { toastr.error(getStatusCode(data.code), 'Error', { progressBar: true }) }, 70);
    }
}
function createUserSuccess(data) {
    if (data !== false) {
        /*createdLog("Loại đơn vị", "Thêm mới loại đơn vị");*/
        toastr.success("Thêm mới thành công");
        //localStorage.removeItem("id");
        //localStorage.removeItem("type");
        setTimeout(function () {
            openView(0, 0)
        }, 2000);
    }
    else {
        toastr.error("Thêm mới thất bại")
        //setTimeout(function () { toastr.error(getStatusCode(data.code), 'Error', { progressBar: true }) }, 50);
    }
}

function fnDeleteUserSuccess(rspn) {
    if (rspn === true) {
        toastr.success("Xóa dữ liệu thành công");
        onSearch();
    }
    else {
        toastr.error("Xóa dữ liệu thất bại");
    }

}

function openView(type, value) {
    var index = $("#view");
    var create = $("#create");
    var edit = $("#edit");
    var detail = $("#detail");
    if (type === 0) {
        //localStorage.removeItem("id");
        //localStorage.removeItem("type");
        index.show();
        create.hide();
        edit.hide();
        detail.hide();
        setTimeout(function () {
            onSearch();
        }, 100);
    }
    else if (type === 1) {
        clearMsgInvalid();
        localStorage.setItem("type", "1");
        index.hide();
        create.show();
        document.getElementById("userNameCreate").focus();
        edit.hide();
        detail.hide();
        document.getElementById("formCreate").reset();
        $("#frmHeaderCreate").val(frmHeaderCreate);
    }
    else if (type === 2) {
        index.hide();
        create.hide();
        edit.hide();
        detail.show();

        fnGetDetail(type, value);
    }
    else if (type === 3) {
        clearMsgInvalid();
        index.hide();
        create.hide();
        edit.show();
        document.getElementById("userNameEdit").focus();
        detail.hide();
        fnGetDetail(type, value);
    }
}

function fnSearchSuccess(rspn) {
    //showLoading();
    if (rspn !== undefined && rspn !== null && rspn[0].length > 0) {
        var tbBody = $('#userTypeTable tbody');
        $("#userTypeTable").dataTable().fnDestroy();
        tbBody.html('');
        for (var i = 0; i < rspn[0].length; i++) {
            var obj = rspn[0][i];
            var TT = obj.isActive == 1 ? "Hoạt động" : "Dừng hoạt động"
            var html = '<tr>' +
                '<td class="text-center"></td>' +
                '<td>' + obj.fullName + '</td>' +
                '<td>' + obj.userName + '</td>' +
                '<td>' + TT + '</td>' +
                '<td class="text-center">' +

                '<a type="button" class="btn icon-default btn-action-custom" onclick="openView(2,' + obj.id + ')" style="color:green"><i data-toggle="tooltip" title="Chi tiết" class="fa fa-eye" aria-hidden="true"></i></a>' +
                (obj.isActive == 1 ?
                '<a type="button" class="btn icon-default btn-action-custom" onclick="openView(3,' + obj.id + ')" style="color:blue"><i data-toggle="tooltip" title="Cập nhật" class="micon dw dw-edit2" aria-hidden="true"></i></a>' :
                    '<a type="button" class="btn icon-disabled btn-action-custom" ><i data-toggle="tooltip" title="Cập nhật" class="micon dw dw-edit2" aria-hidden="true"></i></a>')
                +
                //'<a type="button" class="btn icon-default btn-action-custom" onclick="openView(3,' + obj.id + ')"><i data-toggle="tooltip" title="Cập nhật" class="micon dw dw-edit2" aria-hidden="true"></i></a>' +

                (obj.isActive == 1 ?
                '<a type="button" class="btn icon-delete btn-action-custom" onclick="Delete(' + obj.id + ')" style="color:red"><i data-toggle="tooltip" title="Xóa" class="fa fa-trash" aria-hidden="true"></i></a>' :
                    '<a type="button" class="btn icon-disabled btn-action-custom" ><i data-toggle="tooltip" title="Xóa" class="fa fa-trash" aria-hidden="true" ></i></a>')
                +
                //'<a type="button" class="btn icon-delete btn-action-custom" onclick="Delete(' + obj.id + ')"><i data-toggle="tooltip" title="Xóa" class="fa fa-trash" aria-hidden="true"></i></a>' +
                //'</td>' +
                '</tr>';
            tbBody.append(html);
        }
        var page_size = (parseInt($("#txtCurrentPage").val()) - 1) * parseInt($("#cbPageSize").val())
        var t = $("#userTypeTable").DataTable({
            "bPaginate": false,
            "bLengthChange": false,
            "bFilter": false,
            "bInfo": false,
            "columnDefs": [
                {
                    "targets": 0,
                    "className": "text-center",
                    "orderable": false,
                    "data": null,
                    "order": [],
                    render: function (data, type, row, meta) {

                        return meta.row + page_size + 1;
                    }
                },
                {
                    "targets": [0, 3, 4],
                    "searchable": false,
                    "orderable": false
                }],
            "order": [],
            "drawCallback": function (settings) {
                $('[data-toggle="tooltip"]').tooltip();
            },
        });
        t.on('order.dt search.dt', function () {
            t.column(0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
                cell.innerHTML = i + page_size + 1;
            });
        }).draw();
        reCalculatPagesCustom(rspn[1]);
        viewBtnActionPage();
        hideLoading();
    } else if (rspn[0] == "" || rspn[0] == null || rspn[0] == undefined) {
        var tbBody = $('#userTypeTable tbody');
        $("#userTypeTable").dataTable().fnDestroy();
        tbBody.html('');

        var page_size = (parseInt($("#txtCurrentPage").val()) - 1) * parseInt($("#cbPageSize").val())
        var t = $("#userTypeTable").DataTable({
            "bPaginate": false,
            "bLengthChange": false,
            "bFilter": false,
            "bInfo": false,
            "columnDefs": [
                {
                    "targets": 0,
                    "className": "text-center",
                    "orderable": false,
                    "data": null,
                    "order": [],
                    render: function (data, type, row, meta) {

                        return meta.row + page_size + 1;
                    }
                },
                {
                    "targets": [0, 3, 4],
                    "searchable": false,
                    "orderable": false
                }],
            "order": [],
            "drawCallback": function (settings) {
                $('[data-toggle="tooltip"]').tooltip();
            },
        });
        t.on('order.dt search.dt', function () {
            t.column(0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
                cell.innerHTML = i + page_size + 1;
            });
        }).draw();
        reCalculatPagesCustomNull();
        hideLoading();
    }
}
function onSearch() {
    var obj = {
        'UserName': $('#UserName').val().trim(),
        'IsActive': $('#IsActive').val(),
        'page_size': parseInt($("#cbPageSize").val()),
        'start_number': (parseInt($("#txtCurrentPage").val()) - 1) * parseInt($("#cbPageSize").val())
    }
    callApi_userservice(
        apiConfig.api.user.controller,
        apiConfig.api.user.action.search.path,
        apiConfig.api.user.action.search.method,
        obj, 'fnSearchSuccess', 'msgError');
}


function fnDeleteUser(id) {
    callApi_userservice(
        apiConfig.api.user.controller,
        apiConfig.api.user.action.delete.path + "?id=" + id,
        apiConfig.api.user.action.delete.method,
        null, 'fnDeleteUserSuccess', 'msgError');
}
function submitCreate() {
    var obj = {
        'UserName': $('#userNameCreate').val().trim(),
        'RoleId': $('#roleCreate').val(),
        'Password': $('#passwordCreate').val() != '' ? $('#passwordCreate').val().trim() : '',
    }
    if (validateRequired('#formCreate')) {
        callApi_userservice(
            apiConfig.api.user.controller,
            apiConfig.api.user.action.add.path,
            apiConfig.api.user.action.add.method,
            obj, 'createUserSuccess', 'msgError');
    }
}

function submitEdit() {
    var obj = {
        'id': parseInt($('#IdEdit').val()),
        'UserName': $('#userNameEdit').val().trim(),
        'Name': $('#NameEdit').val().trim(),
        //'Role': parseInt($('#roleEdit').val()),
        'Email': $('#emailEdit').val() != "" ? $('#emailEdit').val().trim() : "",
    }
    if (validateRequired('#formEdit')) {
        callApi_userservice(
            apiConfig.api.user.controller,
            apiConfig.api.user.action.update.path,
            apiConfig.api.user.action.update.method,
            obj, 'updateUserSuccess', 'msgError');
    }
}
function fnGetDetail(type, param) {
    var call_back = '';
    if (type === 3) {
        call_back = 'fnEditSuccess';
    }
    else if (type === 2) {
        call_back = 'fnGetDetailSuccess';
    }
    else {
        call_back = 'fnDeleteSuccess';
    }
    localStorage.removeItem("id");
    localStorage.removeItem("type");
    callApi_userservice(
        apiConfig.api.user.controller,
        apiConfig.api.user.action.getItem.path + "?id=" + param,
        apiConfig.api.user.action.getItem.method,
        null, call_back, 'msgError');
}

function fnGetDetailSuccess(rspn) {
    var frmModify = $("#formDetail");
    if (rspn !== undefined && rspn !== null) {

        frmModify.find("#IdDetail").val(rspn.id);
        frmModify.find("#userNameDetail").val(rspn.userName);

        frmModify.find("#NameDetail").val(rspn.fullName);
        frmModify.find("#isActiveDetail").val(rspn.isActive);

        frmModify.find("#roleDetail").val(rspn.roleId);
        frmModify.find("#emailDetail").val(rspn.email);

        //frmModify.find("#StatusDetail").val(data.status == true ? 1 : 0);

    }
}
function fnEditSuccess(rspn) {
    localStorage.removeItem("id");
    localStorage.removeItem("type");
    var frmModify = $("#formEdit");

    if (rspn !== undefined && rspn !== null) {

        frmModify.find("#IdEdit").val(rspn.id);
        frmModify.find("#userNameEdit").val(rspn.userName);
        frmModify.find("#isActiveEdit").val(rspn.isActive);
        frmModify.find("#NameEdit").val(rspn.fullName);
        frmModify.find("#roleEdit").val(rspn.roleId);
        frmModify.find("#emailEdit").val(rspn.email);

        //localStorage.setItem("id", $('#IdEdit').val());
        //localStorage.setItem("type", "3");
    }
}


//window.onload = function () {
//    //let checkLocalStatus = localStorage.getItem('status');
//    //if (checkLocalStatus == null) {
//    //    localStorage.setItem('status', "-1");
//    //}
//    let checkLocalType = localStorage.getItem('type');
//    let type = parseInt(checkLocalType);
//    let checkLocalId = localStorage.getItem('id');
//    let id = parseInt(checkLocalId);
//    if (checkLocalType === null && checkLocalId === null) {
//        type = 0;
//        id = 0;
//    }
//    setTimeout(function () {
//        openView(type, id);
//    }, 100);

//}