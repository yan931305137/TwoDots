var userName = sessionStorage.getItem('name')
if (userName != 'null') {
    var isdelet = document.querySelectorAll('.isdelet')
    for (var i = 0; i < isdelet.length; i++) {
        isdelet[i].style.display = 'none';
        var personal = document.getElementById('personal')
        personal.style.display = 'inline-block';
        personal.innerHTML = userName;
    }
}

var index = 0;
var nextIndex = 0;
function animationplay() {
    $('.carouseBoxList li').eq(nextIndex).stop().addClass("one").siblings().removeClass("one")
    $('.carouseBox img').eq(index).ee(500)
    $('.carouseBox img').eq(nextIndex).fadeIn(500)
}
var timer;
autoplay()
function autoplay() {
    timer = setInterval(function () {
        if (nextIndex >= 3) {
            nextIndex = 0;
        }
        else {
            nextIndex++;
        }
        animationplay()
        index = nextIndex
    }, 2000)
}

$('.carouseBox li').click(function () {
    clearInterval(timer)
    nextIndex = $(this).index()
    animationplay()
    index = nextIndex
    autoplay()
})

function changeSlide(n) {
    clearInterval(timer)
    nextIndex = index + n
    if (nextIndex > 3 ) {
        nextIndex = 0
    }else if(nextIndex < 0){
        nextIndex = 3
    }
    animationplay()
    index = nextIndex
    autoplay()
}

function f0() {
    $('.issue').mouseenter(function () {
        $('.carlist').stop().slideDown(100)
    }).mouseleave(function () {
        $('.carlist').stop().slideUp(100)
    })
} f0();

function f1() {
    var container1 = ["剧 集", "资 讯", "解 说", "推 荐", "更 新", "排行榜"]
    var container2 = ["英美剧", "国产剧", "韩 剧", "海外剧", "动画番剧", "综 艺"]
    var tContainer = []
    function getdata() {
        $('.containerListCon').empty()
        for (var i = 0; i < 5; i++) {
            var tDiv = $("<div class='containerDiv'></div>")
            $('.containerListCon').append(tDiv)
            var containerData = $("<p class='containerData'></p>")
            tDiv.append(containerData)
        }
    }
    $('#leftUl li').mouseenter(function () {
        var index = $(this).index()
        if (index == 0) {
            $('.containerList').attr('style', 'display:block !important;')
            tContainer = container1
        } else if (index == 1) {
            $('.containerList').attr('style', 'display:block !important;')
            tContainer = container2
        } else {
            $('.containerList').attr('style', 'display:none !important;')
        }
        getdata()
        for (var i = 0; i < tContainer.length; i++) {
            var box = $('.containerDiv').eq(i)
            box.children(".containerData").text(tContainer[i])
        }
    })
    $('#leftUl').mouseleave(function () {
        $('.containerList').css('display', 'none');
    });
} f1();

function f2() {
    var xmImg = ["p1webp.webp", "p2webp.webp", "p3webp.webp", "p4webp.webp", "p5webp.webp", "p6webp.webp"]
    var xmName = ["暮色心约", "东北警察故事2", "曾少年小时候", "消失的十一层", "变形金刚:朝南勇士崛起", "恶鬼"]
    let imglist = []
    let namelist = []
    $('.navlistcon').empty()
    for (let i = 0; i < 6; i++) {
        let tdiv = $("<div class='tsdiv'></div>")
        $('.navlistcon').append(tdiv)
        let tsimg = $("<img class='tsimg'></img>")
        tdiv.append(tsimg)
        let tsname = $("<p class='tsname'></p>")
        tdiv.append(tsname)
    }
    imglist = xmImg
    namelist = xmName
    for (let i = 0; i < imglist.length; i++) {
        let box = $('.tsdiv').eq(i)
        box.children(".tsimg").attr("src", "img/" + imglist[i])
        box.children(".tsname").text(namelist[i])
    }
} f2();

function f3() {
    var xmName = ["暮色心约", "东北警察故事", "曾少年小时候", "消失的十一层", "变形金刚", "恶鬼"]
    var xmcod = ["100", "90", "80", "60", "50", "50"]
    let namelist = []
    let codlist = []
    $('.rankings').empty()
    for (let i = 0; i < 5; i++) {
        let rankingsLi = $("<li class='rankingsLi'></li>")
        $('.rankings').append(rankingsLi)
    }
    namelist = xmName
    codlist = xmcod
    for (let i = 0; i < namelist.length; i++) {
        let box = $('.rankingsLi').eq(i)
        box.html(namelist[i] + "<span class='tsname'>" + codlist[i] + ' 热度' + "</span>")
    }
} f3();

function f4() {
    $(document).click(function (e) {
        var videoImg = e.target.src;
        var videoName = e.target.classList;
        var videoNameDetail = e.target.alt;


        sessionStorage.setItem('videoImg', videoImg)
        sessionStorage.setItem('videoName', videoName)
        sessionStorage.setItem('videoNameDetail', videoNameDetail)

        location.href = 'detail.html'
    })
}


