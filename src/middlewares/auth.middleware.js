import { ApiError } from "../utils/ApiError"
import { asyncHandler } from "../utils/asyncHandler.js"
import Jwt  from "jsonwebtoken"
import { User } from "../models/user.model"


export const verifyJWT = asyncHandler(async (req,_,next) => {

   try {
    const token = req.cookies?.acessToken || req.header("Authorization")?.replace("Bearer ","")
 
     if(!token){
         throw new ApiError(401,"Unauthorized request")
     }
 
     const decodedToken = jwt.verify(token,process.env.Access_Token_Secret)
 
     const user = await findById(decodeToken?._id).select(
         ("-password -refreshToken")
     )
 
     if(!user) {
         throw new ApiError(401,"Invalid Access Token")
     }
 
     req.user = user;
     next
   } catch (error) {
        throw new ApiError(401,error?.message || "Invalid access token")
   } 
})