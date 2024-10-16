import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res)=>{
  res.render("index.ejs");
});

app.get("/about", (req,res)=>{
  res.render("about.ejs");
});

app.get("/contact", (req,res)=>{
  res.render("contact.ejs");
});

app.post("/contact", (req,res)=>{
  console.log("submitting data..");
  console.log(req.body);
  res.send("<h1>Thank you for submitting..</h1>")
});

app.listen(port, ()=>{
  console.log("server running on.." + port);
});


