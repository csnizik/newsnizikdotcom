---
title: Atomic Design in Drupal
subtitle: The Challenges of Remembering to Change the Subtitle of an Article When Using a Previous Article as a Template
date: '2023-04-20'
tags: ['drupal']
draft: false
summary: Organisms, molecules, atoms. If 'chemistry' is the only thing you're thinking about when you hear those terms, perhaps you've never heard of Atomic Design, an approach to systematic component design introduced by Brad Frost in 2015. Atomic Design is a living methodology; it is still alive and evolving 8 years later. How does it fit into a Drupal 10 project?
images: []
layout: PostLayout
canonicalUrl:
---

In 2017, I was lead Drupal developer on a massive site migration: moving an entire university's website from an old XML-based CMS to a sparkling new Drupal 8 site. About midway through the design/development process (in other words, too late to make a dramatic shift in our approach to the UI), I came across the book ["Atomic Design" by Brad Frost](https://atomicdesign.bradfrost.com/) and from the first time I read it, I was completely sold. But... for the current project, we were pretty far advanced and would not have made stakeholders happy if we suddenly pitched the idea of fixing something (our hodgepodge UI design) that, in their minds, wasn't broken.

But I was fascinated with the concepts of Atomic Design, and a couple of years later when I was interviewing for a new FE dev position at another company, I was asked: "Who would you say is an influential person for you in the dev world?" Easy question for me; I answered "Brad Frost, the guy who wrote that book Atomic Design." Turns out the company I was interviewing with had actually partnered with Brad Frost on projects in the past; and about 6 months after I got hired there, I found myself working as a FE dev on a project that was implementing Brad Frost's design system and the lead UI/UX designer was... Brad. It was like my Plato/Socrates moment, if Plato was a design geek who sometimes sat in our Zoom meetings with his accoustic guitar on his lap like he was going to break out into a song at any moment; and if Plato had a bulldog whose contributions to our Zoom meetings was a steady, rythmic, baritone snoring which at first I mistook for Brad having an embarrassing gastrointestinal problem. (RIP to Brad's snoring pooch, who sadly passed away in the middle of that project.)

## Overview of Atomic Design

Atomic Design breaks down interface design into smaller and more manageable components. Think of it as building blocks, like atoms, molecules, organisms, recipes, and pages. It's like chemistry, but for web design!

1. **Atoms**: The smallest and most basic building blocks. A naked checkbox. A heading. An icon. A loading indicator. Pieces that can't be broken down any further without losing their identity.
2. **Molecules**: Groups of atoms bonded together to form functional units. A checkbox field that groups checkboxes together and applies a common label to them. A button with a text label and an icon. A page header with a kicker, title, and description text.
3. **Organisms**: Combinations of molecules forming more complex sections. A button dropdown, a modal, a carousel.
4. **Recipes**: Consisting of organisms and other components to create a complete and modular structure. A global header, a card, a banner.
5. **Pages**: The final stage, where the composition is filled with real content, providing a realistic preview of the final design.

## Benefits of Atomic Design in Drupal

So why bother with Atomic Design in Drupal? Here are a few reasons:

1. Modularity: It makes it easier to reuse components across your Drupal site, reducing redundancy and improving consistency.
2. Maintainability: By breaking down complex designs into smaller components, it's simpler to make updates or fix issues without affecting the entire site.
3. Collaboration: Designers and developers can work together more efficiently since they're using a shared language and structure.

## Bringing it into Drupal 10

Back when I first heard of Atomic Design, there were a couple of contrib themes that were great for bringing it into a Drupal 8 site:

- Pattern Lab: Supported pattern libraries and design systems.
- Emulsify: A Drupal theme that integrated with Pattern Lab and supported Atomic Design out of the box.

Today we're in this transitional phase where Drupal is actually advancing through versions a little bit faster than the Drupal world is accustomed to. If you want to incorporate Atomic Design and Storybook in a Drupal 9/10 site, you'll pretty much have to roll it yourself. (If I'm wrong and anyone knows of a D10 project that is doing this, please let me know in the comments or [email me](mailto:csnizik@tulane.edu?subject=Atomic%20Design%20Article%20on%20snizik.com).)

So... that's where I will leave it for now. Incorporating Atomic Design in Drupal can be a game-changer, but it's going to take a little bit of work to get it into a D9/10 site. I'll write more about it in a future post.
