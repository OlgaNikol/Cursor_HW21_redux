import {useSelector} from "react-redux";
import {postsSelector} from "../../store/selector";
import {Post} from "./Post";

const PostsList = () => {
    const posts = useSelector(postsSelector);

    return (
        posts.map(item => (
            <Post key={item.id} id={item.id}/>
        ))
    )
}

export default PostsList;