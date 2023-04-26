---
title: 'Drupal 10.1.0 Experimental Module: Turtles, All The Way Down'
date: '2023-04-26'
tags: ['drupal', 'drupal10', 'theming']
draft: false
summary: Yawn... a new way of creating a module is coming to D10. Put everything in one folder. I am supposed to be excited by this and see it as the best thing since JavaScript taught us that `typeof null` is `'object'` (wait what?)
images: []
layout: PostLayout
canonicalUrl:
---

From Drupal.org:

> Single Directory Components (often abbreviated as SDC) are Drupal core’s implementation of components. Within SDC, all files necessary to render the component are grouped together in a single directory (hence the name!). This includes Twig, YAML, and optional CSS, JavaScript, etc. SDC will automatically generate a library to load CSS/JS when the template is invoked.

## And... the gain will be what, exactly?

Let's read [the tin](https://www.drupal.org/docs/develop/theming-drupal/using-single-directory-components/about-single-directory-components) and see what we will hopefully gain from this:

### Organization

> Grouping all necessary code into one directory makes finding and jumping between relevant files easier.

Easier for whom, exactly? Def not for someone like me who has an OCD streak when it comes to folder structures. White t-shirts go in the white t-shirts drawer, dark t-shirts go in the dark t-shirts drawer, and ne'er the twain shall meet. **_Thumb down_.**

### Automatic library generation

> SDC will automatically look for a my-component.css and my-component.js and add to an automatically generated library if found. You can specify additional assets and dependencies within the component’s YML file if necessary.

Convenient feature for sure, but not related to a single folder structure. **_Thumb sideways_.**

### Reusability

> Components are designed to be modular and reusable, which means that they can be easily integrated into multiple pages or applications.

Is this filler? **_Thumb sideways_.**

### Consistency

> By using components, developers can ensure that their web pages or applications have a consistent look and feel throughout.

A benefit of eating spinach is: without food, you'll starve. **_Thumb sideways_.**

### Scalability

> Components can help make web pages or applications more scalable, as they can be easily added or removed as needed.

Another benefit of eating spinach is: it's difficult to stay on topic when you're hangry. **_Thumb sideways._**

### Future benefits

> Because SDC allows you to define schemas within the YML definition file, contributed modules (and eventually Drupal core) can automatically generate forms to populate the data. This means that in the future, we’ll be able to add components directly from systems like Layout Builder, CKEditor, etc without having to make custom entities!

Trying to wrap my head around this. Add a component from a component? This is just a bit too abstract for me... kind of like turtles, all the way down.

I'll def check this out when 10.1.0 is available. Hopefully it will inspire me to revise my initial impresssions here, either for the better or the worse.
