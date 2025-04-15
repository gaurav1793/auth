import express from 'express'
import { createTweetController, deleteTweetController, getTweetByIdController, getTweetController } from '../Controllers/TweetsControllers.js';

const router = express.Router();


router.post('/createTweet',createTweetController);
router.get('/getTweets',getTweetController);
router.get('/getTweets/:id',getTweetByIdController);
router.delete('/deleteTweet/:id',deleteTweetController);


export default router