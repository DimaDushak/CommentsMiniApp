const commenting = (state, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                ...state,
                [action.name]: action.value
            }

        case 'CHANGE_COMMENTS_ARRAY':
            return {
                ...state,
                commentsArray: action.commentsArray
            }

        case 'CHANGE_ID':
            return {
                ...state,
                id: action.id
            }

        case 'CLEAR_FORM':
            return {
                ...state,
                inputValue: action.inputValue,
                textareaValue: action.textareaValue
            }

        default:
            return state;
    }
}

export default commenting;