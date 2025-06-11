import Item from "./item.ts";

const config = {
    title: "Elden Ring",
    length: 100,
    genre: "Souls-Like"
}

const item = new Item(config);
console.log(item.getDetails());