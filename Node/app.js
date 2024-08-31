const express = require('express');

const app = express ();
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

app.get('/message', (request, response) => {
    const message = {
        'Message': "Hello world"
    };
     
    response.send(message);
});


