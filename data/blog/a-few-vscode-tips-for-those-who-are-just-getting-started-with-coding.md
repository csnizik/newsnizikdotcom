---
tags: ['javascript', 'html', 'css', 'basics', 'vscode', 'puzzles']
draft: false
date: 2021-02-10T04:05:22.939Z
summary: One of the classes I'm teaching right now is an introductory CSS/HTML/JavaScript class. I feel it's my challenge with these code newbies to help them become addicted to coding... and to do that, they need to understand how their code editor works.
title: A few VSCode tips for those who are just getting started with coding
---

_One of the classes I'm teaching right now is an introductory CSS/HTML/JavaScript class. I feel it's my challenge with these code newbies to help them become addicted to coding... and to do that, they need to understand how their code editor works. Otherwise, I find that some newbies get annoyed when VSCode (or Atom, or Sublime, etc.) keeps interrupting their typing with suggestions and auto-completion. But rather than be bothered by it, I want then to realize that the software can actually help them with what they are trying to do._

By now hopefully you've had a chance to install Visual Studio Code on your machine. If you haven't, the instructions are pretty straightforward. If you get stuck on anything, please ping me either on the forum or on Slack.

VSCode is pretty much the most popular code editor in the industry right now... and it's free, so what's not to like?

I sometimes hear new programmers say that they would rather just use plain old Notepad or something that doesn't have all of the hints and auto-completion features that come with VSCode. And while it's true that you could do all of this in Notepad, you will definitely want to get used to using a real code editor.

The first thing most people want to do with VSCode is pick a unique color theme. Out of the box, it comes with a few light and dark themes. Hit ctrl-K then ctrl-T (or go to the File menu > Settings > Color theme. This will show you the themes you have to select from. You can also add themes... there are oodles of them. Right now I'm using one called Andromeda Colorizer... lots of bright colors on a dark background.

![Andromeda Colorizer theme on VSCode](/assets/ksnip_20210209-195655.png)

Once you have your theme set, here are some Extensions that I think you'll like:

**Prettier Code Formatter** - This will give you consistent formatting in your files, and you can set it so that it formats your code every time you save a file. To set that up, after you have installed and enabled Prettier, go to File > Preferences > Settings. In the search field at the top, type "formatter" and make sure these two settings are selected: "Editor: Default Formatter" should be set to "esbenp.prettier-vscode"; and "Editor: Format on Save" should be checked.

![Settings for Prettier](/assets/ksnip_20210209-200141.png)

**Bracket Pair Colorizer** - this is a super simple extension; when you select an opening or closing HTML tag, it gets highlighted with a light grey, and its corresponding tag gets highlighted also. Very helpful when you have a lot of nested tags and you want to see which ones go together.

![Bracket Pair Colorizer](/assets/ksnip_20210209-214336.png)

**Indenticator** - puts a highlighted line to show all of the code that is at a specific indent level. Again, helpful when you have a lot of nested code at different levels. (Read through the documentation on the title screen for Indenticator for some suggestions on how to tweak its settings. You may or may not want all of the features that it has available.)

![Indenticator](/assets/ksnip_20210209-215727.png)

**Live Server** - Gives you the ability to see your changes in a browser in real time

**Live Share** - Allows you to share your VSCode with others. We will use it some in our Saturday workshops.

Also, here are a couple of settings that you should set. Open File > Preferences > Settings and search "word wrap"; set "Editor: Word Wrap" to "On". Next, search your settings for "Breadcrumbs" and enable them. While you're still in Settings, search for "minimap". Minimap is the feature that shows a smaller thumbnail view of your file on the right side of your editor. Eventually, you may want to enable that feature, especially when you're writing files that are very long. But for now, you probably want to turn it off... especially if you're using a laptop or a small screen. The minimap tends to get in the way.

![Minimap](/assets/ksnip_20210209-220032.png)

There are a lot of other extensions that I find useful, but for now I think these will be helpful in getting you started.
