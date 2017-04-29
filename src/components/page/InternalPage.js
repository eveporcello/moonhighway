import { Component } from 'react'
import marked from 'marked'
import { Header, Menu } from '../ui'
import '../../stylesheets/internal-page.scss'
import Loading from 'react-loading-animation'

export default class InternalPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            content: null,
            error: null
        }
        this.fetchContent = this.fetchContent.bind(this)
    }

    componentWillReceiveProps(nextProps) {
      const { article } = nextProps.params
      this.fetchContent(article)
    }

    componentWillMount() {

        document.body.style.backgroundColor = "white"
    }

    componentDidMount() {
        const { article } = this.props.params
        this.fetchContent(article)
    }

    fetchContent(article) {
      fetch(`/content/${article}.md`)
        .then(resp => resp.text())
        .then(resp => resp.match(/<!DOCTYPE html>/) ?
            `Whoops...\n==========\n\nWe are sorry, we cannot find content for __${article}__` :
            resp
        )
        .then(markdown => marked(markdown))
        .then(html => this.setState({
            loaded: true,
            content: {__html: html}
        }))
        .catch(error => this.setState({error}))
    }

    render() {
        const { params } = this.props
        return (this.state.loaded) ?
              <article className="internal-page">
                <Header />
                <Menu />
                <div className="contents" dangerouslySetInnerHTML={this.state.content} />
              </article> : (this.state.error) ?
                  <article className="internal-page error">
                    <h1>Error loading content</h1>
                    <p>We've experienced an error trying to load: {params.article}</p>
                  </article> :
                  <article className="internal-page error">
                    <Header />
                    <Menu />
                    <Loading />
                  </article>
    }
}
