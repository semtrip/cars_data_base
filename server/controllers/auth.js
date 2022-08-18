import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//register user
export const register = async (req, res) => {
    try {
        const { email, password, name } = req.body

        const isUsed = await User.findOne({email})

        if(isUsed) {
            return res.json({
                message: 'Данный E-mail уже занят.',
                type: 'error'
            })
        }
        
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        
        const newUser = new User({
            email, 
            password: hash,
            name
        })

        const token = jwt.sign({
            id: newUser._id
        }, process.env.JWT_SECRET,
        {expiresIn: '30d'}
        )

        await newUser.save()

        return res.json({
            newUser,
            token, 
            message: 'Регистрация прошла успешна'
        })
    } catch (error) {
        return res.json({message: 'Ошибка при создание пользователя', type: 'error'})
    }
}
//login user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({email})

        if(!user) {
            return res.json({
                message: 'Такого аккаунта не существует', 
                type: 'error'
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if(!isPasswordCorrect) {
            return res.json({
                message: 'Неверный e-mail или пароль', 
                type: 'error'
            })
        }

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET,
        {expiresIn: '30d'}
        )

        return res.json({
            token, 
            user,
            message: 'Вы успешно авторизовались'
        })

    } catch (error) {
        return res.json({message: 'Ошибка при авторизации', type: 'error'})
    }
}
//Get me user
export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        if(!user) {
            return res.json({
                message: 'Такого аккаунта не существует'
            })
        }

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET,
        {expiresIn: '30d'}
        )

        res.json({
            user,
            token
        })

    } catch (error) {
        return res.json({
            message: 'Нет доступа'
        })
    }
}