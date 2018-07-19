'use strict'

var container, replayBtn, exitBtn, tlMain;
// init bannerWidth
var bannerwidth = 300;
// end bannerWidth
// init bannerHeight
var bannerheight = 600;
// end bannerHeight
// 
var slotSpriteWidth = 35;
var slotSpriteHeight = 339;
var slotUnitHeight = 60;


function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}


// SLOT MACHINE

function Slot(target) {
    this.tar = target;
    this.slots = this.tar.querySelectorAll(".number");
}

Slot.prototype.transitionToValue = function(toValue, ctime) {
    var tvalue = this.getValueComponents(toValue);
    var off = 0.05 * this.slots.length;
    for (var i = 0; i < this.slots.length; i++) {
        var tbgy = -slotSpriteHeight * ctime * 3;
        var finaly = this.getSlotCoordinate(tvalue[i]);
        var tt = ctime - (off * i);
        TweenMax.to(this.slots[i], tt, {
            backgroundPosition: "0px " + tbgy + "px",
            ease: Linear.easeNone
        });
        TweenMax.to(this.slots[i], 0.01, {
            backgroundPosition: "0px " + finaly + "px",
            delay: tt,
            ease: Linear.easeNone
        })
    }
}

Slot.prototype.setValue = function(toValue) {
    var tvalue = this.getValueComponents(toValue);
    for (var i = 0; i < this.slots.length; i++) {
        var finaly = this.getSlotCoordinate(tvalue[i]);
        TweenMax.set(this.slots[i], {
            backgroundPosition: "0px " + finaly + "px"
        })
    }
}

Slot.prototype.getValueComponents = function(value) {
    return value.toString().split("");
}

Slot.prototype.getSlotCoordinate = function(number) {
    var res = 0;
    if (number == "0") {
        res = 0;
    } else if (number == ".") {
        res = slotUnitHeight * 10;
    } else {
        res = slotUnitHeight * Number(number);
    }
    return -res;
}

var slotGray = new Slot(document.getElementById("slotGray"));
var slotBlue = new Slot(document.getElementById("slotBlue"));

// MONEY BUBBLES

function MoneyBubbles(container, generatorDom) {
    this.bubblesToShow = 0;
    this.currBubbles = 0;
    this.container = container;
    this.generatorDom = generatorDom;
}

MoneyBubbles.prototype = {
    get amount() {
        return this.bubblesToShow;
    },
    set amount(val) {
        this.bubblesToShow = val;
        this.updateCount();
    }
}
MoneyBubbles.prototype.reset = function(container) {
    this.container.innerHtml = "";
}
MoneyBubbles.prototype.prepare = function() {
    this.xmin = this.generatorDom.offsetLeft;
    this.ymin = this.generatorDom.offsetTop;
    this.xmax = this.xmin + this.generatorDom.offsetWidth;
    this.ymax = this.ymin + this.generatorDom.offsetHeight;
}
MoneyBubbles.prototype.updateCount = function() {
    var create = Math.round(this.bubblesToShow - this.currBubbles);
    for (var i = 0; i < create; i++) {
        var nelem = document.createElement("div");
        nelem.className = "moneyBubble";
        var left = randomRange(this.xmin, this.xmax);
        var top = randomRange(this.ymin, this.ymax);
        var offx = randomRange(-bannerwidth / 6, bannerwidth / 6);
        var offy = randomRange(-bannerheight / 6, -bannerheight / 8);
        this.container.appendChild(nelem);
        TweenMax.set(nelem, {
            left: left,
            top: top
        })
        this.currBubbles++;
        TweenMax.fromTo(nelem, 0.3, {
            x: 0,
            y: 0,
            scale: 0
        }, {
            x: offx,
            y: offy,
            scale: randomRange(0.5, 1),
            ease: Power1.easeOut
        })
        TweenMax.fromTo(nelem, 1.5, {
            rotation: randomRange(-20, 20)
        }, {
            rotation: randomRange(-90, 90)
        })
        TweenMax.to(nelem, 1.5, {
            y: bannerheight,
            delay: 0.32,
            scale: 1,
            ease: Power1.easeIn
        });
    }
}

var mbubbles = new MoneyBubbles(document.getElementById("containerBubbles"), document.getElementById("slotBlue"));



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

    // Main timeline
    tlMain = new TimelineMax()
        .call(init)
        .add(step0(), "0")
        .add(step1(), "+=2.5")
        .addPause(15);

    function init() {
        var _tl = new TimelineLite()
            // init positions
            .set('.sprite-bg0', {
                left: 0,
                top: 0
            })
            .set('.sprite-bg1', {
                left: 0,
                top: 0
            })
            .set('.sprite-bgScroll', {
                left: 0,
                top: 0
            })
            .set('.sprite-pricepoint', {
                left: 43,
                top: 273
            })
            .set('.sprite-txt1_1', {
                left: 90,
                top: 359
            })
            .set('.sprite-line', {
                left: 114,
                top: 162
            })
            .set('.sprite-txt1_0', {
                left: 37,
                top: 72
            })
            .set('.sprite-txt0_1', {
                left: 96,
                top: 259
            })
            .set('.sprite-usd_gray', {
                left: 39,
                top: 194
            })
            .set('.sprite-usd_blue', {
                left: 27,
                top: 373
            })
            .set('.sprite-txt0_0', {
                left: 40,
                top: 70
            })
            .set('.sprite-legal', {
                left: 37,
                top: 502
            })
            .set('.sprite-txt0_2', {
                left: 115,
                top: 439
            })
            .set('.sprite-versus', {
                left: 124,
                top: 301
            })
            .set('.sprite-footer', {
                left: 0,
                top: 545
            })
            .set('.sprite-cta', {
                left: 165,
                top: 555
            })
            // end positions
            .set(".sheen", {
                transformOrigin: "50% 50%",
                scale: 0,
                opacity: 0,
            })
            .set("#slotGray", {
                left: 68,
                top: 188,
                width: 190,
                height: 60
            })
            .set("#slotBlue", {
                left: 59,
                top: 367,
                width: 210,
                height: 60
            })
            .set(replayBtn, {
                left: bannerwidth - 25,
                top: 6,
                autoAlpha: 0
            })
            .set(container, {
                alpha: 1
            })
            .call(function() {
                mbubbles.prepare();
                mbubbles.reset();
            }, null, null, 0)
    }

    function step0() {
        var tl = new TimelineLite()
            .fromTo(mbubbles, 5, {
                amount: 0
            }, {
                amount: 15,
                ease: Power2.easeIn
            }, 1)
            .call(function() {
                slotGray.setValue("00.00");
            }, null, null, 0)
            .call(function() {
                slotBlue.setValue("000.00");
            }, null, null, 0)
            .call(function() {
                slotGray.transitionToValue("56.16", 3.5);
            }, null, null, 1)
            .call(function() {
                slotBlue.transitionToValue("225.50", 6);
            }, null, null, 1);
        return tl;
    }

    function step1() {
        var tl = new TimelineLite()
            .fromTo(".sprite-bg1", 0.5, {
                autoAlpha: 0
            }, {
                autoAlpha: 1
            }, 0)
            .fromTo(".sprite-bgScroll", 3, {
                y: -bannerheight
            }, {
                y: 0,
                ease: Linear.easeNone
            }, 0.5)
            .fromTo(".sprite-bgScroll", 6, {
                backgroundPosition: "0px 0px"
            }, {
                backgroundPosition: "0px " + bannerheight * 2 + "px",
                ease: Linear.easeNone
            }, 3.5)
            .fromTo([".sprite-txt1_0", ".sprite-txt1_1", ".sprite-txt1_2", ".sprite-line", ".sprite-pricepoint"], 0.5, {
                y: 20,
                autoAlpha: 0
            }, {
                y: 0,
                autoAlpha: 1
            }, 0.2)
            .to(replayBtn, 0.4, {
                autoAlpha: 1
            }, 0.4)
            .call(function() {
                ctaSheen();
            }, null, null, 1)
        return tl;
    }
}


function ctaSheen() {
    if (!TweenMax.isTweening('.sheen')) TweenMax.fromTo('.sheen', .5, {
        scale: 0,
        opacity: 0.5,
    }, {
        scale: 6,
        opacity: 0,
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
    if (e.currentTarget == replayBtn) {
        if (!TweenMax.isTweening(replayBtn)) TweenMax.fromTo(replayBtn, .7, {
            rotation: 0
        }, {
            rotation: 360
        });
    }
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js", startAnim);