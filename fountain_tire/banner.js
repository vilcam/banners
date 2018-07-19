'use strict'

var container, exitBtn, tlMain, tlRoute;
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

/**
Mask Coordinates
*/
function coordenadasMascara(offset, targetClass, containerClass) {
    var device = document.getElementsByClassName(targetClass)[0];
    var mask = document.getElementsByClassName(containerClass)[0];
    offset.top = offset.top - device.offsetTop - mask.offsetTop;
    offset.left = offset.left - device.offsetLeft - mask.offsetLeft;
    return offset;
}

function blurxTween(timeline, targetid, duration, delay, fromblur, toblur) {
    //check if blur svg aviliable
    var blurfilter = document.getElementById("blurDeviation");
    if (!blurfilter) {
        return false;
    }
    var tmpObject = {
        blurAmount: fromblur
    };
    var target = document.getElementById(targetid);

    //add custom tween given the values;
    timeline.fromTo(tmpObject, duration, {
        blurAmount: fromblur
    }, {
        blurAmount: toblur,
        onUpdate: function() {
            blurfilter.setAttribute("stdDeviation", tmpObject.blurAmount + ",0");
        },
        onStart: function() {
            blurfilter.setAttribute("stdDeviation", fromblur + ",0");
            TweenMax.set(target, {
                '-webkit-filter': 'url(#blur)',
                'filter': ' url(#blur)'
            });
        },
        onComplete: function() {
            TweenMax.set(target, {
                '-webkit-filter': 'none',
                'filter': 'none'
            });
        }
    }, delay);

}

function blurxTween2(timeline, targetid, duration, delay, fromblur, toblur) {
    //check if blur svg aviliable
    var blurfilter = document.getElementById("blurDeviation2");
    if (!blurfilter) {
        return false;
    }
    var tmpObject = {
        blurAmount: fromblur
    };
    var target = document.getElementById(targetid);

    //add custom tween given the values;
    timeline.fromTo(tmpObject, duration, {
        blurAmount: fromblur
    }, {
        blurAmount: toblur,
        onUpdate: function() {
            blurfilter.setAttribute("stdDeviation", tmpObject.blurAmount + ",0");
        },
        onStart: function() {
            blurfilter.setAttribute("stdDeviation", fromblur + ",0");
            TweenMax.set(target, {
                '-webkit-filter': 'url(#blur)',
                'filter': ' url(#blur)'
            });
        },
        onComplete: function() {
            TweenMax.set(target, {
                '-webkit-filter': 'none',
                'filter': 'none'
            });
        }
    }, delay);

}

function startAnim() {

    // hide preload
    TweenMax.set("#loading", {
        autoAlpha: 0
    });

    // Containers
    container = document.getElementById("container");
    exitBtn = document.getElementById("exitBtn");

    // add event listeners
    exitBtn.addEventListener('mouseover', over);
    exitBtn.addEventListener('click', click);


    // Main timeline
    tlMain = new TimelineMax()
        .call(init)
        .add(step0(), "+=2.8")
        .add(step1(), "+=0")
        .add(step2(), "+=2.8")
        .add(step3(), "+=0")
        .add(step4(), "+=2.8")
        .add(step5(), "+=0")
        .add(step6(), "+=0")
        .addPause(15);

    function init() {
        var _tl = new TimelineLite()
            // init positions
            .set('.sprite-bg', {
                left: 0,
                top: 0
            })
            .set('.sprite-txt2', {
                left: 34,
                top: 95
            })
            .set('.sprite-txt1', {
                left: 34,
                top: 46
            })
            .set('.sprite-lookup', {
                left: 21,
                top: 28
            })
            .set('.sprite-logo1', {
                left: 178,
                top: 170
            })
            .set('.sprite-logo2', {
                left: 193,
                top: 208
            })
            .set('.sprite-cta', {
                left: 14,
                top: 170
            })
            .set('.sprite-legal', {
                left: 57,
                top: 235
            })
            
            .set('.sprite-logo0', {
                left: 108,
                top: 188
            })
            .set('.sprite-txt0', {
                left: 22,
                top: 32
            })
            // end positions
            .set("#linesWrapper", {
                force3D: true
            })
            .set('.sprite-line', coordenadasMascara({
                left: 144,
                top: 170
            }, "sprite-line", "linesWrapper"))
            .set(container, {
                alpha: 1
            })
    }

    function step0() {
        var tl = new TimelineLite()
            .to(".sprite-txt0", .4, {
                x: -bannerwidth
            }, 0)
            .to(".sprite-logo0", .4, {
                x: -bannerwidth
            }, 0)
        blurxTween(tl, "txt0", .3, 0, 0, 40);
        blurxTween(tl, "logo0", .3, 0, 0, 40);
        return tl;
    }

    function step1() {
        var tl = new TimelineLite()
            .fromTo(".sprite-txt1", .4, {
                x: bannerwidth
            }, {
                x: 0
            }, 0)
        return tl;
    }

    function step2() {
        var tl = new TimelineLite()
            .to(".sprite-txt1", .4, {
                x: -bannerwidth
            }, 0)
        blurxTween(tl, "txt1", .3, 0, 0, 40);
        return tl;
    }

    function step3() {
        var tl = new TimelineLite()
            .fromTo(".sprite-txt2", .4, {
                x: bannerwidth
            }, {
                x: 0
            }, 0)
        return tl;
    }

    function step4() {
        var tl = new TimelineLite()
            .to(".sprite-txt2", .4, {
                x: -bannerwidth
            }, 0)
        blurxTween(tl, "txt2", .3, 0, 0, 40);
        return tl;
    }

    function step5() {
        var tl = new TimelineLite()
            //stripes and lookup
            .fromTo(".sprite-lookup", .4, {
                x: bannerwidth
            }, {
                x: 0
            }, 0)
        //ending

        return tl;
    }

    function step6() {
        var tl = new TimelineLite()

            //stripes and lookup
            .fromTo("#line0", .4, {
                x: bannerwidth
            }, {
                x: -bannerwidth
            })
            .fromTo("#line1", .4, {
                x: bannerwidth
            }, {
                x: -bannerwidth
            }, "-=0.2")
            .fromTo("#line2", .5, {
                x: bannerwidth
            }, {
                x: -bannerwidth
            }, "-=0.2")
            .fromTo("#line3", .6, {
                x: bannerwidth
            }, {
                x: -bannerwidth
            }, "-=0.3")
            .fromTo("#line4", .6, {
                x: bannerwidth
            }, {
                x: -bannerwidth
            }, "-=0.3")

            .fromTo(".sprite-logo1", .3, {
                x: bannerwidth
            }, {
                x: 0
            }, "-=0.6")
            .fromTo(".sprite-logo2", .3, {
                x: bannerwidth
            }, {
                x: 0
            }, "-=0.6")
            //ending

            .fromTo([".sprite-cta", ".sprite-legal"], .5, {
                autoAlpha: 0
            }, {
                autoAlpha: 1
            }, "+=0.8");
        //blurxTween(tl, "linesWrapper", 1.5, 1, 40, 0);

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
    }
}

function over(e) {
    if (e.currentTarget == exitBtn) ctaSheen();
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js", startAnim);