import bcrypt from 'bcryptjs'

export const hassingPassword = async (password: string) =>{
const salt = await bcrypt.genSalt(10);
const hassedPassword = await bcrypt.hash(password, salt);
return hassedPassword;

}