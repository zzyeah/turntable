var ul = document.querySelector('#wrap ul');
var lis = document.querySelectorAll('#wrap li');
var closeBtns = document.querySelectorAll('#wrap .close')
var last = null;

var timer = setTimeout(function () {
    ul.className = '';
}, 200);


lis.forEach(function (li, index) {
    li.onclick = function () {
        ul.setAttribute('id', 'activeWrap');
        last && (last.className = '');
        this.className = 'active';
        last = this;
    }

    closeBtns[index].onclick = function (ev) {
        ul.removeAttribute('id', 'activeWrap');
        lis[index].className = '';
        last = null;
        // 这里由于事件冒泡 导致点击删除之后 又添加进去
        ev.cancelBubble = true;
    }
})