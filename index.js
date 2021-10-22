const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "WOW, I am Execute to learn node and express with nodeMon. Autometic restart"
  );
});

const users = [
  { id: 0, name: "sabana", email: "sabana@gmail.com", phone: "01788888888" },
  {
    id: 1,
    name: "shabnoor",
    email: "shabnoor@gmail.com",
    phone: "01722222222",
  },
  {
    id: 2,
    name: "sratonti",
    email: "sratonti@gmail.com",
    phone: "01733333333",
  },
  {
    id: 3,
    name: "suchorita",
    email: "suchorita@gmail.com",
    phone: "01788887777",
  },
  { id: 4, name: "soniya", email: "soniya@gmail.com", phone: "01788886677" },
  { id: 5, name: "susmita", email: "susmita@gmail.com", phone: "01788884455" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;

  // use Query param
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

// app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "ornage", "banana", "apple"]);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("Yummy Yummy tok fazli");
});

app.listen(port, () => {
  console.log("listening to port", port);
});
