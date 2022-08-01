import connectDB from '../../lib/dbConnect';
import User from '../../models/user';

const  handler = async (req, res) => {
  if(req.method === 'GET') {
    try {
      const users = await User.find({})
      res.status(200).json({success: true, data: users})
 
    } catch (error) {
      console.log(error)
      res.status(400).json({success: flase})
    }
 };

  

};

export default connectDB(handler)