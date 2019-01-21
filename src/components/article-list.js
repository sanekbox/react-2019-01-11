import React, {Component} from 'react';
import Article from './article';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';

class ArticleList extends Component {
    render() {
        return <ul>{this.articles}</ul>;
    }

    componentDidMount() {
        this.props.fetchData && this.props.fetchData()
    }

    get articles() {
        const {
            openItemId,
            toggleOpenArticle,
            articles
        } = this.props

        return articles.map(article => (
            <li key={article.id} className="test--art__container">
                <Article
                    article={article}
                    isOpen={article.id === openItemId}
                    toggleArticle={toggleOpenArticle}
                />
            </li>
        ))
    }
}

ArticleList.propTypes = {
    isOpen: PropTypes.bool,
    toggleArticle: PropTypes.func,
    article: PropTypes.object
}

export default accordion(ArticleList)
