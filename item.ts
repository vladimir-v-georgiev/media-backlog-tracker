export default class Item{

    private title: string;
    private length: number;
    private genre: string;
    private startDate: Date;

    private isCompleted: boolean;
    private timeToComplete: number;
    private endDate: Date;

    constructor(config){
        this.title = config.title;
        this.length = config.length;
        this.genre = config.genre;
    }

    public setStartDate(startDate: Date){
        this.startDate = startDate;
    }

    public setEndDate(endDate: Date){
        this.endDate = endDate;
    }

    public getDetails(){
        return {
            "title": this.title,
            "length": this.length,
            "genre": this.genre
        }
    }
}