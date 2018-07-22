function sleep(waitTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), waitTime);
  });
}
let init = async () => {
  try {
    await sleep(1000);
    console.log('one second passed...');
  } catch (err) {
    console.log('error:', err.message)
  }
};
init();
