import * as express from 'express';
import User from './user.interface';
 
class UsersController {
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
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }
 
  getAllPosts = (req: express.Request, res: express.Response) => {
    res.send(this.users);
  }
 
  createAPost = (req: express.Request, res: express.Response) => {
    const user: User = req.body;
    this.users.push(user);
    res.send(user);
  }
}
 
export default UsersController;