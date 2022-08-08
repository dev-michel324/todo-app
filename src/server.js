const express = require("express");
const handleBars = require("express-handlebars");
const bodyParser = require("body-parser");
const session = require("express-session");
const personalHelpers = require("./utils/helpers");

//database models
const Todo = require("./models/Todos");

//routes
const todoRoute = require('./routes/todo');

const app = express();

const PORT = process.env.PORT || 8000;

app.engine(
  "hbs",
  handleBars.engine({
    extname: "hbs",
    defaultLayout: "main",
    helpers: personalHelpers
  })
);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "3284901!123",
    resave: false,
    saveUninitialized: true,
  })
);

app.set("view engine", "hbs");
app.set('views', __dirname + '/views/');
app.use('/todo', todoRoute);

app.get("/", (req, res) => {
  let messages = req.session.messages;
  req.session.messages = false;

  Todo.findAll().then((values) => {
    if (values.length > 0){
      return res.render('index', {messages: messages, todoData: values.map(values => values.toJSON())});
    }
      return res.render("index", { messages: messages});
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
