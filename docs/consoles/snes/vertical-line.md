---
title: SNES Vertical Line
layout: layouts/wiki-page.njk
category: snes
section: snes
---
**SNES Vertical Line Issue**

One problem that’s plagues some SNES consoles is a vertical line constantly going down the center of the screen. Please read on for more information:

![](https://cdn.retrorgb.com/images/SNESVerticalLine.jpg)

**Problem:**

The vertical line is most noticeable right when the console is powered on (hence the above shot), or in games with lots of dark scenes, such as Super Metroid. It’s believed the vertical bar is caused by the power drop during DRAM refresh; Esentially, an inefficient power filter. This is something I remember seeing when I was a kid and it’s a widely talked about issue.

**Upgraded Voltage Regulator:**

A fairly easy and efficient way to either remove or reduce the white line is by simply replacing the stock 7805 voltage regulator with one having a higher current rating:

ST L78S05CV-DG
[https://www.digikey.com/products/en?keywords=ST%20L78S05CV-DG](https://www.digikey.com/products/en?keywords=ST%20L78S05CV-DG)
[http://www.mouser.com/search/ProductDetail.aspx?r=511-L78S05CV-DG](http://www.mouser.com/search/ProductDetail.aspx?r=511-L78S05CV-DG)

Also, replacing the 1uF surface mount capacitor on the 78S05CV-DG’s output circuit with a 22uF should also help a bit:

Murata GRM21BR61C226ME44L
[https://octopart.com/search?q=GRT21BR61E226ME13L%20&start=0](https://octopart.com/search?q=GRT21BR61E226ME13L%20&start=0)

Here’s a comparison picture taken by s0m showing his results when changing the 7805 & cap.  My results were very similar, but in my testing the new 78S05 made the biggest difference by far (click for full-sized):

[![](https://cdn.retrorgb.com/images/s0mSNES_White_Line_Compare-small.jpg)](https://cdn.retrorgb.com/images/s0mSNES_White_Line_Compare.jpg)

**Video Guide:**

**Capacitor fix:**

Instead of replacing the voltage regulator, you can try adding a capacitor to it. Here’s more information and you can click on the picture for a full-sized view (thanks to Paul T for the pic!):

– Start by adding a 16v 470uF capacitor to the voltage regulator (which is attached to the heatsink), as shown in the bottom-right picture. Note the orientation of the cap and that the negative end (the side with the stripe) is connected to the center pin! If that doesn’t work, you can try a 1000uF cap as well.

– If after trying both caps you’re still having trouble, you can try adding two 16v, 220uF caps to the S-RGB chip as shown on the bottom-left picture: Solder the negative ends (with the stripe) to ground pin #13 and each positive end of the cap to the two 5v pins 6 & 19 (thanks to Mark for that tip):

[![](https://cdn.retrorgb.com/images/SNESVerticalLinePaulVtFix-small.jpg)](https://cdn.retrorgb.com/images/SNESVerticalLinePaulVtFix.jpg)

[Alex / ArcadeTV](https://twitter.com/arcadetv) suggests a similar method that includes replacing the big 2200uF capacitor plus three 220uF: one on the output of the 7805 and the two remaining on the supply-pins of the S-RGB IC. Here’s a link for more information: [http://circuit-board.de/forum/index.php/Thread/12133-Vertikale-wei%C3%9Fe-Linie-beim-SNES-Wer-hat-sie-wer-nicht/?postID=293232#post293232](http://circuit-board.de/forum/index.php/Thread/12133-Vertikale-wei%C3%9Fe-Linie-beim-SNES-Wer-hat-sie-wer-nicht/?postID=293232#post293232)

 

**RGB Bypass as a solution for 1CHIP / Mini Consoles:**

I’ve personally seen an RGB bypass fix the white line issue on many SNES consoles and it’s one of the reasons I’ve recommended beginners use a bypass instead of the on-board amp for the Mini. That being said, if you have a 1CHIP (no RGB mod needed), or if you’ve already done the on-board RGB mod to a SNES Mini, then the above fix might be a better overall solution.  Also, adding an RGB amp will *not* fix the white line for composite video out, only RGB!

> 

**Other Fixes / Information:**

There have been a few other fixes reported over the years. I haven’t had time to test them, but wanted to add the information in case it could help someone else.

Use an SD2SNES???  Yes, that’s right – It seems the newer revisions of the [SD2SNES ROM cart](/romcarts) have an upgraded power filter, so the white line is *significantly* reduced.  I have replicated this in my testing as well:  [https://krikzz.com/forum/index.php?topic=5390.0](https://krikzz.com/forum/index.php?topic=5390.0)

Here’s another possible fix that I have not tested: [http://www.sega-16.com/forum/showthread.php?18935-SNES-vertical-line-issue&p=591084&viewfull=1#post591084](http://www.sega-16.com/forum/showthread.php?18935-SNES-vertical-line-issue&p=591084&viewfull=1#post591084)

 

 

Feel free to go back to the [main SNES page](/consoles/snes).  If you’d like info on mods for other systems, head to the [Getting RGB From Each System page](consoles/)or check out [the main page](/) for more retro-awesomeness.