const initialState = {
    posts: [
        {
            id: 0,
            author: {
                name: "Nadine Yousif",
                photo: "./images/avatar.jpg",
                nickname: "@nadin_yus"
            },
            content: "A self-taught photographer has come face-to-face with a kestrel swooping towards him.",
            image: "./images/bird.png.webp",
            date: "Mon Aug 01 2023",
            likes: 120,
            comments: 10,
            reposts: 25
        },
        {
            id: 1,
            author: {
                name: "Nadine Yousif",
                photo: "./images/avatar.jpg",
                nickname: "@nadin_yus"
            },
            content: "For Nubian Ibexes, the high-altitude rocky terrains are home.\n" +
                "\n" +
                "Displays of dominance begin with showing off their impressive horns, captured in this shot by Amit Eshel in the Zin Desert, Israel.",
            image: "./images/ibexes.jpg.webp",
            date: "Wed Aug 12 2023",
            likes: 56,
            comments: 16,
            reposts: 40
        }
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                posts: [{
                    id: state.posts.length,
                    author: {
                        name: action.payload.author,
                        photo: "./images/avatar_plug.jpg",
                        nickname: ""
                    },
                    content: action.payload.text,
                    image: action.payload.image,
                    date: new Date().toDateString(),
                    likes: 0,
                    comments: 0,
                    reposts: 0
                }, ...state.posts]
            }
        case "EDIT_LIKES": {
            if (action.payload) {
                return {
                    posts: state.posts.map(post => {
                        if (post.id === action.payload.id) {
                            post.likes = action.payload.count;
                        }
                        return post;
                    })
                }
            }
            return state;
        }
        case "EDIT_COMMENTS": {
            if (action.payload) {
                return {
                    posts: state.posts.map(post => {
                        if (post.id === action.payload.id) {
                            post.comments = action.payload.count;
                        }
                        return post;
                    })
                }
            }
            return state;
        }
        case "EDIT_REPOSTS": {
            if (action.payload) {
                return {
                    posts: state.posts.map(post => {
                        if (post.id === action.payload.id) {
                            post.reposts = action.payload.count;
                        }
                        return post;
                    })
                }
            }
            return state;
        }
        default:
            return state;
    }
}