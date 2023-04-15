---
title: Building Your Own Custom Module in Drupal, Part Three
subtitle: 'Your .module file: giving your hooks a home'
date: '2023-04-14'
tags: ['drupal']
draft: false
summary: 'We added a Settings page where we can set a search string to use, so now we want to start adding functionality to our module. We are going to need to interact with node content, and Drupal gives us a resource to use for interacting with various parts of the system: Hooks.'
images: []
layout: PostLayout
canonicalUrl:
---

Hooks are one of Drupal's ways of allowing us to reach into places in the app and manipulate data that is being handled by other modules or functions. Hooks are specially named functions that Drupal will look for, in our module and every other installed module, at various points; if a hook is found when Drupal looks for it, that hook is run.

There are tons of hooks available to use; just go to the Drupal API documentation and search 'hooks' and you'll see what I mean.

For this module, since we are going to modify text in nodes, we can use the `hook_node_presave()` hook, which is invoked right before a node is saved.

Add the following code to your copyright_symbol.module file:

```php
<?php

use Drupal\node\NodeInterface;

/**
 * Implements hook_node_presave().
 */
function copyright_symbol_node_presave(NodeInterface $node) {
  // Your code will go here.
}
```

Now, we need to write the logic for scanning and updating the node content. We'll create a helper function called `add_copyright_symbol()` to handle this task. Add the following code to your `copyright_symbol.module` file:

```php
/**
 * Adds a copyright symbol to a user-defined text string in node content.
 *
 * @param string $content
 *   The content of the node.
 * @param string $search_string
 *   The user-defined text string to search for.
 *
 * @return string
 *   The updated content with the copyright symbol added.
 */
function add_copyright_symbol(string $content, string $search_string): string {
  // Check if the search string is present in the content and not followed by a copyright symbol.
  if (strpos($content, $search_string) !== FALSE && strpos($content, $search_string . '©') === FALSE) {
    // Add the copyright symbol to the search string.
    $updated_string = $search_string . '©';

    // Replace the search string with the updated string.
    $content = str_replace($search_string, $updated_string, $content);
  }

  return $content;
}
```

With our helper function in place, we can now call it from our `hook_node_presave()` implementation. In doing so, we are going to use the string that we are creating on the Copyright Symbol Settings page; it can be accessed at `\Drupal::config('copyright_symbol.settings`.

Update the `copyright_symbol_node_presave()` function with the following code:

```php
/**
 * Implements hook_node_presave().
 */
function copyright_symbol_node_presave(NodeInterface $node) {
  // Load the configuration for the custom module.
  $config = \Drupal::config('copyright_symbol.settings');

  // Get the user-defined search string.
  $search_string = $config->get('search_string');

  // Process the node content with the add_copyright_symbol() function.
  $content = $node->body->value;
  $updated_content = add_copyright_symbol($content, $search_string);

  // Update the node content with the modified content.
  $node->body->value = $updated_content;
}
```

At this point, our custom module can add a copyright symbol to a user-defined text string in node content. Test it out and it should work!

Of course there is a lot more work we would do on this module if we were actually developing it. For one thing, we only wired up the module's ability to scan a node at presave and insert copyright symbols, but we put in a button for scanning all existing nodes. Also, we are only scanning the `body` field of nodes; what if the string was found in the `title` field, or in any other field on nodes? And we would want to make the copyright symbol smaller while also ensuring that it is a11y-friendly.

But our custom module checked all the boxes that we set out to do, and it wasn't difficult to accomplish. And the best part of it is: it doesn't have any bloat from functionality that someone else shoved in it. And if your needs change in the future, our custom module will be 100% extensible. Nice! Welcome to the world of custom module building in Drupal 😀
