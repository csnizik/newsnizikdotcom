---
tags: ['react', 'javascript', 'reactrouter', 'redux', 'apollo']
published: true
date: 2020-12-10T19:40:25.657Z
summary: My mind went blank. This was after it recovered.
title: Handling State in a React App
---

I don't do well when I am put on the spot and under pressure to get the answer right... which has led to my fair share of bombed job interviews. But yesterday on an interview, I was put on the spot with this question...

> What methods do we have available to handle state in your React app?

I know all of the methods, I have used them many times, but my brain usually plays coy when it really counts, slapping my hand away when I try to open the file in my headspace. However, yesterday I managed to nail it... and to help anyone else who finds themselves struggling to answer that question, here are EIGHT methods for handling state in a React app:

## URL

Storing state in the URL is good for helping the user tracking where s/he is within the application. It's also useful for some current settings like the item they are currently viewing, filters they have applied to a view, pagination, sorting, etc. This allows the user to have access to a bookmarked URL they can use later if they want to revisit the app at the exact place. It also avoids making the app store redundant and ultimately meaningless information. A good third party library is React Router to handle URL related state.

## Web storage

Using web storage is a good option to persist state between sessions or reloads. Some examples of using web storage include cookies, localStorage and indexedDb. Web storage is also an option for storing shopping cart or partially completed form data; the user can close their browser and end their session, then re-open it and still have their selected items in their cart, or still have the form fields populated from earlier.

## Local state

Local state (as in, local to a single component... though children of a given component also have access to their parent's state) should be limited to only the data that a single component needs. Local state is not a coat closet with four seasons worth of hats, jackets, gloves, umbrellas and ponchos strewn about. For example, a text input component that collects just a user's first name should not have access to data from anywhere else in the app. Get the first name and move on. However, there are those times when we have to move state to a sibling, cousin, uncle, etc. Which brings us to:

## Lifted state

When the same state is used by multiple components, lift the state to a common parent. First, you have to have a clear understanding of the component tree in your application so that you can identify the lowest common parent. Once you have identified that parent, you lift those pieces of state that need to be shared (again, not the whole closet), then you pass the state down to child components. As long as state is only lifted when it is truly necessary, your app should remain neat and tidy with lots of dumb components.

## Derived state

Sometimes you need to calculate state on each render instead of storing it. Example: calling .length on an array or object to see how many items it has instead of storing a separate `num_items` variable; deriving an `errorsExist` boolean by checking if the errors array is empty. Deriving state avoids your state values getting out of sync, and it simplifies code by automatically recalculating as needed.

## Refs

Can hold a DOM ref, which was the original intended usage. They can manage uncontrolled components (i.e. form inputs where React doesn't control their value); they're also valuable for interfacing with third party libraries that aren't built for React. You can also use refs for such things as tracking if component is mounted, holding a timer, or holding the previous values that were in state.

## Context API

How are lives improved when we got our hands on the React Context API. The Context API serves a purpose similar to what I discussed above in "Lifted state", but Context formalizes the process and gives us much more power over it. Context defines one component as a "Provider", then allows you to nest as many components under it as needed, giving them all access to the props that the Provider component is handling.

## Third-party libraries

Yes, of course there are third-party libraries that we can use if none of the above methods of handling state fit your needs. Redux, Mobx, Recoil are popular libraries that are commonly used. There are also libraries that are great for handling data fetched from API calls; some "remote state libraries" are react-query, SWR, Relay and Apollo (my personal favorite at the moment).
