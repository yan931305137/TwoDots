var container = document.querySelector('.container');
var loginForm = document.querySelector('#loginForm');
var registerForm = document.querySelector('#registerForm');
function toggleForm() {
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}
var X_userName = 'wsscg1'
var X_password = 'wsscg1'

var warning = document.querySelector('.warning')
function check() {
    loginForm.action = '#'
    var userName = document.querySelector('#userName').value
    var password = document.querySelector('#password').value
    warning.innerText = ""
    if (userName == X_userName && password == X_password) {
        sessionStorage.setItem('name',userName)
        sessionStorage.setItem('password',password)
        loginForm.action = 'main.html'
    } else {
        warning.innerText = "请输入正确的账号密码"
    }
}

var box = document.querySelector("#box");
var progress = document.querySelector("#progress");
var fillContent = document.querySelector("#fillContent");
var percent = document.querySelector("#percent");
var w = progress.clientWidth;
fillContent.style.width = 0 + 'px';
var timer = setInterval(function () {
    // 进度条宽度每次增加1px
    fillContent.style.width = fillContent.offsetWidth + 1 + "px";
    // 计算进度条百分比数值
    percent.innerHTML = parseInt((fillContent.offsetWidth / w) * 100) + "%";
    // 当进度达到100%时，关闭定时器，进度条停止,隐藏
    if (fillContent.offsetWidth == w) {
        clearInterval(timer);
        box.style.display = 'none';
        container.style.display = 'block';
    }
}, 10);


