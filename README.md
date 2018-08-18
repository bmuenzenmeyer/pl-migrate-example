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

1. Take
