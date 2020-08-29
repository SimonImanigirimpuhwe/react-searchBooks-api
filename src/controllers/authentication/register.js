import bcrypt from 'bcryptjs';
import User from '../../model/user';

const registerController = async(req, res) => {
    const { email, password, name } =req.body;
    const emailExist = await User.findOne({email});
    if(emailExist) return res.status(400).json({error: 'User registered before'});

    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)
    const user = new User({
        name,
        email,
        password:hashedPass
    })
    try{
        const newUser = await user.save();
        const {name, email, _id, registeredAt } = newUser;
        
        return res
                .status(201)
                .json(
                    {msg:'User registered successfully', 
                    body: {
                        name,
                        email,
                        _id,
                        registeredAt
                    }
        })
    }catch(err) {
        return res.status(500).json({err: err.details[0].message})
    }
}

export default registerController;