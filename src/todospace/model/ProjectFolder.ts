import { Tasks } from "./Tasks";
export class ProjectFolder extends Tasks {
    NewFolder(location: string): void {
        console.log(`Setting folder name to {name}...`);
        this.location = location;
        console.log(`Folder name successfully set to {this.location}`);
    }

    constructor() {
        super();
    }
}

