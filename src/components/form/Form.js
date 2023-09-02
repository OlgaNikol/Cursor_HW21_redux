import styles from "./Form.module.css";
import {useState} from "react";
import {useDispatch} from "react-redux";

export const Form = () => {
    const dispatch = useDispatch();

    const [stateText, setText] = useState('');
    const [stateImage, setImage] = useState('');
    const [stateAuthor, setAuthor] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const handleImgChange = (e) => {
        setImage(e.target.value);
    }

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: 'ADD',
            payload: {
                text: stateText,
                image: stateImage,
                author: stateAuthor
            }
        });

        setText('');
        setImage('');
        setAuthor('');
    }

    return (
        <div className={styles.container}>
            <h1>Add a New Post</h1>
            <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
                <input value={stateText} type="text"
                       onChange={handleTextChange}
                       placeholder="Text *"
                       required/>
                <input value={stateImage} type="url"
                       onChange={handleImgChange}
                       placeholder="Image URL *"
                       required/>
                <select value={stateAuthor} onChange={handleAuthorChange} name="authors" id="select" required>
                    <option value="">--Please choose an author--</option>
                    <option value="Audrey Hepburn">Audrey Hepburn</option>
                    <option value="Harrison Ford">Harrison Ford</option>
                    <option value="Nicolas Cage">Nicolas Cage</option>
                </select>
                <button>Add a post</button>
            </form>
        </div>
    )
}