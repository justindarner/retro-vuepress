---
title: SNES Digital Audio
sidebar: true
---
# SNES SPDIF Digital Audio Board

This page shows how to get digital audio from a Super Nintendo console, using a custom-made digital audio board. It can be installed on all SNES systems, but PLEASE NOTE: This digital audio mod is not compatible with some stereo receivers. I’ve been lucky and have had great success, however some people have problems with their setups. 

[![](https://cdn.retrorgb.com/images/SNESDigitalAudioBoardv2.jpg)](http://store.retrofixes.com/products/snes-spdif-digital-audio-upgrade-board?rfsn=255623.6664d)

## Installation Guides
You can solder the digital audio connections directly to the SNES’ audio chip, however these guides will show much easier installation methods for each system:

**[SNES Mini Installation](/consoles/snes/mini/digital-audio)**

[This shows easy installation and mounting for SNES Mini systems.](/consoles/snes/mini/digital-audio)

**[SNES 1CHIP Installation](/consoles/snes/1chip/digital-audio)**

[This guide has been tested on all models of SNES 1CHIP systems: 1CHIP-01, 1CHIP-2 and 1CHIP-03](/consoles/snes/1chip/digital-audio)

**[SNES S-DSP Installation](/consoles/snes/digital-audio/installation)**

[Older SNES systems have a separate audio module that’s tricky to solder to. This page tries to make the installation a tiny bit easier, but it’s still the hardest SNES version to install the mod, as it requires soldering directly to pins on the chip.](/consoles/snes/digital-audio/installation)

**[SNES 1CHIP Installation](/consoles/snes/1chip/digital-audio)**

[This guide has been tested on all models of SNES 1CHIP systems: 1CHIP-01, 1CHIP-2 and 1CHIP-03](/consoles/snes/1chip/digital-audio)

The digital audio boards can be soldered directly to the pins of the SNES audio chips, however it’s extremely hard for people without SMD soldering experience. If you’re comfortable doing that, you can connect the numbered pads on the digital audio board to the following pins on the corresponding chips, as printed on the PCB itself:

Pad:

1

2

3

4

5

Click each pic for full-sized

S-DSP:

47

43

44

42

78

[![](https://cdn.retrorgb.com/images/S-DSP-Small.jpg)](https://cdn.retrorgb.com/images/S-DSP.jpg)

S-APU:

16

94

93

92

52
[![](https://cdn.retrorgb.com/images/S-APU-Small.jpg)](https://cdn.retrorgb.com/images/S-APU.jpg)
 

 

![](https://cdn.retrorgb.com/images/SNESDigitalAudioBoardv2.jpg)

There are two types of audio that are not compatible with the digital audio mod:

– Super Game Boy adapters create their own audio, so Game Boy audio can only be passed through the analog-out of the SNES, not digital.

– Any homebrew game that uses the MSU Audio programming of the SD2SNES [rom cart](/romcarts) will not work with the digital audio mod. All other games work and sound perfectly via the SD2SNES, but (much like the SGB), MSU audio is created in the SD2SNES cart, not the SNES, bypassing the internal sound chips.
 

Once again, please keep in mind that not all audio devices will be compatible with the signal coming from this board. I’ve had a lot of success with all of the stereo’s I’ve tried, however many people have issues with their systems.



Feel free to go back to the [main SNES page](/consoles/snes).  If you’d like info on mods for other systems, head to the [Getting RGB From Each System page](consoles/)or check out [the main page](/) for more retro-awesomeness.