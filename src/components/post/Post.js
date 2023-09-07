import styles from './Post.module.css';
import like from '../../assets/icons/heart.png'
import comment from '../../assets/icons/comment.png'
import repost from '../../assets/icons/repost.png'

import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";

export const Post = ({ id }) => {
    const dispatch = useDispatch();

    const post = useSelector(state =>
        state.posts.find(post => post.id === id));

    const {author, content, image, date, likes, comments, reposts} = post;

    const [stateLikesClicked, setLikesClicked] = useState(false);
    const [stateCommentsClicked, setCommentsClicked] = useState(false);
    const [stateRepostsClicked, setRepostsClicked] = useState(false);

    const handleClickIcon = (type) => {
        if (!type) return;

        let action_type = null;
        let plusOrMinus = false;
        let count = 0;

        if (type === 'likes') {
            action_type = 'EDIT_LIKES';
            setLikesClicked(!stateLikesClicked);
            plusOrMinus = !stateLikesClicked;
            count = plusOrMinus ? likes + 1 : likes - 1;
        } else if (type === 'comments') {
            action_type = 'EDIT_COMMENTS';
            setCommentsClicked(!stateCommentsClicked);
            plusOrMinus = !stateCommentsClicked;
            count = plusOrMinus ? comments + 1 : comments - 1;
        } else {
            action_type = 'EDIT_REPOSTS';
            setRepostsClicked(!stateRepostsClicked);
            plusOrMinus = !stateRepostsClicked;
            count = plusOrMinus ? reposts + 1 : reposts - 1;
        }

        dispatch({
            type: action_type,
            payload: {
                id: id,
                count: count
            }
        })
    }

    return (
            <div className={styles.post}>
                <img className={styles.avatar} src={author.photo} alt="avatar"/>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.wrapper}>
                            <span className={styles.name}>{author.name}</span>
                            <span>{author.nickname}</span>
                            <span>{date}</span>
                        </div>
                    </div>
                    <span className={styles.content}>{content}</span>
                    <img src={image} alt="content"/>
                </div>
                <div className={styles.footer}>
                    <div onClick={() => handleClickIcon('likes')}>
                        <img className={styles.icon} src={like} alt="like"/>
                        <span>{likes}</span>
                    </div>
                    <div onClick={() => handleClickIcon('comments')}>
                        <img className={styles.icon} src={comment} alt="comment"/>
                        <span>{comments}</span>
                    </div>
                    <div onClick={() => handleClickIcon('reposts')}>
                        <img className={styles.icon} src={repost} alt="repost"/>
                        <span>{reposts}</span>
                    </div>
                </div>
            </div>
    )
}