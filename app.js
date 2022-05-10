const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//app.use(json.bodyParser());
app.get('/', (req, res)=>{
    res.send("heyloo")
});
app.listen(3000, ()=>{
    console.log('bruh');
})
