# μμ»€ν€

### π μ°λ¦¬ μλΉμ€ μ΄λ¦: Youniverse

`λ‘κ³ `

<br/>


### β¨ `Youniverse` λ μ΄λ° μλΉμ€μλλ€!

λμ λμ κ°μ  κ³΅μ μ μκ°μ νμ±μ κΈ°λ‘νλ€!  

λλ§μ μ°μ£Όλ₯Ό λ§λ€μ΄λ³΄μΈμ.

νμ±μ΄ κ°μ μ λ΄μλ κ±°μμ.

ν¨κ» λκΌλ κ°μ μ νμ±μ κΈ°λ‘ν  μΉκ΅¬λ€μ Youniverseλ‘ μ΄λν  μ μμ΄μ.  

<br/>

### π λͺ¨λΈ μ€κ³
```typescript
// model/User.ts
import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";

const UserSchema = new mongoose.Schema({
  
  username: {
    type: String,
    required: true,
  },
  postList: [
      {
        post: {
          type: mongoose.Types.ObjectId,
          ref: "Post",
        }
      }
    ]
},
);

export default mongoose.model<IUser & mongoose.Document>("User", UserSchema);
```
```typescript
// model/Post.ts
import mongoose from "mongoose";
import {IPost} from "../interfaces/IPost";

const PostSchema= new mongoose.Schema({
    category:{
        type:String,
    },
    title:{
        type:String,
    },
    content:{
        type:String,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }
});

export default mongoose.model<IPost & mongoose.Document>("Post",PostSchema);
```

### π API specification
1. [POST] νμκ°μ/λ‘κ·ΈμΈ API (`path` : '/api/login')
```
{
status : 200,
data :{
	id: 1
	username: "μ΄μ",
	}
}
```
2. [GET] νμ± μ λ³΄ API (`path` : '/api/user/{id}')
```
{
  status : 200,
  data : {
    id : 1,
		username : "μ€μ",
		postList : {
			"happy" : [
				{
					id : 1,
					title: "μ§μ§νλ³΅",
					content : "μμ»€ν€ νμ΄ν,,!"	
				}
			], 
       "touching" : [
				{
					id : 1,
					title: "μ§μ§νλ³΅",
					content : "μμ»€ν€ νμ΄ν,,!"	
				}
			],
			"sorry" : [
				{
					id : 2,
					title: "μ§μ§μ¬ν",
					content : "λμ λμ κ°μ  κ³΅μ μ μκ°μ νμ±μ κΈ°λ‘νλ€"
				}
			],
			"sad" : [
				{
					id : 3,
					title: "μ§μ§νλ³΅",
					content : "youniverse"
				}
			]
		}
  }
}
```
3. [POST] κΈ μμ± API (`path` : '/api/write')
```
{
	status:200,
	data: {
			id:1,//postId
			title: "νμΌ",
			content: "μμ»€ν€ νμ΄ν!"
		}
}
```
