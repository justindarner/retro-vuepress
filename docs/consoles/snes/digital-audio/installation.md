---
title: SNES S-DSP Installation
layout: layouts/wiki-page.njk
category: snes
section: digital audio
---
**SNES S-DSP Digital Audio Installation**

This page shows installation instructions for the SNES digital audio mod on an older SNES system with the separate audio board.  Unfortunately, I couldn’t find any via’s on the separate audio board, so this installation requires soldering directly to the S-DSP chip.  These are tiny pins to solder to and unless you have experience soldering small SMD components, I suggest you have a professional perform the mod for you. 

[![](https://cdn.retrorgb.com/images/1CHIPDigitalAudio08.jpg)](http://store.retrofixes.com/products/snes-spdif-digital-audio-upgrade-board?rfsn=255623.6664d)

As an FYI, there are two types of audio that are not compatible with the digital audio mod:

> – Super Game Boy adapters create their own audio, so Game Boy audio can only be passed through the analog-out of the SNES, not digital.
> 
> – Any homebrew game that uses the MSU Audio programming of the SD2SNES [rom cart](/romcarts) will not work with the digital audio mod. All other games work and sound perfectly via the SD2SNES, but (much like the SGB), MSU audio is created in the SD2SNES cart, not the SNES, bypassing the internal sound chips.

Other then that, as far as I know, there are no other game compatibility problems, but PLEASE NOTE: This digital audio mod is not compatible with many stereo receivers. I’ve been lucky and have had great success, however many other people have problems with their setups.

Also, your model SNES might look slightly different, but the basic idea and solder points are the same.  If your systems looks much different, I suggest stopping the installation and[sending me pics](/contact) of your SNES, as I may be able to help.

**Tools / Parts Needed:**
 You’ll need a few tools for this mod (more info on the tools can be found in [the tools section](/tools)):
– [SNES Digital Audio board](http://store.retrofixes.com/products/snes-spdif-digital-audio-upgrade-board?rfsn=255623.6664d)
– Basic soldering skills.
– The [4.5mm tool](http://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_ff3=9&pub=5575041517&toolid=10001&campid=5337251560&customid=&icep_uq=4.5MM+Game+Tool&icep_sellerId=&icep_ex_kw=&icep_sortBy=12&icep_catId=&icep_minPrice=&icep_maxPrice=&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg) that opens the SNES
– Philips head screwdriver
– Soldering iron / solder
– Thin gauge wire
 – Sharp cutting tool, such as an x-acto knife or razor
 – Solder remover; A de-soldering iron is recommended, but solder braid might work too

Before starting, you should choose a location for the digital audio board.  I prefer to use the area where the RF port is, since I’ll never use that again.  If you’re unsure about cutting the plastic, you could always run the wires through the rear vent holes.  It’s ugly, but it’s a good way to test before making a permanent modification to your system:
![](https://cdn.retrorgb.com/images/1CHIPDigitalAudio01.jpg)

Next, completely disassemble the SNES.  You’ll need to remove the two screws holding the separate audio board and gently pull that board off (please excuse the wires in this pic…I forgot to take a “before” picture):
![](https://cdn.retrorgb.com/images/SDSPSeparateAudioBoard.jpg)

Then you’ll need to remove the heatsink and expose the RF module:
![](https://cdn.retrorgb.com/images/1CHIPDigitalAudio02.jpg)

Now, turn the motherboard over and locate the 4 pins for the RF module.  You’ll need to de-solder all 4; I recommend using a cheap desoldering iron:
![](https://cdn.retrorgb.com/images/1CHIPDigitalAudio03.jpg)

Next, use an x-acto knife or sharp blade to cut the RF hole into a square.  Do ***not*** cut the hole any higher then it already is;  Cut down and to the sides.  If you make the hole too high [like this](https://cdn.retrorgb.com/images/SNESMiniDigitalAudio04.jpg), you won’t be able to fit the optical audio cable.  Also, you’ll want to make it snug; *just* big enough for the SPDIF connector to fit through (I find using a file helps for those last little adjustments). 
![](https://cdn.retrorgb.com/images/1CHIPDigitalAudio04.jpg)

Make sure to mount the board with the chip & solder pads facing up!  After it fits, use super glue or epoxy around the inside edges of the digital audio connector to secure it in place.

Next, you’ll want to connect power and ground.  I find it easiest to use power from the RF module, since it’s right below the digital audio board (please ignore the other wires in this pic…I forgot to take one before attaching the other wires, which is the next step):
![](https://cdn.retrorgb.com/images/1CHIPDigitalAudio05.jpg)

Now, use a flat-head screwdriver to pry open the bottom of the separate audio module that you removed (the side that plugs into the SNES mainboard).  Run the 5 wires through the hole in the side of the module and cut them to an equal length (remember to leave slack):
![](https://cdn.retrorgb.com/images/S-DSP-WiresInModule.jpg)

Look for the S-DSP chip and solder the wires to the corresponding numbers.  **BE CAREFUL: ** It’s *extremely* hard to solder to such small pins!  Make sure to tin your wires and use flux!  Click on the picture for a full-sized view:
[![](https://cdn.retrorgb.com/images/S-DSP-SolderPoints.jpg)](https://cdn.retrorgb.com/images/S-DSP.jpg)

Your installation should look similar to this now.  To be honest, I could have done a much better job and will be updating these pics soon:  The length of the exposed wire is too long and since the wires are so close to each other, I should have used something to secure the wires in place so they won’t touch;  I could have possibly put a *tiny* dab of hot glue on the mainboard (*not* the solder joint) and pushed the wires on top of them to hold them in.  Either way, the solder joints shown here are very solid (*not* cold) and the correct points are shown (click for full-sized):
[![](https://cdn.retrorgb.com/images/S-DSP-WiresInstalled-Small.jpg)](https://cdn.retrorgb.com/images/S-DSP-WiresInstalled.jpg)

Now you can re-assemble the heatsink and install the motherboard back into the case. Since the RF module is no longer attached, there will be two extra screws after re-assembling.
![](https://cdn.retrorgb.com/images/1CHIPDigitalAudio07.jpg)

A quick tip:  If your cartridge release lever isn’t as firm as it used to be, you can simply move the spring slightly over.  I find moving it just this tiny bit makes a huge difference:
![](https://cdn.retrorgb.com/images/SNESCartridgeSpring.jpg)

That’s it!  Once again, please remember that this audio mod will not work with all stereo receivers, so if you have problems with your system, make sure to troubleshoot the receiver, as well as the system.
![](https://cdn.retrorgb.com/images/1CHIPDigitalAudio08.jpg)

If you’re done, feel free to go back to the [main SNES page](/consoles/snes).  If you’d like info on mods for other systems, head to the [Getting RGB From Each System page](consoles/)or check out [the main page](/) for more retro-awesomeness.