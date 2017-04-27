import { Component } from 'react'
import marked from 'marked'
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
  }

  componentWillMount() {
    document.body.style.backgroundColor = "white"
  }

  componentDidMount() {
    const { article } = this.props.params
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
    return (
      <article className="internal-page">
        {(this.state.loaded) ? (
          <div className="contents" dangerouslySetInnerHTML={this.state.content} />
        ) : (this.state.error) ? (
          <div className="error">
            <h1>Error loading content</h1>
            <p>We've experienced an error trying to load: {params.article}</p>
          </div>
        ) : (
          <Loading />
        )}
      </article>
    )
  }
}
