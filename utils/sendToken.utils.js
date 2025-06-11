import jwt from 'jsonwebtoken';

export const sendToken = (user, res, statusCode=200, message) => {
 
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res.status(statusCode).json({
        success: true,
        message,
        token,
    })
}