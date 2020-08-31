import bcrypt from 'bcryptjs';

const hashedPass = async(data) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(data, salt)
    return hashedPassword;
}

export default hashedPass;