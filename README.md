# Unhandled Error in Node.js Server After Response Sent

This repository demonstrates a common error in Node.js servers where an unhandled error occurs during asynchronous operations *after* the response has already been sent to the client.  The error is logged to the console, but the client is unaware of the issue. This can lead to subtle bugs that are difficult to track down.

The `bug.js` file contains the problematic code. The `bugSolution.js` file provides a corrected version that handles errors gracefully, even after the response is sent, and includes error handling within the response.