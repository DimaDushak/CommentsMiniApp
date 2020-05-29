import React from 'react';

const WritingCommentForm = (props) => {
    const { inputValue, textareaValue, changeValue, addComment } = props;

    return (
        <form onSubmit={(ev) => {
            ev.preventDefault();
            addComment();
        }}>
            <label>
                Имя:
                <br /><br />
                <input value={inputValue}
                    size="30"
                    name="inputValue"
                    onChange={(ev) => {
                        changeValue(ev);
                    }}
                />
            </label>
            <br /><br />
            <label>
                Комментарий:
                <br /><br />
                <textarea value={textareaValue}
                    cols="30"
                    rows="10"
                    name="textareaValue"
                    onChange={(ev) => {
                        changeValue(ev);
                    }}
                />
            </label>
            <br /><br />
            <button type="submit">Отправить</button>
        </form>
    );
}

export default WritingCommentForm;