const express = require(`express`)
const app = express();
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Home");
});
app.get("/register", (req, res) => {
    res.send("login");
});
app.post("/reg", (req, res) => {
    res.send("start");
});
app.post("/login", (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    if (password = "noubima") {
        res.send("login sucessful");
    }
    else {
        res.send("password incorrect")
    }

    // res.send("Login sucessfull");
});
app.listen(5000, () => {
    console.log("Server listening at port 5000");

});