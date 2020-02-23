import { Request, Response, NextFunction, Router } from 'express';
import companyModel from './company.model';
import User from './company.interface';
import Controller from '../../interfaces/controller.interface';
import validationMiddleware from '../../middleware/validation.middleware';
// import CreateUserDto from './comoany.dto';
 
class CompanyController implements Controller {
  public path = '/api/company';
  public router = Router();
  private company = companyModel;
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllCompany);
  }
 
  private getAllCompany = async (req: Request, res: Response) => {
    res.json({
      company: 'success'
    })
  }
}
 
export default CompanyController;