export const catchError = async (fn) => {
  console.log("Catch error function");
  return fn.catch((ex) => {
    // Show error message to user
    // Log exception to console
    console.error(ex);
  });
};
