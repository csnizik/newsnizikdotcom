---
title: Plugin Types Are Like Pokémons, But For Drupal
date: '2021-04-21'
tags: ['drupal']
draft: true
summary: What are plugins in Drupal? In a word, awesome. In two words, really awesome. In three words...
images: []
layout: PostLayout
canonicalUrl:
---

Alright, gather 'round, my coding minions. Today, we're going to talk about **Drupal plugin types**. You've probably heard of them, but let's dive deeper into the subject.

## What the Hell Are Plugin Types?

The term "plugin type" is used to describe a group of plugins managed by the same plugin manager. They don't provide specific functionality themselves; instead, they serve as a way to refer to the system and describe the purpose of all plugins within that type.

Think of plugin types as Pokémon species. They share similar characteristics and abilities, but each one is unique. And just like Pokémon, you can collect and manage them.

## How Do Plugin Types Work?

A plugin type consists of code in the form of a plugin manager, individual plugin instances, and a use case for the functionality provided by the plugins of the given type. Plugin types are defined by modules, and each plugin type belongs to a specific module. However, plugin instances aren't module-specific; any module can provide plugins of any type.

The Drupal API has an [example plugin type module](https://api.drupal.org/api/examples/plugin_type_example%21plugin_type_example.module/8.x-1.x) and I can't beat its demonstration of how to define a plugin type. Take a minute to read the `.module` file there; I'd rather not paraphrase it or plagiarize it.

## Defining Your Own Plugin Type

As a Drupal module developer, knowing how and when to define a new plugin type will help you write modules that are easier to maintain and extend. It's like adding a new Pokémon to your collection – you'll want to choose wisely and make sure it's a valuable addition.

## In Summary

So, there you have it. Plugin types are like Pokémon species for your Drupal site, providing a way to categorize and manage similar functionality. They're defined by modules, and each type belongs to a specific module. Now that you've got the basics down, you're ready to explore the wonderful world of Drupal plugin types!

Just remember, the next time you're working with Drupal plugin types, you're not just coding – you're building your own Pokémon team. Gotta catch 'em all!
