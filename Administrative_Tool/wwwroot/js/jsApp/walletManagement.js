function CreateWallet() {
    if ($('#PrivateKey').val() == "") {
        toastr.error("Private key không được để trống");
    } else if ($('#AddressWallet').val() == "") {
        toastr.error("Đại chỉ ví không được để trống");
    } else if ($('#PrivateKey').val() != "" && $('#AddressWallet').val() != "") {
        var input = {
            'PrivateKey': $('#PrivateKey').val().trim(),
            'AddressWallet': $('#AddressWallet').val().trim(),
        }
        callApi_userservice(
            apiConfig.api.wallet.controller,
            apiConfig.api.wallet.action.inforWallet.path,
            apiConfig.api.wallet.action.inforWallet.method,
            input, "fnSuccess", 'msgError');
    }
}
function fnSuccess(rs) {
    if (rs != null) {
        toastr.success("Thêm mới ví thành công");
        $('#modalCreateWallet').modal('hide');
        fnSearch(true);
    } else {
        toastr.error("Thêm mới ví thất bại");
    }
}
//function successInforWallet(rs) {
//    var objCreate = {
//        'PrivateKey': $('#PrivateKey').val(),
//        'AddressWallet': $('#AddressWallet').val(),
//        'TAU': rs.TAU,
//        'BNB': rs.BNB,
//    }
//    callApi_userservice(
//        apiConfig.api.wallet.controller,
//        apiConfig.api.wallet.action.add.path,
//        apiConfig.api.wallet.action.add.method,
//        objCreate, 'fnCreateSuccess', 'msgError');
//}
//function fnCreateSuccess(rs) {
//    if (rs == true) {
//        toastr.success("Thêm mới ví thành công");
//        $('#modalCreateWallet').modal('hide');
//        fnSearch(rs);
//    } else {
//        toastr.error("Thêm mới ví thất bại");
//    }
//}
function onSearch() {
    fnSearch(true);
}
function fnSearch(rs) {
    if (rs == true) {
        var obj = {
            'Id': parseInt($('#IdUser').val()),
            'page_size': parseInt($("#cbPageSize").val()),
            'start_number': (parseInt($("#txtCurrentPage").val()) - 1) * parseInt($("#cbPageSize").val())
        }
        callApi_userservice(
            apiConfig.api.wallet.controller,
            apiConfig.api.wallet.action.search.path,
            apiConfig.api.wallet.action.search.method,
            obj, 'fnSearchSuccess', 'msgError');
    }
}
function fnSearchSuccess(rspn) {
    if (rspn !== undefined && rspn !== null && rspn[0].length > 0) {
        var test = $('#CountWallet');
        test.html('');
        var htmltest = '<div class="col-xl-3 col-lg-3 col-md-3 col-3">' +
            '<label for="walletlable1" class="col-sm-12 col-form-label" style="color: blue">' + "Tổng số ví: " + rspn[1] + '</label>' +
            //'<label for="walletlable1" class="col-sm-5 col-form-label">' + rspn[1] + '</label>' +
            '</div>' +
            '<div class="col-xl-3 col-lg-3 col-md-3 col-3">' +
            '<label for="walletlable1" class="col-sm-12 col-form-label" style="color: red">' + "Ví đã chọn: " + rspn[2] + '</label>' +
            //'<label for="walletlable1" class="col-sm-5 col-form-label">' + rspn[2] + '</label>' +
            '</div>';
        test.append(htmltest);
        var tbBody = $('#walletTable tbody');
        $("#walletTable").dataTable().fnDestroy();
        tbBody.html('');
        for (var i = 0; i < rspn[0].length; i++) {
            var obj = rspn[0][i];
            var TT = obj.isCheck == 1 ? "Hoạt động" : "Dừng hoạt động"
            var html = '<tr>' +
                '<td class="text-center"></td>' +
                '<td>' + obj.address + '</td>' +
                '<td>' + obj.tau + '</td>' +
                '<td>' + obj.bnb + '</td>' +
                '<td class="text-center">' + '<div class="custom-control custom-switch"><input type="checkbox" class="custom-control-input" id="customSwitch' + obj.id + '" ' + (obj.isCheck === 1 ? 'checked' : '') + ' onclick="changeCheck(' + obj.id + ',this)"> <label class="custom-control-label" for="customSwitch' + obj.id + '"> <a hidden>' + obj.isCheck + '<a></label></div>' + '</td>' +
                '<td class="text-center">' +
                '<a type="button" class="btn icon-delete btn-action-custom" onclick="DeleteWallet(' + obj.id + ')" style="color:red"><i data-toggle="tooltip" title="Xóa" class="fa fa-trash" aria-hidden="true"></i></a>' +
                '</td>' +
                '</tr>';
            tbBody.append(html);
        }
        var page_size = (parseInt($("#txtCurrentPage").val()) - 1) * parseInt($("#cbPageSize").val())
        var t = $("#walletTable").DataTable({
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
                    "targets": [0, 4, 5],
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
        var tbBody = $('#walletTable tbody');
        $("#walletTable").dataTable().fnDestroy();
        tbBody.html('');

        var page_size = (parseInt($("#txtCurrentPage").val()) - 1) * parseInt($("#cbPageSize").val())
        var t = $("#walletTable").DataTable({
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
                    "targets": [0, 4, 5],
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
function changeCheck(id, input) {
    var isChecked = 1;
    if ($(input).prop("checked") == false) {
        isChecked = 0;
    }
    fnChecked(id, isChecked);
}
function fnChecked(id, isChecked) {
    var obj = {
        'id': id,
        'checked': isChecked,
    }
    callApi_userservice(
        apiConfig.api.wallet.controller,
        apiConfig.api.wallet.action.checked.path,
        apiConfig.api.wallet.action.checked.method,
        obj, 'fnCheckedSuccess', 'msgError');
}

function fnCheckedSuccess(rspn) {
    if (rspn == true) {
        toastr.success("Ví đã thay đổi lựa chọn");
        onSearch();
    } else if (rspn == false) {
        toastr.error("Thay đổi lựa chọn ví thất bại");
        onSearch();
    }
    else {
        toastr.error("Thay đổi lựa chọn ví thất bại");
    }
}
function DeleteWallet(id) {
    callApi_userservice(
        apiConfig.api.wallet.controller,
        apiConfig.api.wallet.action.getItem.path + "?id=" + id,
        apiConfig.api.wallet.action.getItem.method,
        null, "fnDeleteWalletSc", 'msgError');

}
function fnDeleteWalletSc(rspn) {
    swal({
        title: "Thông báo",
        text: 'Bạn có chắc chắn muốn xoá bản ghi' + ' ' + '"' + rspn.addressWallet + '"',
        type: 'warning',
        showCancelButton: !0,
    }).then((isConfirm) => {
        if (isConfirm.value == true) {
            fnDeleteWallet(rspn.id);
        }
        return false;
    });;
}
function fnDeleteWallet(id) {
    callApi_userservice(
        apiConfig.api.wallet.controller,
        apiConfig.api.wallet.action.delete.path + "?id=" + id,
        apiConfig.api.wallet.action.delete.method,
        null, 'fnDeleteWalletSuccess', 'msgError');
}

function fnDeleteWalletSuccess(rspn) {
    if (rspn === true) {
        toastr.success("Xóa dữ liệu thành công");
        onSearch();
    }
    else {
        toastr.error("Xóa dữ liệu thất bại");
    }

}