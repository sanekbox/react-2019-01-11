import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Comment extends Component {
    render() {
        const { comment } = this.props

        return (
            <div className="test--comment_body">
                <h4>{comment.user}</h4>
                <p>{comment.text}</p>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.string,
        user: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comment