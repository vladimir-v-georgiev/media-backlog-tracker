import Item from "./item";

export default class Backlog {

    private backlog: Item[];

    constructor(backlogItems?: Item[]) {
        this.backlog = backlogItems || [];
    }

    //add item to backlog
    public add(item: Item) {
        this.backlog.push(item);
    }

    //remove item from backlog
    public remove(title: string) {
        const item = this.backlog.find((item) => item.getTitle() === title)
        if (item !== undefined) {
            const index = this.backlog.indexOf(item);
            if (index !== -1) {
                this.backlog.splice(index, 1);
            }
        }
    }

    //update item in backlog
    public update(title: string, data: Object) {
        const item = this.backlog.find((item) => item.getTitle() === title)
        if (item !== undefined) {
            const index = this.backlog.indexOf(item);
            if (index !== -1) {
                Object.entries(data).forEach(([key, value]) => {
                    if (value !== undefined && key in this.backlog[index]) {
                        this.backlog[index][key] = value;
                    }
                });
            }
        }
    }

    //get backlog items 
    public getBacklogString() {
        let backlogItems: string = ``;
        for (let item of this.backlog) {
            backlogItems += item.toString();
        }
        return backlogItems;
    }

    public getBacklogObject() {
        let backlogItems: Object[] = [];
        for (let item of this.backlog) {
            backlogItems.push(item.toObject());
        }
        return backlogItems;
    }
}