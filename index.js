import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
})

app.get("/about", (req, res) => {
    res.render("about.ejs");
  });

app.post("/submit", (req, res) => {
    const fName = req.body["first_name"];
    const lName = req.body["last_name"];
    res.render("submit.ejs", {fName: fName, lName: lName});
    
});

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
})