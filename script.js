

// ------------parallax script

    const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset / 35 + "vh";
});



window.addEventListener('scroll', reveal);

 function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    var revone = document.querySelectorAll('.reveal-1');

    for(var  i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 200;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('text-reveal')
        }
        else{
            reveals[i].classList.remove('text-reveal')
        }
    }

    for(var  i = 0; i < revone.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = revone[i].getBoundingClientRect().top;
        var revealpoint = 300;

        if(revealtop < windowheight - revealpoint){
            revone[i].classList.add('text-reveal-1')
        }
        else{
            revone[i].classList.remove('text-reveal-1')
        }
    }

 };



// -----------mouse move script


var cursor = $(".cursor"),
                follower = $(".cursor-follower");

            var posX = 0,
                posY = 0,
                mouseX = 0,
                mouseY = 0;

            TweenMax.to({}, 0.016, {
                repeat: -1,
                onRepeat: function() {
                    posX += (mouseX - posX) / 9;
                    posY += (mouseY - posY) / 9;

                    TweenMax.set(follower, {
                        css: {
                            left: posX - 20,
                            top: posY - 20
                        }
                    });

                    TweenMax.set(cursor, {
                        css: {
                            left: mouseX,
                            top: mouseY
                        }
                    });
                }
            });

            $(document).on("mousemove", function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            });

            $(".parah h3").on("mouseenter", function() {
                cursor.addClass("activep");
                follower.addClass("activep");
            });

            $(".parah h3").on("mouseleave", function() {
                cursor.removeClass("activep");
                follower.removeClass("activep");
            });
            $(".para").on("mouseenter", function() {
                cursor.addClass("activep");
                follower.addClass("activep");
            });

            $(".para").on("mouseleave", function() {
                cursor.removeClass("activep");
                follower.removeClass("activep");
            });

            $(".bigh h1").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".bigh h1").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".swiper_mouse").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".swiper_mouse").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });



// --------------page4 animation



function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#show-img")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}


// ---------------swiper-js


function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 0,
    });
}


function menuAnimation() {

    var menu = document.querySelector(".row .nav-toggler")
    var toggleline = document.querySelector(".toggle-line .nav-toggler")
    var full = document.querySelector(".menu-scr")
    var navimg = document.querySelector(".logo img")
    var flag = 0

    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}



// -------------loader animation


function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()