import { addComment } from "./action";

export const addComentThunk  = (comment) => {
    return (dispatch, getState) => {
        if(comment.length !== 0 ){

            const  { user } = getState()
            
            const updateUser = { ...user, comments: [...user.comments , comment]};
            
            dispatch(addComment(updateUser))
        }
    }
}
