---
title: Power Permissioning Without Leaving Drupal Core
subtitle: Taking the next step in setting up a customized multi-tiered permission system in Drupal 10
date: '2023-05-28'
tags: ['php', 'drupal']
draft: false
summary: Building on Drupal Core's OOTB permission options from the last article, let's go a little further this time. But let's stay in the Core box and look at a combination of modules that are included in Drupal 10 Core, but which are not enabled in an OOTB install - Content Moderation and Workflows.
images: []
layout: PostLayout
---

Building on Drupal Core's OOTB permission options from the last article, let's go a little further this time. But let's stay in the Core box and look at a combination of modules that are included in Drupal 10 Core, but which are not enabled in an OOTB install - Content Moderation and Workflows. When combined, these two Core modules can be pretty powerful in managing your site's content flow.

## The short answer to "What do they do?"

The Content Moderation module, according to its Help page,

> allows you to expand on Drupal's "unpublished" and "published" states for content. It allows you to have a published version that is live, but have a separate working copy that is undergoing review before it is published. This is achieved by using Workflows to apply different states and transitions to entities as needed.

Notice that the Workflows module is a required module for Content Moderation. So here's a quick intro to what Workflows does:

> The Workflows module provides a UI and an API for creating workflows content. This lets site admins define workflows and their states, and then define transitions between those states.

It is worth noting here that, while Content Moderation lists Workflows as a required dependency, Workflows does not list any required modules. But it doesn't really work without another module providing it with "workflow types". Enabling just the Workflows module and then visiting `/admin/config/workflow/workflows` gives you this notification:

> There are no workflow types available. In order to create workflows you need to install a module that provides a workflow type. For example, the Content Moderation module provides a workflow type that enables workflows for content entities.

Since Content Moderation is already in Core, it's the easiest way to get up and running with Workflows.

## Your first workflow type and workflow

If you have both modules enabled, when you visit `/admin/config/workflow/workflows`, you'll see that you now have a new Wworkflow called "Editorial". Looking at this workflow reveals that it consists of three states: "Draft", "Published" and "Archived". Pretty standard stuff so far.

In addition to the states, it also defines some transitions between various states. The OOTB module has these transitions:

- **Create New Draft** - transition from either Draft or Published to Draft
  - In other words, create a new revision of an existing node that is either in Draft or Published state
- **Publish** - transition from either Draft or Published to Published
  - Does what it says on the tin
- **Archive** - transition from Published to Archived
  - Oh me oh my how did Drupal not have this functionality before this module came along? One wonders
- **Restore to Draft** - transition from Archived to Draft
  - Does what it says on the tin
- **Restore** - transition from Archived to Published
  - Again, one wonders how we got along before this

## What does this have to do with advanced permissions?

Just using this OOTB setup, we're able to make progress in our quest for tiered permissions. The Content Moderation module adds these permissions, which can be set however you need:

- **Editorial workflow: Use Archive transition** - Move content from Published state to Archived state
- **Editorial workflow: Use Create New Draft transition** - Move content from Draft, Published states to Draft state.
- **Editorial workflow: Use Publish transition** - Move content from Draft, Published states to Published state.
- **Editorial workflow: Use Restore transition** - Move content from Archived state to Published state.
- **Editorial workflow: Use Restore to Draft transition** - Move content from Archived state to Draft state.
- **View any unpublished content**
- **View the latest version** - Requires the "View any unpublished content" or "View own unpublished content" permission

You can probably see how this could be used to set up a pretty effective content management pipeline. A content writer could create a new Draft; as long as they are still working on it, they keep it in Draft. When they finish, they could set it to a new state that you add: "Needs Review". Using a simple View, an editor who is responsible for this writer would see a new node that has been placed in "Needs Review" status. The editor reviews it and either publishes it or pushes it back to "Draft" status with comments on what it needs.

The above is just a basic example of what you can do with a combination of Workflows, Content Moderation, custom roles and permissions, and creativity. In the next article, I'll venture out of Core and into a couple of contrib modules for further enhancing your permissions.
