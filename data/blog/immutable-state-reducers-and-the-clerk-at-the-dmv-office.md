---
tags:
  - javascript
  - react
  - redux
  - ''
draft: false
date: 2021-01-24T22:50:00.681Z
summary: As you progress through your journey into learning React, you will eventually come across what may seem to be a paradox, the classic question of "what happens when an unstoppable force meets an immovable object?"
title: Immutable State, Reducers, and the Clerk at the DMV Office
---

As you progress through your journey into learning React, you will eventually come across what may seem to be a paradox, the classic question of "what happens when an unstoppable force meets an immovable object?"

![The unstoppable force paradox](/static/images/ksnip_20210205-203246.png 'The unstoppable force paradox')

I'm talking about state in React components, and the reconciliation that must take place between immutable state and React components that, well... react to user input, requiring constant mutations to state.

## If state must remain immutable, then how will it be updated?

To answer this question, envision a government-issued driver's license. It is an official document that each driver applies for and receives at the Department of Motor Vehicles (DMV) office. On its face, you will see an array of data about the driver: name, address, birthdate, height and weight, hair color, etc. In a sense, a driver's license is a record of the applicant's "current state" in life, including a photo.

![Spongebob's driver's license](/static/images/ksnip_20210205-204106.png "Spongebob's driver's license")

But as we progress through life, some of the data on our driver's license will need to be updated. For example, we might move to a new address, and it is usually a legal requirement that we update our driver's license with the correct address.

So how do we do it? Just get a Sharpie marker and write the new address on the face of our driver's license? Bring it to the DMV and ask them to print a new address on it for us? No... our license, in the sense of the piece of plastic we carry around with us, is immutable. So what do we do?

## A trip to the DMV (but hopefully not one staffed by sloths...)

Simple... we go to the DMV and they will print a new license for us. But does that mean that we will need to retake our driving tests, give them an updated height, weight, eye color, hair color, etc?

![DMV clerk in Zootopia](/static/images/ksnip_20210205-203055.png 'DMV clerk in Zootopia')

No... if we are simply updating our address, then we just have to show them documentation that we've indeed moved, and they can change the information in their system and then print out a new license. The new license will have all of the old information on it, but it will have the current address.

The driver's license card in our wallet is immutable, but the data on it can be updated. Just like state in React components.

So... what are Reducers in Redux, and what do they do? A Reducer is like the person at the counter of the DMV office; they serve as the link between current state and new state. Let's look an example of state, then see what a Reducer would look like.

![Driver's license data](/static/images/ksnip_20210205-201250.png "Driver's license data")

Now let's say that you're moving to a new address; but you're still going to be in the same town. The only line that will be changed is "street". So when you fill out the change of address form, that single line is the only piece of information that the DMV clerk will need to change in the computer; the rest of it doesn't need to be touched.

## A Reducer is just another JavaScript function

Here is what a (very simplified) Reducer function that the clerk would use might look like.

![Example of a reducer function](/static/images/ksnip_20210205-201731.png 'Example of a reducer function')

Notice that a switch...case statement is used to minimize the amount of processing that is going to take place. The type of mutation we are requesting here is UPDATE_STREET, so that's the return statement that will be used.

And here are the arguments that need to be passed into the Reducer:

![Reducer arguments](/static/images/ksnip_20210205-202318.png 'Reducer arguments')

All we are passing into the reducer is the single value that needs to be updated; the reducer handles the rest, because it has access to the current state.

After the reducer runs, here's what the data looks like:

![Updated license data](/static/images/ksnip_20210205-202538.png 'Updated license data')

The final step, of course, is for the DMV clerk to print out a new and immutable driver's license card.

Of course, there is a lot more to immutability and Reducers than what I've outlined here. But hopefully the ability to visualize what's happening behind the scenes will help you understand the complexities of Redux Reducers when you encounter them and begin writing your own.
