import { User } from "../models/user";
import { Response, Request, request } from "express";
import { CREATE_NEW_USER, SELECT_ALL_USERS } from "../db/userQuery";
import { pool } from "../db/db_Conection";



export const getAllUsers = async (req: Request, res: Response) => {
  try{
  pool.query(SELECT_ALL_USERS,(error, result)=>{
    if(error){
      console.log(error);
      return res.status(500).json({msg:'Database error has occured'})
    }
    res.status(200).json(result.rows);
  })
  }
  catch(error){
    res.status(500).json({msg: "Sercer error"})
  }
  
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    if (!name || !email || !password) {
      console.log(
        "Please complete the user information as follow user_id: string name: string email: string password: string"
      );
      return res
        .status(400)
        .json({ msg: "Plesase complete the user information" });
    }
    const created_date = new Date();
    const updated_date = created_date;
    const role = "user";
    const values = [name, email, password, role, created_date, updated_date];
    pool.query(CREATE_NEW_USER, values, (error) => {
      if (error) {
        console.log(error);
        return res.status(500).json({msg: "Database error please check the console log" });
      }
      res.status(201).json({ msg: "User has been created" });
    });
  } catch (erro) {
    res.status(500).json({ msg: "Server error occurred" });
  }
};

export const updateUser = (req: Request, res: Response) => {

};
