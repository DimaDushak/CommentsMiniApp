import React from 'react';
import ReactDOM from 'react-dom';
import CommentsList from './js/components/CommentsList';
import WritingCommentForm from './js/components/WritingCommentForm';
import './scss/main.scss';

class CommentsApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            inputValue: '',
            textareaValue: '',
            commentsArray: []
        }

        this.changeValue = this.changeValue.bind(this);
        this.addComment = this.addComment.bind(this);
        this.removeComment = this.removeComment.bind(this);
    }

    changeValue(ev) {
        const name = ev.target.name;

        this.setState({
            [name]: ev.target.value
        })
    }

    addComment() {
        const id = this.state.id + 1;
        const now = new Date();
        const dateTime = [now.getDate(), now.getMonth() + 1, now.getFullYear(), now.getHours(), now.getMinutes()];
        const newDateTime = dateTime.map(item => {

            if (item < 10) {
                return '0' + item;
            } else {
                return item;
            }
        })
        const commentsArrayItem = [id, this.state.inputValue, this.state.textareaValue, newDateTime];
        const newCommentsArray = this.state.commentsArray.concat([commentsArrayItem]);
        localStorage.setItem('saved-data', JSON.stringify(newCommentsArray));

        this.setState({
            id,
            inputValue: '',
            textareaValue: '',
            commentsArray: newCommentsArray,
        })
    }

    removeComment(index) {
        const newCommentsArray = this.state.commentsArray.filter((item, i) => i !== index);
        localStorage.setItem('saved-data', JSON.stringify(newCommentsArray));

        this.setState({
            commentsArray: newCommentsArray
        })
    }

    componentDidMount() {
        if (localStorage.getItem('saved-data')) {
            const newCommentsArray = JSON.parse(localStorage.getItem('saved-data'));

            this.setState({
                commentsArray: newCommentsArray
            })
        }
    }

    render() {

        return (
            <div className="comment-block">
                <CommentsList commentsArray={this.state.commentsArray} removeComment={this.removeComment} />
                <WritingCommentForm inputValue={this.state.inputValue} textareaValue={this.state.textareaValue}
                    changeValue={this.changeValue} addComment={this.addComment} />
            </div>
        );
    }
}

ReactDOM.render(
    <CommentsApp />,
    document.getElementById('root')
);