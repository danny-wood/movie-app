export const catchError = async (fn) => {
  console.log("Catch error function");

  return fn.catch((ex) => {
    // Show error message to user
    // Log exception to console
    console.error(ex);
  });
};

export function handleError(error, info) {
  //TODO: Do something with the error
  console.log("error", error);
  console.log("info", info);
}

export function resetError() {
  // Reset the state of your app so the error doesn't happen again
  console.log("Reset Error");
}
