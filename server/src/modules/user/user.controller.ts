import * as express from 'express';
import User from './user.interface';
 
class PostsController {
  public path = '/users';
  public router = express.Router();
 
  private users: User[] = [
    {
        username: 'joelralph',
        password: 'admin123',
        firstName: 'joel ralph',
        middleName: 'a',
        lastName: 'balignasay',
        role: 0,
        _id: 'Lorem Ipsum',
    }
  ];


//   username: string;
//     password: string;
//     firstName: string;
//     middleName: string;
//     lastName:string;
//     role:number;
//     id:any;
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }
 
  getAllPosts = (request: express.Request, response: express.Response) => {
    response.send(this.users);
  }
 
  createAPost = (request: express.Request, response: express.Response) => {
    const user: User = request.body;
    this.users.push(user);
    response.send(user);
  }
}
 
export default PostsController;