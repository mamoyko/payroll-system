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
    this.router.post(this.path, this.createAPost);
  }
 
  getAllPosts = async (req: Request, res: Response) => {
    const users = await this.user.find();
    res.json({
      users: users
    })
  }
 
  createAPost = async (req: Request, res: Response) => {
    const userData: User = req.body.user;
    const createdUser = new this.user({
        ...userData
      });
    const savedPost = await createdUser.save();
    res.send(savedPost);
  }
}
 
export default UsersController;