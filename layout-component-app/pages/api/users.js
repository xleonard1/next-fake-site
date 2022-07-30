import connectDB from '../../lib/dbConnect';
import User from '../../models/user';

const  handler = async (req, res) => {
  if(req.method === 'GET') {
    try {
      const users = await User.find({})
      res.status(200).json({success: true, data: users})
 
    } catch (error) {
      res.status(400).json({success: flase})
    }
 };



  if (req.method === 'POST') {
    // Check if name, email or password is provided
    const { name, email, password } = req.body;
    if (name && email && password) {
        try {
          
          
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


  if (req.method === 'POST') {
    // Check if name, email or password is provided
    const { email, password } = req.body;
    if (email && password) {
        try {
          let userData = User.findOne({email: req.body.email})
         
           if (!userData) {
             res
              .status(400)
              .json({ message: 'Incorrect email or password, please try again' });
             return;
           }
           const correctPw = await user.isCorrectPassword(password);

         if (!correctPassword) {
           res
             .status(400)
             .json({ message: 'Incorrect email or password, please try again' });
           return;
          }
          

        req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });
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

export default connectDB(handler)