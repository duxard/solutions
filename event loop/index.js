function log(x) {
  console.log(x);
}

queueMicrotask(() => log('queueMicrotask'));
log('start');

setTimeout(() => {
  log('setTimeout1 ');
  Promise.resolve().then(() => log('Promise setTimeout1'));
}, 0);

setTimeout(() => log('setTimeout2'), 0);

Promise.resolve().then(() => log('Promise resove 1'));

Promise.resolve().then(() => log('Promise resove 2'));

log('finish');
