import {Provider} from "react-redux";
import store from "./store";

import {Form} from "./components/form/Form";
import PostsList from "./components/post/PostsList";
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