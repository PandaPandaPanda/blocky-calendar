# Blocky Calendar

![image](https://user-images.githubusercontent.com/34975856/136696789-df826547-ffce-41d2-9e82-f7015c7805ab.png)

<br />

<div align="center">

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](http://thismypc.com/)
<br />
![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/supunlakmal/thismypc/graphs/commit-activity) [![Website thismypc.com](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://thismypc.com/) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/supunlakmal/thismypc/blob/master/LICENSE)
[![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/Thismypc/community)

</div>

> This app is aiming to combine the functionality of Calendar,Reminder, and Porject Management sites.

> Currently it only has frontend ready, so it will not save your progress, but you can fiddle around with the features. The Day Block page will lose its state when you switch route, but teh Calendar and Even Types page will temporarily store your edits.

![Web Site System](https://raw.githubusercontent.com/supunlakmal/thismypc/master/doc/gifAnimations/web_site_system.gif)

## App Screenshots

|                                                                                    Calendar                                                                                     |                                                                                   Day Blocks                                                                                   |                                                                                Event Types                                                                                |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![image](https://user-images.githubusercontent.com/34975856/136697183-23009d01-5112-4380-a370-cf7e7777b794.png) | ![image](https://user-images.githubusercontent.com/34975856/136697168-aa2d2d24-ec57-4eea-9ac3-66e49ae41ce1.png) | ![image](https://user-images.githubusercontent.com/34975856/136697200-35802998-f067-4638-bdcc-2ee996e13de0.png) |

## What (Blocky Calendar) ?

The concept behind Blocky calendar is to combine the functionalities of Calendar, Timetable, Reminder, Annual goals and present them in blocks of time.

## Why (Blocky Calendar) ?

Different from traditional calendars on the market. This project works more like a time management tool. <br />
Many tools have excel is some aspect of it, but not all. I personally use several apps together, but how I wish the data could be share among them. <br />
Blocky Calendar will present you a brand new experience on time management. <br />

## How to (Wiki) ?

All usage instruction and information update is below.

## Developing

### Progress

| Platform          | Status     |
| ----------------- | ---------- |
| Frontend | Developing |
|   -- Calendar | Complete |
|   -- Day Block | Complete |
|   -- Event Type | Complete |
|   -- Mobile Friendly | Developing |
|   -- Statistics View | Pending |
| Backend             | Pending    |


## Usage Guide

### Setting up Angular Project

```shell
    cd thisMyPCWeb
    npm i
```

![Setting up Angular Project](https://raw.githubusercontent.com/supunlakmal/thismypc/master/doc/gifAnimations/angularSetup.gif)



### Setting up Electron Project

```shell
cd thisMyPCApp
npm i
```

![ Setting up Electron Project](https://raw.githubusercontent.com/supunlakmal/thismypc/master/doc/gifAnimations/electronSetup.gif)



## ❤️&nbsp; Community and Contributions

We are committed to a fully transparent development process and **highly appreciate any contributions**.


## 📫&nbsp; Have a question? Want to chat? Ran into a problem?

We are happy to answer your questions via [GitHub Discussions](https://github.com/PandaPandaPanda/blocky-calendar/issues)! 


## 🤝&nbsp; Found a bug? Missing a specific feature?

Feel free to **file a new issue** with a respective title and description on the the [GitHub Discussions](https://github.com/PandaPandaPanda/blocky-calendar/issues) repository. If you already found a solution to your problem, **we would love to review your pull request**!


## 📘&nbsp; License

The Blocky Calendar is released under the under terms of the MIT License.

## Folder Structure
```
📦 blocky-calendar
├─ .gitignore
├─ README.md
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  └─ manifest.json
└─ src
   ├─ App.js
   ├─ App.test.js
   ├─ actions
   │  ├─ eventActions.js
   │  ├─ eventTypesActions.js
   │  ├─ eventTypesListItemActions.js
   │  ├─ navbarActions.js
   │  ├─ timeActions.js
   │  └─ types.js
   ├─ components
   │  ├─ EventTypes
   │  │  ├─ AddBtn.js
   │  │  ├─ AddEventTypeModal.js
   │  │  ├─ EditEventTypeModal.js
   │  │  ├─ EventTypeItem
   │  │  │  ├─ index.js
   │  │  │  └─ style.css
   │  │  ├─ index.js
   │  │  └─ style.css
   │  ├─ calendar
   │  │  ├─ AddEventModal.js
   │  │  ├─ EditEventModal.js
   │  │  ├─ index.js
   │  │  └─ styles.css
   │  ├─ layout
   │  │  ├─ Navbar.js
   │  │  └─ style.css
   │  └─ timeGrids
   │     ├─ DayList
   │     │  ├─ TimeSlot
   │     │  │  ├─ index.js
   │     │  │  └─ style.css
   │     │  ├─ TimeSlotMatrics.js
   │     │  ├─ index.js
   │     │  └─ style.css
   │     ├─ EventTypesList
   │     │  ├─ EventTypesListItem
   │     │  │  ├─ index.js
   │     │  │  └─ style.css
   │     │  ├─ index.js
   │     │  └─ style.css
   │     ├─ index.js
   │     └─ style.css
   ├─ css
   │  ├─ App.css
   │  └─ Gamepixies-8MO6n.ttf
   ├─ index.css
   ├─ index.js
   ├─ logo.svg
   ├─ reducers
   │  ├─ eventReducer.js
   │  ├─ eventTypesListItemReducer.js
   │  ├─ eventTypesReducer.js
   │  ├─ index.js
   │  ├─ navbarReducer.js
   │  └─ timeReducer.js
   └─ store.js
```
