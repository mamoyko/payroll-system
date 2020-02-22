import * as mongoose from 'mongoose';
import User from './user.interface';

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    middleName: String,
    lastName:String,
    email:String,
    role:Number,
    date_created : {
        type : Date,
        default : function(){
            return Date.now();
        }
    }
});

const userModel = mongoose.model<User & mongoose.Document>('User', userSchema);

export default userModel;