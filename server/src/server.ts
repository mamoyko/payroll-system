import 'dotenv/config';
import App from './app';
import UsersController from '../src/modules/user/user.controller';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App(
    [
        new UsersController(),
    ],
    5000,
);
   
app.listen();