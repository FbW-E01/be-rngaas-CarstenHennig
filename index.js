import http from "http";

function requestHandler(request, response) {
  const randomNumber = Math.random() * 50000;
  response.end(randomNumber.toString());
}

const myServer = http.createServer(requestHandler);

myServer.listen(8081);
