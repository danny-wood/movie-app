//* Inspired by this article: https://medium.com/javascript-in-plain-english/how-to-avoid-try-catch-statements-nesting-chaining-in-javascript-a79028b325c5
export function to(promise) {
  return promise
    .then((data) => {
      return { data, error: null };
    })
    .catch((error) => {
      // Log error to console?
      return { data: null, error };
    });
}
