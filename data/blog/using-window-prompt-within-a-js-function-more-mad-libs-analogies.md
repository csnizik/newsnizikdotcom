---
tags:
  - basics
  - javascript
draft: false
date: 2021-01-22T16:16:50.916Z
summary: More obscurum about the last obscurum.
title: Using Window.prompt() within a JS function (more Mad Libs analogies)
---

Look at this variation of the function I referred to in my last post:

```
function applyDiscount(cost, discount) {
  const eligible = prompt("Are you eligible for the discount? (y/n)");
  if (eligible.toLowerCase() === "y") {
    const newCost = cost - (cost * discount);
    return newCost;
    }
  return cost;
}
```

We fixed the redundant declaration `const discount = 0.25` so now our function works properly. And we moved `eligible` from being a function argument; it is now a `const` that is declared within the function, but one which is calling the `Window.prompt()` method to request and receive user input.

This works... there's nothing wrong with it functionally. But for the purposes of teaching new programmers JavaScript, I think it is needlessly confusing. Why? Because it is combining two different approaches to passing values into a function... and that's a technique that new programmers just don't need to try to grasp yet. Let's go back to the Mad Libs analogy.

## Here, you fill out this blank yourself...

![Mad Libs cartoon](/static/images/ksnip_20210122-104311.png "Only later did Logan's mom realize she was reading a book of Mad Libs")

Our Mad Libs fans are at it again, filling out a new page to make yet another ridiculous and nonsensical story. Person A is holding the book and asking Person B for words:

> "Give me a noun."
>
> "Flyswatter."
>
> "An adjective."
>
> "Sick."

But then Person A hands Person B the book and asks: "You write the next word right here on this blank."

Huh?

That still works... they're not doing anything wrong. Person B is still providing a word for all of the blanks in the story... but the flow and continuity are disrupted, and for what reason?

## Arguments vs. variables

A beginning programmer has a lot of new concepts to wrestle with: variables hold values, functions manipulate data, arguments are passed into functions, etc. When a JavaScript function receives arguments, the basic assumption is: the values of these arguments can vary each time the function is called, just like the Mad Libs blanks. It's the _stuff within the function_ that remains static and will be used to transform the arguments into a unique result.

But when we put one variable inside of a function that then calls a nested function (the Window.prompt() method) to grab a value at runtime... we risk giving our new programmers migraines for no reason.

So let's keep our example functions for our newbies simple. If a value is going to vary at runtime, then make it an argument to the function. Here's the original function, simplified:

```
function applyDiscount(eligible, cost, discount) {
  if (eligible === "y") {
    const newCost = cost - (cost * discount);
    return newCost;
    }
  return cost;
}

const eligible = prompt("Are you eligible for the discount? (y/n)").toLowerCase();
const cost = 24;
const discount = 0.25;
console.log(applyDiscount(eligible, cost, discount));
```

And now we have access to the value of `eligible` outside the scope of the function... just like we have access to the values used for the `cost` and `discount`.
