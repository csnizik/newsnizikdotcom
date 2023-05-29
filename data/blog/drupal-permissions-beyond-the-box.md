---
title: Going Beyond the Box with Drupal Permissions
subtitle: Some advanced use cases for permissions tweaks using Core and a couple of well-supported contrib modules
date: '2023-05-28'
tags: ['php', 'drupal']
draft: true
summary: You tried using all of Drupal's OOB permission settings but they just couldn't do everything that your site requires. Is it time to start hacking together some inventive one-off PHP solutions? Nope!
images: []
layout: PostLayout
---

You tried using all of Drupal's OOB permission settings but they just couldn't do everything that your site requires. Is it time to start hacking together some inventive one-off PHP solutions? Nope!

It's tempting to start bending Drupal with custom code that does exactly what you want. But it's always better to keep Drupal free of spaghetti... for your future dev self or whoever has to come behind you and figure out/fix what you've done, for extensibility, for security... hell, for just plain out NOT breaking your site.

I'll be talking about two contrib modules from the Drupal "Module Project" (https://drupal.org/project/project_module) that I have found useful.

## The basics: "What's in the box?"

![Scene from Seven with Brad Pitt asking whats in the box](/static/images/whatsinthebox.gif)

Let's start out with the tools that come in a basic Drupal installation. These are found at `/admin/people/permissions`.

## Default roles and their OOB permissions

### Anonymous user

As described above, an anonymous user is a user who has not been authenticated. The OOB permissions for them include:

- view comments
- use the site-wide contact form
- view published content
- use search [^1]

...in other words, the typical user experience for a public-facing website.

### Authenticated user

One step up from anonymous users are authenticated users. OOB permissions for them are (in addition to those already listed above for anonymous users[^2])

- post comments
- skip comment approval
- use the Basic HTML text format
- view published content
- use shortcuts

### Content editor

Content editors have some permissions that are "locked in", iow they can't be turned off. This is a safeguard against, say, having two forum mods get in a pissing match and try locking each other out of their mod priveleges or preventing them from complaining to the admin team. The locked-in permissions for content editors are:

- Comments:
  - Post
  - Skip
  - Approve
- Use the site-wide contact form
- Use the Basic HTML text format
- View published content
- Use search
- Use shortcuts

The additional permissions they get OOB are:

- Edit own comments
- Use contextual links
- Access the Files overview page
- Nodes (Article and Basic page):
  - Create new
  - Delete own
  - Revisions:
    - Delete own
    - Revert all
    - View all
  - Edit own
  - View own unpublished
- Access the Content overview page
- URL aliases:
  - Administer
  - Create
  - Edit
- Use the administration pages and help
- View the administration theme [^3]
- Taxonomy
  - Tags: Create terms
  - Tags: Edit terms
- Use the toolbar
- Access tours

### Administrators

Admins, of course, get godlike permissions. Every permission that is available is irrevokably granted to the administrator role, and the OOB `user/1` is given this role. Administrator role can be added to users other than `user/1` and they too will have irrevocable omnipotence.[^4]

## Lesser-known (but powerful) permission controls

Even if the `/admin/peopls/permissions` page was all a site admin had access to, they would still be in pretty good shape. But fortunately (and unbeknownst to many a Drupal user) there are more ways to enact granular levels of permission using just an OOB installation.

### Views

Each view (and each display within a view) has an "access" setting where you can choose whether this access to this view/display should be controlled by a specific permission or a specific role, or should be unrestricted.

![The access setting that is available within each display and view](/static/images/perms01.png)

### Blocks

Each block can be designated as "not restricted", or can be assigned to specific roles. Go to the list of blocks `admin/structure/block`, then on the block you want to modify click 'Configure'. This will give you a page where you can decide how to restrict access to this specific block.

![The role-based visibility setting that is available within each block](/static/images/perms01.png)

Look closely at that screenshot and you will see two additional ways that blocks can have their visibility restricted: by page and by content type.

**By page** visibility allows you to, for example, create a block that should only appear on each individual user's page by putting `/user/*` here. Or you could have a block that only appears on the `<front>` page, or any random page you choose.

Visibility **by content type** allows you to restrict a block to only an `article` or only a `basic page`.

### Private files

We saw that admins can control access to private files in `/admin/people/permissions`. But if more control is required, admins can also control access to files at the file level or the directory level using an `.htaccess` file. Granted this isn't Drupal-specific... or, really, Drupal-ish at all... but it's still a useful tool.

### Content types

We already saw the overarching permissions for the OOB content types ("Basic page" and "Article") in `/admin/people/permissions`. Each new content type that you create can likewise have granular permissions set for basic CRUD operations.

## Roll your own in an OOB install

With enough planning and ingenuity, many users are abl to extend their permissions to cover a full gamut of scenarios using only the OOB options. But what if you need more? Should you automatically start going off the Drupal script and hacking out some clever PHP solution? Please not! In the next article I'll go a little further while still not leaving Drupal core.

[^1]: Oddly, an OOB install also gives anonymous users one permission that is not given to "authenticated" or "content editor" roles: "use the Restricted HTML text format", which includes an ominous sounding warning in the description that this permission may have security implications. Why is it given to anonymous users, who aren't given any OOB permissions that would let them use a text editor? One of the mysteries of Drupal.
[^2]: Role permissions are not additive. If a role is to have the same permission as another role, that permission must be explicitly granted to each role.
[^3]: These two permissions ("Use the administration pages and help" and "View the administration theme") can sometimes throw new Drupal admins off when, for example, they create a new role and give it permisssions that involve using the administrator pages. If they do not explicitly grant permission to view the administration pages and use the administration theme (if one is being used), they will either not be able to access the admin pages at all, or they will experience the administration section with the same theme as is used on the public-facing front end. This is not necessarily a bad thing... maybe it's what you actually want. But it's something admins need to be aware of when, for example, they are giving a new user instructions on how to use certain features... the user may not see that feature in the format that the admin is assuming they do.
[^4]: Yes, it is entirely possible for you to get kicked out of your own site by a user who you granted "Administrator" access to. So be careful with this one. It's usually not a bad idea to create a new role for your other admins, one that prevents them from pulling a Brutus on your Julius Caesar.
