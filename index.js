import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import CommentsApp from './js/containers/CommentsApp';
import commenting from './js/reducers';
import './scss/main.scss';

const initialState = {
    id: 0,
    inputValue: '',
    textareaValue: '',
    commentsArray: []
}

const store = createStore(commenting, initialState);

ReactDOM.render(
    <CommentsApp store={store} />,
    document.getElementById('root')
);