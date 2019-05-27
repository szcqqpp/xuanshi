$(function () {

    var page = 0;
    $(".prev").click(prev);
    $(".next").click(next);
    function next() {
        page++;
        if (page > $(".tu li").length - 1) {
            page = 0;
        }
        console.log(page)
        fun();
    }
    function prev() {
        page--;
        if (page < 0) {
            page = $(".tu li").length - 1;
        }
        console.log(page)
        fun();
    }
    $(".but span").click(function () {
        page = $(this).index();
        fun();
    })
    function fun() {
        console.log(page * $("ul li").width())
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
    $("an").click(function () {

    })
})