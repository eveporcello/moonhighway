import { Component } from 'react'
import '../../stylesheets/internal-page.scss'

export default class InternalPage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    document.body.style.backgroundColor = "white"
  }

  render() {
    const { params } = this.props
    return (
      <article className="internal-page">
        <h1>Internal Page: {params.article}</h1>
      </article>
    )
  }
}
