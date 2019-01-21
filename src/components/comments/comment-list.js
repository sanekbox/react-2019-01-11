import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group'
import './styles.css';

class CommentList extends Component {

    render() {
        const { isOpen, toggleOpenItem } = this.props
        return (
            <div className="test--comment__container">
                <button className="test--comment__btn" onClick={toggleOpenItem}>
                    {isOpen ? 'hide comments' : 'show comments'}
                </button>
                <CSSTransition
                    transitionName="comment"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    {isOpen ? this.getBody() : null}
                </CSSTransition>
            </div>
        )
    }

    getBody() {
        const { comments } = this.props

        const body = comments !== undefined && comments.length ? (
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>
                            <Comment comment={comment} />
                        </li>
                    ))}
                </ul>
        ) : (
            <h3>No comments yet</h3>
        )
        return <div>{body}</div>
    }
}

CommentList.propTypes = {
    comments: PropTypes.array,

    // from decorator
    isOpen: PropTypes.bool,
    toggleOpenItem: PropTypes.func.isRequired
}

export default toggleOpen(CommentList)
