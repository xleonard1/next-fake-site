import connectDB from '../../../lib/dbConnect'
import User from '../../../models/user'

connectDB()

export default async function handler (req, res) {

    const {email, password} = req.body
    const user = User.findOne({email, password})
    if(!user) {
        res.json({status: 'unable to find user'})
    } else {
        res.redirect('/login')
    }
    try {
       
        const user = User.create(req.body);
        res.redirect('/profile')
        if(!user) {
            return res.json({code: 'user not created'})
        }
    } catch(error) {
       res.status(400).json({status: 'not able to create user'})
    }
     
}