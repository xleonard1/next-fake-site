import connectDB from '../../../lib/dbConnect'
import User from '../../../models/user'

connectDB()

export default async function handler (req, res) {
    try{
     const user = await User.create(req.body);
     res.redirect('/profile')
     if(!user) {
         return res.json({code: 'User not created'})
     }
   } catch (error) {
    res.status(400).json(error);
   }
 
}