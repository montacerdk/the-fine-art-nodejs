/**
 * Event Loop Example.
 */

const log = console.log;

log("1111");
log("2222");
log("3333");

log("AAAA");

setTimeout(() => {
  log("BBBB");
}, 0);

log("CCCC");
