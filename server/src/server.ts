import App from './app';
import UserController from '../src/modules/user/user.controller';

const app = new App(
    [
        new UserController(),
    ],
    5000,
);
   
app.listen();