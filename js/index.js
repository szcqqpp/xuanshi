$(function () {

    var page = 0;
    $(".prev").click(prev);
    $(".next").click(next);
    function next() {
        page++;
        if (page > $(".tu li").length - 1) {
            page = 0;
        }
        fun();
    }
    function prev() {
        page--;
        if (page < 0) {
            page = $(".tu li").length - 1;
        }
        fun();
    }
    $(".but span").click(function () {
        page = $(this).index();
        fun();
    })
    function fun() {
        $(".tu").css({ left: -page * $(".tu li").width() });
        $(".but span").eq(page).addClass("active").siblings().removeClass("active");
    }
    var time = setInterval(next, 2000);
    $(".banner").hover(
        function () {
            clearInterval(time);
        },
        function () {
            time = setInterval(next, 2000);
        }
    )
    $(".huo").click(function () {
        $(window).scrollTop(0);
    })
    $("#an").click(function () {
        console.log(1)
        $(".nav .navin .navcon").slideToggle(500);
    })
    on();
    $(window).resize(on)
    function on() {
        if ($(window).width() > 768) {
            $(".nav .navin .navcon").slideDown(0);
        } else {
            console.log(1)
            $(".nav .navin .navcon").slideUp(0);
        }
    }
    $('.navcon li').hover(function () {
        $(this).children('.ret').stop(true).slideToggle(500)
    })
})