const express = require("express");
const path = require("path");
const data = require("./data");
const testMiddleware = require("./middleware");

const app = express();

const carData = data.cars.Nissan;

app.listen(3000, () => console.log("server running on  port 3000"));

app.use(testMiddleware);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./dummyFiles/index.html"));
});

app.get("/about", (req, res) => {
  console.log(":) maybe it works maybe it won't");
  res.json({ name: "hehe" });
});

app.get("/cars", (req, res) => {
  const NissanCars = carData.map((car, index) => {
    const { model, doors } = car;
    return { id: index + 1, model, doors };
  });

  res.json(NissanCars);
});

app.get("/cars/:carID", (req, res) => {
  const { carID } = req.params;

  const NissanCars = carData.map((car, index) => {
    const { model, doors } = car;
    return { id: index + 1, model, doors };
  });

  const singleCarDetail = NissanCars.find((car) => car.id === Number(carID));

  if (!singleCarDetail) {
    res.send("<h1>Data Does not exist lol</h1>");
  }

  res.json(singleCarDetail);
});

app.all("*", (req, res) => {
  console.log(":) maybe it works maybe it won't");
  res.status(404).send("<h1>Resource not found</h1> LOL");
});
