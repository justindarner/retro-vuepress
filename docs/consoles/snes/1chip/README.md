---
title: SNES 1CHIP
sidebar: true
sidebarDepth: 3
---

# SNES 1CHIP Console

This page has information on Super Nintendo consoles that have the “SNS-CPU-1CHIP” motherboards, which are known for their higher quality video output.

![](https://cdn.retrorgb.com/images/1CHIPPage01.JPG)

In 1995, Nintendo released a revision to their Super Nintendo consoles that combined the system’s two video chips into one. They appropriately labeled these motherboard revisions “1CHIP”. While all of the 1CHIP revisions output RGB without a modification (only [the correct RGB SCART cable is needed](/consoles/snes/csync.md)), there are a few things you can do to enhance the performance of the console. You’ll have to start by finding a SNES with the correct motherboard though:

## Finding the 1CHIP SNES

### 1CHIP SNES

As described in the [SNES Version Compare section](/consoles/snes/version.md), the 1CHIP SNES is the best version of the original Super Nintendo system.  I list a few tricks below on how to narrow your 1CHIP search, but the only way to be 100% sure that you have a 1CHIP, is to open the console.

### What to look for

Use a [4.5MM game tool](/tools) to take the top off your SNES console.  Next to the cartridge input, you’ll see the board revision labeled “SNS1CHIP” circled in yellow in the picture below.  If you remove the metal cover plate (under the cartridge release lever), you’ll see the final verification you’d need:  The actual “1CHIP” S-CPUN chip, as well as the full motherboard revision (circled in red below).  _Any_ 1CHIP revision is good:  -01, -02 and -03.  Click for full-sized:

[![](https://cdn.retrorgb.com/images/1CHIP_small.jpg)](https://cdn.retrorgb.com/images/1CHIP.jpg)
)

### Compared to other models

**1CHIP (good):**
![](https://cdn.retrorgb.com/images/1CHIPPage01.JPG)

Others (bad):
![](https://cdn.retrorgb.com/images/1CHIPPage02.JPG)

![](https://cdn.retrorgb.com/images/1CHIPPage03.jpg)

### Other tips on how to narrow your search

North American 1CHIP consoles are found in consoles with serial numbers that start with “UN3”.  Not every “UN3” is a 1CHIP, but every 1CHIP I’ve seen (that wasn’t moved in a case swap) has a serial number such as “UN321907569”.  It’s possible serial numbers starting with “UN31” were the first to include the 1CHIP, butI’ve seen the occasional SNS-APU-01 motherboard in a case starting with that serial number, so there really is no other sure-fire way to tell, other then opening the console.

A few places have stated that [PAL 1CHIP consoles are much easier to find](https://www.button-bashers.nl/viewtopic.php?f=11&t=1834).  I haven’t been able to test this myself, but it’s been said that if you remove the expansion door on the bottom of the console and it looks like the top photo (no dots), it’s a 1CHIP.  Click for full sized:

[![](https://cdn.retrorgb.com/images/SNES1CHIPPALdots-small.jpg)](https://cdn.retrorgb.com/images/SNES1CHIPPALdots.jpg)

Superfamicom.org also lists ways to use a few game’s debug menu’s to list what chips are inside.  This is handy if you already own one of the games listed, or if you have a [ROM cart](/romcarts):  [http://superfamicom.org/console-serial-database](http://superfamicom.org/console-serial-database)

For more info, you can check SNES serial lists.  The second link also lists games with test menus:

[https://docs.google.com/spreadsheets/d/1q1H5eQYEG_evwpVmAVMAXa9UC6SAcvblr5igUnmpwRk/pub?output=html](https://docs.google.com/spreadsheets/d/1q1H5eQYEG_evwpVmAVMAXa9UC6SAcvblr5igUnmpwRk/pub?output=html)

[http://superfamicom.org/console-serial-database](http://superfamicom.org/console-serial-database)

## Brightness / Signal correction:

All 1CHIP consoles output a signal that’s too bright. This can result in an image that’s slightly washed out, or shows signs of “ringing”. In fact, it’s possible that this is a big part of the reason some people think SNES Mini’s look better then 1CHIP’s. Luckily, the fix is *extremely* easy!

– Disassemble the 1CHIP console and flip the board over.
– Locate the “R6”, “R7” and “R8” RGB via holes
– Solder three [750 Ohm resistors](http://www.digikey.com/product-detail/en/RNMF14FTC750R/S750CACT-ND/2617532) to the holes and then solder all of them to the ground point shown in the picture.  FLUX WILL MAKE THIS MUCH EASIER!!!
– Make SURE to trim any of the resistors that are sticking out the other end.
– That’s it – Click the picture for a full-sized view:
[![](https://cdn.retrorgb.com/images/1CHIPBrightnessAdjustment-small.jpg)](https://cdn.retrorgb.com/images/1CHIPBrightnessAdjustment.jpg)

## [1CHIP-03 CSYNC Fix:](snescsync.html#1chip-03)

There are three revisions of the 1CHIP motherboard: SNS-CPU-1CHIP-01, SNS-CPU-1CHIP-02 and SNS-CPU-1CHIP-03. The “03” revision does not have csync run to the multi-out. You can use these consoles without a modification, simply by using an RGB SCART cable that gets sync from luma. I’ve been able to restore csync on these consoles by using a simple jumper wire, however that doesn’t seem to be the best solution, as it’s missing circuitry found in the other 1CHIP revisions: [http://www.retrorgb.com/snescsync.html#1chip-03](http://www.retrorgb.com/snescsync.html#1chip-03)

> If you have a 1CHIP-03, you’ll want to consider using a sync-on-luma cable, restoring the entire circuit on the motherboard, or using an RGB bypass board that includes the full csync circuit.

## 1CHIP RGB Bypass

Even though the 1CHIP consoles already output high quality RGB, you still might want to bypass the onboard amp and use a different one. There are a few reasons people may want to do this, but most 1CHIP users wouldn’t need to:
**[Pre-assembled THS7374 amps:](/consoles/snes/1chip/diy-ths-7314.md)**
There are newer pre-assembled bypass boards that include the high-quality THS7374 chip, as well as a full circuit for csync. These would work with all 1CHIP revisions, but are recommended for the 1CHIP-03, since it also includes the csync circuitry

**[DIY THS7314 Amp:](/consoles/snes/1chip/diy-ths-7314.md)**

The THS7314 amp is commonly used in many modding projects, as it’s cheap and easy to assemble. It’s a good quality amp and learning how to make your own might be fun for any DIY’ers. [Click here for a guide on how to install one in a 1CHIP SNES.](/consoles/snes/1chip/diy-ths-7314.md)

**[Pre-assembled THS7314 amps:](/consoles/snes/1chip/premade-ths-7314.md)**

People have integrated the THS7314 into their own pre-made board. This guide specifically shows how to install Borti’s board, however the basic instructions will be the same for pretty much anything similar.

## Digital Audio Mod

If you’d like to add high-quality audio to your 1CHIP console, you can install a SPDIF board. Tons of information, installation guides and links to purchase are on this page: [http://www.retrorgb.com/snes1chipdigitalaudio.html](http://www.retrorgb.com/snes1chipdigitalaudio.html)

## Other Tips / Mods / Vertical Line

There are other mods that can be done to all revision SNES consoles, including the 1CHIP’s. More information can be found here:
[http://www.retrorgb.com/snestips.html](http://www.retrorgb.com/snestips.html)
[http://www.retrorgb.com/snesverticalline.html](http://www.retrorgb.com/snesverticalline.html)

Feel free to go back to the [main SNES page](/consoles/snes/README.md).  If you’d like info on mods for other systems, head to the [Getting RGB From Each System page](consoles/README.md)or check out [the main page](/README.md) for more retro-awesomeness.
