//php -> tools can create the server and so on for us like apache
//node -> manually create the server which lives in the backend of our website

const http = require("http");

//u can store the server for later use
const server = http.createServer((req, res) => {
  //get req // send response
  console.log("request made"); // note: log to console in the termainal not browser
}); //this callback function runs every time the request comes and send a response

//invoke the listen method to listen to req
server.listen(3000, "localhost", () => {
  console.log("listening to request on port no 3000");
});
//listen arguments:
//port no, host name, callback function fires when we start listening

//notes:
//local host : like a domain name on the web
//maps to loopback ip address (to ur computer) 127.0.0.1

//port no : specific channel on our computer that a certain bit of software our server should communicate through
//like doors of computer to communicate to different programs
//3000 -> for local web development

//listening to localhost:3000

//till now if u enter in the browser url : localhost:3000
//hang (browser continue loading .. and there is no response
// because till now we just detect the a request made and not sending any response yet)
