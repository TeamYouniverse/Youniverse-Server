# 솝커톤

### 🌟 우리 서비스 이름: Youniverse

`로고`

<br/>


### ✨ `Youniverse` 는 이런 서비스입니다!

나와 너의 감정 공유의 시간을 행성에 기록하다!  

나만의 우주를 만들어보세요.

행성이 감정을 담아둘 거예요.

함께 느꼈던 감정을 행성에 기록할 친구들을 Youniverse로 초대할 수 있어요.  

<br/>

### 🌟 모델 설계
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

### 🌟 API specification
1. [POST] 회원가입/로그인 API (`path` : '/api/login')
```
{
status : 200,
data :{
	id: 1
	username: "이솔",
	}
}
```
2. [GET] 행성 정보 API (`path` : '/api/user/{id}')
```
{
  status : 200,
  data : {
    id : 1,
		username : "준영",
		postList : {
			"happy" : [
				{
					id : 1,
					title: "진짜행복",
					content : "솝커톤 화이팅,,!"	
				}
			], 
       "touching" : [
				{
					id : 1,
					title: "진짜행복",
					content : "솝커톤 화이팅,,!"	
				}
			],
			"sorry" : [
				{
					id : 2,
					title: "진짜슬픔",
					content : "나와 너의 감정 공유의 시간을 행성에 기록하다"
				}
			],
			"sad" : [
				{
					id : 3,
					title: "진짜행복",
					content : "youniverse"
				}
			]
		}
  }
}
```
3. [POST] 글 작성 API (`path` : '/api/write')
```
{
	status:200,
	data: {
			id:1,//postId
			title: "후야",
			content: "솝커톤 화이팅!"
		}
}
```
