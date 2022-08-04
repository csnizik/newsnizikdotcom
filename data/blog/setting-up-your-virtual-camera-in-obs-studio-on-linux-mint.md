---
tags:
  - mint
  - meet
  - obs
  - zoom
draft: false
date: 2021-03-26T18:48:12.543Z
summary: My hope is that you have found this article after having found a half dozen or so other tutorials on how to get your Virtual Camera running in OBS Studio 26 or higher on a Linux Mint 20.1 Cinnamon machine, and after following the (often conflicting) instructions on each, you still don't have your Virtual Camera running in OBS.
title: Setting up your Virtual Camera in OBS Studio on Linux Mint
---

My hope is that you have found this article after having found a half dozen or so other tutorials on how to get your Virtual Camera running in OBS Studio 26 or higher on a Linux Mint 20.1 Cinnamon machine, and after following the (often conflicting) instructions on each, you still don't have your Virtual Camera running in OBS.

I won't rehash all of the steps that those other tutorials suggested, and I also won't say that they didn't work for the person who wrote them at the time they were published. Nor will I attempt to convince you that I am an expert in either Linux or OBS Studio; I'm not. All I will say is: this is how I got my Virtual Camera running, it was very easy, and I hope it works for you.

1. Install v4l2loopback-dkms\
   `sudo apt update && sudo apt install v4l2loopback-dkms`
2. Load the v4l2loopback module\
   `sudo modprobe v4l2loopback exclusive_caps=1`
3. Install obs-studio using snap\
   `sudo snap install obs-studio`
4. Run obs-studio\
   `obs-studio`
5. The setup wizard should open and you should see an option to optimize your configuration for using the Virtual Camera. If you see that option, select it; once you get to the main OBS Studio screen, you should now see a button in the bottom right, "Start Virtual Camera". (If you don't see that option, continue searching for tutorials; I hope that I didn't waste too much of your time with this one.)

That's it! Virtual Camera should now be available in OBS. Happy streaming!
