import bcrypt from 'bcrypt'
import User from '../models/User.js';
import { generateCustomError } from '../middleware/errorHandler.js';
import { generateToken } from '../utils.js';

export const signup = async(req, res, next) => {
    const {name, email, password} = req.body;

    try {
        const user = await User.create({
            name,
            email,
            password: password && bcrypt.hashSync(password, 10)
        });

        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken()
        })
    } catch (error){
        next(generateCustomError(400, error.message || "Invalid credentials. Please try again!"))
    }
}