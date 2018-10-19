document.getElementById('btn').onclick = function () {
    var checkbox = document.getElementsByName('favourite');
    var result = "";

    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true) {
            result += ' [' + checkbox[i].value + ']';
        }
    }
    alert(" Game bạn chọn là: " + result);
}