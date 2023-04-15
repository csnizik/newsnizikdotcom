---
title: Building Your Own Custom Module in Drupal, Part One
subtitle: Getting started with a module that inserts copyright symbols into text
date: '2023-04-09'
tags: ['drupal']
draft: false
summary: One of the best parts about Drupal is the ease with which you can build your own custom functionality. If you find yourself with a custom need on your Drupal site and you can't find a contributed module that is the perfect-fitting round peg for your site's round hole, don't waste time trying to shove it in and make it fit. Roll your own; it's not that difficult if you know the important steps.
images: []
layout: PostLayout
canonicalUrl:
---

One of the best parts about Drupal is the ease with which you can build your own custom functionality. If you find yourself with a custom need on your Drupal site and you can't find a contributed module that is the perfect-fitting round peg for your site's round hole, don't waste time trying to shove it in and make it fit. Roll your own; it's not that difficult if you know the important steps.

In this series, I'll walk you through the steps needed to build a simple, yet handy custom module. Our module will have one primary function: whenever text is added to a node, it will scan the content for a user-defined text string. If the string is found and doesn't already have a copyright symbol after it, our module will add one. Sound hard? It's not! (And yes, I realize this is something that could probably be more easily accomplished using a CSS `::after` pseudo-element, but this is what our client wants.)

## Setting the Stage

Before we start, make sure you've got a Drupal site up and running. You'll need admin access to work on custom modules. Also, you'll want to have a decent code editor and be familiar with PHP, HTML, CSS, and JavaScript. I am also starting with the assumption that you have Drush running in a local environment. If you don't know what Drush is, I highly suggest that you pause here and go to [the Drush documentation](https://drush.org) to install it and familiarize yourself with it. Drush is a crucial tool in a Drupal dev's toolbox that you should already be familiar with. It's okay if you're new to Drupal module development, though. That's what this series is for!

### Step 1: Creating the Custom Module Directory and Files

First things first, let's create a new directory for our custom module. In your Drupal installation, navigate to the `./web/modules` folder. (Make sure you don't accidentally go to the `./web/core/modules` folder.)

This folder, `./web/modules`, is where any "contrib" modules (ones you got from a third party, like those on drupal.org); it's also where any "custom" modules (modules that you or someone on your team custom built specifically for this Drupal site.) Since this is presumably your first custom Drupal module, you may need to create a `/modules/custom` directory. Once you have it, create a new directory within it named `./web/modules/custom/copyright_symbol`. Inside this directory, create the following files:

- `copyright_symbol.info.yml`
- `copyright_symbol.module`
- `copyright_symbol.routing.yml`
- `copyright_symbol.permissions.yml`

These files will be the backbone of our custom module. Let's start by adding some information to our `.info.yml` file.

### Step 2: Defining the Module Information

Open the `copyright_symbol.info.yml` file in your code editor and add the following code:

```yaml
name: Copyright Symbol
type: module
description: 'Adds a copyright symbol to user-defined text strings in nodes.'
package: Custom
core_version_requirement: ^8 || ^9
```

Pause for a second and pat yourself on the back, because with that one file you are now a custom module builder! Yep, a `.info.yml` file is the only mandatory requirement for a module. Don't believe me? Save the file, then go to your console and type `drush en copyright_symbol`. You should get feedback of `[success] Successfully enabled: copyright_symbol`. Now go to your site's `/admin/modules` page, search for "copyright", and you'll see your new module listed. The checkbox next to it indicates that it is enabled. Click the droppdown arrow next to the description of what it does. Here's where you would see any dependencies it had plus links to its configuration settings page, if we had it.

![The list of modules, with the new "copyright symbol" module listed](/static/images/copyright01.png 'copyright')

_If you don't see the module listed there, try running `drush cr` to refresh your site's caches, then check again. It's pretty standard as you're developing in Drupal to run `drush cr` when you want to see your recent changes reflected on your local site; my fingers have "muscle memory"; they type `drush cr` without my brain having to get involved :)_

In this one simple file, the `.info.yml` file (commonly referred to as just the "dot info file"), we've provided some basic information about our module, such as its name, type, and a brief description. We've also specified the core version requirement, indicating that our module is compatible with Drupal 9 and 10.

There are other vital pieces of info that can go into a module's "dot info file". As with everything related to developing in Drupal, I encourage you to look at other modules, both in core and contrib, and see how their dot info files are set up.

Just for your own learning, try this: change the value of `package` from `Custom` to something like `Copyright Package`. Run `drush cr` and then refresh the modules page. Your change should show up. Now make a change that would actually cause a problem; change your `core_version_requirement` to a value that doesn't include the version you're running. (I'm running 10.0.7, so I changed my value to ^9). After `drush cr`, will the module be uninstalled? Try it.

Nope, not uninstalled... but throwing noisy warnings that it is incompatible. So... think of your dot info file as the first place you'll think of looking when you're triaging a problem in your module.

![A warning that the module is incompatible with this version of Drupal](/static/images/copyright03.png 'copyright 03')

Okay, that's it for now. In the next article, we will start giving our baby module some functionality.
