import React, { Component } from 'react'
import marked from 'marked'
import capitalize from 'capitalize'
import hammerjs from 'hammerjs'
import Loading from 'react-loading-animation'
import { Link } from 'react-router'
import { Header, Footer, Menu } from './Menu'
import LeftArrow from 'react-icons/lib/fa/angle-left'
import '../../stylesheets/internal-page.scss'

export default class InternalPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            content: null,
            error: null,
            collapsed: window.innerWidth < props.breakpoint,
            menuOpen: props.menuOpen || false
        }
        this.previousBackgroundColor = document.body.style.backgroundColor
        this.fetchContent = this.fetchContent.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.onResize = this.onResize.bind(this)
    }

    toggleMenu() {
        const menuOpen = !this.state.menuOpen
        this.setState({ menuOpen })
    }

    onResize() {
        const { collapsed } = this.state
        if (collapsed && window.innerWidth > this.props.breakpoint) {
            this.setState({ collapsed: false })
        } else if (!collapsed && window.innerWidth < this.props.breakpoint) {
            this.setState({ collapsed: true })
        }
    }

    componentWillReceiveProps(nextProps) {
        const { article } = nextProps.params
        this.fetchContent(article)
    }

    componentWillMount() {
        window.addEventListener('resize', this.onResize)
        document.body.style.backgroundColor = "white"
    }

    componentDidMount() {
        const { article } = this.props.params
        this.fetchContent(article)
        scroll(0,0)

        // Todo: Add/Remove only when collappsed
        this.mc = hammerjs(document.body)
        this.mc.on('swiperight', this.toggleMenu)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
        document.body.style.backgroundColor = this.previousBackgroundColor

        this.mc.off()
        this.mc.destroy()
        this.mc = null
    }

    componentDidUpdate() {
        scroll(0,0)
    }

    fetchContent(article) {
        console.warn('fetching from localhost:3000 only!')
        fetch(`http://localhost:3000/content/${article}.md`)
          .then(resp => resp.text())
          .then(resp => resp.match(/<!DOCTYPE html>/) ?
              `Whoops...\n==========\n\nWe are sorry, we cannot find content for __${article}__` :
              resp
          )
          .then(markdown => marked(markdown))
          .then(html => this.setState({
              loaded: true,
              content: {__html: html},
              title: capitalize.words(article.replace(/-/g, " ").replace('html css', 'HTML & CSS'))
          }))
          .catch(error => this.setState({error}))
    }

    render() {
        const { params } = this.props
        const { collapsed, menuOpen } = this.state
        return (this.state.loaded) ?
              <article className="internal-page">
                <Header title={this.state.title} />
                <div className="main-row">
                  <div className="right">
                    <Menu collapsed={collapsed} isOpen={menuOpen} toggleMenu={this.toggleMenu} />
                  </div>
                  <div className="left">
                    {(collapsed) ? <div className="open-menu" onClick={this.toggleMenu}><LeftArrow />menu</div> : null}
                    <div className="contents" dangerouslySetInnerHTML={this.state.content} />
                  </div>
                </div>
                <Footer />
              </article> : (this.state.error) ?
                  <article className="internal-page error">
                    <h1>Error loading content</h1>
                    <p>We've experienced an error trying to load: {params.article}</p>
                    <Footer />
                  </article> :
                  <article className="internal-page">
                    <Header title="Loading" />
                    <div className="main-row">
                      <div className="right">
                        <Menu collapsed={collapsed} isOpen={menuOpen} toggleMenu={this.toggleMenu} />
                      </div>
                      <div className="left">
                        <Loading />
                      </div>
                    </div>
                    <Footer />
                  </article>
    }
}

InternalPage.defaultProps = {
    breakpoint: 769
}
