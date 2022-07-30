const { ObjectId } = require('mongoose').Types;
import User from '../../../models/user';

export default async function handler (req, res) {
if(req.method === 'GET') {
    try {
        User.findById({ _id: req.query.id})
        .select('-__v')
        .then(async (user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json({
                user,
              })
        )
    } catch (error) {
      console.log(error)
       res.status(400).json({success: false})
    }
  }
 
 
}