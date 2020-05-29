import React from 'react';
import { connect } from 'react-redux';
import CommentsList from '../components/CommentsList';
import WritingCommentForm from '../components/WritingCommentForm';
import { changeText, changeCommentsArray, changeId, clearForm } from '../actions';

class CommentsApp extends React.Component {
    constructor(props) {
        super(props);

        this.changeValue = this.changeValue.bind(this);
        this.addComment = this.addComment.bind(this);
        this.removeComment = this.removeComment.bind(this);
    }

    changeValue(ev) {
        const target = ev.target;
        const name = target.name;
        const value = target.value;

        this.props.changeText(name, value);
    }

    addComment() {
        const id = this.props.id + 1;
        const now = new Date();
        const dateTime = [now.getDate(), now.getMonth() + 1, now.getFullYear(), now.getHours(), now.getMinutes()];
        const newDateTime = dateTime.map(item => {

            if (item < 10) {
                return '0' + item;
            } else {
                return item;
            }
        });
        const commentsArrayItem = [id, this.props.inputValue, this.props.textareaValue, newDateTime];
        const newCommentsArray = this.props.commentsArray.concat([commentsArrayItem]);
        localStorage.setItem('saved-data', JSON.stringify(newCommentsArray));

        this.props.changeId(id);
        this.props.clearForm();
        this.props.changeCommentsArray(newCommentsArray);
    }

    removeComment(index) {
        const newCommentsArray = this.props.commentsArray.filter((item, i) => i !== index);
        localStorage.setItem('saved-data', JSON.stringify(newCommentsArray));

        this.props.changeCommentsArray(newCommentsArray);
    }

    componentDidMount() {
        if (localStorage.getItem('saved-data')) {
            const newCommentsArray = JSON.parse(localStorage.getItem('saved-data'));

            this.props.changeCommentsArray(newCommentsArray);
        }
    }

    render() {

        return (
            <div className="comment-block">
                <CommentsList commentsArray={this.props.commentsArray} removeComment={this.removeComment} />
                <WritingCommentForm inputValue={this.props.inputValue} textareaValue={this.props.textareaValue}
                    changeValue={this.changeValue} addComment={this.addComment} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.id,
        inputValue: state.inputValue,
        textareaValue: state.textareaValue,
        commentsArray: state.commentsArray
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeText: (name, value) => dispatch(changeText(name, value)),
        changeCommentsArray: (commentsArray) => dispatch(changeCommentsArray(commentsArray)),
        changeId: (id) => dispatch(changeId(id)),
        clearForm: () => dispatch(clearForm())
    }
}

CommentsApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsApp);

export default CommentsApp;