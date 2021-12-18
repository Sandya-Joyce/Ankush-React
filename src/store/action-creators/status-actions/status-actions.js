export const addStatus = (status) => {
    return (dispatch) => {
        dispatch({
            type:"add",
            payload:status
        })
    }
}
