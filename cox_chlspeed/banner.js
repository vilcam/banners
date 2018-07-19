'use strict'

var container, replayBtn, exitBtn, tlMain, tlBg;
var footerHeight = 133;
var bannerwidth = 160;
var bannerheight = 600;

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
		.add(step1())
		.add(step2(), "+=1")
		.add(step3(), "+=1")
		.add(step4(), "+=1")
		.add(step5(), "+=1")
		.add(step6(), "+=1")
		.addPause(15);

	function init() { 
		var _tl = new TimelineLite()
			.set(replayBtn, 			{left:136,  top:5, autoAlpha:0})

			.set('.sprite-bg',			{left:0,  top:0})
			.set('.sprite-endframe',	{left:0,  top:0})

			.set('.sprite-frame1_1',	{left:0,  top:0})
			.set('.sprite-frame1_0',	{left:0,  top:251})
			.set('.sprite-txt1',	{left:18,  top:188})
			.set('.sprite-frame2_1',	{left:0,  top:0})
			.set('.sprite-frame2_0',	{left:0,  top:251})
			.set('.sprite-frame3_1',	{left:0,  top:0})
			.set('.sprite-frame3_0',	{left:0,  top:251})
			.set('.sprite-frame4_1',	{left:0,  top:0})
			.set('.sprite-frame4_0',	{left:0,  top:251})
			.set('.sprite-frame5_0',	{left:0,  top:251})
			.set('.sprite-frame5_1',	{left:0,  top:0})

			.set('.sprite-overlay_1_1',	{left:0,  top:0})
			.set('.sprite-overlay_0_1',	{left:0,  top:260})
			.set('.sprite-overlay_1_2',	{left:0,  top:0})
			.set('.sprite-overlay_0_2',	{left:0,  top:260})
			.set('.sprite-overlay_1_3',	{left:0,  top:0})
			.set('.sprite-overlay_0_3',	{left:0,  top:260})
			.set('.sprite-overlay_1_4',	{left:0,  top:0})
			.set('.sprite-overlay_0_4',	{left:0,  top:260})

			//footer
			.set('.footer', 			{left:0,   top:467, height:footerHeight, backgroundColor:"#fff"})
			.set('.sprite-cta',			{left:0,  top:0})
			.set('.sprite-txtOffer1',	{left:26,  top:67})
			.set('.sprite-txtOffer2',	{left:38,  top:59})
			.set('.sprite-txtOffer3',	{left:42,  top:59})
			.set('.sprite-txtOffer4',	{left:36,  top:61})
			.set('.sheen', 				{alpha:.5})
			.set(container, 			{alpha:1})

	}

	function step1() {
		var tl = new TimelineLite()
			.fromTo(".sprite-txt1", 0.5, {x:-bannerwidth}, {x:0, ease:Power2.easeInOut}, 0.2)
			.fromTo(".sprite-txtOffer1", 0.5, {autoAlpha:0}, {autoAlpha:1}, 0.2)
		return tl;
	}

	function step2() {
		var tl = new TimelineLite()
			.to(".sprite-bg", 0.6, {autoAlpha:0}, 0.1)
			.fromTo(".sprite-txt1", 0.5, {autoAlpha:1}, {autoAlpha:0}, .3)
			.fromTo(".sprite-frame1_0", 1.5, {y:0}, {y:bannerheight, force3D:true, ease:Power2.easeInOut}, .4)
			.fromTo(".sprite-overlay_0_1", 1.5, {y:0}, {y:bannerheight,force3D:true, ease:Power2.easeInOut}, .4)
			.fromTo(".sprite-frame1_1", 1.5, {y:0}, {y:-bannerheight, force3D:true, ease:Power2.easeInOut}, .5)
			.fromTo(".sprite-overlay_1_1", 1.5, {y:0}, {y:-bannerheight,force3D:true, ease:Power2.easeInOut}, .5)
		return tl;
	}

	function step3() {
		var tl = new TimelineLite()
			.to(".sprite-txtOffer1", 0.5, {autoAlpha:0}, 0.3)
			.fromTo(".sprite-txtOffer2", 0.5, {autoAlpha:0}, {autoAlpha:1}, 0.3)
			.fromTo(".sprite-frame2_0", 1.5, {y:0}, {y:bannerheight, force3D:true,ease:Power2.easeInOut}, .4)
			.fromTo(".sprite-overlay_0_2", 1.5, {y:0}, {y:bannerheight, force3D:true, ease:Power2.easeInOut}, .4)
			.fromTo(".sprite-frame2_1", 1.5, {y:0}, {y:-bannerheight,force3D:true,ease:Power2.easeInOut}, .5)
			.fromTo(".sprite-overlay_1_2", 1.5, {y:0}, {y:-bannerheight,force3D:true, ease:Power2.easeInOut}, .5)
		return tl;
	}

	function step4() {
		var tl = new TimelineLite()
			.to(".sprite-txtOffer2", 0.5, {autoAlpha:0}, 0.3)
			.fromTo(".sprite-txtOffer3", 0.5, {autoAlpha:0}, {autoAlpha:1}, 0.3)
			.fromTo(".sprite-frame3_0", 1.5, {y:0}, {y:bannerheight,force3D:true, ease:Power2.easeInOut}, .4)
			.fromTo(".sprite-overlay_0_3", 1.5, {y:0}, {y:bannerheight,force3D:true, ease:Power2.easeInOut}, .4)
			.fromTo(".sprite-frame3_1", 1.5, {y:0}, {y:-bannerheight,force3D:true,ease:Power2.easeInOut}, .5)
			.fromTo(".sprite-overlay_1_3", 1.5, {y:0}, {y:-bannerheight,force3D:true, ease:Power2.easeInOut}, .5)
		return tl;
	}	
	function step5() {
		var tl = new TimelineLite()
			.fromTo(".sprite-frame4_0", 1.5, {y:0}, {y:bannerheight,force3D:true, ease:Power2.easeInOut}, .4)
			.fromTo(".sprite-overlay_0_4", 1.5, {y:0}, {y:bannerheight,force3D:true, ease:Power2.easeInOut}, .4)
			.fromTo(".sprite-frame4_1", 1.5, {y:0}, {y:-bannerheight,force3D:true,ease:Power2.easeInOut}, .5)
			.fromTo(".sprite-overlay_1_4", 1.5, {y:0}, {y:-bannerheight,force3D:true, ease:Power2.easeInOut}, .5)
		return tl;
	}	
	function step6() {
		var tl = new TimelineLite()
			.to(".sprite-txtOffer3", 0.5, {autoAlpha:0}, 0.3)
			.fromTo(".sprite-txtOffer4", 0.5, {autoAlpha:0}, {autoAlpha:1}, 0.3)
			.fromTo(".sprite-frame5_0", 1.5, {y:0}, {y:bannerheight,force3D:true, ease:Power2.easeInOut}, .4)
			.fromTo(".sprite-overlay_0_5", 1.5, {y:0}, {y:bannerheight,force3D:true, ease:Power2.easeInOut}, .4)
			.fromTo(".sprite-frame5_1", 1.5, {y:0}, {y:-bannerheight,force3D:true,ease:Power2.easeInOut}, .5)
			.fromTo(".sprite-overlay_1_5", 1.5, {y:0}, {y:-bannerheight,force3D:true, ease:Power2.easeInOut}, .5)
			.to(replayBtn, .4, {autoAlpha:1}, 1)
			.call(function(){ ctaSheen(); }, null, null, 1)
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