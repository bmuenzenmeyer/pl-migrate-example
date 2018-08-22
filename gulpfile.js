/******************************************************
 * PATTERN LAB NODE
 * EDITION-NODE-GULP
 * The gulp wrapper around patternlab-node core, providing tasks to interact with the core library.
 ******************************************************/

const gulp = require("gulp");
const argv = require("minimist")(process.argv.slice(2));

/******************************************************
 * PATTERN LAB  NODE WRAPPER TASKS with core library
 ******************************************************/
const config = require("./patternlab-config.json");
const patternlab = require("@pattern-lab/core")(config);

function build() {
  return patternlab
    .build({
      watch: argv.watch,
      cleanPublic: config.cleanPublic
    })
    .then(() => {
      // do something else when this promise resolves
    });
}

function serve() {
  return patternlab.server
    .serve({
      cleanPublic: config.cleanPublic
    })
    .then(() => {
      // do something else when this promise resolves
    });
}

gulp.task("patternlab:version", done => {
  console.log(patternlab.version());
  done();
});

gulp.task("patternlab:patternsonly", done => {
  patternlab.patternsonly(config.cleanPublic).then(() => {
    done();
  });
});

gulp.task("patternlab:liststarterkits", done => {
  patternlab.liststarterkits().then(() => {
    done();
  });
});

gulp.task("patternlab:loadstarterkit", () => {
  patternlab.loadstarterkit(argv.kit, argv.clean);
});

gulp.task("patternlab:build", done => {
  build().then(() => {
    // do something else when this promise resolves
    done();
  });
});

gulp.task("patternlab:serve", () => {
  serve().then(() => {
    // do something else when this promise resolves
  });
});

gulp.task("patternlab:installplugin", () => {
  patternlab.installplugin(argv.plugin);
});

gulp.task(
  "default",
  gulp.series("patternlab:version", done => {
    done();
  })
);
