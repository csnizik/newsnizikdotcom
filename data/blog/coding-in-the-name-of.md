---
title: Coding in the Name Of...
subtitle: Using PHP Namespaces to Tame Your Code
date: '2023-05-18'
tags: ['php']
draft: false
summary: 'PHP namespaces are a powerful way of grouping stuff together: classes, interfaces, functions, constants. They give you the ability to tame your code, avoiding naming conflicts between different parts of your code or with any third-party libraries you are using.'
images: []
layout: PostLayout
---

PHP namespaces are a powerful way of grouping stuff together: classes, interfaces, functions, constants. They give you the ability to tame your code, avoiding naming conflicts between different parts of your code or with any third-party libraries you are using.

You declare a namespace at the top of a PHP fiule using the `namespace` keyword. Here's an easily recognizable example of a namespace declaration:

![Namespace declaration at the top of a module's Controller file in Drupal](/static/images/namespaceimg.png)

Everything within this file will be part of the namespace that's declared. This gives us the first benefit of declaring namespaces: we can simplify and unify the way we name functions, constants, variables, etc. Our getter and setter methods in different modules can use the same names without collisions because each one has its own unique namespace.

## Defining your space

The syntax rules for creating a new namespace are very straightforward:

1. **Placement**: a namespace declaration must be the first line in your file, right after the opening `<?php` tag... unless you are using a declare construct.

   ```php
   <?php

   namespace MyNamespace;
   declare(strict_types=1);

   // Fatal error: strict_types declaration must be the very first
   // statement in the script
   ```

   ```php
   <?php

   class Dog {
    static function growl() {
      echo "Grrrrrrrr";
    };
   }

   namespace MyNamespace {};

   // Fatal error: Namespace declaration has to be the first statement
   // or after any declare call in the script
   ```

   There is another exception to the "must be the first line rule": multiple namespaces are permitted to be declared in a single file, which obviously would require only one to be at the top of the file. This practice, though permissible, is not recommended.

1. **No leading backslash**: a fully qualified name (i.e. a name starting with a backslash) are not allowed. They would be interpreted as relative namespace expressions.

1. **One namespace can be defined in multiple files**: it often makes sense to split one long file into several smaller files. We can do this within a single namespace; each file would get the same namespace declaration at the top.

1. **Sub-namespaces**: namespaces have much in common with file systems, including the ability to add levels of sub-namespaces. However, nested namespaces are not allowed. So:

   ```php
   <?php

   namespace MyNamespace {
     namespace MySubnamespace {
       class MyClass {}
     }
   }

   // Fatal error: Namespace declarations cannot be nested.
   ```

   However, you can "simulate" a nested namespace like this:

   ```php
   <?php

   namespace MyNamespace\MySubnamespace {
     class MyClass{}
   }
   ```

Those are some of the basics of namespacing. And the beauty of namespaces are: if you don't want to use them, fine! They don't affect any existing code in any way, so if you want to leave them out, you can.
