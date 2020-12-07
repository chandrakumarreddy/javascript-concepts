// 1. using Promise.resolve , we can covert promise like objects to native promises
// 2. Promise.resolve(resolvedPromise) === resolvedPromise returns true
// 3. Promise.resolve(rejectedPromise) === rejectedPromise returns true

const resolvedPromise = Promise.resolve(42);
Promise.resolve(resolvedPromise) === resolvedPromise; // true

const rejectedPromise = Promise.reject(42);
Promise.resolve(rejectedPromise) === rejectedPromise; // true
