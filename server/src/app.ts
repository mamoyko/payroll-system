import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

class App {
  public app: express.Application;
  public port: number;
  
  constructor(controllers,port){

    this.app = express();
    this.port = port;

    this.connectToTheDatabase();

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }

  private initializeControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  private connectToTheDatabase() {
    const { DB_HOST,DB_USER,DB_PASSWORD,DB_NAME } = process.env;

    let mongoConnect = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
    
    mongoConnect = mongoConnect.trim();

    mongoose.connect(mongoConnect);

    mongoose.connection.on('error', function(err) {
        console.log("Error:", err);
    });

    mongoose.connection.on('open', function() {
        console.log("mongodb connection open");
    });
  }

}

export default App;