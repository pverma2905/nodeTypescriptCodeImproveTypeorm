import express, {Request, Response} from 'express';
import UserModel from '../models/User'

const userInfo = {
    getList: async(req:Request, res:Response)=>{
        let mydata = await UserModel.getList();
        res.json({data:mydata})
    }
}

export default userInfo;