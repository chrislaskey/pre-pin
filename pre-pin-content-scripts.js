
//Content script for View Chrome Extension

	//Set variables
	//Object used to create a pseudo-namespace
	var prePin = {};
		prePin.prePinImageURLKey = 'tbnid=pre-pin';

	//Incoming message handler
	//Chrome extension model works by message passing between content tabs
	//and the extension background page. Message format is JSON
	chrome.extension.onRequest.addListener( function(request, sender, sendResponse){

		'use strict';

		if(request.action === 'prePin.prePinPage' ){

			prePin.prePinPage(request.message, sendResponse);

		}else if(request.action === 'prePin.prePinImage' ){

			prePin.prePinImage(request.message, sendResponse);

		}else{

			sendResponse({status:'error', message:'request.action not recognized.'});

		}

	});

	prePin.prePinPage = function(message, sendResponse){

		'use strict';

		var element,
			image,
			i;

		//Grab all elements from DOM
		// Convert from live HTMLObject to simple Array
		prePin.elements = document.getElementsByTagName('*');
		prePin.elementsArray = Array.prototype.slice.call( prePin.elements );

		//Clear DOM
		document.body.innerHTML = '';

		//Add images back
		for( i = 0; i < prePin.elementsArray.length; i+=1 ){
			element = prePin.elementsArray[i];
			if( element.tagName.toLowerCase() === 'img' ){
				document.body.appendChild( element );
			}else{
				if( element.style && element.style.backgroundImage ){
					console.log(String.prototype.slice.apply( element.style.backgroundImage, [4, -1] ));
					image = document.createElement('img');
					image.src = String.prototype.slice.apply( element.style.backgroundImage, [4, -1] );
					image.alt = String.prototype.slice.apply( element.style.backgroundImage, [4, -1] );
					document.body.appendChild( image );
				}
			}
		}

	};


	prePin.prePinImage = function(message, sendResponse){

		'use strict';

		// First step is to send URL to phony URI
		// document.location.href = prePin.prePinImageURL + document.location.href + prePin.prePinImageURLSuffix;

		var googleImageURL = 'http://www.google.com/imgres?hl=en&' +
			'safe=off&' +
			'biw=1916&' +
			'bih=1083&' +
			'tbm=isch&' +
			'tbnid=' + prePin.prePinImageURLKey + '&' +
			'imgrefurl=' +  document.location.href + '&' +
			'docid=4Wt5XhCLTH3FwM&' +
			'imgurl=' + document.location.href + '&' +
			'w=500&' +
			'h=375&' +
			'ei=mULGT8XdJ-XI6gHPgoSsBg&' +
			'zoom=1&' +
			'iact=rc&' +
			'dur=275&' +
			'sig=100778086534323707973&' +
			'page=1&' +
			'tbnh=156&' +
			'tbnw=206&' +
			'start=0&' +
			'ndsp=42&' +
			'ved=1t:429,r:13,s:0,i:178&' +
			'tx=103&' +
			'ty=73';

		document.location.href = googleImageURL;

	};

	window.onload = function(){

		if( document.location.href.indexOf( prePin.prePinImageURLKey ) != -1 ){

			'use strict';
		
			// Check for phony URI indicating the first step of a prePinImage call.
			// If true, parse the inner HTTP address, empty the DOM, and insert a new img tag.
			// By using Google Images, the user can get a link back to the original image.

			//Set variables
			var realimage,
				image = document.getElementById('il_fi'),
				iframe = document.getElementById('il_f');

			//Create image element
			realimage = document.createElement('image');
			realimage.setAttribute('alt', 'Pinned from Pre-Pin Chrome Extension');
			realimage.setAttribute('height', image.naturalHeight);
			realimage.setAttribute('src', iframe.src);
			realimage.setAttribute('width', image.naturalWidth);

			//Clear DOM
			document.body.innerHTML = '';

			//Add images back
			document.body.appendChild( realimage );

			//Update location line using HTML5 pushState
			window.history.pushState(
				{id: 7},
				'Pinned from Pre-Pin Chrome Extension',
				iframe.src
			);

		};

	};
