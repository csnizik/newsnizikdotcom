---
tags: ['ios', 'app store']
draft: false
date: 2021-09-28T15:34:42.442Z
summary: It's no secret that submitting an app to the App Store is much more difficult than submitting the same app to the Google Play Store. Trying to get your app past Apple's reviewers is a bit like trying to smuggle pizza into North Korea.
title: How to cross the border into the Democratic Peoples Republic of iOS
subtitle: Current App Store metadata requirements
---

It's no secret that submitting an app to the App Store is much more difficult than submitting the same app to the Google Play Store. Trying to get your app past Apple's reviewers is a bit like trying to smuggle pizza into North Korea. Apple's documentation is poor and difficult to find, the App Store Connect UI is worthless, etc.

![All I wanted to do was submit my app to the App Store!](/static/images/screen-shot-2021-09-28-at-10.53.19-am.png 'jackie-chan-appstore')

Having just successfully gotten my app approved by the Democratic People's Republic of iOS, I compiled a list of the latest metadata requirements for an iOS app being submitted to the App Store:

#### App Name

Max length: 30 characters

#### App Subtitle

Max length: 30 characters

#### Category

Primary Category is required; Secondary Category is optional.

**Categories**:

- Books
- Business
- Developer Tools
- Education
- Entertainment
- Finance
- Food & Drink
- Games
- Graphics & Design
- Health & Fitness
- Lifestyle
- Magazines & Newspapers
- Medical
- Music
- Navigation
- News
- Photo & Video
- Productivity
- Reference
- Shopping
- Social Networking
- Sports
- Stickers
- Travel
- Utilities
- Weather

#### Age Rating -

The App Store has a form that calculates the age rating for you, based on the frequency of any of the following content descriptions (choices of frequency are “None”, “Infrequent/Mild”, “Frequent/Intense”):

- Cartoon or Fantasy Violence
- Realistic Violence
- Prolonged Graphic or Sadistic Realistic Violence
- Profanity or Crude Humor
- Mature/Suggestive Themes
- Horror/Fear Themes
- Medical/Treatment Information
- Alcohol, Tobacco, or Drug Use or References
- Simulated Gambling
- Sexual Content or Nudity
- Graphic Sexual Content or Nudity
- Contests

Additionally, if the app allows unrestricted access to the internet, that would increase the age rating. And if the app allows actual gambling, there is additional documentation required.

#### Screenshots

This is one of the many places where Apple’s App Store submission requirements have reached the point of ridiculousness. Not only are all of these screenshots required, but each screenshot will be reviewed during the approval process and could be rejected for subjective reasons. (By comparison, submissions to Google Play Store require two screenshots, and the size requirements are very flexible.)

Apple requires at least 1 (max. 10) screenshot for each of the following screen sizes:

- **6.5” Display**: 1242x2688 (will also be used for 5.8” Display)
- **5.5” Display**: 1242x2208 (will also be used for 4.7”, 4” and 3.5” Display)
- **12.9” Display**: 2048x2732 (will also be used for 11”, 10.5”, and 9.7” Display)

The rounded corners on the screenshots will be added when they’re displayed in the App Store.

#### App Previews

_Optional_: you can also include up to 3 App Previews for each of the sizes listed above. These are short video clips between 15 and 30 seconds long, max 500MB each.

#### Promotional Text

Promotional text lets you inform your App Store visitors of any current app features without requiring an updated submission. This text will appear above your description on the App Store for customers with devices running iOS 11 or later, and macOS 10.13 or later. _Max length: 170 characters_

#### Description

A description of your app, detailing features and functionality. _Max length: 4000 characters_

#### Keywords

Include one or more keywords that describe your app. Keywords make App Store search results more accurate. Separate keywords with an English comma, Chinese comma, or a mix of both. _Max length: 100 characters_

#### Support URL

A URL with support information for your app. This URL will be visible on the App Store.

#### Marketing URL

A URL with marketing information about your app. This URL will be visible on the App Store.

#### App Clip Experience

An App Clip is a small part of your app that you can make discoverable for your users the moment they need it. Users running iOS 14 or later can quickly access these experiences without needing to download the full app.” Full description and requirements [here](https://help.apple.com/app-store-connect/#/dev5b665db74). _Optional, and you would probably have to be a masochist to want to add any optional metadata items like this._

#### iMessage Screenshots

Screenshots are only required for apps using the Messages framework.

#### Apple Watch Screenshots

Screenshots are only required for apps supporting Apple Watch.

#### Privacy Policy URL

A URL that links to your privacy policy. A privacy policy is required for all apps.

#### Pricing and Availability

The price determines the App Store price and your proceeds. If your app is free, choose Free. If you sell your app, you must have a Paid Application agreement.

#### In-App Purchases and App Store Promotions

You can promote up to 20 in-app purchases, and they’ll appear on your app’s product page and can be shown in search results or be featured by our editorial team. Users can tap an in-app purchase to open your app, where they can buy it. Make sure your app supports the `SKPaymentTransactionObserver` method to process this transaction.
