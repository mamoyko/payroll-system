import App from './app';
import UsersController from '../src/modules/user/user.controller';

const app = new App(
    [
        new UsersController(),
    ],
    5000,
);
   
app.listen();