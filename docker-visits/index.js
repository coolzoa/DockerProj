//get express and redis client libraries
const express = require('express');
const redis = require('redis');
const process = require('process');

//make instance of express application
const app = express();

//make connection to redis server and initialize value of visits
//default port of redis server is 6379
//specify host but instead of url we use the 
// container name
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});
client.set('visits', 0);

//route handler for root route
app.get('/', (req, res) => {
  //try to get current visit value using client
  //connection
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);

    //update number of times page was visited
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
