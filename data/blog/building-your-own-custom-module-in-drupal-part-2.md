---
title: Building Your Own Custom Module in Drupal, Part Two
subtitle: Introducing the .module file and writing our first hook
date: '2023-04-13'
tags: ['drupal']
draft: true
summary: In part one, we looked at the steps involved in creating an MVP of a custom module. We looked at the "dot info" file, which is what makes a module visible to your Drupal site, and we looked at the configs that are stored in it. Now it's time to actually put some functionality into the module. We'll start with one of the basic methods in Drupal, hooks.
images: []
layout: PostLayout
canonicalUrl:
---

### Step 3: Building the Module Functionality

It's time to start coding the main functionality of our module. Right now this should be the structure of your module:

```lang-none
└── modules
     └── custom
          └── copyright_symbol
               ├── copyright_symbol.info.yml
               ├── copyright_symbol.module
               ├── copyright_symbol.permissions.yml
               └── copyright_symbol.routing.yml
```

So far, we've only added code to the dot info file; the other three should be empty. Open the `copyright_symbol.module` file and let's get to work.

This is commonly referred to as the "dot module" file, and it despite its lack of a `.php` extension, it's written in php. So the first line of our new file will be an opening `<?php` tag. Next, we can put a comment block that describes the purpose of the file. Looking at examples of core modules, you'll notice that the description in this comment block is usually taken verbatim from the description in the `.info` file. This is prefaced by the `@file` tag, which indicates that the file is a Drupal module.

```php
<?php

/**
 * @file
 * Adds a copyright symbol to user-defined text strings in nodes.
 */
```

By the way, the formatting of this comment is intentional; it's a format call PHP DocBlocks, which are structured comments in PHP code that can give documentation for our classes, functions, properties, parameters, and... well, and our Drupal module here. They begin with `/**` and end with `*/` and they contain various `@tags` that serve as labels for the annotations we put there.

First, we'll implement a hook that allows our module to interact with the node content. In Drupal, hooks are functions that allow modules to interact with various parts of the system. In this case, we'll use the `hook_node_presave()` hook, which is invoked right before a node is saved.

Add the following beneath your first docblock:

```php
use Drupal\node\NodeInterface;
```

We are going to use an interface that's found in the `NodeInterface` namespace, so we need to import it. Since this is the case, we also need to make a mental note to go back to our `.info` file and list the `Node` module as a dependency. It may seem like overkill since the `Node` module is part of Drupal core, but let's get in the habit of putting all of our dependencies in `.info`, no matter how trivial it may seem.

Next, we're going to implement a hook, which we'll preface with another docblock:

```php
/**
 * Implements hook_node_presave().
 *
 * Scans a node for a keyword and adds a character as required.
 */

  function copyright_symbol_node_presave(NodeInterface $node) {
  // Your code will go here.
  }

```

**TODO PICK UP HERE ^^^ AND REWRITE IT TO PUT THE HELPER FUNCTION FIRST**
Again, our docblock has an intentional pattern. If you go to the Drupal API documentation and search for any hook, you'll see that they all have this same type of docblock. Next let's add our params and return to the docblock and write the logic for scanning and updating the node content. We'll create a helper function called `add_copyright_symbol()` to handle this task. Add the following code to your `copyright_symbol.module` file:

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

With our helper function in place, we can now call it from our `hook_node_presave()` implementation. Update the `copyright_symbol_node_presave()` function with the following code:

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

At this point, our custom module can add a copyright symbol to a user-defined text string in node content. However, we still need to provide a settings page where users can configure the search string.

### Step 4: Creating the Settings Page

To create the settings page, we'll need to define a route and a menu item in our `copyright_symbol.routing.yml` and `copyright_symbol.links.menu.yml` files, respectively. Add the following code to the `copyright_symbol.routing.yml` file:

```yaml
copyright_symbol.settings:
  path: '/admin/config/content/copyright_symbol'
  defaults:
    _form: '\Drupal\copyright_symbol\Form\CopyrightSymbolSettingsForm'
    _title: 'Copyright Symbol Settings'
  requirements:
    _permission: 'administer copyright symbol settings'
```

This code defines a route for our settings page and specifies the form class we'll use to build the form. We'll create this form class shortly.

Next, create a new file named `copyright_symbol.links.menu.yml` in your module directory and add the following code:

```yaml
copyright_symbol.settings:
  title: 'Copyright Symbol Settings'
  parent: system.admin_config_content
  route_name: copyright_symbol.settings
  weight: 100
```

This code creates a menu item for our settings page and places it under the "Content" section of the admin menu.

Now, let's build the form class. Create a new directory named `Form` inside your module directory, and inside that, create a new file named `CopyrightSymbolSettingsForm.php`. Add the following code:

```php
<?php

namespace Drupal\copyright_symbol\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class CopyrightSymbolSettingsForm.
 */
class CopyrightSymbolSettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'copyright_symbol_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['copyright_symbol.settings'];
  }

    /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('copyright_symbol.settings');

    $form['search_string'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Search String'),
      '#description' => $this->t('Enter the text string to search for and add a copyright symbol.'),
      '#default_value' => $config->get('search_string'),
    ];

    $form['scan_now'] = [
      '#type' => 'submit',
      '#value' => $this->t('Scan Now'),
      '#submit' => ['::scanNow'],
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);

    $this->config('copyright_symbol.settings')
      ->set('search_string', $form_state->getValue('search_string'))
      ->save();
  }

  /**
   * Scan Now button submit handler.
   */
  public function scanNow(array &$form, FormStateInterface $form_state) {
    // Load the configuration for the custom module.
    $config = \Drupal::config('copyright_symbol.settings');

    // Get the user-defined search string.
    $search_string = $config->get('search_string');

    // Load all nodes.
    $node_storage = \Drupal::entityTypeManager()->getStorage('node');
    $nodes = $node_storage->loadMultiple();

    // Process each node's content with the add_copyright_symbol() function.
    foreach ($nodes as $node) {
      $content = $node->body->value;
      $updated_content = add_copyright_symbol($content, $search_string);

      // Update the node content with the modified content.
      $node->body->value = $updated_content;
      $node->save();
    }

    // Set a message to inform the user that the process is complete.
    \Drupal::messenger()->addMessage($this->t('All existing nodes have been scanned and updated.'));
  }
}
```

The `buildForm()` method defines the form elements, including a text field for the search string and a "Scan Now" button. The `submitForm()` method saves the user-defined search string to the configuration when the form is submitted. We've also added a `scanNow()` method that processes the "Scan Now" button click. This method scans and updates all existing nodes with the copyright symbol.

### Step 5: Defining Custom Permissions

Finally, let's define custom permissions for our module. Open the `copyright_symbol.permissions.yml` file and add the following code:

```yaml
administer copyright symbol settings:
  title: 'Administer Copyright Symbol Settings'
  description: 'Access and configure the Copyright Symbol module settings.'
  restrict access: true
```

This code defines a permission for administering the Copyright Symbol settings. You can assign this permission to users or roles through the admin interface.

### Voila

We've created a custom module without much hassle. It does exactly what we need it to do and it doesn't have any bloat from functionality that someone else shoved in it. And if your needs change in the future, our custom module will be 100% extensible. There are some additional next steps that we could take with it; in a future set of posts, I'll expand on it. Check back.

```

```
