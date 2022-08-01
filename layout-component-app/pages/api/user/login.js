import connectDB from '../../../lib/dbConnect'
import User from '../../../models/user'

connectDB()

export default async function handler (req, res) {
    const {email, password} = req.body
    try {
        let user = await User.findOne({email, password})
       
        if(!user) {
            res.json({status: 'unable to find user'})
        } else {
            res.redirect('/profile')
        }
    } catch (error) {
        res.status(400).json(error);
    }
    
     
}