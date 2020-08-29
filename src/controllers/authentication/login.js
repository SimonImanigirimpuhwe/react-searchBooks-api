import bcrypt from 'bcryptjs';
import User from '../../model/user';
import generateToken from '../../helper/authent';

const loginController = async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email})
    if (!user) return res.status(400).json({error: 'Invalid email or password'});
    
    try{
        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) return res.status(400).json({error: 'Invalid password'});

        const token = generateToken(user);
        return res.status(200).json({msg: 'logged in successfully', token})

    }catch(err) {
        return res.status(500).json({error: err.message})
    }
};

export default loginController;