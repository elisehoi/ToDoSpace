
import express from "express";
import * as IndexPage from "./routes/index";

class ToDoSpaceApp {

    private webServer;

    constructor() {
        this.webServer = express();
        this.webServer.set('views', IndexPage.join(, 'views'));
        this.webServer.set('view engine', 'hbs');
        this.webServer.use(`/`, IndexPage.router);
    }

    startWebServer(port: number) {
        this.webServer.listen(port, () => {
            console.log(`Web-server listening for requests on port 8080`);
        });
    }

}