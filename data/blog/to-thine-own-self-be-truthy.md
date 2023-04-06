---
tags: ['basics', 'javascript']
draft: false
date: '2022-08-01T15:24:03.333Z'
title: To thine own self be truthy
summary: 'Polonius was full of garbage advice, such as this steaming lump of poo: To thine own self be true, and it must follow as the night the day, thou canst not then be false to any man.'
images: []
---

Polonius was full of garbage advice, such as this steaming lump of poop: "To thine own self be true, and it must follow as the night the day, thou canst not then be false to any man." Besides being a rambling and awkwardly constructed sentence, this is horrible advice for developers using JavaScript, where the concepts of "true" and "false" only exist in Booleans, and everything else can be evaluated using the squishy-sounding and oft-misunderstood terms, "truthy" and "falsy".

![Polonius giving more of his rotten advice](/static/images/polonius-javascript.png 'Polonius')

Programming depends on comparisons between two or more objects to determine their equality, or lack of. When equality is determined, we use the boolean term "true"; otherwise, we use "false".

In programming languages, _Boolean_ is a primitive datatype with two possible values, _true_ and _false_. When we are evaluating or comparing values, we are seeking to apply the _Boolean_ concept in a non-Boolean context.

So are we talking about JavaScript's distinction between checking for _equality_ (==, aka "abstract equality" or "double equal") or _strict equality_ (===, aka "triple equal")? No... and yes.

Strict equality was added to JavaScript with ECMAScript 3, back in 2000. But even though it's been in the language for over two decades, its initial absence resulted in JavaScript being forever maligned for its loosey-goosey treatment of comparisons.

So what is the difference between abstract equality (==) and strict equality (===) anyway? The main difference is that abstract equality takes a very liberal approach when it comes to types.

`1 == 1` is `true`, and `1 === 1` is also `true`. They both have a type of 'number' and a value of 1. Easy.

But `1 == "1"` is `true`, whereas `1 === "1"` is `false`. Why? Because in the abstract comparison, JavaScript really, REALLY wants these two variables to be equal. So much so that the == operator overlooks the fact that the first variable is a number type and the second is a string type. Yes, when using abstract comparison between a number and a string, JavaScript first converts the number _to a string_ before making the comparison.

Likewise, `1 == [1]` is `true`, as is `1 == ["1"]`... because, you guessed it, JavaScript converts an both the number AND the array to strings before conmparing them, and it would even convert an array containing a single string value to a string before comparing it to the stringified result of the number `1`.

This is called type coercion, and it only happens in abstract comparison, not strict.

Someone made a chart that shows the extent to which JavaScript will go to prove that there are very few _special snowflakes_ in the world, especially not if you coerce every set of operands into the same type before comparing them.

![No special snowflakes, according to JavaScript's == operator](/assets/js-equality.png 'JS equality chart')

So we can see that true is not always "true". Which brings us to "truthy" and "falsy" values.

What are "truthy" and "falsy" exactly? Are they varying degrees of truthfulness, and if so, which one is more truthy? If I were betting on them at the horse track, would my trifecta be 1) true, 2) truthy, 3) false? Or would truthy win, true place, and falsy show?

No. Truthy is neither more true nor less true than true. MDN explains them like this:

> In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`.

The key phrase there is "_when encountered in a Boolean context_." In other words, truthy and falsy give us a way of evaluating non-Booleans as if they were Booleans.

Look at the list of primitive types of the values that will be defined as _falsy_. We have one _Boolean_ (`false`, duh), three _numbers_ (`0`, `-0`, `NaN` _...yes, the primitive type of `NaN`, which stands for "Not-A-Number", is... number. Nice try, `NaN`, better luck next time_) and a _bigint_ (`0n`). Rep'ing for the _undefined_ type, we have `undefined`. And straight out of Compton, representing the _null_ type, give it up for `null`, null in da house.

That's our list of _falsy_ values. Now for the list of _truthy_ values... well, it's everything else. If you don't see your value in that short list of losers up there, then rest assured that JavaScript will evaluate it as `true` in a Boolean context.

`If you have followed me up until now, then you're left with only one question: how does JavaScript evaluate a value "in a Boolean context"? (If you haven't followed me up until now, your question may be, "What is wrong with you?")

Quite simple. Like this:

```
if (something) { ... }
```

Replace "something" with one of the 8 _falsy_ values up there and your code block won't run. Add an `else` block and it will run since JavaScript checked the value against its list of 8 falsies and didn't find it. Try it in the console.

```
if (false) {
  console.log("evaluated truthy")
} else {
  console.log("evaluated falsy")
}
// "evaluated falsy"
```

Now put square brackets around `false`...

```
if ([false]) {
  console.log("evaluated truthy")
} else {
  console.log("evaluated falsy")
}
// "evaluated truthy"
```

Why? Look at our list of 8 `falsy` values up there. `false` is on the list, but... do you see `an array of false` on the list? No? Then it's `truthy`.

It's really that simple, and understanding how `truthy` and `falsy` work will ensure that your ternaries work correctly.

`const article = "finished" ? "good bye" : "sorry, I should have provided a TL;DR"`
