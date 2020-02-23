import * as mongoose from 'mongoose';
import Company from './company.interface';

const companySchema = new mongoose.Schema({
    companyName: {type: String},
    rdo: {type: String},
    phone: {type: String},
    mobile: {type: String},
    email: {type: String},
    address: {type: String},
    ownerInfo:{
        firstName:{type: String},
        middleName:{type: String},
        lastName:{type: String},
        phone:{type: String},
        mobile:{type: String}
    },
    website:{type: String},
    date_registered:{type: Date},
    date_created : {
        type : Date,
        default : function(){
            return Date.now();
        }
    }
});

const companyModel = mongoose.model<Company & mongoose.Document>('Company', companySchema);

export default companyModel;