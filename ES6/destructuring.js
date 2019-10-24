//ES5
const cumputer = {
  model: "macbook-pro",
  year: 2017,
  price: 400,
};

// const apple = computer.model;
// const year = computer.year;
// const price = computer.price;

//ES6
const labtop = {
  model: "gram",
  year: 2018,
  price: 100,
};
const { model, year, price } = labtop;

//실제로는?
//ES5
const tag = `<h1>thisis${labtop.model} of ${labtop.year} of ${labtop.price}</h1>`;
//ES6
const newTag = `<h1>this is ${model} of ${year} of ${price}</h1>`;

const labtops = [
  {
    model: "gram",
    year: 2018,
    price: 100,
  },
  {
    model: "samsung",
    year: 200,
    price: 50,
  },
  {
    model: "apple",
    year: 2000,
    price: 150,
  },
];
labtops.map(({ model, year, price }) => {
  return `<h1>${model}${year}</h1>`;
});
