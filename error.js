// error.js

// Function to handle error pages
function handleErrorPage(errorCode) {
  // Check the error code and display the appropriate error message
  switch (errorCode) {
    case 404:
      return "Page not found";
    case 500:
      return "Internal server error";
    case 403:
      return "Access forbidden";
    default:
      return "An error occurred";
  }
}

// Example usage
console.log(handleErrorPage(404)); // Output: "Page not found"
console.log(handleErrorPage(500)); // Output: "Internal server error"
console.log(handleErrorPage(403)); // Output: "Access forbidden"
console.log(handleErrorPage(401)); // Output: "An error occurred"
