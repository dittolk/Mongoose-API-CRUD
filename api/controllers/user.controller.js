import User from "../models/user.model.js";

export const createUser = async (req, res) => {
    const { name, username, email, password } = req.body;
    try {
        const newUser = new User({ name, username, email, password });
        const user = await newUser.save();

        //Alternative
        //const user = await User.create({ name, username, email, password });

        res.status(200).send({ message: "User added", user });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send({ users });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

export const getUserById = async (req, res) => {
    try {
        const userId = req.params.userId

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).send({ user })
    } catch (error) {
        console.error(error.message);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(500).send({ message: error });
    }
};

export const updateUser = async (req, res) => {
    const { name, username, email, password } = req.body;
    const userFields = { name, username, email, password };
    const userId = req.params.userId;
    try {
        let user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user = await User.findByIdAndUpdate(userId,
            { $set: userFields },
            { new: true }
        );

        res.status(200).send({ user })
    } catch (error) {
        console.error(error.message);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(500).send({ message: error });
    }
};

export const deleteUser = async (req, res) => {
    const userId = req.params.userId
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await User.findByIdAndDelete(userId);
        res.status(200).send({ message: "User deleted" })
    } catch (error) {
        console.error(error.message);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(500).send({ message: error });
    }
};