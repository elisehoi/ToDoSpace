export class Tasks {
    protected creationDate: number;
    name: string;
    location: string;
    category: string;
    description: string;
    
    constructor() {
        this.creationDate = 0;
        this.name = "";
        this.location = "";
        this.category = "";
        this.description = "";
    }

    NewTask(name: string): void {
        console.log(`Setting task name to {name}...`);
        this.name = name;
        console.log(`Task name successfully set to {this.name}`);
    }
}