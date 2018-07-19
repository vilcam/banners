'use strict'

var container, replayBtn, exitBtn, tlMain, tlBg;
var footerHeight = 78;
var bannerwidth = 300;
var bannerheight = 600;
var bgEndOffset = 188;

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
		
		.addPause(15);


	// COLOR VARS //
	var colorArrayLighten = [
		"#5ca6db",
		"#1b8ac4",
		"#8bb9e4",
		"#54a6d2",
		"#3c81c0",
		"#3ab2ea",
		"#6ac7ec",
		"#78c8ef"
	]

	var colorArrayDarken = [
		"#64b7ed",
		"#84c8fa",
		"#53ade5",
		"#5eb2ee",
		"#60ace4",
		"#5aa7df",
		"#5ca7eb",
		"#3b97da"
	]

	function getRandomColor(j){
		if ((j % 2) === 0 ) {
			return colorArrayLighten[Math.floor(Math.random()*colorArrayLighten.length)];
		} 
		else {
			return colorArrayDarken[Math.floor(Math.random()*colorArrayDarken.length)];
		}
	}
	// margin VARS //

	var marginL = 8;
	var marginR = 8;

	var bg_width = bannerwidth-marginL-marginR;
	var bg_height = bannerheight-footerHeight-marginL;

	var squaresHorizontal = 3;

	var squareSize = bg_width/squaresHorizontal;

	var squaresVertical = Math.ceil(bg_height/squareSize);

	var totalSquares = squaresVertical * squaresHorizontal;

	var posx = 0;
	var posy = 0;
	var containerSquare = document.getElementById("squareBgs");
	var activeDelay = 0;
	for (var i = 0; i < squaresVertical; i++) {
		posy = squareSize*i;
		for (var j = 0; j < squaresHorizontal; j++) {
			posx = squareSize*j;
			activeDelay = (i*j)/20;
			//aca voy a crear un cuadrado en posx posy
			var square = document.createElement("div");
			square.className = "squareDiv";
			containerSquare.appendChild(square);
			TweenMax.set(square, {left:posx, top:posy, width:squareSize, height:squareSize, backgroundColor:getRandomColor((i+1)+((j+1)%2))});
			//TweenMax.fromTo(square, 0.3, {rotationX:180}, {rotationX:0, delay:activeDelay});
			TweenMax.to(square, 3, {backgroundColor:getRandomColor((i+1)+((j+1)%2)), delay:0});
			TweenMax.to(square, 3, {backgroundColor:getRandomColor((i+1)+((j+1)%2)), delay:3});
			TweenMax.to(square, 3, {backgroundColor:getRandomColor((i+1)+((j+1)%2)), delay:6});
			TweenMax.to(square, 3, {backgroundColor:getRandomColor((i+1)+((j+1)%2)), delay:9});
			TweenMax.to(square, 3, {backgroundColor:getRandomColor((i+1)+((j+1)%2)), delay:12});
			TweenMax.to(square, 3, {backgroundColor:getRandomColor((i+1)+((j+1)%2)), delay:15});
		}
	}


	function init() {
		var _tl = new TimelineLite()

			.set(replayBtn, 					{left:bannerwidth-22, top:6, autoAlpha:0})

			.set('.bg_colorContainer',         	{width:bg_width, height:bg_height, left:marginL-1, top:marginL})

			.set('.sprite-chameleon',	{left:-230,  top:399})
			.set('.sprite-txt1',	{left:36,  top:48})
			.set('.sprite-txt2',	{left:36,  top:243})
			.set('.sprite-logo_valspar',	{left:144,  top:379})
			
			.set('.footer', 					{left:0,   top:524, height:footerHeight})
			.set('.sprite-cta',					{left:-27,  top:0})
			.set('.sprite-logo_lowe',			{left:208,  top:27})
			.set('.sheen', 						{alpha:.5})
			.set(container, 					{autoAlpha:1})
	}

	

	function step1() {
		var tl = new TimelineLite()
			
			.fromTo(".sprite-txt1",					.8, {autoAlpha:0}, {autoAlpha:1}, .6)
			.fromTo(".sprite-txt2",					.8, {autoAlpha:0}, {autoAlpha:1}, .9)
			.fromTo(".sprite-logo_valspar",			.8, {autoAlpha:0}, {autoAlpha:1}, 1.5)

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
		window.open(window.clickTag)
	}
	if (e.currentTarget==replayBtn) { tlMain.restart(); }
}

function over(e) {
	if (e.currentTarget==exitBtn) ctaSheen();
	if (e.currentTarget==replayBtn) {
		if ( !TweenMax.isTweening(replayBtn) ) TweenMax.fromTo(replayBtn, .7, {rotation:0}, {rotation:360});
	}
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js", startAnim);