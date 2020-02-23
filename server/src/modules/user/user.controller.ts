import { Request, Response, NextFunction, Router } from 'express';
import userModel from './user.model';
import User from './user.interface';
import Controller from '../../interfaces/controller.interface';
import validationMiddleware from '../../middleware/validation.middleware';
import CreateUserDto from './user.dto';
 
class UsersController implements Controller {
  public path = '/api/users';
  public router = Router();
  private user = userModel;
 
  private users: User[] = [
    {
        username: 'joelralph',
        password: 'admin123',
        firstName: 'joel ralph',
        middleName: 'a',
        lastName: 'balignasay',
        role: 0
    }
  ];
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path,this.registerUser);
    // this.router.post(this.path, this.createAPost);
  }
 
  private getAllPosts = async (req: Request, res: Response) => {
    const users:any = await this.user.find();
    res.json({
      users: users
    })
  }

  private registerUser = async (req:Request,res:Response) => {
    try {
      const userData:User = req.body.user;
      
    } catch(err) {
      res.json({
        message : "error in api register"
      })
    }
  }
 
  private createAPost = async (req: Request, res: Response) => {
    const userData: User = req.body.user;
    const createdUser = new this.user({
        ...userData
      });
    const savedPost:any = await createdUser.save();
    res.send(savedPost);
  }
}
 
export default UsersController;