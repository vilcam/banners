'use strict'

var container, replayBtn, exitBtn, tlMain, tlBg;
// init bannerWidth
var bannerwidth = 300;
// end bannerWidth
// init bannerHeight
var bannerheight = 250;
// end bannerHeight

function loadScript(url, callback) {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}
/**
Horizontal center element
*/
function hcenter(elem, beforeoffset, afteroffset) {
    if (typeof elem == 'string') {
        elem = document.querySelectorAll(elem)[0];
    }
    if (!beforeoffset) beforeoffset = 0;
    if (!afteroffset) afteroffset = 0;
    var avSpace = bannerwidth - beforeoffset - afteroffset;
    return beforeoffset + (avSpace - elem.offsetWidth) / 2;
}
/**
Vertical center element
*/
function vcenter(elem, beforeoffset, afteroffset) {
    if (typeof elem == 'string') {
        elem = document.querySelectorAll(elem)[0];
    }
    if (!beforeoffset) beforeoffset = 0;
    if (!afteroffset) afteroffset = 0;
    var avSpace = bannerheight - beforeoffset - afteroffset;
    return beforeoffset + (avSpace - elem.offsetHeight) / 2;
}

function startAnim() {

    // hide preload
    TweenMax.set("#loading", {
        autoAlpha: 0
    });

    // Containers
    container = document.getElementById("container");
    replayBtn = document.getElementById("replayBtn");
    exitBtn = document.getElementById("exitBtn");

    // add event listeners
    exitBtn.addEventListener('mouseover', over);
    exitBtn.addEventListener('click', click);
    replayBtn.addEventListener('mouseover', over);
    replayBtn.addEventListener('click', click);

    // BG timeline
    TweenMax.set(".sprite-bg4", {
        transformOrigin: "center top",
        autoAlpha: 0.36
    })
    tlBg = new TimelineMax()
        .fromTo(".sprite-bg4", 15, {
            rotation: -15,
            x: 0,
            y: -bannerheight / 2,
            autoAlpha: 0.25
        }, {
            rotation: 410,
            x: bannerwidth / 3,
            y: 0,
            autoAlpha: 0.35
        }, 0)

    // Main timeline
    tlMain = new TimelineMax()
        .call(init)
        .add(step0(), "+=0")
        .add(step1(), "+=2")
        .add(step2(), "+=1")
        .add(step3(), "+=2")
        .add(step4(), "+=2")
        .add(step5(), "+=2")
        .addPause(15);

    function init() {
        var _tl = new TimelineLite()
            // init positions
            .set('.sprite-bg4', {
                left: -214,
                top: -239
            })
            .set('.sprite-txt5', {
                left: 17,
                top: 22
            })
            .set('.sprite-device2', {
                left: 6,
                top: 94
            })
            .set('.sprite-bg3', {
                left: 0,
                top: 0
            })
            .set('.sprite-txt4', {
                left: 18,
                top: 95
            })
            .set('.sprite-device1', {
                left: 0,
                top: 78
            })
            .set('.sprite-txt3', {
                left: 18,
                top: 24
            })
            .set('.sprite-bg2', {
                left: 0,
                top: 0
            })
            .set('.sprite-txtTv', {
                left: 221,
                top: 46
            })
            .set('.sprite-txtPhone', {
                left: 145,
                top: 46
            })
            .set('.sprite-txtInternet', {
                left: 55,
                top: 47
            })
            .set('.sprite-txt2', {
                left: 17,
                top: 24
            })
            .set('.sprite-tv', {
                left: 119,
                top: 61
            })
            .set('.sprite-laptop', {
                left: 38,
                top: 130
            })
            .set('.sprite-phone', {
                left: 233,
                top: 135
            })
            .set('.sprite-bg1', {
                left: 0,
                top: 0
            })
            .set('.sprite-txt1', {
                left: 17,
                top: 73
            })
            .set('.sprite-box1', {
                left: 4,
                top: -3
            })
            .set('.sprite-bg0', {
                left: 0,
                top: 0
            })
            .set('.sprite-txt0', {
                left: 29,
                top: 23
            })
            .set('.sprite-device0', {
                left: 65,
                top: 87
            })
            .set('.sprite-box0', {
                left: 73,
                top: 166
            })
            .set('.sprite-txtOffer', {
                left: 131,
                top: 226
            })
            .set('.sprite-cta', {
                left: 0,
                top: 211
            })
            .set('.sprite-replay', {
                left: 272,
                top: 13
            })
            // end positions
            .set(".sprite-bg4", {
                top: bannerheight / 2,
                left: (bannerwidth - 728) / 2
            })
            .set(replayBtn, {
                left: bannerwidth - 25,
                top: 6,
                autoAlpha: 0
            })
            .set(container, {
                alpha: 1
            })
            .set(".sprite-cta", {
                top: 0,
                left: 0
            })
    }

    function step0() {
        var tl = new TimelineLite()
            .fromTo([".sprite-device0", ".sprite-box0"], 0.5, {
                y: bannerheight
            }, {
                y: 0
            }, 0.1)
            .fromTo(".sprite-txt0", 0.5, {
                y: -bannerheight
            }, {
                y: 0
            }, 0)
        return tl;
    }

    function step1() {
        var maskOffset = 10;
        var tl = new TimelineLite()
            .to([".sprite-device0", ".sprite-box0"], 0.5, {
                x: -bannerwidth
            }, 0)
            .to(".sprite-txt0", 0.5, {
                x: -bannerwidth
            }, 0)

            .fromTo(".sprite-bg1", 0.3, {
                autoAlpha: 0
            }, {
                autoAlpha: 1
            }, 0)
            .to(".sprite-bg0", 0.3, {
                autoAlpha: 0
            }, 0.3)

            .fromTo(".sprite-box1", 1, {
                x: -bannerwidth
            }, {
                x: 0
            }, 0.4)
            .fromTo("#maskText", 0.8, {
                x: maskOffset,
                width: 0,
            }, {
                x: maskOffset,
                width: bannerwidth
            }, 0.5)
            .fromTo(".sprite-txt1", 0.75, {
                x: -bannerwidth
            }, {
                x: -maskOffset
            }, 1.5)
            .to(".sprite-box1", 1, {
                x: -bannerwidth
            }, 1.7)

        return tl;
    }

    function step2() {
        var tl = new TimelineLite()
            .to(["#maskText"], 0.5, {
                x: -bannerwidth
            }, 0)

            .fromTo(".sprite-bg2", 0.3, {
                autoAlpha: 0
            }, {
                autoAlpha: 1
            }, 0)
            .to(".sprite-bg1", 0.3, {
                autoAlpha: 0
            }, 0.3)

            .fromTo(".sprite-txt2", 0.5, {
                y: -bannerheight
            }, {
                y: 0
            }, 0)
            .fromTo([".sprite-txtInternet", ".sprite-laptop"], 0.5, {
                x: bannerwidth
            }, {
                x: 0
            }, 0.2)
            .fromTo([".sprite-txtPhone", ".sprite-phone"], 0.5, {
                x: bannerwidth
            }, {
                x: 0
            }, 0.3)
            .fromTo([".sprite-txtTv", ".sprite-tv"], 0.5, {
                x: bannerwidth
            }, {
                x: 0
            }, 0.4)
        return tl;
    }

    function step3() {
        var tl = new TimelineLite()
            .to([".sprite-laptop", ".sprite-phone", ".sprite-tv"], 0.5, {
                y: bannerheight
            }, 0)
            .to([".sprite-txt2", ".sprite-txtInternet", ".sprite-txtPhone", ".sprite-txtTv"], 0.5, {
                x: -bannerwidth
            }, 0)

            .to(".sprite-bg1", 0.3, {
                autoAlpha: 1
            }, 0)
            .to(".sprite-bg2", 0.3, {
                autoAlpha: 0
            }, 0.3)

            .fromTo(".sprite-txt3", 0.5, {
                x: bannerwidth
            }, {
                x: 0
            }, 0)
            .fromTo(".sprite-device1", 0.5, {
                y: bannerheight
            }, {
                y: 0
            }, 0)
        return tl;
    }

    function step4() {
        var tl = new TimelineLite()
            .to(".sprite-txt3", 0.5, {
                x: -bannerwidth
            }, 0)
            .to(".sprite-device1", 0.5, {
                x: -bannerwidth
            }, 0)

            .fromTo(".sprite-bg3", 0.3, {
                autoAlpha: 0
            }, {
                autoAlpha: 1
            }, 0)
            .to(".sprite-bg1", 0.3, {
                autoAlpha: 0
            }, 0.3)

            .fromTo(".sprite-txt4", 0.5, {
                x: bannerwidth
            }, {
                x: 0
            }, 0)
        return tl;
    }

    function step5() {
        var tl = new TimelineLite()
            .to(".sprite-txt4", 0.5, {
                x: -bannerwidth
            }, 0)

            .to(".sprite-bg1", 0.3, {
                autoAlpha: 1
            }, 0)
            .to(".sprite-bg3", 0.3, {
                autoAlpha: 0
            }, 0.3)

            .fromTo(".sprite-device2", 0.5, {
                y: bannerheight
            }, {
                y: 0
            }, 0)
            .fromTo(".sprite-txt5", 0.5, {
                y: -bannerheight
            }, {
                y: 0
            }, 0)
            .to(replayBtn, 0.5, {
                autoAlpha: 1
            }, 0)
            .call(function() {
                ctaSheen();
            }, null, null, 0.5)
        return tl;
    }
}


function ctaSheen() {
    if (!TweenMax.isTweening('.sheen')) TweenMax.fromTo('.sheen', .5, {
        attr: {
            x: -96
        }
    }, {
        attr: {
            x: 160
        },
        ease: Linear.easeInOut
    });
}


function click(e) {
    if (e.currentTarget == exitBtn) {
        // init clickAction
        window.open(window.clickTag, "_blank");
        // end clickAction
    }
    if (e.currentTarget == replayBtn) {
        tlMain.restart();
        tlBg.restart();
    }
}

function over(e) {
    if (e.currentTarget == exitBtn) ctaSheen();
    if (e.currentTarget == replayBtn) {
        if (!TweenMax.isTweening(replayBtn)) TweenMax.fromTo(replayBtn, .7, {
            rotation: 0
        }, {
            rotation: 360
        });
    }
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js", startAnim);