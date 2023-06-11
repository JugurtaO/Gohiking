import { Request,Response } from "express";
import * as myModels from "../../models/index";



export  const postLogin=async (req: Request,res: Response)=>{

    const {user_email,user_password}:{user_email:String,user_password:string } = req.body;
    if(!user_email.length ||!user_password.length)
        return res.send("credentials can not be blank!")

    const userInDB =await myModels.User.findAll({where:{user_email:user_email},attributes:['user_password']});

    if(!userInDB || userInDB.length!=1)
        return res.send("Oups something went wrong, try again!")
    
    console.log(userInDB instanceof myModels.User);
    // console.log(userInDB.user_nickname);
    // if(user_password!=userInDB.user_password)
    //     return res.send("email or password incorrect , try again!")
    

    res.send("OK.");

}