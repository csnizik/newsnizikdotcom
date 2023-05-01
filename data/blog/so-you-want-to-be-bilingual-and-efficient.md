---
title: 'So You Want to be Bilingual and Efficient'
subtitle: My personal tips and tricks for smoothly transitioning from JS to PHP and back
date: '2023-04-30'
tags: ['javascript', 'php', 'basics']
draft: false
summary: I fell in love with programming in the early 80s with a language called BASIC (Beginner's All-purpose Symbolic Instruction Code). It was easy to learn, using line numbers and a strictly procedural flow, and it was the default language on several computers of that time. My first was a Commodore VIC-20, followed by a Commodore 64, and on those two machines I became fluent in my first programming language.
images: []
layout: PostLayout
---

I fell in love with programming in the early 80s with a language called BASIC (Beginner's All-purpose Symbolic Instruction Code). It was easy to learn, using line numbers and a strictly procedural flow, and it was the default language on several computers of that time. My first was a Commodore VIC-20, followed by a Commodore 64, and on those two machines I became fluent in my first programming language.

Some time in the early 90s, Visual Basic came out and I played with it as a hobby. But I didn't follow Visual Basic all the way to its evolution into .NET, because some time in the 90s I discovered HTML and began learning web development. By the late 90s I had discovered PHP for server-side programming, which would then return customized HTML to the browser.

My next lingual diversion was into MySQL, which was an essential component of LAMP stacks that were becoming the de facto way to do web development. From there, I learned JavaScript, which I originally saw as just an interesting diversion that probably wouldn't ever catch on. Eventually, JS and PHP became my top two programming languages, with a few side trips into Python and Ruby along the way.

From the first time I pivoted from working in one language to working in another, my brain struggled with context switching. If, at any given time, I was fully involved in a JS project that I had been working on for a few months, you could ask me to write the simplest function using PHP and for a few minutes, my brain would pretty much go on strike.

Now that I am at a point in my career where I work with a pretty balanced combo of PHP and JS, I thought it might help any readers (and me) to do a quick recap of some things that a JS dev needs to keep in mind when jumping from a JS project into PHP.

<aside class="md:w-1/2 md:float-left w-full bg-gray-100 text-gray-800 px-4 py-2 mb-4 leading-normal tracking-wider">

  <h3 class="text-blue-800">Some old school BASIC</h3>
  <p><em>Calculate and print the first 10 Fibonacci numbers</em></p>
  <code class="text-xs font-mono">
   10 LET A = 0<br />
   20 LET B = 1<br />
   30 PRINT A<br />
   40 PRINT B<br />
   50 FOR I = 1 TO 8<br />
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;60 LET C = A + B<br />
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;70 PRINT C<br />
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;80 LET A = B<br />
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;90 LET B = C<br />
   100 NEXT I<br />
   110 END
  </code>
  <p>Still rocking it after all these years :)</p>
</aside>

## Key Differences between PHP and JavaScript

Before diving into PHP, it's crucial to understand the primary differences between PHP and JavaScript:

**Server-side vs. client-side**: PHP is a server-side language, while JavaScript is primarily a client-side language. This means that PHP runs on the server and generates HTML, which is then sent to the browser. In contrast, JavaScript runs directly in the browser, allowing for dynamic content and interactivity.

**Syntax**: While both PHP and JavaScript share some similarities in syntax (such as using curly braces for code blocks and semicolons to separate statements, which are optional in JS but mandatory in PHP), there are differences in the way variables are declared, how functions are defined, and how arrays and objects are handled.

**Concurrency model**: JavaScript uses an event-driven, non-blocking I/O model, while PHP uses a more traditional, synchronous model. This impacts how developers handle asynchronous tasks in each language.

## PHP Tips and Tricks for JavaScript Developers

Here are some PHP tips and tricks that can be particularly helpful for developers switching from a JS mindset:

### Variable declaration

In PHP, variables are declared with a dollar sign (`$`) before the variable name. (To this day, my brain still sometimes reads PHP variable names as "string such-and-such"; i.e. for a variable `$time`, my brain sees it and wants to call it "string 'Time'", which as best as I can remember is a holdover from BASIC.)

```php
$number = 42;
$text = "Hello, World!";
```

### Functions

Function declarations in PHP are similar to JavaScript, but with some differences in syntax.

```php
function add($a, $b) {
  return $a + $b;
}
```

### Associative arrays

PHP doesn't have objects like JavaScript, but it does have associative arrays, which can be used similarly.

```php
$person = array("name" => "John", "age" => 30);
echo $person["name"]; // Output: John
```

## Tools, Libraries, and Frameworks for a Smooth Transition

Several tools, libraries, and frameworks can make transitioning from JavaScript to PHP easier:

1. **Composer**: A dependency manager for PHP, similar to npm for JavaScript. Composer makes it easy to manage libraries and their dependencies in PHP projects.

2. **Laravel**: A popular PHP web framework that offers a clean and elegant syntax, similar to JavaScript frameworks like Express.js. Laravel provides a solid foundation for building web applications and comes with built-in tools for routing, authentication, and more.

3. **Symfony**: Another powerful PHP framework, Symfony offers a set of reusable components and a robust architecture for building web applications. It's an excellent choice for developers who prefer a more structured approach.

## Handling Asynchronous Tasks in PHP

While PHP's concurrency model is primarily synchronous, there are ways to handle asynchronous tasks, similar to JavaScript's async/await and promises:

### ReactPHP

A library that brings event-driven, non-blocking I/O to PHP, allowing you to write asynchronous code similar to JavaScript's async/await.

```php
$promise = new React\Promise\Promise(function ($resolve, $reject) {
  // Do something asynchronous
});

$promise->then(function ($value) {
  // Handle the resolved value
});
```

### Swoole

An extension for PHP that enables developers to write high-performance, scalable, concurrent applications using an event-driven, asynchronous, and coroutine-based approach. Swoole can be used to build web servers, microservices, and more.

```php
use Swoole\Coroutine;

Coroutine::create(function () {
    $client = new Swoole\Coroutine\Http\Client("www.example.com", 80);
    $client->get("/");

    echo $client->body;
});
```

## Adapting JavaScript Knowledge for PHP

Leveraging your existing JavaScript knowledge can help you work efficiently and effectively with PHP:

**Control structures**: Familiarize yourself with PHP's control structures, which are similar to JavaScript's. Examples include if, else, while, for, and foreach.

**Error handling**: PHP uses exceptions, similar to JavaScript's try, catch, and finally. Learn how to use these constructs to handle errors gracefully in PHP.

**Code organization**: PHP supports namespaces, which can help you keep your code organized and modular, similar to JavaScript modules and imports.

## Best Practices, Common Pitfalls, and Techniques

Finally, it's essential to be aware of best practices, common pitfalls, and techniques to ensure a smooth transition from JavaScript to PHP:

- Follow PHP coding standards: Adopt the PHP-FIG coding standards, such as PSR-1 (Basic Coding Standard) and PSR-2 (Coding Style Guide), to ensure your code is consistent and easy to read.

- Learn about PHP's built-in functions: PHP has a vast library of built-in functions for handling arrays, strings, dates, and more. Familiarize yourself with these functions to write efficient and concise code.

- Be aware of PHP version differences: PHP has undergone significant changes over the years, with newer versions offering improved performance, security, and language features. Make sure you're using a modern PHP version and familiarize yourself with the differences between versions.
