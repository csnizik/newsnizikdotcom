---
title: Building Your Own Custom Module in Drupal, Part Two
subtitle: Building a Settings page
date: '2023-04-13'
tags: ['drupal']
draft: true
summary: In part one, we looked at the steps involved in creating an MVP of a custom module. We looked at the "dot info" file, which is what makes a module visible to your Drupal site, and we looked at the configs that are stored in it. Before we get to the actual work that our `copyright_symbol` module is going to perform, let's do a couple other setup steps.
images: []
layout: PostLayout
canonicalUrl:
---

Right now this should be the structure of your module:

```shell
└── modules
     └── custom
          └── copyright_symbol
               ├── copyright_symbol.info.yml
               ├── copyright_symbol.module
               ├── copyright_symbol.permissions.yml
               └── copyright_symbol.routing.yml
```

_If you didn't go back and undo the last change we made in Part One (setting the `core_version_requirement` so that the module is incompatible with our version of Drupal), do so now._

### Step 3: Creating a Settings Page

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

This code defines a route for our settings page and specifies the form class we'll use to build the form. The value in `path` is the URL path that will point to the settings page; the value in `_form` is the form class we'll use. We haven't created it yet; we'll get to that next.

Also, make a mental note of the value we put for `_permission`. Keep it in mind as we'll be coming back to that in a future tutorial.

Next, create a new file named `copyright_symbol.links.menu.yml` in your module directory and add the following code:

```yaml
copyright_symbol.settings:
  title: 'Copyright Symbol settings'
  parent: system.admin_config_content
  route_name: copyright_symbol.settings
  weight: 100
```

This code creates a menu item for our settings page and places it under the "Content" section of the admin menu.

### Step 4: Time to Build the Form Class

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

### Clear Cache and Test

If you have followed everything up to this point, use `drush cr` to clear your cache; then use the new link in the Admin page, Configuration Menu > Content >

Uh oh! I'm getting an error instead of my Settings page: `The website encountered an unexpected error. Please try again later.` To find out what's going on, you can run `drush watchdog:tail --severity=Error` to get a list of the most recent error messages. At the top of the list, you should see something like this:

```shell
187     14/Apr 14:54    php     Error   InvalidArgumentException: Class "\Drupal\copyright_symbol\Form\CopyrightSymbolSettingsForm" does not exist. in Drupal\Core\DependencyInjection\ClassResolver->getInstanceFromDefinition()
```

Looks like Drupal can't find our form class that we defined in step 4. Why not? To answer that, here's what my module's file structure looks like right now:

```shell
└── modules
     └── custom
          └── copyright_symbol
               ├── copyright_symbol.info.yml
               ├── copyright_symbol.module
               ├── copyright_symbol.permissions.yml
               └── copyright_symbol.routing.yml
                    └── Form
                         └── CopyrightSymbolSettingsForm.php
```

Oops, we forgot to create a `src` directory, which is where Drupal expects to find `.php` files that define new classes. Let's fix that:

```shell
└── modules
     └── custom
          └── copyright_symbol
               ├── copyright_symbol.info.yml
               ├── copyright_symbol.module
               ├── copyright_symbol.permissions.yml
               └── copyright_symbol.routing.yml
                    └── src
                         └── Form
                              └── CopyrightSymbolSettingsForm.php
```

... run `drush cr` again, and now you should be able to navigate to our new Settings page. So far, it doesn't do anything other than throw another error if you try to use the "Scan Now" button. Why? Because we haven't defined the function `add_copyright_symbol`, which is what we will do next.
