---
title: Upgrading to D9 \: Tackling the Twig Transition
date: '2020-08-22'
tags: ['drupal','twig']
draft: false
summary: We need to discuss the transition from Twig 1 to Twig 2, which is essential to D8 => D9.
layout: PostLayout
---

Hello, fellow Drupal fanatics! It's time to take a deep dive into the thrilling world of Twig as we move from Drupal 8 to Drupal 9. If you're already on Drupal 8, you're in luck – the update to Drupal 9 should be a breeze. However, we need to discuss the transition from Twig 1 to Twig 2, which is an essential part of the upgrade. Fear not, my friends, for most projects, the changes should be manageable. So let's dive in!

![A bundled of twigs.](/static/images/twigbundle.png 'Twig bundle')
_Twig comes bundled with D9. Get it? Bundled? A bundle of twigs? n\/m_

### Checking for Deprecated Syntax

Before we get our hands dirty, it's essential to check your Twig files for deprecated syntax. To do this, simply use the Upgrade Status 8.x-2.x either on the UI or via Drush. Trust me, it's easier than convincing my kids to clean their rooms.

### Template-Level Changes

Twig 2 comes with a few small changes that will impact the template level language (i.e., the language used in .html.twig files):

#### 1. Macros

In Twig 2, macros imported in a file are no longer available in child templates anymore (via an include call, for instance). Now, you must explicitly import macros in each file where they're used. It's like having separate suitcases for each vacation destination, rather than just dumping everything in one giant bag.

#### 2. Undefined Blocks

Silent display of undefined blocks is deprecated since version 1.29 and will throw an exception in 2.0. To address this, wrap potentially-undefined blocks in conditionals that verify they're defined before attempting to display them.

```twig
{% if block('potentially-undefined-block') is defined %}
{{ block('potentially-undefined-block') }}
{% endif %} 3. Raw Tag and Verbatim
```

As of Twig 1.x, the raw tag is deprecated in favor of verbatim.

#### 4. Sameas and Divisibleby

The sameas and divisibleby tests are deprecated in favor of same as and divisible by, respectively.

#### 5. \_self Global Variable

In Twig 1.x, using the \_self global variable to access the current \Twig\Template instance is deprecated. In Twig 2.0, the output of \_self is the current template name. Replace instances of {{ _self.templateName }} with {{ _self }}. Note that \_self can still be used to access macros – e.g., {{ _self.macro_name() }} is still valid.

### Changes for Module Developers

Module developers should also be aware of some changes that can be detected using the Upgrade Status module:

Removing an extension is deprecated, and the \Twig\Environment::removeExtension() method will be removed in 2.0.
Use \Twig\TwigFunction to add a function. Several classes and interfaces will be removed in 2.0.
Use \Twig\TwigFilter to add a filter. As with functions, several classes and interfaces will be removed in 2.0.
Armed with this knowledge, you should be well on your way to upgrading to Drupal 9 and enjoying the wonders of Twig 2. Godspeed, my fellow Drupallers!
