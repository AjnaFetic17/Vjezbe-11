const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
app.post("/", (req, res) => {
    let number1 = parseInt(req.body.num1);
    let number2 = parseInt(req.body.num2);

    res.send("Result is: " + parseInt(number1 + number2));
})
app.listen(3000, () => {
    console.log("Server started on port 3000.")
});

