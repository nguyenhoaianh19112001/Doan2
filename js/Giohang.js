/*var gia;
var sl;
/*
function thaysl(elm) {
    sl = elm.val();
}

function themgio(elm) {
    var html;
    var anh = elm.parent().parent().parent().parent().parent().parent().find(".anhsp1 a img").attr('src')
    var kichco = elm.parent().parent().parent().parent().parent().parent().find("ul.chitiet li:nth-child(3) span").html()
    var ten = elm.parent().parent().parent().parent().parent().parent().find(".chitietsp.column.col-sm-6 h1").html()
    sl = elm.parent().parent().parent().parent().parent().parent().find(".input-text.qty.text").val()
    var price = elm.parent().parent().parent().parent().parent().parent().find("ul.chitiet li:nth-child(4) .giachon").html()
    gia = Number(price) * Number(sl);

    var gido = $('#giohang').html()
    if (gido.search('<span class="cart-item-title">' + ten + '</span>') == "-1") {
        html = ' <div class="cart-items">\
                    <div class="cart-row">\
                        <div class="cart-item cart-column">\
                            <img src="' + anh + '" style="width: 40px;height: 50px;">\
                            <span class="cart-item-title">' + ten + '</span>\
                            <span > - </span>\
                            <span >' + kichco + '</span>\
                            <span > - </span>\
                            <span id="soluonghang">' + sl + '</span>\
                        </div>\
                    <div class="cart-quantity cart-column">\
                         <button class="btn btn-danger" type="button" onclick="xoa($(this))">Xóa</button>\
                    </div>\
                </div>\
            </div>'
        $('#giohang').html(gido + html)
    } else {
        var slmoi = $(".cart-item.cart-column #soluonghang").html();
        var rssl = Number(slmoi) + Number(sl)
        $(".cart-item.cart-column #soluonghang").html(rssl.toString())
    }
    capnhatgia();
}

function capnhatgia() {
    var giacu = $(".cart-total-price").html().substr(0, $(".cart-total-price").html().length - 2)
    var tien = Number(giacu) + Number(gia)
    $("span.cart-total-price").html(tien.toString() + " Đ");

    var slgcu = $('a.cart-gioHang span#itemCount').html();
    var slgmoi = Number(slgcu) + Number(sl);
    $('a.cart-gioHang span#itemCount').html(slgmoi.toString());
}

function xoa(elm) {
    var giacu = $(".cart-total-price").html().substr(0, $(".cart-total-price").html().length - 2)
    var tien = Number(giacu) + Number(gia)
    $("span.cart-total-price").html(tien.toString() - "000 Đ")
    elm.parent().parent().parent().remove();

    $("#itemCount").html("0")
}

function xoaGioHang(elm) {

    var giacu = $(".cart-total-price").html().substr(0, $(".cart-total-price").html().length - 2);
    var tien = Number(giacu) + Number(gia);
    $("span.cart-total-price").html(tien.toString() - " Đ");

    elm.parent().parent().parent().remove();

    $("#itemCount").html("0");

    $("#chitietgiohang").remove();

    $(".table-total").remove();

    $("#tienhanhthanhtoanRemove").remove();

}


// Xóa table trong giỏ hàng
function deleteRow(r) {
    var i = confirm("Bạn có chắc chắn muốn xóa hay không?");
    if (i == true) {
        $("#chitietgiohang").remove();
        $('#tienhanhthanhtoanRemove').remove();
        $('.table-total').remove();
        $('#itemCount').html("0");
        $('.container1').remove();
        txt.innerHTML = 'Không có sản phẩm nào. Quay lại cửa hàng để tiếp tục mua sắm.';
    }
}*/
