// Promise.race with empty array will never be settled

// function sleep(ms, value) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(value), ms);
//   });
// }

// const p2 = sleep(3000, "B");

// function timeout(ms, promise) {
//   let timerId = null;
//   const timerPromise = new Promise((reesolve, reject) => {
//     timerId = setTimeout(() => {
//       reject("Timeout");
//     }, ms);
//   });
//   return Promise.race([timerPromise, promise]).finally(() => {
//     clearTimeout(timerId);
//   });
// }

// timeout(3000, p2)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.race([])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
