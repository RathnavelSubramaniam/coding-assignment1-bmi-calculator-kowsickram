const express = require('express');
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.urlencoded({extended:true}));
const port = 3500;

app.get('/', (req, res) => {
    res.sendFile(__dirname +`/index.html`);
  })
app.post('/',(req,res) => {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = weight/(height)**2
  res.send("Your BMI is "+ bmi);
})
  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })