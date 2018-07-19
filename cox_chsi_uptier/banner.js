'use strict'

var container, replayBtn, exitBtn, tlMain, tlBg;
var footerHeight = 43;
var bannerwidth = 300;
var bannerheight = 250;

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
function hcenter(elem, beforeoffset, afteroffset){
	if(typeof elem == 'string'){
		elem = document.querySelectorAll(elem)[0];
	}
	if(!beforeoffset) beforeoffset = 0;
	if(!afteroffset) afteroffset = 0;
	var avSpace = bannerwidth-beforeoffset-afteroffset;
	return beforeoffset+(avSpace-elem.offsetWidth)/2;
}
/**
Vertical center element
*/
function vcenter(elem, beforeoffset, afteroffset){
	if(typeof elem == 'string'){
		elem = document.querySelectorAll(elem)[0];
	}
	if(!beforeoffset) beforeoffset = 0;
	if(!afteroffset) afteroffset = 0;
	var avSpace = bannerheight-beforeoffset-afteroffset;
	return beforeoffset+(avSpace-elem.offsetHeight)/2;
}

function startAnim() {

	//hide preload
	TweenMax.set("#loading", {autoAlpha:0});

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
		.add(step1(), "+=0")
		.add(step2(), "+=1.1")
		.add(step3(), "+=1.1")
		.add(step4(), "+=1")
		.add(step5(), "+=1")
		.add(step6(), "+=1")
		.addPause(15);

	function init() { 
		var _tl = new TimelineLite()
			.set(replayBtn, 					{left:bannerwidth-25, top:6, autoAlpha:0})

			.set('.sprite-bg',					{left:0,  top:0})

			.set('.sprite-txt1',	{left:25,  top:72})
			.set('.sprite-txt2',	{left:150,  top:58})
			.set('.sprite-device1_laptop',	{left:-126,  top:31})
			.set('.sprite-device1_iphone',	{left:20,  top:73})
			.set('.sprite-txt3',	{left:26,  top:67})
			.set('.sprite-device2_tablet',	{left:158,  top:41})
			.set('.sprite-device2_iphone',	{left:240,  top:112})
			.set('.sprite-device2_watch',	{left:186,  top:122})
			.set('.sprite-device2_headphones',	{left:213,  top:150})
			.set('.sprite-device3_ipad',	{left:18,  top:74})
			.set('.sprite-txt4',	{left:22,  top:18})
			.set('.sprite-txt5',	{left:27,  top:75})
			.set('.sprite-txt6',	{left:22,  top:26})
			.set('.sprite-price',	{left:170,  top:73})
			.set('.sprite-devices',	{left:-48,  top:61})
			
			
			.set('.footer', 					{left:0,   top:210, height:footerHeight, backgroundColor:"#fff"})
			.set('.sprite-cta',					{left:0,  top:0})
			.set('.sprite-logo',				{left:234,  top:8})
			.set('.sprite-txtOffer',			{left:132,  top:7})
			.set('.sheen', 						{alpha:.5})
			.set(container, 					{alpha:1})
	}

	function step1() {
		var tl = new TimelineLite()
			.fromTo(".sprite-txt1", 1, {y:-bannerheight}, {y:0, ease:Power2.easeInOut}, 0)
		return tl;
	}

	function step2() {
		var tl = new TimelineLite()
			.to(".sprite-txt1", 1, {y:-bannerheight, ease:Power2.easeInOut}, 0)
			.fromTo(".sprite-txt2", 1, {x:bannerwidth}, {x:0, ease:Power2.easeInOut}, 0.6)
			.fromTo(".sprite-device1_laptop", 1, {x:-bannerwidth}, {x:0, ease:Power2.easeInOut}, 0.7)
			.fromTo(".sprite-device1_iphone", 1, {x:-bannerwidth}, {x:0, ease:Power2.easeInOut}, 0.9)
		return tl;
	}

	function step3() {
		var tl = new TimelineLite()
			.to(".sprite-txt2", 1, {x:bannerwidth, ease:Power2.easeInOut}, 0)
			.to(".sprite-device1_iphone", 1, {x:-bannerwidth, ease:Power2.easeInOut}, 0)
			.to(".sprite-device1_laptop", 1, {x:-bannerwidth, ease:Power2.easeInOut}, 0)
			.fromTo(".sprite-txt3", 1, {x:-bannerwidth}, {x:0, ease:Power2.easeInOut}, 0.6)
			.fromTo(".sprite-device2_tablet", 1, {x:bannerwidth}, {x:0, ease:Power2.easeInOut}, 0.6)
			.fromTo(".sprite-device2_watch", 1, {x:bannerwidth}, {x:0, ease:Power2.easeInOut}, 0.7)
			.fromTo(".sprite-device2_iphone", 1, {x:bannerwidth}, {x:0, ease:Power2.easeInOut}, 0.9)
			.fromTo(".sprite-device2_headphones", 1, {x:bannerwidth}, {x:0, ease:Power2.easeInOut}, 1)
		return tl;
	}

	function step4() {
		var tl = new TimelineLite()
			.to(".sprite-txt3", 1, {x:-bannerwidth, ease:Power2.easeInOut}, 0)
			.to(".sprite-device2_iphone", 1, {x:bannerwidth, ease:Power2.easeInOut}, 0)
			.to(".sprite-device2_watch", 1, {x:bannerwidth, ease:Power2.easeInOut}, 0)
			.to(".sprite-device2_tablet", 1, {x:bannerwidth, ease:Power2.easeInOut}, 0)
			.to(".sprite-device2_headphones", 1, {x:bannerwidth, ease:Power2.easeInOut}, 0)
			.fromTo(".sprite-txt4", 1, {y:-bannerheight}, {y:0, ease:Power2.easeInOut}, 0)
			.fromTo(".sprite-device3_ipad", 1, {y:bannerheight}, {y:0, ease:Power2.easeInOut}, 0.6)
		return tl;
	}

	function step5() {
		var tl = new TimelineLite()
			.to(".sprite-txt4", 1, {y:-bannerheight, ease:Power2.easeInOut}, 0)
			.to(".sprite-device3_ipad", 1, {y:bannerheight, ease:Power2.easeInOut}, 0.2)
			.fromTo(".sprite-txt5", 1, {y:-bannerheight}, {y:0, ease:Power2.easeInOut}, 0.7)
		return tl;
	}

	function step6() {
		var tl = new TimelineLite()
			.to(".sprite-txt5", 1, {y:-bannerheight}, {y:0, ease:Power2.easeInOut}, 0)
			.fromTo(".sprite-txt6", 1, {y:-bannerheight}, {y:0, ease:Power2.easeInOut}, 0)
			.fromTo(".sprite-price", 1, {x:bannerwidth}, {x:0, ease:Power2.easeInOut}, 0.6)
			.fromTo(".sprite-devices", 1, {x:-bannerwidth}, {x:0, ease:Power2.easeInOut}, 0.6)

			.to(replayBtn,					1.3, {autoAlpha:1}, 1.1)
			.call(function(){ ctaSheen(); }, null, null, 4.2)
		return tl;
	}
}


function ctaSheen(){
	if ( !TweenMax.isTweening('.sheen') ) TweenMax.fromTo('.sheen', .5, {attr:{x:-96}}, {attr:{x:160}, ease:Linear.easeInOut});
}

function click(e) {
	if (e.currentTarget==exitBtn) myFT.clickTag(1);
	if (e.currentTarget==replayBtn) { tlMain.restart(); tlBg.restart(); }
}

function over(e) {
	if (e.currentTarget==exitBtn) ctaSheen();
	if (e.currentTarget==replayBtn) {
		if ( !TweenMax.isTweening(replayBtn) ) TweenMax.fromTo(replayBtn, .7, {rotation:0}, {rotation:360});
	}
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js", startAnim);