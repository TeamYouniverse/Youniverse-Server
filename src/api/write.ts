import { Router, Request, Response } from "express";

import Post from "../models/Post";
const router = Router();

/**
 *  @route POST api/posts
 *  @desc Create a post
 *  @access Private
 */
router.post("/",async (req: Request, res: Response) => {
    try {
       // console.log(req.body)
      const newPost = new Post()
      newPost.title = req.body.title
      newPost.content = req.body.content
      newPost.category = req.body.category
      newPost.user = req.body.user
      const post = await newPost.save();

      const result = {
          "id" : post.id,
          "title" : post.title,
          "content" : post.content
      }
      return res.status(200).json(result);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;