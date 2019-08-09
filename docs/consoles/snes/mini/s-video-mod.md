---
title: SNES Mini S-Video Mod
---

**SNES Mini S-Video Mod**

![](https://cdn.retrorgb.com/images/SNESS-Video01.jpg)

This page shows how to add S-Video output to a SNES Mini / Jr. system.  I’ve seen this done a few different ways, but I believe this one outputs the proper S-Video signal.  Its similar to the [Console5 mod](http://console5.com/wiki/SNES#S-Video_Output_for_SNES_2_.2F_Junior_.28SNN-CPU.29), but I prefer to keep all the components together.

Also, if you’d like this mod performed for you, you can hire the following services:

> [Retrofixes SNES Mini RGB Mod – USA](http://store.retrofixes.com)
>
> [Voultar’s SNES Mini RGB Mod – USA](http://voultar.com)

**Tools / Parts Needed:**
You’ll need a few tools for this mod (more info on the tools can be found in [the tools section](/tools)):

> – Soldering skills! 
> – The [4.5mm tool](http://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_ff3=9&pub=5575041517&toolid=10001&campid=5337251560&customid=&icep_uq=4.5MM+Game+Tool&icep_sellerId=&icep_ex_kw=&icep_sortBy=12&icep_catId=&icep_minPrice=&icep_maxPrice=&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg) that opens the SNES
> – Philips head screwdriver
> – Soldering iron / solder
> – Thin gauge wire
> – Heat shrink tubing
> – Two 75 Ohm resistors, the lowest tolerance possible:
> [http://www.digikey.com/product-detail/en/MRS25000C7509FRP00/PPC75.0ZCT-ND/595092](http://www.digikey.com/product-detail/en/MRS25000C7509FRP00/PPC75.0ZCT-ND/595092)
> – One 0.1uf Capacitor: 
> [http://www.digikey.com/product-detail/en/C320C104J5R5TA7301/399-9867-1-ND/3726105](http://www.digikey.com/product-detail/en/C320C104J5R5TA7301/399-9867-1-ND/3726105)
> – One 220uf Capacitor:
> [http://www.digikey.com/product-detail/en/RR71A221MDN1/493-3712-ND/2207248](http://www.digikey.com/product-detail/en/RR71A221MDN1/493-3712-ND/2207248)

**S-Video Mod:**

> – Open the console by removing the 4 screws on the bottom of the case (using the 4mm SNES tool) and remove the 7 philips screws from the board.  Then remove the heat shield, held in by three screws:
> ![](https://cdn.retrorgb.com/images/SNESMiniRGB-02.jpg)
>
> – Trim the negative end of the 220uf capacitor (usually the side marked with the stripe) and also trim an end of one the resistors to the same length.  Add solder to each end, then solder them together.  Do the same with the 0.1uf capacitor, but it doesn’t matter which end you use.  If both components are properly tinned, it should be an extremely tight connection and they will not come apart.  Then add wires and heat shrink tubing to the resistor side.  The heat shrink tubing is important, as it will prevent the components from shorting out against any exposed metal.
> ![](https://cdn.retrorgb.com/images/SNESS-Video04.jpg)
>
> – Trim and bend the other ends of the capacitors as shown, then add solder to each end of the capacitor and each of the S-RGB pins shown in the picture below.  The 220uf capacitor connects to luma and the 0.1uf capacitor connects to chroma.  Make **_SURE_** the chroma capacitor is bent over the chip, or it will touch the heat shield when it is re-connected.  Also, if you ever plan on performing an RGB Mod to your SNES, this is the perfect time to add the csync wire to the multi-out.  It’s not required for the S-Video mod, but since you’re already soldering to the S-RGB chip, you might as well add it now.  Click on the picture for the full-sized view.
> [![](https://cdn.retrorgb.com/images/SNESS-Video02-Small.jpg)](https://cdn.retrorgb.com/images/SNESS-Video02.jpg)
>
> – Replace the heat shield and carefully run the cables around it, making sure the cables aren’t pinched and nothing is touching the heat shield:
> ![](https://cdn.retrorgb.com/images/SNESS-Video01.jpg)
>
> – Run the cables through the hole shown in the picture below (click for full-sized to show the entry hole), then trim the cables to their proper length.  I added some heat shrink tubing to keep them together.  Make sure that the wires are away from the mounting hole, then solder them to the pins on the multi-out shown below.  Also, as stated above, the white wire is csync, which is not needed for this mod, but good to have in case you ever plan on adding an RGB mod.
> [![](https://cdn.retrorgb.com/images/SNESS-Video03-Small.jpg)](https://cdn.retrorgb.com/images/SNESS-Video03.jpg)

That’s it!  This will enable excellent quality S-Video output from your SNES Mini.  It’s not as good as [RGB](/consoles/snes/mini/rgb), but may be a good choice for your setup.

Feel free to go back to the [main SNES page](/consoles/snes/README.md).  If you’d like info on mods for other systems, head to the [Getting RGB From Each System page](consoles/README.md)or check out [the main page](/README.md) for more retro-awesomeness.
