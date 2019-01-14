/**
 * Ecommerce Dashboard
 */

import React, { Component } from 'react'
import IntlMessages from 'Util/IntlMessages'
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar'

export default class Dashboard extends Component {
  render() {
    const { match } = this.props
    return (
      <div className="ecom-dashboard-wrapper">
        <PageTitleBar title={<IntlMessages id="sidebar.dashboard" />} match={match} />
      </div>
    )
  }
}
