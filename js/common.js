$(document).ready(function () {
    $("#toggleDiv").click(function () {
        $("#megaMenu").slideToggle("slow", function () {
            if ($("#megaMenu").is(":visible")) {
                $("body").addClass("openMenu");
            } else {
                $("body").removeClass("openMenu");
            }
        });
    });
    $(".listItems li").click(function () {
        if ($(this).hasClass("active")) {
            $(".listItems li").removeClass("active")
        } else {
            $(".listItems li").removeClass("active");
            $(this).addClass("active");
        }
    });
    $(window).scroll(function () {
        var sticky = $('.toplinks-menubar'),
            scroll = $(window).scrollTop();
        if (scroll >= 200) {
            sticky.addClass('sticky-header');
        } else {
            sticky.removeClass('sticky-header');
        }
    });
    $(".search-icon").click(function () {
        $("#headerSearch").fadeToggle();
    }),
    $(".search").click(function () {
        if ($("#searchText2").val()) {
            var e = $("#searchText2").val();
            return e = (e = e.replace(/(^\s+|[^a-zA-Z0-9\u0900-\u097F ]+|\s+$)/g, "-")).replace(/\s+/g, "-"), window.location.href = "/search?q=" + e.toLowerCase(), !1
        }
    }),
    $(".search").prop("disabled", !0), $("#searchText2").keyup(function () {
        "" != $(this).val() && $(".search").prop("disabled", !1)
    })
    setTimeout(function () {
        $(window).scroll(function () {
            $(this).scrollTop() > 100 ? $(".scrolltop").fadeIn() : $(".scrolltop")
                .fadeOut()
        }), $(".scrolltop").click(function () {
            return $("html, body").animate({
                scrollTop: 0
            }, 600), !1
        })
    }, 500)
});