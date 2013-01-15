//Set global variables
var menu = {},
	popup = {};

//Menu functions
menu.init = function(){

	//Context loop is not required for individual contexts.
	// Taken from Google Chrome extension example. Preserved as an example to show item
	// on every context menu (all contexts). See:
	// http://code.google.com/chrome/extensions/beta/samples.html#5d81304a17cf7ac2887484f730fbd2b01e51e166
  	menu.prePinPage = chrome.contextMenus.create({
		'contexts': ['page', 'selection', 'link', 'editable', 'image', 'video', 'audio'], 
        'onclick': menu.onclickPrePinPage,
		'title': 'Pre-Pin Page',
        'type': 'normal'
    });

  	menu.prePinImage = chrome.contextMenus.create({
		'contexts': ['page', 'selection', 'link', 'editable', 'image', 'video', 'audio'], 
        'onclick': menu.onclickPrePinImage,
		'title': 'Pre-Pin Image',
        'type': 'normal'
    });

}

menu.onclickPrePinPage = function(info, tab){

	//Create popup data
	var data = {};
	data.action = 'prePin.prePinPage';
	data.message = null;
	var callback = function(response){
		//Silence
		return true;
	}

	//Show advanced popup dialogue in active tab
	popup.send(tab.id, data, callback);

}

menu.onclickPrePinImage = function(info, tab){

	//Create popup data
	var data = {};
	data.action = 'prePin.prePinImage';
	data.message = null;
	var callback = function(response){
		//Silence
		return true;
	}

	//Show advanced popup dialogue in active tab
	popup.send(tab.id, data, callback);

}

//Popup functions
popup.send = function(id, data, callback){

	//Send request
	chrome.tabs.sendRequest(id, data, callback);

}

//Init
document.addEventListener('DOMContentLoaded', function () {
	menu.init();
});
