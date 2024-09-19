/**
 * about.js
 *
 * Roaa Shattnawi
 * @since 1.0.0
 * @version 3.0
 */

$(document).ready(function () {

    var tlabout,
        bgColor = "white",
        easing = Power0.easeNone,
        duration = 0.5;

    tlabout = new TimelineMax({
        paused: true,
        repeatDelay: 0.5, // temp


    });
    tlabout1 = new TimelineMax({
        paused: true,
        repeatDelay: 0.5, // temp


    });

    tlabout.to("#box", 0,

        {

            display: 'inline',


        }
    );




    // top
    tlabout.fromTo("#top-side", duration,
        {
            width: 0,
            background: bgColor,
            immediateRender: false,
            autoRound: false,
            ease: easing
        },
        {
            width: 200,
            background: bgColor
        }
    );

    // right
    tlabout.fromTo("#right-side", duration,
        {
            height: 0,
            background: bgColor,
            immediateRender: false,
            autoRound: false,
            ease: easing
        },
        {
            height: 200,
            background: bgColor
        }
    );

    // bottom
    tlabout1.fromTo("#bottom-side", duration,
        {
            width: 0,
            background: "#000",
            immediateRender: false,
            autoRound: false,
            ease: easing
        },
        {
            width: 200,
            background: bgColor
        }
    );

    // left
    tlabout1.fromTo("#left-side", duration,
        {
            height: 0,
            background: bgColor,
            immediateRender: false,
            autoRound: false,
            ease: easing
        },
        {
            height: 200,
            background: bgColor
        }
    );
    // top
    tlabout.to("#top-side", 0.5,

        {

            height: 100,
        }
    );



    // bottom
    tlabout1.to("#bottom-side", 0.5,
        {

            height: 100,
        }
    );



    tlabout.to("#box", 0,

        {

            display: 'none',


        }
    );



    tlabout1.to("#whiteblocs", 0,

        {

            display: 'inline',

        }
    );

    tlabout1.to("rect", 0.5,

        {

            height: 0,

        }
    );
    tlabout1.to("rect", 0,

        {

            display: 'none',

        }
    );
    tlabout1.to("#whiteblocs", 0,

        {

            display: 'none',

        }
    );
    tlabout1.from(".text-wrapper", 0.5,

        {

            display: 'none',

        }
    );
    tlabout1.from(".formcontent", -1,

        {

            display: 'none',

        }
    );

    tlabout.to(".tp4", 2, { strokeDashoffset: "0", delay: 1 }, "+=0");
    tlabout.to(".tp4", 0.2, { fillOpacity: 1 }, "+=0.2");
    tlabout
        .progress(1).progress(0)
        .play();
    tlabout1
        .progress(1).progress(0)
        .play();





    TweenMax.to([".viewing-page-2 .overlayparag"], 2,

        {
            delay: 2,
            scaleY: 0,

        }
    );
    TweenMax.to([".viewing-page-3 .overlayparag"], 2,

        {
            delay: 2,
            scaleY: 0,

        }
    );



    TweenMax.from(".logolink", 1, {
        visibility: 'hidden',
        opacity: 0,
        delay: 3,
    });

    TweenMax.to(".logolink", 1, {
        delay: 3,
        opacity: 1,
        ease: Expo.easeInOut
    });


    TweenMax.from(".btmlogo", 0, {
        visibility: 'hidden',
        opacity: 0,
        delay: 4,
    });

    TweenMax.to(".btmlogo", 1, {
        delay: 3,
        opacity: 1,
        ease: Expo.easeInOut
    });
    TweenMax.from(".arrow", 0, {
        visibility: 'hidden',
        opacity: 0,
        delay: 4,
    });

    TweenMax.to(".arrow", 1, {
        delay: 3,
        opacity: 1,
        ease: Expo.easeInOut
    });


    TweenMax.from(".toggler", 1, {
        visibility: 'hidden',
        opacity: 0,
        delay: 3,
    });

    TweenMax.to(".toggler", 1, {
        delay: 3,
        ease: Expo.easeInOut
    });



    TweenMax.from(".menu-wrap", 0, {
        visibility: 'hidden',
        opacity: 0,
        delay: 4,
    });

    TweenMax.to(".menu-wrap", 1, {
        delay: 3,
        opacity: 1,
        ease: Expo.easeInOut
    });

    TweenMax.from(".language", 0, {
        visibility: 'hidden',
        opacity: 0,
        delay: 4,
    });

    TweenMax.to(".language", 1, {
        delay: 3,
        opacity: 1,
        ease: Expo.easeInOut
    });
    TweenMax.from(".formcontent", 0, {
        visibility: 'hidden',
        opacity: 0,

    });



    TweenMax.to(".formcontent", 1, {
        opacity: 1,
        delay: 2,
        ease: Expo.easeInOut
    });
});



