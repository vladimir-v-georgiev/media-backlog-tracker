import Item from "./backend/item.ts";
import Backlog from "./backend/backlog.ts";

const config = [
    {
        title: "Elden Ring",
        length: 100,
        genre: "Souls-Like"
    },
    {
        title: "The Witcher 3",
        length: 200,
        genre: "Action-RPG"
    },
    {
        title: "Undertale",
        length: 10,
        genre: "Indie"
    },
    {
        title: "Final Fantasy 7: Rebirth",
        length: 68,
        genre: "JRPG"
    },
    {
        title: "Uncharted: Drake's Fortune",
        length: 20,
        genre: "Adventure"
    }
]

const backlogItems: Item[] = [];

config.forEach(element => {
    const item = new Item(element);
    backlogItems.push(item);
});


const backlog = new Backlog(backlogItems);
console.log(backlog.getBacklogString());
backlog.remove("Undertale");
backlog.update("The Witcher 3", { length: 150 });
console.log(backlog.getBacklogString());
