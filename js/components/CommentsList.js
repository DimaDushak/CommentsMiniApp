import React from 'react';

const CommentsList = (props) => {

    if (props.commentsArray.length > 0) {
        return (
            <div>
                <ul className="comment-list">
                    {
                        props.commentsArray.map((item, i) => {
                            const date = item[3];
                            return (
                                <li key={item[0]} className="comment-list__item">
                                    <p>{item[1]}</p>
                                    <hr />
                                    <p>{item[2]}</p>
                                    <div className="comment-list__date">{`${date[0]}/${date[1]}/${date[2]} ${date[3]}:${date[4]}`}</div>
                                    <button onClick={() => props.removeComment(i)} className="comment-list__button">X</button>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    } else {
        return <div>Список пуст...</div>
    }
}

export default CommentsList;