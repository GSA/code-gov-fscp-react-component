/* global fetch */
import React, { Component, Fragment } from 'react'


class PolicyGuidePage extends Component {

  componentDidMount() {
    if (this.props.url && !this.pageContent) {
      fetch(this.props.url)
      .then(response => response.text())
      .then(text => {
        this.pageContent = text
      })
    }
  }

  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.pageContent }}></div>
  }
}

export default class PolicyGuide extends Component {
  render() {
    return (
      <div>
        <PolicyGuidePage url="https://raw.githubusercontent.com/GSA/code-gov-policy-guide/master/pages/html/0-introduction.html" />
      </div>
    )
  }
}
