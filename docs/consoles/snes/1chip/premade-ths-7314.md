---
title: 1CHIP Pre-Made 7314 Amp
layout: layouts/wiki-page.njk
category: snes
section: 1chip
---
**SNES 1CHIP RGB Amp Bypass – Pre-Made THS7314 Chip**

All model 1 SNES systems (including the 1CHIP) output RGB*without*a modification.  This page shows how to bypass the stock output.  In most cases this is*not*needed.  Please read the main 1CHIP page for more information.

![](https://cdn.retrorgb.com/images/1CHIPPage01.JPG)

**WARNING**: This mod is*only*for the 1CHIP systems, as the motherboards for different SNES revisions will be different and the pins will*not*match up.  RGB-bypassing the older systems will most likely not make a difference anyway. Per Tim Worthington (creator of the NESRGB): “*The original Super Nintendo/Famicom video chip does low pass filtering on the RGB video before it gets out to the pins. The 1 chip version doesn’t do this, that’s why the video from this console looks better. I don’t think replacing the video driver circuit would make any difference.*”

Also, this mod is invasive, as you are required to remove pins of an existing chip.  I don’t recommend this for beginners.  If you’d like this mod performed for you,[click here for Retrofixes mod service and select the Deluxe service](http://store.retrofixes.com).

Tools / Parts Needed:

You’ll need a few tools for this mod (more info on the tools can be found in):

–[Pre-Made THS 7314 Amplifier Board](http://store.retrofixes.com/collections/upgrade-diy-kits/products/snes-jr-n64-rgb-upgrade-kit?rfsn=255623.6664d) – The amp you purcahse may not look exactly like the one pictured, however as long as the amp is a THS7314, the installation is the same.
–[SNES RGB cable](/consoles/snes/csync).

– Basic soldering skills.

– The[4.5mm tool](http://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_ff3=9&pub=5575041517&toolid=10001&campid=5337251560&customid=&icep_uq=4.5MM+Game+Tool&icep_sellerId=&icep_ex_kw=&icep_sortBy=12&icep_catId=&icep_minPrice=&icep_maxPrice=&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg)that opens the SNES

– Philips head screwdriver

– Soldering iron / solder

– Thin gauge wire

 

– Start by opening the SNES cover with the 4.5mm tool.  Then remove the cartridge release lever and unplug the front controller ports.  Then, unbolt the power switch and then the rest of the philips screws (shown below).
![](https://cdn.retrorgb.com/images/1CHIPBypass-01.jpg)

– First you have to “disconnect” the existing RGB connection to the multi-out, in order to allow the new conenction to be made.  Remove the motherboard and locate the multi-out pins on the bottom of the board.  Right near the multi-out, you’ll find resistors labeled R15, R16 and R17 – These connect RGB to the multi-out.  De-solder these resistors to remove the RGB connection to the multi-out.  I suggest checking both before and after with a multimeter, to double check that you have the correct resistors and that that connection has been severed.  Click for a full-sized view that shows in better detail where the resistors are located:
[![](https://cdn.retrorgb.com/images/SNES1CHIPRGBBypassResistors-Small.jpg)](https://cdn.retrorgb.com/images/SNES1CHIPRGBBypassResistors.jpg)

> – Alternatively, you can remove the metal shielding from the top of the motherboard and use a pick or dental tool to***carefully***lift the three RGB-output legs of the S-RGB chip.  Removing the resistors is the preferred way to disconnect the RGB lines, since you can simply replace the resistors if you’d ever like to put the console back to stock.  In case you prefer this method, click on each picture for full-sized views:
> [![](https://cdn.retrorgb.com/images/1CHIPBypass-02-small.jpg)](https://cdn.retrorgb.com/images/1CHIPBypass-02.jpg)[![](https://cdn.retrorgb.com/images/1CHIPBypass-03-1-small.jpg)](https://cdn.retrorgb.com/images/1CHIPBypass-03-1.jpg)[![](https://cdn.retrorgb.com/images/1CHIPBypass-03-2-small.jpg)](https://cdn.retrorgb.com/images/1CHIPBypass-03-2.jpg)[![](https://cdn.retrorgb.com/images/1CHIPBypass-03-3-small.jpg)](https://cdn.retrorgb.com/images/1CHIPBypass-03-3.jpg)

– Now find the following spot on the motherboard:
![](https://cdn.retrorgb.com/images/1CHIPBypass-04.jpg)

– Solder three wires to the following points on the board: R6 for Red, R7 for Green and R8 for Blue (a big thanks to[Skips](http://shmups.system11.org/memberlist.php?mode=viewprofile&u=12869)for finding these RGB points!!!):
![](https://cdn.retrorgb.com/images/1CHIPBypass-08.jpg)

> Those holes are direct lines to the RGB-out pins on the main video chip.  For reference, here’s the pins on the actual chip (you won’t need to do anything with this, I’m just adding the picture in case anyone’s interested):
> ![](https://cdn.retrorgb.com/images/1ChipCPU-RGB-Out.jpg)

– Prepare the RGB Amp.  The bottom of the amp board has no components on it, however I always like to add a piece of non-conductive tape to the bottom, just to be sure.  If nothing else, it won’t hurt:
![](https://cdn.retrorgb.com/images/SNESMiniRGBPage02.jpg)

– Next, slide the amp over the multi-out and solder the following six points.  You should also add solder to the RGB pads, so they’ll be ready for the wire.

As an FYI, it won’t hurt anything if you accidentally soldered the other pins, but it’s better to just stick with the ones with the arrows:
![](https://cdn.retrorgb.com/images/1CHIPBypass-09.jpg)

– Cut the wires to length and solder them to the correcsponding RGB pads on the amp.  Your installation should now look like this (click for full-size):
[![](https://cdn.retrorgb.com/images/1CHIPBypass-10.jpg)](https://cdn.retrorgb.com/images/1CHIPBypass-10-large.jpg)

– That’s it!  Re-assemble the console, power on your system and enjoy RGB!!!  A quick tip:  If your cartridge release lever isn’t as firm as it used to be, you can simply move the spring slightly over.  I find moving it just this tiny bit makes a huge difference:
![](https://cdn.retrorgb.com/images/SNESCartridgeSpring.jpg)

Just a reminder: The 1CHIP-01 and 1CHIP-02 systems already have csync running to pin 3 (sync) on the multi-out, so no modification is needed to get true composite sync.  If you have a rare 1CHIP-03 model, you can easily restore csync by adding one wire (click for full-sized).  As with ALL SNES systems, this can*only*be done on NTSC systems,***not***PAL!:
[![](https://cdn.retrorgb.com/images/1CHIP-03-csync.jpg)](https://cdn.retrorgb.com/images/1CHIP-03-csync-Large.jpg)

**Brightness Issues:**

I strongly recommend you add these three resistors, to ensure the video output looks correct:

– First, solder[750 Ohm resistors](http://www.digikey.com/product-detail/en/RNMF14FTC750R/S750CACT-ND/2617532)to the same places you’d get RGB from the board.

– Then, make sure to solder the RGB wires***between***the resistors and the board.

– Finally, the other side of all three resistors to ground (click for full-sized):
[![](https://cdn.retrorgb.com/images/1CHIPBypass-11.jpg)](https://cdn.retrorgb.com/images/1CHIPBypass-11-large.jpg)

– For beginners, it must seem strange to tie all the video lines to ground, but as long as the video lines are on the motherboard-side of the resistor, it will work to properly adjust the input brightness to the exact level the 1CHIP SNES should be outputting.

If you’d like more detailed, technical information, here’s a link to the assembler games thread explaining all the details:

[http://www.assemblergames.com/forums/showthread.php?53053-SNES-Mini-RGB-Measurements](https://assemblergames.com/threads/snes-mini-rgb-measurements.53053/)

That’s it!

Feel free to go back to the [main SNES page](/consoles/snes).  If you’d like info on mods for other systems, head to the [Getting RGB From Each System page](consoles/)or check out [the main page](/) for more retro-awesomeness.