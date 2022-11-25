---
layout: blog
title: Angular 14 Features
description: Angular 14 Features
published: true
date: 2022-11-25T13:32:10.795Z
rating: 0
---
### Standalone Component

With the release of Angular 14 the - by the community - long awaited feature *Standalone Components* was released.

This feature should replace the *Module Components* (SCAM). In this approach, per component, a module was created to keep both the bundle size small. However also, in order to be able to arrange the project structure better.

To apply this principle or to understand exactly is often not easy, especially for developers who start with Angular.

Standalone Components are intended to facilitate the introduction and promote comprehensibility. As the name suggests, all dependencies for the component to be created are declared in the component itself.

This makes it both clearer and easier to understand. Plus the biggest benefit is that the component already brings its own dependencies and nothing more needs to be declared.

Translated with www.DeepL.com/Translator (free version)

### Inject

Another very cool new feature is that the injection no longer has to take place in the constructor. It can also be done outside the constructor.

### Component & Import

![](https://gitlab.com/newcubator/devsquad/uploads/ccf20c1c4e17a9e8b464bf9d4b4d25d4/grafik.png)

- - -

![Import Products Component](https://gitlab.com/newcubator/devsquad/uploads/97e41b51774319e82c4818520c54cd02/grafik.png)

- - -

### Result 🚀

![](https://gitlab.com/newcubator/devsquad/uploads/6ffd0a0e36954a2b869425ff0b04c7dc/grafik.png)