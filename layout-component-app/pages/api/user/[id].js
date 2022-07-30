const { ObjectId } = require('mongoose').Types;
import User from '../../../models/user';

export default async function handler (req, res) {
if(req.method === 'GET') {
    try {
      console.log(req)
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
if(req.method === 'GET') {
  const body = req.body

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.email || !body.password) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'email or password name not found' })
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.email} ${body.password}` })
}
}