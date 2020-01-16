const initState = {
    posts:[
    {
    "id": '1',
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum"
},
  {
    "id": '2',
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit"
  },
  {
    "id": '3',
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad"
  }
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return{
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer