---
title: SNES 1CHIP Digital Audio
---

# SNES 1CHIP SPDIF Digital Audio Mod

This page shows installation instructions for the SNES digital audio mod.  It’s been tested on all versions of the 1CHIP SNES, including 1CHIP-01, 1CHIP-02 and 1CHIP-03.

[![](https://cdn.retrorgb.com/images/1CHIPDigitalAudio08.jpg)](http://store.retrofixes.com/products/snes-spdif-digital-audio-upgrade-board?rfsn=255623.6664d)

As an FYI, there are two types of audio that are not compatible with the digital audio mod:

– Super Game Boy adapters create their own audio, so Game Boy audio can only be passed through the analog-out of the SNES, not digital.

– Any homebrew game that uses the MSU Audio programming of the SD2SNES [rom cart](/romcarts) will not work with the digital audio mod.  All other games work and sound perfectly via the SD2SNES, but (much like the SGB), MSU audio is created in the SD2SNES cart, not the SNES, bypassing the internal sound chips.

Other then that, as far as I know, there are no other game compatibility problems, but PLEASE NOTE:  This digital audio mod is not compatible with many stereo receivers.  I’ve been lucky and have had great success, however many other people have problems with their setups.

## Tools / Parts Needed

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

Next, completely disassemble the SNES and remove the motherboard.  You’ll also need to remove the heatsink and expose the RF module:
![](https://cdn.retrorgb.com/images/1CHIPDigitalAudio02.jpg)

Now, turn the motherboard over and locate the 4 pins for the RF module.  You’ll need to de-solder all 4; I recommend using a cheap desoldering iron:
![](https://cdn.retrorgb.com/images/1CHIPDigitalAudio03.jpg)

Next, use an x-acto knife or sharp blade to cut the RF hole into a square.  Do **_not_** cut the hole any higher then it already is;  Cut down and to the sides.  If you make the hole too high [like this](https://cdn.retrorgb.com/images/SNESMiniDigitalAudio04.jpg), you won’t be able to fit the optical audio cable.  Also, you’ll want to make it snug; *just* big enough for the SPDIF connector to fit through (I find using a file helps for those last little adjustments). 
![](https://cdn.retrorgb.com/images/1CHIPDigitalAudio04.jpg)

Make sure to mount the board with the chip & solder pads facing up!  After it fits, use super glue or epoxy around the inside edges of the digital audio connector to secure it in place.

Next, you’ll want to connect power and ground.  I find it easiest to use power from the RF module, since it’s right below the digital audio board (please ignore the other wires in this pic…I forgot to take one before attaching the other wires, which is the next step):
![](https://cdn.retrorgb.com/images/1CHIPDigitalAudio05.jpg)

Next, you’ll want to find the audio chip and solder wires to the following 5 points on the motherboard (if your system is not a 1CHIP, either solder directly to the S-APU chip, or [reference this page](/consoles/snes/digital-audio/others.md) for other suggestions).  Each of the numbered points corresponds to the numbered pad on the digital audio board.  I strongly recommend using these points instead of soldering directly to the chip, as they’re much easier to solder to.  I found it easiest to run the wire through the holes and solder on the bottom of the motherboard, then cut the excess wire that was sticking out of the bottom.  That’s just a personal preference, but either way, using flux will make the installation a bit easier.  Click on the picture for the full-sized image:
[![](https://cdn.retrorgb.com/images/S-APUDigitalAudioSolderPoints.jpg)](https://cdn.retrorgb.com/images/S-APUDigitalAudioSolderPoints-Large.jpg)

The installation should similar to this.  I suggest testing the digital audio board now, while the case is still open:
![](https://cdn.retrorgb.com/images/1CHIPDigitalAudio06.jpg)

Now you can re-assemble the heatsink and install the motherboard back into the case. Since the RF module is no longer attached, there will be two extra screws after re-assembling.
![](https://cdn.retrorgb.com/images/1CHIPDigitalAudio07.jpg)

A quick tip:  If your cartridge release lever isn’t as firm as it used to be, you can simply move the spring slightly over.  I find moving it just this tiny bit makes a huge difference:
![](https://cdn.retrorgb.com/images/SNESCartridgeSpring.jpg)

That’s it!  Once again, please remember that this audio mod will not work with all stereo receivers, so if you have problems with your system, make sure to troubleshoot the receiver, as well as the system.
![](https://cdn.retrorgb.com/images/1CHIPDigitalAudio08.jpg)

If you’re done, feel free to go back to the [main SNES page](/consoles/snes/README.md).  If you’d like info on mods for other systems, head to the [Getting RGB From Each System page](consoles/README.md)or check out [the main page](/README.md) for more retro-awesomeness.
