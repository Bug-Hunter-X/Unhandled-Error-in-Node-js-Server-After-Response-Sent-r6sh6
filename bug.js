const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }).catch(error => {
    // Error handling, but the response is already sent
    console.error('An error occurred:', error);
  });
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might throw an error
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random error
      if (Math.random() < 0.5) {
        reject(new Error('Simulated asynchronous error'));
      } else {
        resolve();
      }
    }, 100);
  });
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});