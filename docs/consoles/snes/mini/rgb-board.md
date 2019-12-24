---
title: SNES Mini DIY RGB Mod
---

**SNES Mini RGB Mod – Onboard S-RGB Amp**

\*\*
\*\*This guide shows you how to enable RGB output on a SNES Mini / Jr using its built-in RGB amp. Ifyou’d like this mod performed for you, you can hire the following services:

**
Modding Services:**

> [Retrofixes SNES Mini RGB Mod – USA](http://store.retrofixes.com)
>
> [Voultar’s SNES Mini RGB Mod – USA](http://voultar.com)

**Parts required:**

> You’ll need a few tools for this mod (more info on the tools can be found in [the tools section](/tools)):
> – Soldering skills! 
> – [SNES RGB cable](/consoles/snes/csync.md).
> – The [4.5mm tool](http://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_ff3=9&pub=5575041517&toolid=10001&campid=5337251560&customid=&icep_uq=4.5MM+Game+Tool&icep_sellerId=&icep_ex_kw=&icep_sortBy=12&icep_catId=&icep_minPrice=&icep_maxPrice=&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg) that opens the SNES
> – Philips head screwdriver
> – Soldering iron / solder
> – Thin gauge wire
> – Flux (or a flux pen) will make installation easier, but is not necessary.
> – Three 75 Ohm resistors, the lowest tolerance possible ([also available from Digikey](http://www.digikey.com/product-detail/en/MRS25000C7509FRP00/PPC75.0ZCT-ND/595092)):
> [http://www.mouser.com/ProductDetail/Vishay/MRS25000C7509FRP00](http://www.mouser.com/ProductDetail/Vishay/MRS25000C7509FRP00)
> – Three 1.2k resistors, the lowest tolerance possible (not available from Digikey):
> [http://www.mouser.com/ProductDetail/KOA-Speer/MF1-4DCT52R1201F](http://www.mouser.com/ProductDetail/KOA-Speer/MF1-4DCT52R1201F)

**RGB Mod:
**Themod is pretty easy, however soldering to the S-RGB chip can be extremely challenging.  I usually recommend people use a [pre-made amp](/consoles/snes/mini/rgb.md) for ease of installation, however if you’re willing to solder to the small points this will work perfectly:

> – Remove the 4 screws holding the plastic cover on using the 4.5mm tool. Then remove the 7 screws holding the motherboard in place (so, basically, just unbolt everything). Finally, unbolt the three screws holding the heatsink and find the S-RGB chip:
> ![](https://cdn.retrorgb.com/images/SNESMiniRGBModPage02.jpg)
>
> – Solder four wires to the pins on the “S-RGB A” chip shown below. A few tips: These are extremely small pins and very difficult for people who aren’t experienced at soldering to work on. Use a soldering tip that’s extremely thin, as well as very thin solder. Make sure to “tin” each pin and each wire before trying to solder them together:
> **![](https://cdn.retrorgb.com/images/SNESMiniRGBModPage03.jpg)**
>
> – I like to use heatshrink tubing to keep the wires together and also protect them from touching any other components. Then, run the cables through the hole pictured below on the right:
> ![](https://cdn.retrorgb.com/images/SNESMiniRGBModPage04-1.jpg)
>
> – Then, carefully replace the heatsink. I usually run the wires under the heatsink, since there’s enough room; They touch, but aren’t being crushed:
> ![](https://cdn.retrorgb.com/images/SNESMiniRGBModPage04.jpg)
>
> – Cut the wires to size, add the 75 Ohm resistors to the RGB lines, then solder them to the corresponding pins on the multi-out.
> I’ve seen much cleaner installations then this one, where people have the resistors about midway through the board, with a bit of wire on each side, covered in heatshrink tubing.  I’m showing this method, as it’s easier to show the mounting points, however you might find soldering the resistors directly to the multi-out harder then just wire.  As long as the connection is solid (no cold solder joints), no components are touching and the mounting hole is clear, it shouldn’t matter.  Please _make sure_ the mounting hole is clear, otherwise the resistor or wire could get crushed when you mount it back in the case (click for full-sized picture):
> [![](https://cdn.retrorgb.com/images/SNESMiniRGBModPage04-2.jpg)](https://cdn.retrorgb.com/images/SNESMini3WireRGB.jpg)
>
> – Next you need to add resistors to the RGB inputs that adjust the brightness.  The mod will work without these resistors, but I strongly recommend you add them (and it’s really easy).  Simply solder three 1.2k resistors between the three holes located directly under pin 10 of the cartridge port and a ground point (flux is a big help for this).  The picture below shows non-conductive tape covering the components under the resistor, however using heatshrink tubing is a better solution overall.  AFTER YOU’RE DONE SOLDERING, FLIP THE MOTHERBOARD OVER AND _MAKE SURE_ TO TRIM THE EXTRA LENGTH!!!!  It’s very common to have these touch something on the other side, so make sure you check the length!   Click the picture below for a full-sized example:
> [![](https://cdn.retrorgb.com/images/SNESMiniRGBModPage06.jpg)](https://cdn.retrorgb.com/images/SNESMini3WireRGBMod.jpg)

**Results:**

> That’s it! A pretty easy mod and the picture quality is amazing!!! Check out the difference from an average SNES 1 to a SNES Mini (there are many more pictures on the [SNES Version Compare page](/consoles/snes/version.md)):
> ![](https://cdn.retrorgb.com/images/SNS-CPU-GPM-02vsSNESMini.png)

When you’re done, feel free to go back to the [main SNES page](/consoles/snes/README.md).  If you’d like info on mods for other systems, head to the [Getting RGB From Each System page](consoles/README.md)or check out [the main page](/README.md) for more retro-awesomeness.
