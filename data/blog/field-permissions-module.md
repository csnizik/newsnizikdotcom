---
title: Filling the Need for Nuanced Permissions with the Field Permissions Module
subtitle: Setting field-level permissions for CRUD operations means you can refine your permission scopes
date: '2023-05-30'
tags: ['php', 'drupal', 'permissions', 'custom modules']
draft: false
summary: 'Imagine a website that sells widgets. Each widget has a node, `/widget/1`, `/widget/248`, etc. The website has three roles, and each role needs to have access to the widget nodes, but each role needs exclusive access to certain fields. Do we need to create three types of widget nodes, make a custom module, or go fully unDrupal and hack out a solution?'
layout: PostLayout
---

Imagine a website that sells widgets. Each widget has a node, `/widget/1`, `/widget/248`, etc. The website has three roles, and each role needs to have access to the widget nodes, but each role needs exclusive access to certain fields. Do we need to create three types of widget nodes, make a custom module, or go fully unDrupal and hack out a solution? Not if you use the [Field Permissions module](https://www.drupal.org/project/field_permissions).

## When OOTB permissions are not granular enough

As we saw with the previous articles on permissions, a Drupal OOTB install can have its permissions set with flexibility and scalability. Using various combinations of the modules that come with Core, you can create an editorial system with tiered permissions to allow for, say, writers, editors, approvers, and admins.

But in our widget website, we have encountered a unique requirement that doesn't seem to have a solution available in the OOTB site: setting various permissions on individual fields within a node.

And there are other scenarios where field-level granularity is needed. For example:

- "members-only" content on nodes that are also visible to non-members
- sensitive data that is directly related to a node but should only be visible to those with permission
- internal comments or notes that are intended only for the node's author

## Setting up our widget nodes

My widget website has 4 roles:

1. **Administrator**
   - has all site permissions
   - only users who can set the wholesale cost of widgets
2. **Wholesaler**
   - can view the wholesale cost of widgets
   - can set the retail price of widgets
   - is responsible for one or more Distributors
   - can restrict which widgets a Distributor can sell
3. **Distributor**
   - can view the retail price of widgets
   - sells widgets to Buyers
   - can make private-related sales notes about an individual widget
4. **Buyer**
   - can view and buy widgets

The basic challenge here is: how do we create a single widget node that looks very different depending on who is looking at it? The lowest tier of users, those with the **Buyer** role, should see all of the wonderful goodness of each widget, but it could be disastrous if they could also see the **Distributor** user's private sales notes or the wholesale cost of a widget.

## Setting it all up

Here's a quick overview of the website's structure.

### _Users_

We need to add a few fields to our user nodes: users with the **Distributor** role need to be able to view and edit the list of **Wholesaler** users they are responsible for; and conversely each **Distributor** needs to be able to see which **Wholesaler** they report to.

But right away I see a problem with the OOTB configuration: on the Manage Fields page (`/admin/config/people/accounts/fields`) I can add fields... but any fields I add will be attached to _all users_. This is not ideal, and without a way of limiting field visibility it would create a mess: **Distributor** users would have a field called "My Distributors", which they shouldn't have; **Wholesaler** users will have a field called "My Wholesaler"; and all users would have any fields that site admins wanted to keep private.

### _Widget nodes_

Fields on each **Widget** node:

- **Everyone can _view_, Wholesaler users can _edit_** - description, retail price
- **Distributor users can _view_ and _edit_** - sales notes
- **Wholesaler users can _view_, Administrator users can _edit_** - wholesale cost

Each of these requirements can be satisfied using **field_permissions**.[^1] And with minimal effort you should be able to fine tune your site so that no one sees anything they shouldn't see.

[^1]: How you set permissions on each field depends on whether the field existed when you installed the Field Permissions module. For all fields, including those that were already present when you installed the module: go to `/admin/structure/types/manage/{entity}/fields`, then on the field's row, click "Edit". In the Edit screen, you will have a new option: Custom permissions. Selecting it will reveal a table view with controls on the field's permissions. For fields that are created while the module is installed, you can also see them listed at `/admin/people/permissions`.
