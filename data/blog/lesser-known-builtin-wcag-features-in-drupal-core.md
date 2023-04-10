---
title: Lesser Known Built-In WCAG Features in Drupal Core
date: '2023-2-18'
tags: ['drupal', 'wcag']
draft: false
summary: Drupal is always striving to adhere to the Web Content Accessibility Guidelines (WCAG) and make the web a more inclusive place for everyone. Many developers and site owners are aware of Drupal's commitment to accessibility, but some lesser-known built-in WCAG features in Drupal core are often overlooked. This blog post will shed light on these hidden gems and explain how they can help create a more accessible website.
images: []
layout: PostLayout
---

Drupal, as one of the leading content management systems (CMS), takes web accessibility seriously. It's always striving to adhere to the Web Content Accessibility Guidelines (WCAG) and make the web a more inclusive place for everyone. Many developers and site owners are aware of Drupal's commitment to accessibility, but some lesser-known built-in WCAG features in Drupal core are often overlooked. This blog post will shed light on these hidden gems and explain how they can help create a more accessible website.

## Accessible Forms: Making User Input Easy for All

Forms are a crucial part of any website, whether it's for user registration, contact information, or submitting data. Drupal's Form API ensures that these forms are WCAG-compliant by default, making it easier for users with disabilities to interact with them.

### Fieldset and Legend: Grouping Related Form Elements

The Fieldset and Legend elements in Drupal's Form API provide a way to group related form elements together, making it easier for screen reader users to navigate and understand the form's structure.

Here's an example of how to use Fieldset and Legend in a form:

```php
$form['contact_information'] = [
  '#type' => 'fieldset',
  '#title' => t('Contact Information'),
];

$form['contact_information']['name'] = [
  '#type' => 'textfield',
  '#title' => t('Name'),
];

$form['contact_information']['email'] = [
  '#type' => 'email',
  '#title' => t('Email'),
];
```

### Descriptive Error Messages: Clear and Informative Feedback

Drupal's Form API automatically generates descriptive error messages for form validation errors. These messages are informative and accessible, helping users understand what went wrong and how to fix it. Additionally, the Form API adds ARIA attributes to associate error messages with their corresponding form fields, ensuring that screen reader users receive the necessary context.

### Accessible Media: Make Your Multimedia Content Shine

Multimedia content can enrich a website and make it more engaging, but it's essential to ensure that this content is accessible to all users. Drupal core provides built-in features to help make multimedia content WCAG-compliant.

### Alt Text for Images: A Picture is Worth a Thousand Words

Images can convey complex information and add visual appeal to a site, but they can be a barrier for users with visual impairments. Alt text is a textual description of an image that provides context and meaning for screen reader users. In Drupal, adding alt text to images is simple and intuitive.

When uploading an image, the image field widget includes a field for entering alt text. This ensures that every image uploaded to the site has a description that can be read by screen readers, making the site more accessible.

### Video and Audio Captions: Making Multimedia Content Understandable

Captions provide a textual representation of the audio content in a video or audio file. They are essential for users who are deaf or hard of hearing, as well as for those who may not be able to play audio due to their environment or device limitations.

Drupal's core Media module supports the addition of captions to video and audio files. When embedding multimedia content, site editors can upload caption files in the WebVTT format, which are then displayed alongside the media, ensuring that all users can access and understand the content.

### ARIA Landmark Roles: Guiding Users Through the Site's Structure

ARIA (Accessible Rich Internet Applications) landmark roles provide a way to label different sections of a web page, making it easier for screen reader users to navigate and understand the site's structure. Drupal core includes ARIA landmark roles by default, automatically applying them to key areas of the site, such as the main content, navigation, search, and footer.

Here's an example of how Drupal core applies ARIA landmark roles to template files:

```html
<header id="header" role="banner">
  <!-- Site header content -->
</header>

<nav id="main-navigation" role="navigation">
  <!-- Main navigation menu -->
</nav>

<main id="main-content" role="main">
  <!-- Main content of the page -->
</main>

<footer id="footer" role="contentinfo">
  <!-- Site footer content -->
</footer>
```

These ARIA landmark roles make it easier for screen reader users to navigate the site and quickly access the information they need.

### Skip Links: Fast Navigation for Keyboard Users

Skip links are hidden links that allow keyboard users to bypass repetitive content, such as navigation menus, and quickly access the main content of a page. This feature improves the user experience for those who rely on keyboard navigation, such as users with motor impairments or screen reader users who prefer not to use a mouse.

Drupal core includes skip links by default, ensuring that keyboard users can easily navigate through the site. These links are typically positioned at the top of the page and become visible when they receive keyboard focus.

Here's an example of how skip links are implemented in Drupal's core template files:

```html
<a href="#main-content" class="visually-hidden focusable"> Skip to main content </a>
```

### Tab Order and Keyboard Focus: Ensuring a Logical Navigation Flow

A well-defined tab order and visible keyboard focus are essential for users who navigate a site using the keyboard. Drupal core ensures that the tab order follows a logical sequence and that keyboard focus is visible for interactive elements such as links, buttons, and form controls.

This is achieved by using semantic HTML elements and applying CSS styles to indicate focus. For example, Drupal core uses the :focus pseudo-class to style interactive elements when they receive keyboard focus:

```css
a:focus,
button:focus {
  outline: 2px solid #000;
}
```

## Embrace the Power of Drupal's Built-In WCAG Features

As you can see, Drupal core offers a wealth of lesser-known built-in WCAG features that can help you create a more accessible and inclusive website. By leveraging these features, you'll be well on your way to ensuring that your Drupal site is accessible to all users, regardless of their abilities.

So, the next time you're working on a Drupal project, remember to make the most of these hidden gems and create a web experience that everyone can enjoy.
