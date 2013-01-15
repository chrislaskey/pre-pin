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

All code is released under MIT license. See the attached LICENSE.txt file for
more information, including commentary on license choice.
