---
title: SNES RGB Cables / csync
sidebar: true
---
# Super Nintendo / Super Famicom

RGB SCART Cables and sync information**

All original (large) versions of the Super Nintendo and Super Famicom (NTSC & PAL) can output RGB without a modification, however each region requires a different cable.  The SNES Mini / Famicom Jr. require a modification before an RGB cable can be used (see [the SNES Mini page](/consoles/snes/mini/rgb) for more info). Also, if you’re not sure what csync is, I strongly recommend reading the [sync page](/info/sync) before continuing.  Here are your cable choices:

## NTSC Super Nintendo / Super Famicom systems
(large, original version) can all output csync without a modification, except the very rare 1CHIP-03. If you have a 1CHIP-03, either use luma as sync, or see the instructions below to connect csync:

[**Super Nintendo SNES RGB SCART cable (NTSC)**](https://www.retrogamingcables.co.uk/packapunch-super-nintendo-entertainment-system-snes-n64-rgb-av-scart-cable-ntsc-gold-scart?tracking=5543fb4c077bb) (UK Seller)

[**Super Nintendo SNES RGB SCART cable (NTSC)**](https://retro-access.com/collections/super-nintendo/products/super-nintendo-stereo-rgb-scart-lead-snes-csync-full-shield-grounded-cable?aff=3)  (US Seller)

[**HD Retrovision SNES Cable**](https://castlemaniagames.com/products/hd-retrovision-snes-ypbpr-component-cable-for-the-super-nintendo?ref=w9_zngec1o_) – A high quality component video solution that’s RGB-quality


## PAL Super Nintendo systems
[output 12v on the csync pin](http://gamesx.com/wiki/doku.php?id=av:nintendomultiav) and if you tried to use an NTSC / csync cable on a PAL system, you could damage your equipment!  Also, PAL cables require different components to send the proper signals to PAL displays, so you should never use an NTSC cable on a PAL system (or vice versa).

In most scenarios*, the best RGB cables to use with PAL SNES systems are either the basic-shielded cables that get sync from the luma pin, or fully shieleded that get sync from cvbs (composite video):

[**Super Nintendo SNES RGB SCART cable (PAL)**](https://www.retrogamingcables.co.uk/nintendo/super-nintendo/SUPER-NINTENDO-PAL-NTSC-PACKAPUNCH-RGB-SCART-CABLES/packapunch-pro-super-nintendo-entertainment-system-snes-rgb-av-scart-cable-pal?tracking=5543fb4c077bb)  (UK Seller)

[**Super Nintendo SNES RGB SCART cable (PAL)**](https://retro-access.com/collections/super-nintendo/products/super-nintendo-pal-version-rgb-scart-lead-shielded-grounded-cable-cord-snes?aff=3)  (US Seller)

*If your display, processor or switch requires [csync](/info/sync), you’ll either need to include a sync stripper in the cable, or make sure one is in your setup chain (such as the ). Once again, please make sure to never use use an NTSC cable in a PAL system!

 

## SNES Mini / Famicom Jr. systems
Modifications are required for both csync output and RGB output (please see [the SNES Mini RGB mod page](/consoles/snes/mini/rgb) for RGB info).  You can purchase an RGB cable that get sync from composite video (same cable as listed above), but I ***strongly*** recommend you connect csync instead:

> – After opening the SNES Mini, look for the S-RGB chip between the cartridge slot and the heat sink:
> ![](https://cdn.retrorgb.com/images/SNESMiniCsync01.jpg)
> 
> – Remove the heatsink and solder a wire to pin 18:
> ![](https://cdn.retrorgb.com/images/SNESMiniCsync02.jpg)
> 
> – Run that wire through the hole near the heatsink, but make sure when you replace the heatsink that it is not pinched:
> ![](https://cdn.retrorgb.com/images/SNESMiniCsync03.jpg)
> 
> – Trim any slack from the wire and solder the cable to pin 3 of the multi-out:
> ![](https://cdn.retrorgb.com/images/SNESMiniCsync04.jpg)
> 
> 

## SNES 1CHIP-03

SNES 1CHIP-03 systems are the only original NTSC SNES consoles that don’t output csync to the multi-out, as they’re missing a few components that are found on the other 1CHIP revisions (click for full-sized):
[![](https://cdn.retrorgb.com/images/1CHIP-01vs1CHIP-03csyncComponents-small.jpg)](https://cdn.retrorgb.com/images/1CHIP-01vs1CHIP-03csyncComponents.jpg)

You can purchase all of the “missing” components as a kit here:  [https://console5.com/store/super-nintendo-sns-cpu-1chip-03-csync-restore-repair-kit-c-sync.html](https://console5.com/store/super-nintendo-sns-cpu-1chip-03-csync-restore-repair-kit-c-sync.html)

Console5 also lists the individual components, if you’d prefer to buy them separately:  [https://console5.com/wiki/SNES#1CHIP-03_CSYNC_Restore](https://console5.com/wiki/SNES#1CHIP-03_CSYNC_Restore)

I’ve seen people restore csync on these consoles by using a simple jumper wire shown below, however that does *not* seem to be the best solution, as it’s missing all the circuitry shown above.  Click the image below for a full-sized view and for the exact location, but once again, I STRONGLY recommend replacing all the components shown above.  This is only for NTSC systems, not PAL:
[![](https://cdn.retrorgb.com/images/1CHIP-03-csync.jpg)](https://cdn.retrorgb.com/images/1CHIP-03-csync-Large.jpg)

## DIY Cables

The SNES multi-out cable connector is very hard to find on its own.  If you’d like to try and make your own SNES cables, you could buy a cheap SNES RGB cable and use the multi-out end.  As an FYI, these cables are *terrible* quality and will produce a very bad image, but just the connector and SCART head should be fine:  [http://www.play-asia.com/rgb-cable/13/7064](http://www.play-asia.com/rgb-cable/13/7064)


That’s it! Check out [the SNES Mini RGB mod](/consoles/snes/csync), or feel free to go back to the [main SNES page](/consoles/snes).  If you’d like info on mods for other systems, head to the [Getting RGB From Each System page](consoles/)or check out [the main page](/) for more retro-awesomeness.