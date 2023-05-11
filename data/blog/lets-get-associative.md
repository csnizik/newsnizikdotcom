---
title: 'Hip Hip Array! (Part One)'
subtitle: Some techniques for dealing with associative arrays from someone who pretty much hates using associative arrays
date: '2023-05-11'
tags: ['PHP']
draft: false
summary: Associative arrays are clunky, especially when you compare them to JavaScript objects, which you probably shouldn't do. And even moreso when you compare them to JS's Map object, which you definitely shouldn't do. But I decided to see how well I could unclunkify them.
images: []
layout: PostLayout
canonicalUrl:
---

Associative arrays are clunky, especially when you compare them to JavaScript objects, which you probably shouldn't do. And even moreso when you compare them to JS's Map object, which you definitely shouldn't do. But I decided to see how well I could unclunkify them.

For the uninitiated, here is an example of an associative array, albeit a hyperbolic one created with the intention of mockery-making.

![Huge and ridiculously complex associative array in PHP](/static/images/arrayhell.png)

Ok, enough mockery. Let's see some operations you can perform on them; maybe I'll hit on one you didn't know about.

### `array_map`

Not exactly an "advanced" operation, `array_map` is still super handy. From the docs:

> **`array_map()`** returns an array containing the results of applying the **callback** to the corresponding value of **array** (and **arrays** if more arrays are provided) used as arguments for the **callback**. The number of parameters that the **callback** function accepts should match the number of arrays passed to **`array_map()`**. Excess input arrays are ignored. An ArgumentCountError is thrown if an insufficient number of arguments is provided.

```php
array_map(?callable $callback, array $array, array ...$arrays): array
```

Iteration is the heart of coding and one of the core ways to keep your code DRY, and mapping over arrays is essential.

## `array_multisort`

> **`array_multisort()`** can be used to sort several arrays at once, or a multi-dimensional array by one or more dimensions. Associative (string) keys will be maintained, but numeric keys will be re-indexed.

That last sentence is what makes **`array_multisort()`** stand out from the rest of PHP's sorting functions: it is the only method that will maintain key associations for string keys but not for int keys.

First let's use string keys. Take this example of data fetched from a relational database:

```md
restaurant | menu_item
-------+--------
42 | 5
14 | 1
15 | 4
91 | 3
13 | 6
62 | 2
```

After fetching, I have arrays of rows:

```php
$data[] = array('restaurant' => 42, 'menu_item' => 5);
$data[] = array('restaurant' => 14, 'menu_item' => 1);
$data[] = array('restaurant' => 15, 'menu_item' => 4);
$data[] = array('restaurant' => 91, 'menu_item' => 3);
$data[] = array('restaurant' => 13, 'menu_item' => 6);
$data[] = array('restaurant' => 62, 'menu_item' => 2);
```

I want to order these results by restaurant (ascending) and menu_item (descending). My first challenge is: I only have rows and I need columns.

```php
foreach ($data as $key => $row) {
  $restaurant[$key] = $row['restaurant'];
  $menu_item[$key] = $row['menu_item'];
}
```

Now I can run **`array_multisort`**:

```php
array_multisort($restaurant, SORT_ASC, $menu_item, SORT_DESC, $data)
```

...and I get:

```md
restaurant | menu_item
-------+--------
13 | 6
14 | 5
15 | 4
42 | 3
62 | 2
91 | 1
```

Now look at an example of sorting two arrays at once, based on the values in one of the arrays. _Note: I'm running this test on PHP 8. Versions prior to 8.0.0 had a weirdness with how they handled equal values when sorting._

```php
$array1 = array(5, 5, 3, 2, 1);
$array2 = array('a', 'b', 'c', 'd', 'e');

array_multisort($array1, $array2);

var_dump($array1);
var_dump($array2);
```

And I get:

```php
array(5) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
  [3]=>
  int(5)
  [4]=>
  int(5)
}
array(5) {
  [0]=>
  string(1) "e"
  [1]=>
  string(1) "d"
  [2]=>
  string(1) "c"
  [3]=>
  string(1) "a"
  [4]=>
  string(1) "b"
}
```

Both arrays were sorted in tandem using the values from the first array. But why did this make the values "c" and "d" in **`array2`** get swapped? Let's break down what happened:

**Step 1: sort `array1` in ascending order.** The original values were: `[5,5,3,2,1]`. The lowest value is currently found at **`array1[4]`**. So in the new sort order, it will become **`array1[0]`**. The sorting continues until it hits the equivalent values at positions 0 and 1 of the original array. What happens with them? Prior to PHP 8.0.0, their relative order in the sorted array was undefined. In other words, it was unstable and unpredictable and could lead to very slippery bugs. But thankfully, PHP 8 fixes this and now _**they retain their original order**_. So since in the original order, the first `5` was ordered lower than the second `5`, in the new order it will maintain that relationship. However, we wouldn't know that except that we're doing a multisort, where the next step is...

**Step 2: sort `array2` using the same sort order that was used for `array1`.** Now we will be able to see how the equivalent values had their relationship preserved. The values for `e`, `d`, and `c` correponded to the `1`, `2`, and `3` in **`array1`**, respectively. So they got the same treatment. The values `a` and `b` correspond to the original **`array1[0]`** and **`array1[1]`**, respectively. Since those values were evaluated as equal and left in their original order, `a` and `b` were given the same treatment and left in their original order.

Well, this blog post didn't go in the direction I originally envisioned... somewhat of a detour happened there. So I'm going to call this "Part One" and come back to array methods in a future post.
