import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user_models';

const router = express.Router();

//  POST /api/auth/register
router.post('/register', async (req: Request, res: Response):Promise<void> => {
  const { name, email, password } = req.body;

  try {
    const exists = await User.findOne({ email });
    if (exists) {
      res.status(400).json({ error: 'Email already registered' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

//  POST /api/auth/login
router.post('/login', async (req: Request, res: Response):Promise<void>=> {
  try {
  const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user){
      res.status(401).json({ error: 'Invalid email or password' });
      return ;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch){
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: '1d',
    });

    res.json({ message: 'Login successful', token });

  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
