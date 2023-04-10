---
title: 'Array Methods: The Bouncers of Club JS'
date: '2023-04-08'
tags: ['JavaScript']
draft: false
summary: JS's built-in array methods are like the bouncer who guards the door at a bar or nightclub. You know, the large and usually intimidating looking person who everyone has to walk past on their way in. Whether or not you get in is up to the bouncer. Whether or not you remain in the club or bar is also up to the bouncer.
images: []
layout: PostLayout
canonicalUrl:
---

JS's built-in array methods are like the bouncer who guards the door at a bar or nightclub. You know, the large and usually intimidating looking person who everyone has to walk past on their way in. Whether or not you get in is up to the bouncer. Whether or not you remain in the club or bar is also up to the bouncer.

![Two guys trying to bribe a mean looking bouncer at a crowded nightclub](/static/images/bouncer.jpg 'Bouncer')

Arrays are lists of objects that are (usually) related in some way. Kind of like a line of people who are waiting to get into a nightclub on a busy Saturday night. What they all have in common is: they are hoping to get into the nightclub. But first, they will have to file past the bouncer, who has the final say on who gets in and who doesn't. Let's look at some of the most commonly used array methods and see what they do.

## .filter() - The Age Verifier

Our first bouncer is the filter method. This bouncer has one job and one job only: to check the ID of every person in the line and only allow in those who are old enough.

Each potential partier stops at the filter bouncer and hands over their ID. The bouncer looks at it, but they're not looking at every value on it; they don't care about your height, weight, address, driver's license number, etc. They're looking at one and only one piece of data: your date of birth. If it is before a certain date, you pass this filter and you are allowed inside. If it is after that date, you do not pass and you are filtered out.

We could write that like this:

```javascript
const potentialPartyGoers = [
  { name: 'Alice', dateOfBirth: '1999-06-21' },
  { name: 'Billy', dateOfBirth: '2010-08-14' },
  { name: 'Carl', dateOfBirth: '1997-02-01' },
]

const partyGoers = potentialPartyGoers.filter(
  (person) => person.dateOfBirth <= '(the acceptable date)'
)
console.log(partyGoers)
// Output: [{name: 'Alice', dateOfBirth: '1999-06-21'}, { name: 'Carl', dateOfBirth: '1997-02-01'}]
```

Uh oh, Billy got busted trying to sneak in. No partying for Billy!

## .find() - The VIP Spotter

This bouncer's job also involves evaluating every person in the line, but with a much different directive: the club owner told our bouncer that Post Malone is expected to show up tonight. If he does, the bouncer is to make sure Post gets the VIP treatment. He will get to skip the line and go directly in, where he will have access to the Champagne Room.

```javascript
const potentialPartyGoers = [
  { firstName: 'Andy', lastName: 'Jones' },
  { firstName: 'Becky', lastName: 'Malone' },
  { firstName: 'Chuck', lastName: 'Brown' },
  { firstName: 'Frank', lastName: 'Jackson' },
  { firstName: 'Post', lastName: 'Malone' },
  { firstName: 'George', lastName: 'Smith' },
]

const vipList = [
  potentialPartyGoers.find((person) => person.firstName === 'Post' && person.lastName === 'Malone'),
]
console.log(vipList)
// Output: [firstName: 'Post', lastName: 'Malone']
```

Poor Becky Malone. He's your uncle. Riiiiiiiiight. Get back in line, Becky.

## .map() - The Hand Stamper

The next bouncer is the one who has the magical stamp, the one that stamps your hand with invisible ink that only shows up under a blacklight. Everyone in the line must stop at this bouncer and allow him to mark their hand with his stamp, because without the stamp they won't be permitted to stay in the club.

```javascript
const potentialPartyGoers = [
  { name: 'Henry', dateOfBirth: '2001-06-2' },
  { name: 'Ian', dateOfBirth: '2000-03-24' },
  { name: 'Jackie', dateOfBirth: '2002-01-7' },
  { name: 'Kate', dateOfBirth: '2000-08-19' },
]

const partyGoers = potentialPartyGoers.map((person) => {
  return { ...person, stamped: true }
})
console.log(partyGoers)
// Output:[ { name: 'Henry', dateOfBirth: '2001-06-2', stamped: true}, { name: 'Ian', dateOfBirth: '2000-03-24', stamped: true}, { name: 'Jackie', dateOfBirth: '2002-01-7', stamped: true}, { name: 'Kate', dateOfBirth: '2000-08-19', stamped: true},]
```

The map() method performs a task as a callback function; the same task on every member of the array. In this case, the task was to add a stamped property and set it to true.

## .pop() - Last Call

This bouncer's job is super simple: kick the last person out of the line for no reason at all other than: they're the last person (and of course they got in line after he the bouncer had already declared the line closed, so... no partying for them.) Our bouncer doesn't even care who the last person is... they're last, so they're not coming in.

```javascript
const potentialPartyGoers = ['Liam', 'Macy', 'Ned', 'Olivia']

const tooBadSoSad = potentialPartyGoers.pop()
console.log(tooBadSoSad)
// Output: ['Olivia']
```

Poor Olivia. Maybe she can get into Club Python.

## .push() - The One Who Pushes You Into the Line

Each new person that shows up needs to get in line, and this bouncer's job is to make sure that happens. Someone new shows up, they get shoved into the back of the line.

```javascript
const potentialPartyGoers = ['Penny', 'Quentin', 'Ramon']

const potentialPartyGoers.push('Sid')
console.log(potentialPartyGoers)
// Output: ['Penny', 'Quentin', 'Ramon', 'Sid']
```

No VIP treatment for you, Sid. You get pushed into the back of the line just like everyone else. That means that the person who is at the front of the line (potentialPartyGoers[0]) remains 'Penny'; she and everyone else in line remain at the index they were at before Sid got there.

That's just a few of the array methods you have available in JS. And of course, array methods can be combined; we wouldn't expect to see a half dozen or more bouncers, each doing something different with the potentialPartyGoers. For example, one bouncer is able to both allow people in AND stamp them:

```javascript
const cardedAndStamped = potentialPartyGoers
  .filter((person) => person.dateOfBirth <= <the right date>)
  .map((person) => {
    return { ...person, stamped: true }
  })
```
