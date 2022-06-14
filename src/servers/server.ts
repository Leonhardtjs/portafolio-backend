import express, { Application } from "express";
import cors from 'cors';

// Routes
import StartRoutes from "../routes/start.route";

class Server {

    private port: string;
    private app: Application;

    constructor(){
        this.port = process.env.PORT || '';
        this.app  = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        // Cors
        this.app.use(cors());

        // Json
        this.app.use(express.json());

        // Public folder
        this.app.use(express.static('public'));
    }

    routes(){
       this.app.use('/', StartRoutes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${ this.port } ✅`);
        });
    }

}

export default Server;