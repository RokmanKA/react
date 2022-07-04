import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {useState} from "react";
import {getPostComments} from "./services";

export default function App() {

  let [comments, setComments] = useState([]);

  const getPostId = (id) => {
    getPostComments(id).then(({data}) => setComments([...data]));

  }
  return (<div>

    <h1>comments of chosen Post</h1>
    {comments.map(value => <div>{value.body}</div>)

    }
    <hr/>
    <br/>
    <hr/>
    {/*<Users/>*/}
    <Posts getPostId={getPostId}/>


  </div>);
}