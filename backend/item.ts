export default class Item{

    [key: string]: any; // Add an index signature

    private title: string;
    private length: number;
    private genre: string;

    //private startDate: Date;
    //private endDate: Date;

    //private isCompleted: boolean;
    //private timeToComplete: number;
    

    //to-do define config format 
    constructor(config: { title?: string; length?: number; genre?: string }){
        this.title = config.title || "";
        this.length = config.length || 0;
        this.genre = config.genre || "";
    }

    //get item details 
    public getDetails(){
        return {
            "title": this.title,
            "length": this.length,
            "genre": this.genre
        }
    }

    public toString(){
        return `
        title: ${this.title}\n
        length: ${this.length}\n
        genre: ${this.genre}\n\n
        `
    }

    //get title for item update and removal
    public getTitle(){
        return this.title;
    }
}