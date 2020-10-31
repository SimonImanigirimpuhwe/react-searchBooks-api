import bcrypt from 'bcryptjs';
import hashedPass from '../../../src/helper/bcryptPass';

describe('Hash users password', () => {
    it('should bcrypt a given password', async(done) => {
        try {
            const password = 'validPassword';
            const hashedPwd = await hashedPass(password);
            const comparedPass = await bcrypt.compare(password, hashedPwd);
        
            expect(comparedPass).toBeTruthy()
    
            done()

        } catch (err) {
            done(err)
        }
    })
})