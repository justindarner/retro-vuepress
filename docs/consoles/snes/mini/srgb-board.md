---
title: SNES Mini S-RGB Expansion Board
layout: layouts/wiki-page.njk
category: snes
section: snes mini
---
**SNES Mini S-RGB Expansion Board**

**![](https://cdn.retrorgb.com/images/VoultarSRGBboardV2.jpg)**

**
**This guide shows you how to enable RGB and S-Video output on a SNES Mini / Jr using its built-in RGB amp (the ‘S-RGB’ chip). This method requires a custom board that connects all the components.  If you plan on using the S-RGB Encoder, this is definitely the method I recommend.

**Parts required:[Voultar’s Custom S-RGB Board](http://voultar.com)**

> You’ll need a few tools for this mod (more info on the tools can be found in [the tools section](/tools)):
> – The S-RGB connection board linked above
> – Soldering skills! 
> – [SNES RGB cable](/consoles/snes/csync).
> – The [4.5mm tool](http://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_ff3=9&pub=5575041517&toolid=10001&campid=5337251560&customid=&icep_uq=4.5MM+Game+Tool&icep_sellerId=&icep_ex_kw=&icep_sortBy=12&icep_catId=&icep_minPrice=&icep_maxPrice=&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg) that opens the SNES
> – Philips head screwdriver
> – Soldering iron / solder
> – Thin gauge wire
> – Flux (or a flux pen) will make installation easier, but is not necessary.

**RGB Cable / Sync:**

> This page describes the RGB SCART cables you’d want to use with this mod: [**SNES RGB SCART Cables**](http://www.retrorgb.com/snescsync.html)

**Installation Video:
**This is a video demonstrating everything shown in this guide.  It may help in your installation:

**RGB Mod:**
Themod is pretty easy, however soldering to the S-RGB chip can be extremely challenging. I usually recommend beginners use an amp bypass mod for ease of installation, however if you’re willing to solder to the small points this will work perfectly:

> – Remove the 4 screws holding the plastic cover on using the 4.5mm tool. Then remove the 7 screws holding the motherboard in place (so, basically, just unbolt everything). Finally, unbolt the three screws holding the heatsink and find the S-RGB chip:
> ![](https://cdn.retrorgb.com/images/SNESMiniRGBModPage02.jpg)
> 
> – Solder six wires to the pins on the “S-RGB A” chip as shown below. A few tips: These are extremely small pins and very difficult for people who aren’t experienced at soldering to work on. Use a soldering tip that’s extremely thin, as well as very thin solder. Make sure to “tin” each pin and each wire before trying to solder them together.  I also like to add flux to each of the pins before tinning, as it makes soldering to them much easier:
> **![](https://cdn.retrorgb.com/images/S-RGB_RGBsYC.jpg)**
> 
> – I like to use heatshrink tubing to keep the wires together and also protect them from touching any other components. Then, I replace the heaksink and run the cables through the hole pictured below on the left:
> ![](https://cdn.retrorgb.com/images/S-RGB_WireRun.jpg)
> 
> – I suggest adding non-conductive tape to the bottom of the circuit board.  Many boards don’t need this, however it’s my opinion that since it won’t hurt anything, better safe then sorry:
> ![](https://cdn.retrorgb.com/images/SNES_Mod_Tape.jpg)
> 
> – Next, prepare to mount the circuit board over the multi-out pins.  You may notice that there’s a few larger components sticking up.  If so, it’s okay to snip them.  Also, I’ve actually seen a few SNES Mini’s come from the factory with the two ground pins soldered together. If your system has this, you could either cut the solder in the middle (be *really* careful not to damage the pins), or use a solder-removing method (de-soldering iron, solder wick, etc):
> ![](https://cdn.retrorgb.com/images/SNESMiniMultiOutInterference.jpg):
> ![](https://cdn.retrorgb.com/images/SNES_Multi-out_Component_Interference.jpg)
> 
> – Then, place the board over the multi-out connections and solder the multi-out pins to the board.  Then solder wires from the bottom RGB pads to the via’s (holes) marked below – Flux will make soldering to those holes MUCH easier (click for full-sized):
> [![](https://cdn.retrorgb.com/images/SNES_S-RGBboard_InstallPoints.jpg)](https://cdn.retrorgb.com/images/SNES_S-RGBboard_InstallPoints-Large.jpg)
> 
> 
> – Finally, cut the RGBs / YC cables to size and solder them to the corresponding pins on the board.  I prefer to use heat shrink tubing to keep them all in place:
> ![](https://cdn.retrorgb.com/images/SNES_S-RGBboard_Installed.jpg)
> 
> – Then just bolt everything back together and give it a try!

**Results:**

> A pretty easy mod and the picture quality is amazing!!! Check out the difference from an average SNES 1 to a SNES Mini (there are many more pictures on the [SNES Version Compare page](/consoles/snes/version)):
> ![](https://cdn.retrorgb.com/images/SNS-CPU-GPM-02vsSNESMini.png)

When you’re done, feel free to go back to the [main SNES page](/consoles/snes).  If you’d like info on mods for other systems, head to the [Getting RGB From Each System page](consoles/)or check out [the main page](/) for more retro-awesomeness.