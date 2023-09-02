import {Provider, useSelector} from "react-redux";
import {postsSelector} from "./store/selector";
import store from "./store";

import {Post} from "./components/post/Post";
import {Form} from "./components/form/Form";
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <Form/>
            <PostsList/>
        </Provider>
    );
}

export default App;

const PostsList = () => {
    const posts = useSelector(postsSelector);

    return (
        posts.map(item => (
            <Post key={item.id} id={item.id}/>
        ))
    )
}
