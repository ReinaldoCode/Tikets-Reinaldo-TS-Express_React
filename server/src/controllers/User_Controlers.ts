import { User } from '../models/user';
import { Response, Request, request } from 'express';

var testUsers: User[] = [
  {
    user_id: "1",
    name: "test-1",
    email: "test-1@gmail.com",
    role: "admin",
    created_date: new Date(),
    updated_date: new Date(),
    is_active: true,
  },
  {
    user_id: "2",
    name: "test-2",
    email: "test-2@gmail.com",
    role: "user",
    created_date: new Date(),
    updated_date: new Date(),
    is_active: true,
}
];

export const getAllUsers = (req: Request, res: Response) => {
  res.status(200).json(testUsers);
};

export const createUser = (req: Request, res: Response) => {
  const { user_id, name, email } = req.body;
  console.log(user_id,name,email);
  if (!user_id || !name || !email) {
    console.log(
      "Please complete the user information as follow user_id: string name: string email: string"
    );
    return res.status(400).json({msg:"Plesase complete the user information"})
  }
  const newUser: User = {
    user_id: user_id,
    name: name,
    email: email,
    role: "admin",
    created_date: new Date(),
    updated_date: new Date(),
    is_active: true,
  };

  testUsers.push(newUser);
  res.status(200).json({ msg: "User has been created" });
};

export const updateUser = (req: Request, res: Response) =>{
    const user_id = req.params.id;
    if(!user_id){
        return res.status(400).json({msg:`Plese enter the id`});
    }
    const {name, email , role} = req.body;
    if(!name || !email || !role){
       return res.status(200).json({msg:`Change has not been made`});
    }
    const user: User | undefined = testUsers.find(user => user.user_id === user_id);
 
    if (!user) {
        return res.status(404).json({ msg: `User with id ${user_id} not found` });
    }
   user.name = name;
   user.email = email;
   user.role = role;
   user.updated_date = new Date();

   res.status(200).json({msg: `User Updated`});

}