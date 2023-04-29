---
title: "Dante's Eighth Circle: Expo Dependencies"
subtitle: Abandon hope, all ye who enter
date: '2023-04-28'
tags: ['react', 'reactnative', 'expo']
draft: false
summary: Every time I get a new group of students in my React Native class, I cringe. With each group, I inevitably have to guide at least one or two of them through an elaborate hit-and-miss process of trying to get their Expo dependencies all working while attempting to ensure that everyone in the class is on the same versions as much as possible, so that they can all access the same functionality.
images: []
layout: PostLayout
---

### The Dependency Nightmare

Every time I get a new group of students in my React Native class, I can't help but feel a sense of cynicism and mild frustration. You see, I inevitably have to guide some of them through an elaborate hit-and-miss process of trying to get their dependencies all working. And to make matters worse, I need to ensure that everyone in the class is on the same versions as much as possible, so that they can all access the same functionality.

It's a tedious dance that can sometimes be disheartening. Expo SDK is on a pretty tight 3-month release cycle, and they maintain backwards compatibility for the previous 3 versions. In the "backwards compatibility" category, the element that makes teaching a course with Expo especially difficult is: Expo Go (the app that runs on a mobile device and allows a dev to have a live, dynamically-updated dev site) will stop working ~ 9 months after you lock it down to a specific version.

I get a new cohort approx. every 2 months. And I'm just one of several instructors leading the same RN class using the same package.json, so it's not like I can just update version numbers on the fly.

### Why Expo is a Moving Target

I get it. Expo is a helpful companion to React Native, which in turn is a framework that takes your JS code and turns it into formats that will work with Android, AndroidTV, iOS, Windows, web, etc., while retaining the ability to interact with the native APIs in each of those platforms. Expo would be useless if it stagnated; it has to evolve as each of the platforms supported by RN evolve. And working with an Expo project does not create the same challenges that teaching it does. You start a project and lock it in to, say, Expo 48. If it takes a year and a half to complete it, who cares if you're still using 48 or if you've kept up with Expo (which would be on 53 or 54 by the time you finish). You 18 month old project running 48 will work just as well at keeping your deployments updated as would the 53/4.
