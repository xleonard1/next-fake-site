import connectDB from '../../lib/dbConnect'
import User from '../../models/user';

export default async function handler (req, res) {
  if(req.method === 'GET') {
    try {
      const users = await User.find({})
      res.status(200).json({success: true, data: users})
 
    } catch (error) {
      res.status(400).json({success: flase})
    }
 };

 if(req.method === 'GET') {
   try {
      let users = await User.findOne({ _id: req.params.studentId})
      res.status(200).json({success: true, data: users})
   } catch (error) {
      res.status(400).json({success: false})
   }
 }

  if (req.method === 'POST') {
    // Check if name, email or password is provided
    const { name, email, password } = req.body;
    if (name && email && password) {
        try {
          // Hash password to store it in DB
          
          let user = new User({
            name,
            email,
            password,
          });
          // Create new user
          var usercreated = await user.save();
          return res.status(200).send(usercreated);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      } else {
        res.status(422).send('data_incomplete');
      }
  } else {
    res.status(422).send('req_method_not_supported');
  };


};

