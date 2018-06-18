function sleep(waitTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, waitTime)
  })
}
