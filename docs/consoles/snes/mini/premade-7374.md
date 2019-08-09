---
title: SNES Mini Pre-made 7314
---

**SNES Mini RGB – Pre-made THS 7314 Amp**

![](https://cdn.retrorgb.com/images/SNESMiniRGBPage01.jpg)

This page shows how to use a pre-made RGB Amp to bypass the SNES Mini’s internal RGB amp and uses one based off a THS 7314. The amp you purcahse may not look exactly like the one pictured, however as long as the amp is a THS 7314, the installation is the same.  Also, if you’d like this mod performed for you, you can hire the following services:

> [Retrofixes SNES Mini RGB Mod – USA](http://store.retrofixes.com)
>
> [Voultar’s SNES Mini RGB Mod – USA](http://voultar.com)

**Tools / Parts Needed:**
You’ll need a few tools for this mod (more info on the tools can be found in [the tools section](/tools)):

> – [Pre-Made THS 7314 Amplifier Board](http://store.retrofixes.com/collections/upgrade-diy-kits/products/snes-jr-n64-rgb-upgrade-kit?rfsn=255623.6664d)
> – Basic soldering skills.
> – [SNES RGB cable](/consoles/snes/csync.md).
> – The [4.5mm tool](http://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_ff3=9&pub=5575041517&toolid=10001&campid=5337251560&customid=&icep_uq=4.5MM+Game+Tool&icep_sellerId=&icep_ex_kw=&icep_sortBy=12&icep_catId=&icep_minPrice=&icep_maxPrice=&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg) that opens the SNES
> – Philips head screwdriver
> – Soldering iron / solder
> – Thin gauge wire
> – Three 1.2k resistors, the lowest tolerance possible:  [http://www.mouser.com/ProductDetail/KOA-Speer/MF1-4DCT52R1201F](http://www.mouser.com/ProductDetail/KOA-Speer/MF1-4DCT52R1201F)

**RGB Mod:**

> – Open the console and remove the board (pretty much just unscrew everything):
> ![](https://cdn.retrorgb.com/images/SNESMiniRGBPage00.jpg)
>
> – After opening the SNES Mini, look for the S-RGB chip between the cartridge slot and the heat sink:
> ![](https://cdn.retrorgb.com/images/SNESMiniCsync01.jpg)
>
> – Remove the heatsink and solder a wire to pin 18, which is csync:
> ![](https://cdn.retrorgb.com/images/SNESMiniCsync02.jpg)
>
> – Run that wire through the hole near the heatsink, but make sure when you replace the heatsink that it is not pinched:
> ![](https://cdn.retrorgb.com/images/SNESMiniCsync03.jpg)
>
> – Trim any slack from the wire and solder the cable to pin 3 of the multi-out:
> ![](https://cdn.retrorgb.com/images/SNESMiniCsync04.jpg)
>
> – Prepare the pre-made THS7314 amp. The bottom of the amp board has no components on it, however I always like to add a piece of non-conductive tape to the bottom, just to be sure. If nothing else, it won’t hurt:
> ![](https://cdn.retrorgb.com/images/SNESMiniRGBPage02.jpg)
>
> – Next, solder the amp to the multi-out, making sure it slides over all the pins (note the csync cable, which was installed before the mod):
> ![](https://cdn.retrorgb.com/images/SNESMiniRGBPage03.jpg)
>
> – I’ve actually seen a few SNES Mini’s come from the factory with the two ground pins soldered together. If your system has this, you could either cut the solder in the middle (be *really* careful not to damage the pins), or use a solder-removing method (de-soldering iron, solder wick, etc):
> ![](https://cdn.retrorgb.com/images/SNESMiniRGBPage04.jpg)
>
> – Next, locate the following spot on the motherboard:
> ![](https://cdn.retrorgb.com/images/SNESMiniRGBPage06.jpg)
>
> – Solder thin wire to the following points to get RGB. Make sure the stripped wire isn’t too long, as it will stick out the top of the motherboard:
> ![](https://cdn.retrorgb.com/images/SNESMiniRGBPage07.jpg)
>
> – Cut the wires to length and solder them to the corresponding RGB pads on the amp. Your installation should now look like this (click for full-size):
> [![](https://cdn.retrorgb.com/images/SNESMiniRGBPage08.jpg)](https://cdn.retrorgb.com/images/SNESMiniRGBPage08-large.jpg)
>
> – Then, solder 1.2k Ohm resistors to the same places you’d get RGB from the board.  Make sure to solder the RGB wires between the resistors and the board.
>
> – Finally, solder the other side of all three resistors to ground (click for full-sized):
> [![](https://cdn.retrorgb.com/images/SNESMiniRGBPage09.jpg)](https://cdn.retrorgb.com/images/SNESMiniRGBPage09-large.jpg)
>
> – I *strongly* recommend using shrink tubing on each resistor! I used tape to cover the components, but only because it made the above picture easier to see. For your installation it would be much better to shrink tube each one (thanks to John for his pic):
> ![](https://cdn.retrorgb.com/images/SNESMiniRGBShrinkTube.jpg)
>
> – For beginners, it must seem strange to tie all the video lines to ground, but as long as the video lines are on the motherboard-side of the resistor, it will work to properly adjust the input brightness to the exact level the SNES Mini should be outputting.
>
> A note for SFC Jr owners: I suggest first trying the mod without the brightness-attenuating resistors. I’ve only personally tested one SFC Jr, but found that using the same resistors as the SNES Mini worked best. I’ve had other people report that no resistors at all is the best choice and Alex (aka [ArcadeTV](https://twitter.com/arcadetv)) said he needed these to get the proper output from his SFC Jr:
>
> [http://www.digikey.com/product-detail/en/MRS25000C7509FRP00/PPC75.0ZCT-ND/595092](http://www.digikey.com/product-detail/en/MRS25000C7509FRP00/PPC75.0ZCT-ND/595092)
>
> If you’d like more detailed, technical information, here’s a link to the assembler games thread explaining all the details:
>
> [http://www.assemblergames.com/forums/showthread.php?53053-SNES-Mini-RGB-Measurements](https://assemblergames.com/threads/snes-mini-rgb-measurements.53053/)

That’s it…not too hard of a mod and the picture quality is amazing!!! Check out the difference from an average (non-1CHIP) SNES 1 to a SNES Mini (there are many more pictures on the [SNES Version Compare page](/consoles/snes/version.md)):
![](https://cdn.retrorgb.com/images/SNS-CPU-GPM-02vsSNESMini.png)

When you’re done, feel free to go back to the [main SNES page](/consoles/snes/README.md).  If you’d like info on mods for other systems, head to the [Getting RGB From Each System page](consoles/README.md)or check out [the main page](/README.md) for more retro-awesomeness.
