import { Router, Request, Response } from "express";
import Post from "../models/Post";
import User from "../models/User";

const router = Router();

/**
 *  @route GET api/user/:id
 *  @desc Get post by ID
 *  @access Private
 */

//  router.get("/", async (req: Request, res: Response) => {
//     res.send("응답");
//   });
  

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    //const { id } = req.params;
    // console.log(id);


    // const newPost = new Post();
    // newPost.title = "test123";
    // newPost.category = "sad";
    // newPost.content = "abcdse";
    // newPost.user = req.params.id;
    // await newPost.save();

    if (!user) {
      return res.status(404).json({ msg: "해당하는 유저가 없습니다." });
    }
    // res.json(user);

    

    const posts = await Post.find({user: req.params.id});

    const groups = posts.reduce((a, c) =>{
        a[c.category] = a[c.category] || [];
        a[c.category].push(c);
        return a
    }, {})

    const result = {
        "id" : req.params.id,
        "username" : user.username,
        "postList" : groups
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error(error.message);
    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(500).send("Server Error");
  }
});



module.exports = router;