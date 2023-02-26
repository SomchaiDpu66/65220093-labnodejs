const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const cors = require("cors");

const fullname = "65230093 ,Somchai Karapitak";
//  data
const products = [
  {
    id: "1",
    name: "ผ้าพันคอLiverpool เรดเครสต์",
    category: "Apple",
    price: 15000,
    cover:
      "https://store.liverpoolfc.com/media/catalog/product/cache/dd504f005c0b90ffe1b9fb2344db1a87/A/1/A10716.jpg",
  },
  {
    id: "2",
    name: "LFC Crest Badge Set",
    category: "Apple",
    price: 35000,
    cover:
      "https://store.liverpoolfc.com/media/catalog/product/cache/75834f51694404f8a86d1a825ae7de7e/a/2/a21bd03_4_1.jpg",
  },
  {
    id: "3",
    name: "GAMBOL Liverpool FC SUPER SUP (Size 36-46)",
    category: "LG",
    price: 5600,
    cover:
      "https://f.btwcdn.com/store-42285/product/711901f1-e710-d2b0-5e99-6241869c16a2.jpg",
  },
  {
    id: "4",
    name: "HEADSET (หูฟัง) ONILiverpool F.C. Crest Gaming Chair",
    category: "ONIKUMA ",
    price: 990,
    cover:
      "https://cdn.shopify.com/s/files/1/0579/6085/7805/products/FanSeats_LiverPool_Basic_Gaming_Chair.jpg?v=1650974330",
  },
  {
    id: "5",
    name: "Liverpool F.C. Small Crest Stool",
    category: "Apple",
    price: 12900,
    cover:
      "https://cdn.shopify.com/s/files/1/0579/6085/7805/products/LCFC-Kids-Crest-Stool-Front.png?v=1626771340",
  },
  {
    id: "6",
    name: "Nike Football Liverpool FC Crest Logo Cap In Red",
    category: "Apple",
    price: 12900,
    cover:
      "https://image.goxip.com/Fwnovbw52iGm2qDnqWaw6DK50-Q=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.asos-media.com%2Fproducts%2Fnike-football-liverpool-fc-crest-logo-cap-in-red%2F23557865-1-red%3F$XXL$",
  },
  {
    id: "7",
    name: "Bagpack Liverpool",
    category: "Apple",
    price: 12900,
    cover:
      "https://n4.sdlcdn.com/imgs/a/p/q/Mm-Products-Liverpool-Bagpack-SDL598743038-1-f1889.jpg",
  },
  {
    id: "8",
    name: " The Best Selection of Liverpool FC and Nike Merchandise",
    category: "Apple",
    price: 12900,
    cover:
      "https://cdn.shopify.com/s/files/1/0462/0120/8982/products/DM1843-609-PHSFH001_400x.jpg?v=1676519255",
  },
  {
    id: "9",
    name: " Liverpool Keychain ",
    category: "Apple",
    price: 12900,
    cover:
      "https://theproductlab.in/wp-content/uploads/2021/12/Liverpool-keychains.jpg",
  },
  {
    id: "10",
    name: " Liverpool FC HERO (Size 36-44)",
    category: "Apple",
    price: 12900,
    cover:
      "https://f.btwcdn.com/store-42285/product/daca90cf-2921-fab2-d666-625fdb1521d8.jpg",
  },
];

app.use(express.json(), cors());
// app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: fullname });
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const result = products.find((product) => product.id === id);
  res.json(result);
});

app.listen(port, () => {
  console.log("Application is running on port 9000");
});
