export default class Item{

    private title: string;
    private length: number;
    private genre: string;

    private startDate: Date;
    private endDate: Date;

    private isCompleted: boolean;
    private timeToComplete: number;
    

    //to-do define config format 
    constructor(config){
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

    //get title for item update and removal
    public getTitle(){
        return this.title;
    }
}