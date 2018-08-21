# pl-migrate-example

Pattern Lab 2.X to 3.X

This repository documents the steps necessary to take a working example of Pattern Lab Node 2.X (Gulp Edition) and upgrade to the lastest Pattern Lab Node 3.X Alpha.

### Setup

1. Windows `10`
1. `node -v` = `8.9.4`
1. `$ gulp -v` =
   - CLI version `2.0.1`
   - Local version `4.0.0`
1. Downloaded https://github.com/pattern-lab/edition-node-gulp/releases/tag/v1.3.4 and extracted into this repo.
1. `npm install @pattern-lab/starterkit-mustache-demo --save`
1. `npm install`
1. `gulp patternlab:loadstarterkit --kit="@pattern-lab/starterkit-mustache-demo"`
1. `gulp patternlab:serve` - confirm demo output

### Overall game-plan

1. Install new dependencies

   - `npm install --save @pattern-lab/cli @pattern-lab/core @pattern-lab/engine-mustache @pattern-lab/uikit-workshop`

1. Remove old dependencies:

   - `npm uninstall browser-sync patternlab-node styleguidekit-assets-default styleguidekit-mustache-default`

1. Let's discuss each addition and removal.
   - The new core library.
   - ```diff
     + "@pattern-lab/core": "^3.0.0-alpha.16",
     - "patternlab-node": "^2.0.0"
     ```
   - Added the default engine explicitly.
   - ```diff
     + "@pattern-lab/engine-mustache": "^2.0.0-alpha.8",
     ```
   - Added the new command line interface for increased capabilities.
   - ```diff
     + "@pattern-lab/cli": "0.0.1-alpha.23",
     ```
   - Combined styleguidekits into a single entity, [uikits](https://github.com/pattern-lab/patternlab-node/pull/840).
   - ```diff
     - "styleguidekit-assets-default": "^3.0.0",
     - "styleguidekit-mustache-default": "^3.0.0",
     + "@pattern-lab/uikit-workshop": "1.0.0-alpha.7",
     ```
   - Removed browser-sync. Core now serves Pattern Lab output internally.
   - ```diff
     - "browser-sync": "^2.0.0",
     ```
1. Update `patternlab-config.json` - referring to https://github.com/pattern-lab/patternlab-node/blob/dev/packages/edition-node-gulp/patternlab-config.json when in doubt.

   - Remove following keys. All have been replaced with better conventions.
   - ```diff
     - cleanOutputHtml
     - debug
     - ignored-directories
     - ignored-extensions
     - ishMinimum
     - ishMaximum
     - patternStates
     ```

   - Add following keys. See the [configuration documentation](https://patternlab.io/docs/advanced-config-options.html#node) for more information about each key.
   - ```diff
     + "ishViewportRange": {
     +    "s": [240, 500],
     +    "m": [500, 800],
     +    "l": [800, 2600]
     + },
     + "logLevel": "info",
     + "serverOptions": {
     +    "wait": 1000
     + },
     + "theme": {
     +    "color": "dark",
     +    "density": "compact",
     +    "layout": "horizontal"
     + },
     + "uikits": [
     +    {
     +      "name": "uikit-workshop",
     +      "outputDir": "",
     +      "enabled": true,
     +      "excludedPatternStates": [],
     +      "excludedTags": []
     +    }
     +  ]
     ```

   - Alter following keys.
   - ```diff
      "paths": {
        "source": {
          "root": "./source/",
          "patterns": "./source/_patterns/",
          "data": "./source/_data/",
          "meta": "./source/_meta/",
          "annotations": "./source/_annotations/",
     -    "styleguide": "./node_modules/styleguidekit-assets-default/dist/",
     +    "styleguide": "dist/",
     -    "patternlabFiles": "./node_modules/styleguidekit-mustache-default/views/",
     +    "patternlabFiles": {
     +      "general-header": "views/partials/general-header.mustache",
     +      "general-footer": "views/partials/general-footer.mustache",
     +      "patternSection": "views/partials/patternSection.mustache",
     +      "patternSectionSubtype": "views/partials/patternSectionSubtype.mustache",
     +      "viewall": "views/viewall.mustache"
     +    },
          "js": "./source/js",
          "images": "./source/images",
          "fonts": "./source/fonts",
     -    "css": "./source/css/"
     +    "css": "./source/css"
        },
        "public": {
     -    "root": "./public/",
     -    "patterns": "./public/patterns/",
     -    "data": "./public/styleguide/data/",
     -    "annotations": "./public/annotations/",
     -    "styleguide": "./public/styleguide/",
     -    "js": "./public/js",
     -    "images": "./public/images",
     -    "fonts": "./public/fonts",
     -    "css": "./public/css"
     +    "root": "public/",
     +    "patterns": "public/patterns/",
     +    "data": "public/styleguide/data/",
     +    "annotations": "public/annotations/",
     +    "styleguide": "public/styleguide/",
     +    "js": "public/js",
     +    "images": "public/images",
     +    "fonts": "public/fonts",
     +    "css": "public/css"
        }
      },
     ```
