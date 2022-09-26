// solved recursively
// timeC = o(n) spaceC = o(n)
const fib = (n) => {
  // f(n -1) + f(n - 2) for n > 1
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
};
