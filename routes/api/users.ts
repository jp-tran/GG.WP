import { Router } from 'express';
// User Model
import User from '../../models/Users';

const router = Router();

/**
 * @route   GET api/users
 * @desc    Get specific user
 * @access  Private
 */

router.get('/:id', async (req, res) => {
  const userID = req.params.id;
  try {
    const user = await User.findOne({ id: userID });
    if (!user) {
      res.status(201).json({ info: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

export default router;
