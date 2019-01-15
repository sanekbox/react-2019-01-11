import React, {Component} from 'react';
import Article from './article';

class ArticleList extends Component{
    state = {
        openArticleId: null
    }

    render() {
        return <ul>{this.articles}</ul>;
    }

    get articles() {
        return this.props.articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === this.state.openArticleId}
                    toggleArticle={this.toggleOpenArticle}
                />
            </li>
        ))
    }

    toggleOpenArticle = (id) => {
        this.setState({
            openArticleId: id
        })
    }
}

export default ArticleList
