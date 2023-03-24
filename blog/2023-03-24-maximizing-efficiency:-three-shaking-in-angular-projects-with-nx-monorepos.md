---
layout: blog
title: Maximizing Efficiency Three-Shaking in Angular Projects with NX Monorepos
description: Three shaking problems with nx mono repos and Angular applications
published: true
date: 2023-03-24T09:30:00.021Z
---

# Maximizing Efficiency: Three-Shaking in Angular Projects with NX Monorepos

An NX monorepo is a widely used architecture for modern web development projects. It provides easier maintainability and scalability by
providing a unified structure and tools for all projects within the monorepo. This allows developers to work more efficiently by sharing and
reusing code between projects, and maintaining a consistent code base without having to use different tools, standards, and configurations.

However, one of the challenges when using NX monorepos in Angular projects is the so-called three-shaking problem that occurs when using
barrel files in combination with `@angular-devkit/build-angular:browser`. In this article, I will discuss this problem and propose a
possible solution that includes using `@nrwl/angular:webpack-browser` and a specially configured Webpack plugin.

The main difference between these two build tools is that `@nrwl/angular:webpack-browser` is based on the Webpack build engine and provides
more flexibility and customizability to the developer, while `@angular-devkit/build-angular:browser` is based on the Angular CLI build
engine and provides a standardized build environment that is easier to set up.

Regardless of the build tool used, when developing Angular applications in an NX monorepo, a common problem called the three-shaking problem
arises. The problem occurs when barrel files are used in combination with `@angular-devkit/build-angular:browser`. In this case, all
contents of the barrel file can flow into the "main.ts" file, resulting in a larger bundle size. The three-shaking process, which aims to
consider only the imports that are actually needed, cannot work properly due to this configuration, resulting in unnecessary code being
included in the final bundle file and thus slowing down the application's load time.

However, there is a solution to this problem when using `@nrwl/angular:webpack-browser` as the build tool. By creating a "webpack.config.js"
file and adding specific configurations, you can solve the three-shaking problem. Here is an example of such a configuration file:

```javascript
const webpack = require('webpack')

module.exports = {
    module: {
        rules: [
            {
                test: [/src\/index.ts/i],
                sideEffects: false,
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'STABLE_FEATURE': JSON.stringify(true),
            'EXPERIMENTAL_FEATURE': JSON.stringify(false)
        })
    ]
};
```

In this code example, the "sideEffects" parameter is used to tell Webpack that all imports from the "index.ts" file can be considered "side
effect free" and can therefore be removed if not needed. Using this configuration in conjunction with the `@nrwl/angular:webpack-browser`
package ensures that only the imports actually needed are included in the bundle file, reducing the size of the application and improving
the load time.

It is also necessary to define the path to the specific Webpack configuration file in the "options" configuration in the project.json file
of the respective project. Here is an example of the configuration in the project.json file:

```json
{
  ...
  "architect": {
    "build": {
      "builder": "@nrwl/angular:webpack-browser",
      "options": {
        "customWebpackConfig": {
          "path": "apps/my-app/webpack.config.js"
        },
   ...
}
```

This configuration sets the path to the specific Webpack configuration file for the project, so that the `@nrwl/angular:webpack-browser`
build tool can use it.

When developing Angular applications in an NX monorepo, it's important to configure the build tools properly to ensure that the tree shaking
process works correctly and only necessary imports are included in the final bundle. While `@angular-devkit/build-angular:browser` provides
a standardized build environment, it's advisable to use `@nrwl/angular:webpack-browser` for more flexibility and customization. Overall,
using NX monorepos and build tools like `@nrwl/angular:webpack-browser` provides better maintainability and scalability for modern web
development projects.