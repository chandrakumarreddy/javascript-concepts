// Promise constructor takes one parameter (Executor function) that is invoked staright away.
// Executor function takes two parameter resolve and reject.
// Executor function is synchronous

/**
 * This is a function
 *
 * @param {number} ms A number param
 * @retuns {Promise} A valid promise
 */

function sleep(ms) {
  return new Promise((resolve) => {
    throw new Error("error undefined");
    setTimeout(resolve, ms);
  });
}

sleep(1000)
  .then(() => {
    console.log("object");
  })
  .catch((err) => {
    console.error(err);
  });
