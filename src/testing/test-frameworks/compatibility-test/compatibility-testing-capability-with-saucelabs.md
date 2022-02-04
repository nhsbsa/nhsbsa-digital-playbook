---
layout: article
title: "Compatibility test capability"
description: "Compatibility test capability with Saucelabs"
tags: saucelabs
order: 1
---

For mobile and tablet testing you should always test on a real device before resorting to a virtual machine.
Real devices give a more realistic user experience.

Please do not install, remove or change any settings on any apps or browsers on the devices. They have all been configured to the correct browser versions.

After every session please close all browsers and remove all data.

## Browser based coverage

All of these tests are performed on virtual machines.

### Windows
All the below can be tested through automation with Selenium and manually).

- IE version 11
- Edge latest version 96
- Edge latest version-1 95
- Chrome latest version 97
- Chrome latest version-1 96
- Firefox latest version 96
- Firefox latest version-1 95

### Mac
All the below can be tested through automation with Selenium and manually.

- Safari version 12
- Safari version 13
- Safari version 14
- Safari version 15
- Chrome latest version version 97
- Chrome latest version-1 version 96
- Firefox latest version version 96
- Firefox latest version-1 version 95

## Tablet based coverage

All of these tests are performed on private and public devices.

Private devices are NHSBSA controlled and have a green phone and eye symbol next to the device name.

### iOS

- Safari version 12
    (Tests can be run through automation, manual testing must be performed on public devices with this iOS version)
- Safari version 13
    (Tests can be run through automation, manual testing can be performed on public devices as well as iPad 9.7 2017)
- Safari version 14
    (Tests can be run through automation, manual testing can be performed on public devices as well as iPad 10.2 2020)
- Safari version 15
    (Tests can be run through automation, manual testing can be performed on public devices as well as iPad 10.2 2021)
- Chrome latest version 97
    (Tests can not be run through automation, testing must be performed manually on public devices as well as all three private devices)
- Chrome latest version 96
    (This testing is not possible until the next chrome browser version is released)