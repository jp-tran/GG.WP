import { Router } from 'express';
// User Model
import User from '../../models/Users';
import { Document } from 'mongoose';

const router = Router();

/**
 * @route   GET /user/:id
 * @desc    Get user by ID
 * @access  Public
 */
router.get('/:id', async (req, res) => {
  const userID = req.params.id;
  try {
    const user = await User.findOne({ id: userID });
    if (!user) {
      res.status(201).json({ error: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   POST /user/create
 * @desc    Create a new user
 * @access  Private
 */
router.post('/create', async (req, res) => {
  try {
    const { firstName, lastName, username, email, id, igns } = req.body;

    let ignsArr = igns.split(',');
    ignsArr = ignsArr.map((element: String) => element.trim());
    ignsArr = ignsArr.filter((element: String) => element);

    const newUser = new User({
      firstName,
      lastName,
      username,
      email,
      id,
      igns: ignsArr,
    });

    const savedUser = await newUser.save();
    if (!savedUser) throw Error('Error with saving user');

    res.status(200).json(savedUser);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

/**
 * @route   POST user/edit
 * @desc    Edit a user's details
 * @access  Private
 */
router.post('/edit', async (req, res) => {
  try {
    const { firstName, lastName, username, id, igns } = req.body;

    let ignsArr = igns.split(',');
    ignsArr = ignsArr.map((element: String) => element.trim());
    ignsArr = ignsArr.filter((element: String) => element);

    User.findOneAndUpdate(
      { id },
      { firstName, lastName, username, igns: ignsArr },
      { new: true },
      (err, doc) => {
        if (err) console.log(err);
        res.status(200).json(doc); // might need to comment this out later
      }
    );
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

/**
 * @route   POST user/followers/add
 * @desc    Add a follower to a user's list of followers
 * @access  Private
 */
router.post('/followers/add', async (req, res) => {
  try {
    const { userID, followerID } = req.body;
    if (userID === followerID) {
      res.status(201).json({ msg: 'userID is the same as followerID' });
      return;
    }
    await User.findOne(
      { id: userID },
      undefined,
      undefined,
      async (err, doc) => {
        if (err) console.log(err);
        if (!doc) {
          res.status(201).json({ error: 'UserID not found' });
        } else {
          doc.followers.set(followerID, followerID);
          await doc.save();
          res.status(200).json(doc); // might need to comment this out later
        }
      }
    );
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

/**
 * @route   POST user/followers/delete
 * @desc    Remove a follower from a user's list of followers
 * @access  Private
 */
router.post('/followers/delete', async (req, res) => {
  try {
    const { userID, followerID } = req.body;
    await User.findOne(
      { id: userID },
      undefined,
      undefined,
      async (err, doc) => {
        if (err) console.log(err);
        if (!doc) {
          res.status(201).json({ error: 'UserID not found' });
        } else {
          if (!doc.followers.has(followerID)) {
            res
              .status(201)
              .json({ error: 'Unable to delete: follower not found' });
          } else {
            doc.followers.delete(followerID);
            await doc.save();
            res.status(200).json(doc);
          }
        }
      }
    );
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

/**
 * @route   POST user/following/add
 * @desc    Add a person to the user's list of people they're following
 * @access  Private
 */
router.post('/following/add', async (req, res) => {
  try {
    const { userID, followingID } = req.body;
    if (userID === followingID) {
      res.status(201).json({ msg: 'userID is the same as followingID' });
      return;
    }
    await User.findOne(
      { id: userID },
      undefined,
      undefined,
      async (err, doc) => {
        if (err) console.log(err);
        if (!doc) {
          res.status(201).json({ error: 'UserID not found' });
        } else {
          doc.following.set(followingID, followingID);
          await doc.save();
          res.status(200).json(doc); // might need to comment this out later
        }
      }
    );
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

/**
 * @route   POST user/following/delete
 * @desc    Remove a person from the user's list of people they're following
 * @access  Private
 */
router.post('/following/delete', async (req, res) => {
  try {
    const { userID, followingID } = req.body;
    await User.findOne(
      { id: userID },
      undefined,
      undefined,
      async (err, doc) => {
        if (err) console.log(err);
        if (!doc) {
          res.status(201).json({ error: 'UserID not found' });
        } else {
          if (!doc.following.has(followingID)) {
            res.status(201).json({
              error:
                'Unable to delete: followingID not in list of people user is following',
            });
          } else {
            doc.following.delete(followingID);
            await doc.save();
            res.status(200).json(doc);
          }
        }
      }
    );
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

export default router;
