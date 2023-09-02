export const postsSelector = (state) => state.posts;

export const selectPostById = (state, id) => {state.posts.find(post => post.id === id)};