---
tags:
  - javascript
  - basics
draft: false
date: 2021-01-21T16:06:10.019Z
summary: What is wrong with this function? What is wrong with YOU?
title: Understanding Function Arguments Using Mad Libs
---

One of my students in an intro to JavaScript course asked me what was wrong with this function:

```
function applyDiscount(eligible, cost, discount) {
  if (eligible === true) {
    const discount = 0.25;
    const newCost = cost - (cost * discount);
    return newCost;
    }
  return cost;
}
```

The purpose of the function is to apply a `discount` percentage to a `cost` if the argument `eligible` is true. But the function was throwing an error and the student couldn't figure out why.

The problem here was a misunderstanding about what a function's arguments are and what purpose they serve. The function above can handle three arguments: `eligible`, `cost`, and `discount`. The function then checks to see if the `eligible` argument received a value of `true`; if it didn't, then the function doesn't have any calculations to do and can simply return whatever value was passed in for the argument `cost`.

But if `eligible` received a value of `true`, then the function needs to perform a calculation and return a `newCost`, and the calculation begins on line 3. But wait... on line 3, we are declaring a new variable, which we are calling `discount`, and assigning it a value of 0.25... then we're attempting to perform the calculation, using that value and whatever value was passed in via the `cost` argument... but the JS engine grinds to a halt on line 3. Why? Because the student didn't understand what arguments are.

## Functions are like Mad Libs

Mad Libs touts itself as "The World's Greatest Word Game", though I personally question that claim. A typical page in a Mad Libs book looks like this:

![Mad Libs page](/static/images/mlblank.png "The World's Greatest Word Game, Mad Libs")

If you've never been exposed to Mad Libs, it is:

> ...a phrasal template word game which consists of one player prompting others for a list of words to substitute for blanks in a story before reading aloud. The game is frequently played as a party game or as a pastime. - [Wikipedia](https://en.wikipedia.org/wiki/Mad_Libs)

More simply put: Person A holds the book so that Person B can't see the page and thus has no idea what kind of story they are contributing to. Person A goes through each line of the story and, where there is a blank, asks Person B for a random word of the specified type... "Give me a Plural Noun", which could elicit anything from "Gummi Worms" to "Terra Cotta Warriors". Person B writes Person A's response in the appropriate blank and goes to the next one, and Person B is kept in the dark about how the storyline is shaping up. Finally when all of the blanks are filled in, Person A reads back the story, complete with Person B's randomly inserted (and probably nonsensical) words and phrases, and everyone dies laughing.

JavaScript functions use this same paradigm, just in a modified format. Let's take the first sentence of the page up there and show what it would look like as a function:

```
function afraidOfTheDark(pluralNoun, verb, noun) {
  const sentence = `I was home alone and scared out of my ${pluralNoun}. I could hear the wind ${verb}, and off in the distance a/an ${noun} was howling.`
  return sentence;
}
```

Each argument in the function is the same as a blank in the Mad Lib. It represents a piece of data that, if the function receives it as an argument, will be used to produce the function's result. If the argument is left out, then the corresponding blank will not be filled in.

## Reusing someone else's Mad Libs book

![Mad Libs sample with blanks filled in](/static/images/ml01.png 'Wait, I thought Teslas were quiet')

Have you ever picked up a Mad Libs book and found that someone else has already filled in all of the blanks? It's not fun now because the interactivity has been disabled. Sure, Person A could still ask Person B for "arguments", but the values have already been filled in with someone else's answers and the story will always read exactly the same.

And that concept was what my student was missing. The function declared `discount` as an argument that it would use if it were passed in... but then in the body of the function, the "blank" where `discount` would be used was already filled in. (The error that my student got was because they are using the keyword `const` to declare a variable that has already been declared as an argument. Leaving off the keyword `const` would allow the function to run, but no matter whether a value for `discount` was passed in or not, the value `0.25` would overwrite it... just like the used Mad Libs page.)
