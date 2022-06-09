const { src, dest, watch } = require("gulp");

function copy() {
  return src("node_modules/@thelia/media-library/dist/*").pipe(
    dest("templates/backOffice/default/tb-plugin/vendor/")
  );
}

function defaultTask() {
  if (process.env.NODE_ENV === "production") {
    return copy();
  } else {
    watch(["node_modules/@thelia/media-library/dist/*"], copy);
  }
}

exports.default = defaultTask;
