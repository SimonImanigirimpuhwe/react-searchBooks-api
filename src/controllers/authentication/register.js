import User from '../../model/user';
import hashedPass from '../../helper/bcryptPass';


const registerController = async(req, res) => {
    const { email, password, name } =req.body;
    const emailExist = await User.findOne({email});
    if(emailExist) return res.status(400).json({error: 'User registered before'});

        const hash = await hashedPass(password);
        
    const user = new User({
        name,
        email,
        password:hash
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