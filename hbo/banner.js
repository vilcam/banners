'use strict'

var container, replayBtn, exitBtn, tlMain, tlBg;
var footerHeight = 43;
var bannerwidth = 300;
var bannerheight = 250;
var bgEndOffset = 40;

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
		.add(step2(), "+=1.2")
		.add(step3(), "+=1.2")
		.add(step4(), "+=1.2")
		.add(step5(), "+=1.2")
		.addPause(15);


	
	var bgw = document.querySelectorAll(".sprite-bg")[0].offsetWidth;
	tlBg = new TimelineMax()
	.fromTo(".sprite-bg", 15, {x:0}, {x:-bgw+bannerwidth+bgEndOffset}, 0)
	.addPause(15)
	return tlBg;
	;	

	function init() { 
		var _tl = new TimelineLite()
			.set(replayBtn, 					{left:bannerwidth-22, top:6, autoAlpha:0})

			.set('.sprite-bg',					{left:0,  top:0})

			.set('.sprite-txt0_1',				{left:20,  top:35})
			.set('.sprite-txt0_0',				{left:20,  top:14})
			.set('.sprite-txt0_2',				{left:95,  top:35})
			.set('.sprite-device1',				{left:66,  top:95})
			.set('.sprite-txt1',				{left:52,  top:16})
			.set('.sprite-devices3',			{left:74,  top:111})
			.set('.sprite-device2',				{left:110,  top:88})
			.set('.sprite-txt2',				{left:12,  top:16})
			.set('.sprite-txt3',				{left:13,  top:16})
			.set('.sprite-devices4',			{left:5,  top:92})
			.set('.sprite-pricepoint',			{left:194,  top:105})
			.set('.sprite-txt4',				{left:13,  top:16})
						
	

			.set('.footer', 					{left:0,   top:210, height:footerHeight, backgroundColor:"#fff"})
			.set('.sprite-footer',				{left:-13,  top:0})
			.set('.sprite-logo',				{left:237,  top:8})
			.set('.sprite-txtOffer',			{left:156,  top:9})
			.set('.sheen', 						{alpha:.5})
			.set(container, 					{alpha:1})
	}

	function step1() {
		var tl = new TimelineLite()
			.fromTo(".sprite-txt0_0",		1.5, {autoAlpha:1, rotation:0.001}, {autoAlpha:0, rotation:0}, 1.7)
			.fromTo(".sprite-txt0_1",		1.5, {autoAlpha:1, rotation:0.001}, {autoAlpha:0, rotation:0}, 1.7)

			
		return tl;
	}

	function step2() {
		var tl = new TimelineLite()
			.to(".sprite-txt0_2",			.8, {x:-bannerwidth, rotation:0.001}, .5)
			.fromTo(".sprite-txt1",			1, {x:bannerwidth, rotation:0.001}, {x:0, rotation:0}, 1)
			.fromTo(".sprite-device1",		1, {x:bannerwidth, rotation:0.001}, {x:0, rotation:0}, 1)

		return tl;
	}

	function step3() {
		var tl = new TimelineLite()
			.to(".sprite-txt1",				1, {x:-bannerwidth, rotation:0.001}, .5)
			.to(".sprite-device1",			1, {x:-bannerwidth, rotation:0.001}, .5)
			.fromTo(".sprite-txt2",			1, {x:bannerwidth, rotation:0.001}, {x:0, rotation:0}, .5)
			.fromTo(".sprite-device2",		1, {x:bannerwidth, rotation:0.001}, {x:0, rotation:0}, .5)
		return tl;
	}

	function step4() {
		var tl = new TimelineLite()
			.to(".sprite-txt2",				1, {x:-bannerwidth, rotation:0.001}, .5)
			.to(".sprite-device2",			1, {x:-bannerwidth, rotation:0.001}, .5)
			.fromTo(".sprite-txt3",			1, {x:bannerwidth, rotation:0.001}, {x:0, rotation:0}, .5)
			.fromTo(".sprite-devices3",		1, {x:bannerwidth, rotation:0.001}, {x:0, rotation:0}, .5)
		return tl;
	}

	function step5() {
		var tl = new TimelineLite()
			.to(".sprite-txt3",				1, {x:-bannerwidth, rotation:0.001}, .5)
			.to(".sprite-devices3",			1, {x:-bannerwidth, rotation:0.001}, .5)
			.fromTo(".sprite-txt4",			1, {x:bannerwidth, rotation:0.001}, {x:0, rotation:0}, .9)
			.fromTo(".sprite-addHbo",		1, {x:-bannerwidth, rotation:0.001}, {x:0, rotation:0}, .9)
			.fromTo(".sprite-devices4",		1, {x:-bannerwidth, rotation:0.001}, {x:0, rotation:0}, .9)
			.fromTo(".sprite-pricepoint",	1, {x:bannerwidth, rotation:0.01}, {x:0, rotation:0}, .9)

			.to(replayBtn,					1.3, {autoAlpha:1}, 1.1)
			.call(function(){ ctaSheen(); }, null, null, 4.2)
		return tl;
	}

}


function ctaSheen(){
	if ( !TweenMax.isTweening('.sheen') ) TweenMax.fromTo('.sheen', .5, {attr:{x:-96}}, {attr:{x:160}, ease:Linear.easeInOut});
}

function click(e) {
	if (e.currentTarget==exitBtn){
		 window.open(clickUrl[1], '_blank')
	}
	if (e.currentTarget==replayBtn) { tlMain.restart(); tlBg.restart(); }
}

function over(e) {
	if (e.currentTarget==exitBtn) ctaSheen();
	if (e.currentTarget==replayBtn) {
		if ( !TweenMax.isTweening(replayBtn) ) TweenMax.fromTo(replayBtn, .7, {rotation:0}, {rotation:360});
	}
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js", startAnim);