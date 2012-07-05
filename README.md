Information
================================================================================

@author Chris Laskey
@contact chrislaskey.com
@contact github.com/chrislaskey
@updated 2012.07.05
@version 1.6.0

About Pre-Pin
================================================================================

Pre-Pin extends the capabilities of the Pinterest Pin It! bookmarklet.

The Pre-Pin menu, accessible by right clicking anywhere on a webpage, offers two options.

The first option is Pre-Pin Page. This searches the current webpage and pulls out all relevant images. This makes previously unpinnable images like background-images (often used in rotating displays) now pinnable by the Pin It! bookmarklet. It's also helpful when you want to quickly look at all images on a page, whether you're adding them to pinterest or just browsing.

The second option is Pre-Pin Image. This makes it possible to pin an individual image without leaving the page, instead of having to save it and upload it to Pinterest. It retains as much original information as possible, like a path back to the original source of the image.

There has been no attempt made to try to reverse engineer Pinterest intellectual property, and all code and functionality has been written in compliance with written terms of service as well as the spirit behind it. I believe in making community sharing a reality, while also protecting the rights of the original owners.

Pre-Pin Chrome Extension source code is available for free on github and is released under the permissive MIT License.

Technical Details
================================================================================

As Pinterest became more popular I noticed a few limitations of the Pin It!
bookmarklet. Noteably, the inability to pin images set as CSS background images
and the ability to pin an individual image.

I wrote a couple of pure JavaScript functions to overcome the limitations of
the Pinterest Pin It! bookmarklet.

I attempted to stay true to both the letter of the Pinterest Terms of Service
as well as the spirit of it. I think it's great to see community sites gain
such popularity.

CSS Background Images (Pre-Pin Page Option)
-------------------------------------------

In ```pre-pin-content-scripts.js``` the ```prePin.prePinPage``` method works by
walking through the DOM and picking out any elements that have a
```style.backgroundImage``` property as well as the ```src``` attributes of
any ```img``` tags.

Once finished walking through the DOM, it clears the ```document.body``` and
adds each of the collected URIs back to the page as ```img``` tags.

This lets the Pin It! bookmarklet pin any of the images, as well as retain the
original page URI and page title.

Individual Images (Pre-Pin Image Option)
----------------------------------------

This requires a two step approach. The first is to wrap the image in a Google
Image result page. The second step is to recognize the Google Image URI page
and confirm it is the correct embedded image.

This lets the Pin It! bookmarklet pin the individual image, and maintain a
pointer from a reliable source back to the original URI. It does not,
however, keep the original page title.

License
================================================================================

Copyright (C) 2012 Chris Laskey

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

Except as contained in this notice, the name(s) of the above copyright holders
shall not be used in advertising or otherwise to promote the sale, use or other
dealings in this Software without prior written authorization.

The end-user documentation included with the redistribution, if any, must include
the following acknowledgment: "This product includes software developed by
Chris Laskey (http://chrislaskey.com)", in the same place and form as other
third-party acknowledgments. Alternatively, this acknowledgment may appear in
the software itself, in the same form and location as other such third-party
acknowledgments.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Commentary on License Choice
================================================================================

Though I see the appeal of copy-left licensing, I've decided to release all code
under the very permissive MIT license. The upshot is enjoy the code, modify it,
include in proprietary software, relicense it, etc. The only things I ask are:

	- Don't hold me liable for any damages resulting from using my code
	  (e.g. if the code turns you to drinking heavily, don't charge the drinks
	  to my tab).

	- If you do decide to credit people and you use my code, a thank you in the
	  same section as other third-party contributors would be great, but not
	  required!

	- Finally, don't use my name to promote the sale of your product without
	  asking. It's great if you sell a product with my code in it, and I hope
	  you are wildly successful! I just don't want my name associated with a
	  company that acts like a jerk. So ask first. Unless your name is
	  Larry Ellison, there's a 99.9999999%* chance I'll say yes.

	  * That's the fabled nine nines. Quick catch it before it rides away on
	  a unicorn!

Finally, the code may contain third party libaries. I've done my best to adhere
to their licensing rules and make them explicit. But please do your own due
diligence and double check before assuming everything is as permissive as
my own code's license!

For more information on the MIT license check out the Wikipedia page. The
license below is the basic MIT plus the MIT X11 and MIT XFree86 Project clauses:
http://en.wikipedia.org/wiki/MIT_License
