import './App.css'
import ProfilePic from './assets/profile.jpg'
import PostFb from './components/views/post';

 function App() {
  
const userDetails={
  createdBy:'Haziq Javed',
  avatar: ProfilePic,
  description: "Recently visited Skardu & here is a some amazing shots ❤️",
  images:[
  'https://i.dawn.com/primary/2015/04/552534a77b507.jpg?r=961640394' ,
  'https://i.dawn.com/primary/2015/04/552534a1572da.jpg?r=2087649568',
  'https://i.dawn.com/primary/2015/04/5525349eba78c.jpg?r=409479358',
  'https://i.dawn.com/primary/2015/04/55253498bb39c.jpg?r=1434275949',
  'https://i.dawn.com/primary/2015/04/552534b36e1b1.jpg?r=1094679505',
  'https://i.dawn.com/primary/2015/04/552534aa7d3be.jpg?r=320225311',
  'https://i.dawn.com/primary/2015/04/552534a6a2874.jpg?r=22887587'
  ],
  createdAt:Date().toLocaleString().slice(0,21)
}
  return (
    <div className="App">
      <PostFb userDetails={userDetails}/>
    </div>
  );
}

export default App;
