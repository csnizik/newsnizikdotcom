---
title: More Core Permission Configuration Ideas
subtitle: Continuing to explore advanced permission configurations that rely solely on Drupal Core
date: '2023-05-29'
tags: ['php', 'drupal']
draft: false
summary: In the spirit of seeing how much functionality we can squeeze out of a D9/10 Core install, here are some more use cases where permissions could be tweaked in creative and/or advanced ways.
image: []
layout: PostLayout
---

In the spirit of seeing how much functionality we can squeeze out of a D9/10 Core install, here are some more use cases where permissions could be tweaked in creative and/or advanced ways. After enabling two Core modules that are not enabled OOTB (Content Moderation and Workflows) in the last article, I decided to look at some more Core modules that are included but not installed, starting at the top of the list with the...

## Actions UI module

From Drupal's docs:

> The Actions UI module provides tasks that can be executed by the website such as unpublishing content, sending an email, or banning a user. Other modules can fire these actions when certain system events happen; for example, when a new post is added or when a user logs in. Modules may also provide additional actions.

Here are some ways that Actions could be leveraged for advanced permissions management.[^1]

1. **Temporary role assignment**: suppose someone with a content editor, site admin, or any advanced role. You could assign someone else that role on a temporary basis and use Actions to automatically remove the role at a specific date.
2. **Automatic role assignment/removal**
   - Implement a forum feature where users who make `n` posts are rewarded by getting an additional privilege, such as posting in a gated section
   - Demote site admins after `n` days of inactivity
   - Automatically revoke a role if the user violates one of your content policies, such as posting spam
   - Automatically assign new users to specific roles depending on their registration information. For example, you could automate the signup process so that a user could only be granted a specific role if, say, they have a `@acme-company.com` email address, or a `.gov` email address, etc.

## Taking it further

The above suggestions above would most likely need to be combined with some other Core modules that are disabled OOTB. For example, the `Activity Tracker` module provides user-level activity tracking. The `Ban` module does what it says on the tin. Forums in Drupal may use Core's `Forum` module.

Any other ideas for advanced permission configuration that relies only on modules that are included in Core? Drop them in the Comments section below.

[^1]: Unlike the setups I described in the previous two articles, these suggested configurations would require some custom code because actions in Drupal are plugins. To implement an action in a module create a class in `{module}/src/Plugin/Action/{ActionName}.php` and extend `ConfigurableActionBase`.
