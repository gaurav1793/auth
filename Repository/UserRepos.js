import User from "../Schema/UserSchema.js";

export const UserSignUpRepos=async({username,password,email})=>{
    try {
        const user = await User.create({username,password,email});
        return user;
    } catch (error) {
        throw error;
    }
}

export const findByEmailId=async(email)=>{
    try {
        const user = await User.findOne({email});
        console.log("inside repo");
        console.log(user);
        return user;
    } catch (error) {
        throw error
    }
}