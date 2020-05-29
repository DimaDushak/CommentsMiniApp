export const changeText = (name, value) => {
    return {
        type: 'CHANGE_TEXT',
        name,
        value
    }
}

export const changeCommentsArray = (commentsArray) => {
    return {
        type: 'CHANGE_COMMENTS_ARRAY',
        commentsArray
    }
}

export const changeId = (id) => {
    return {
        type: 'CHANGE_ID',
        id
    }
}

export const clearForm = () => {
    return {
        type: 'CLEAR_FORM',
        inputValue: '',
        textareaValue: ''
    }
}