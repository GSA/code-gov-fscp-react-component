/* global PUBLIC_PATH */
/* global fetch */
import React, { Component, Fragment } from 'react'
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom'
import Breadcrumbs from 'components/breadcrumbs'
import LazyHTML from 'components/lazy-html'
import SideNav from 'components/side-nav'
import SiteBanner from 'components/site-banner'
import NavSelect from 'components/nav-select'
import { refreshView, scrollToTopOfResults } from 'utils/other'

const baseurl = PUBLIC_PATH + "assets/plugins/fscp-react-component/"
const fscpurl = PUBLIC_PATH + 'policy-guide/'

const pages = [
  { display: 'Introduction', route: 'introduction', filename: '0-introduction' },
  { display: '1. Objectives', route: 'objectives', filename: '1-objectives' },
  { display: '2. Scope & Applicability', route: 'scope', filename: '2-scope' },
  { display: '3. Three-Step Software Solutions Analysis', route: 'solutions-analysis', filename: '3-solutions-analysis' },
  { display: '4. Government-Wide Code Reuse', route: 'code-reuse', filename: '4-code-reuse' },
  { display: '5. Open Source Software', route: 'open-source', filename: '5-open-source' },
  { display: '6. Exceptions to Government Code Reuse', route: 'exceptions', filename: '6-exceptions' },
  { display: '7. Implementation', route: 'implementation', filename: '7-implementation' },
  { display: 'Appendix A - Definitions', route: 'appendix', filename: 'appendix' }
]

const pagesForSelect = pages.map(({display, route}) => {
  return {
    display: display.replace(/^[0-9]. /g, ''), // remove numbers from front
    route:  fscpurl + route
  }
})

const linksForSideNav = pages.map(({display, route}) => {
  return {
    route: route,
    text: display
  }
})

const scrollToHash = () => {
  const hash = window.location.hash
  if (hash) {
    const id = hash.replace("#","")
    if (id) {
      console.log(`scrolling to element with id "${id}"`)
      document.getElementById(id).scrollIntoView()
    }
  }
}

export const PolicyGuidePage = ({ url }) => {
 return (
    <div className="docs-content">
      <LazyHTML url={url} onUpdate={scrollToHash}/>
    </div>
  )
}

export default class PolicyGuide extends Component {

  componentDidMount() {
    refreshView()
    window.addEventListener('popstate', event => {
      if (window.location.pathname.startsWith(fscpurl)) {
        scrollToTopOfResults()
      }
    })
    this.pathname = this.props.location.pathname
  }

  shouldComponentUpdate(nextProps, nextState) {
    const changed = nextProps.location.pathname !== this.pathname
    this.pathname = nextProps.location.pathname
    return changed
  }

  onNavChange() {
    scrollToTopOfResults()
  }

  get routes() {
    return pages.map(({ route, filename }) => {
      const path = `${this.props.match.url}/${route}`
      const url = baseurl + filename + '.html'
      return <Route key={path} path={path} component={() => <PolicyGuidePage url={url}/>} />
    })
  }

  render() {
    return (
      <div>
        <SiteBanner title='Federal Source Code Policy' />
        <Breadcrumbs crumbs={[
          { text: 'Home', to: '/' },
          { text: 'Federal Source Code Policy' }
        ]}/>
        <br/>
        <div className="indented">
          <div className="show-w-lte-600" style={{padding: '30px', textAlign: 'center'}}>
            <NavSelect pages={pagesForSelect} />
          </div>
          <div className="width-quarter show-w-gt-600 sticky">
            <SideNav
              alignment='left'
              baseurl={fscpurl}
              links={linksForSideNav}
              onLinkClick={::this.onNavChange}
            />
          </div>
          <Switch>
            {this.routes}
            <Redirect to={`${this.props.match.url}/introduction`} />
          </Switch>
        </div>
        <br/>
        <br/>
      </div>
    )
  }
}
