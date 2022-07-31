import connectDB from '../../../lib/dbConnect'
import User from '../../../models/user'

connectDB()

export default async function handler (req, res) {
    const {name, email, password} = req.body
   
    try{
     const user = await User.create({name, email, password});
     res.redirect('/profile')
     if(!user) {
         return res.json({code: 'User not created'})
     }
   } catch (error) {
       console.log(error)
      res.status(400).json({status: "not able to create user"})
   }
 
}