---
title: THS7314/16
---

**THS7314 / THS7316 RGB Amp**

The Texas Instruments THS7314 and THS7316 chips are SDTV video amplifiers designed specifically for analog video signals.  They are commonly used as an RGB amplifier in retro game consoles.

![](https://cdn.retrorgb.com/images/THS7314.jpg)

Both the 7314 and 7316 are virtually identical, except for the analog video “low-pass” filter.  In almost all cases, I’d recommend the THS7316 chip since it does not use the same LPF\*; Analog displays don’t need one and almost every single digital solution will already include some kind of filtering.  As an FYI, adding a low-pass filter to video isn’t a bad thing, but you loose detail when multiple filters are stacked on top of each other.  For a detailed description, [check out Voultar’s post on Shmups](http://shmups.system11.org/viewtopic.php?p=1241928#p1241928).  Here are the official pages for both amps – The datasheets are listed under the “technical documents” tab:
[http://www.ti.com/product/ths7314](http://www.ti.com/product/ths7314)
[http://www.ti.com/product/ths7316](http://www.ti.com/product/ths7316)

\*The 7316 actually does have a LFP, but it’s tuned at a higher frequency that doesn’t effect SDTV singals, so when used with classic game consoles, it’s as if it’s not even there.

**
Make Your Own Amp Circuit**

> **Parts Needed**
> – Soldering skills! 
> – Soldering iron / solder (rosin core solder recommended)
> – Multimeter
> – RGB Amplifier chip:  I recommend the [THS7316](https://www.digikey.com/product-detail/en/texas-instruments/THS7316DR/296-26684-1-ND/2255104), but if you need a LPF, use the [THS7314](http://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_ff3=9&pub=5575041517&toolid=10001&campid=5337251560&customid=&icep_uq=THS7314DR&icep_sellerId=&icep_ex_kw=&icep_sortBy=12&icep_catId=&icep_minPrice=&icep_maxPrice=&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg)
> – [Circuit board to mount the RGB amp](http://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_ff3=9&pub=5575041517&toolid=10001&campid=5337251560&customid=&icep_uq=SOIC-8+to+DIP-8+PCB&icep_sellerId=&icep_ex_kw=&icep_sortBy=12&icep_catId=&icep_minPrice=&icep_maxPrice=&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg)
> – Three 75 Ohm resistors, the lowest tolerance possible:
> [http://www.digikey.com/product-detail/en/MRS25000C7509FRP00/PPC75.0ZCT-ND/595092](http://www.digikey.com/product-detail/en/MRS25000C7509FRP00/PPC75.0ZCT-ND/595092)
> – One 0.1uf Capacitor: 
> [http://www.digikey.com/product-detail/en/C320C104J5R5TA7301/399-9867-1-ND/3726105](http://www.digikey.com/product-detail/en/C320C104J5R5TA7301/399-9867-1-ND/3726105)

> **Same guide for both chips:
> **The installation of both chips is identical and while the chips in these pictures show the 7314, just follow the same procedure for the 7316. Both chips have 3 inputs/outputs, plus power and ground; The power is filtered by a capacitor and the output is regulated by 75 Ohm resistors. Using 75 Ohm resistors is important, as it provides the exact signal your display is expecting. Using resistors other than 75 Ohm could cause quality loss in the video output, among other unwanted side-effects. If you’re using one of these amps in your game console, but find the output to be too bright, check the individual mod pages for more info, or simply add resistors to the *input* side of the amp, instead of changing the output resistance.
> ![](https://cdn.retrorgb.com/images/THS14_16Compare.png)
>
> **Assembly:**
> First, start by adding solder to both the circuit board and the amp chip itself. Use your soldering iron to heat the pins/pads, then touch solder to it. Once the solder points are hot enough, the solder will melt right to it:
> ![](https://cdn.retrorgb.com/images/THS7314-03.jpg)
>
> Next, solder the THS7314 to the circuit board, but **note the alignment of the vertical line on the chip and the square ground pin of the circuit board (see the top pic)!!!**  Since you tinned both the pads and pins, you should be able to place the amp on top of the circuit board and just touch the points with the tip of the soldering gun.  If you applied solder correctly, they’ll bond perfectly.  This can be very tricky the first time you try it and I recommend using pliers or tweezers to hold the amp and circuit board.  One of those soldering kits with the magnifying glass and alligator clips could come in handy, but I got used to assembling them right on my desk:
> ![](https://cdn.retrorgb.com/images/THS7314-04.jpg)
>
> Next, you’ll want to use a multimeter to check your solder points.  When checking, make sure to touch the pin where it enters the chip, not near the bottom where you may accidentally be making contact with the circuit board’s pads.  Then, touch the other tester to the pad that matches it’s input (ground shown here).  If a connection isn’t made, you could try adding more solder to the joint between the pad and pin:
> ![](https://cdn.retrorgb.com/images/THS7314-05.jpg)
>
> You can use this diagram to test each of the pins and pads to make sure they line up.  You’ll want them to match the photo at the top of this page:
> ![](https://cdn.retrorgb.com/images/THS7314%20Pinout.jpg)
>
> Next, add the output resistors.  I bend the resistor so it’s close to the board and solder the top.  Then, I snip off the excess as short as possible (so the bottom of the circuit board is smooth) and add a bit more solder to the bottom:
> ![](https://cdn.retrorgb.com/images/THS7314-06.jpg)
>
> Then, add the capacitor between power and ground.  I realize this might seem strange to a beginner, as you’d normally _never_ touch power and ground together.  In this installation, the capacitor acts as a “power filter”, ensuring that the voltage running through doesn’t cause interference with the signal. 
> It may be easier to add the power and ground wires at the same time you add the capacitor, but it’s not necessary:
> ![](https://cdn.retrorgb.com/images/THS7314-07.jpg)
>
> That’s pretty much it.  The inputs on the left will pass directly through to the inputs on the right (numbered as 1-3 in the above picture).  You can use this amp to amplify pretty much any 3-channel SD video signal and even use it to amplify [sync](/info/sync) if needed (but you’d obviously only use one input/output if you were making a sync amp).

**Brightness Levels / Attenuation**

> In some cases, this circuit will look perfect without any other components (like with ), but in many other cases, the image will be slightly too bright.  In these scenarios, the best solution is to use an oscilloscope to measure the exact output and use a set of pulldown resistors.  For SNES Mini and 1CHIP, these values are already calculated and shown in their [respective](/consoles/snes/mini/diy-bypass.md)[guides](/consoles/snes/1chip/diy-ths-7314.md).

[**THS7374**](**THS7374**)

> As an FYI, there’s a newer, 4-channel revision of the chip called the 7374.  The chip also includes an additional noise filter, which can be toggled off and on.  I always recommend this filter be turned off (pin 9 to 5v [http://www.ti.com/lit/ds/symlink/ths7374.pdf](http://www.ti.com/lit/ds/symlink/ths7374.pdf)) for reasons mentioned above.  Also, please keep in mind that this chip is MUCH smaller and almost impossible to solder by hand.  As a result, it’s not a good DIY solution, but great for surface-mount boards:
> ![](https://cdn.retrorgb.com/images/THS7374%20Filter.png)

**How do they compare?**

> When going directly into a capture card that doesn’t use a filter, all three are very close to the same.  When run through a typical analog to digital filter, you start to see the sharpness differences with each.  Here’s all three, with the filter on the THS7374 turned off (click for an enlarged version.md):
> [![](https://cdn.retrorgb.com/images/THSCompare.png)](https://cdn.retrorgb.com/images/THSCompare_Large.png)

**Conclusion**

> I hope this page was able to aid with the assembly of the amp and possibly even clear up some confusion about the filters and output resistors/brightness. It’s used in many of the mods in my [Console Info & Mods page](/consoles/snes/ths-amps.md) and can be helpful in other applications as well.

If you’re finished, I invite you to go back to [the main page](/README.md) to see all the other retro-gaming awesomeness we have on this site… especially !
