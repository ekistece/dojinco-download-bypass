// ==UserScript==
// @name          Dojin.co Download Bypass
// @description   Patches the dojin.co website to allow downloads ^^
// @include       http://dojin.co/*
// @grant none
// ==/UserScript==

var links = document.getElementsByClassName("cellInformation_edit_download");
for (i = 0; i < links.length; i++)
{
	var link = links[i]["innerHTML"];
	document.getElementsByClassName("cell_download_link")[i].setAttribute("script", 'window.open("' + link + '")');
}
