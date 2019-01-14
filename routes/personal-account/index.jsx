/**
 * Ecommerce Dashboard
 */
import React, { Component } from 'react'
import IntlMessages from 'Util/IntlMessages'
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar'
import classnames from 'classnames'
import { connect } from 'react-redux'
import PositionsFilterList from 'Modules/personal-account/PositionsFilter/PositionsFilterList'
import SortingOrder from 'Modules/personal-account/SortingOrder/SortingOrder'
import PositionsList from 'Modules/personal-account/PositionsList/PositionsList'
import BaseModalWindow from 'Components/BaseModalWindow/BaseModalWindow'
import StatusesTable from 'Modules/personal-account/StatusesTable/StatusesTable'
import StatusHistoryBlock from 'Modules/personal-account/StatusHistoryBlock/StatusHistoryBlock'
import PositionView from 'Modules/personal-account/PositionView/PositionView'
import ToggleFilterButton from 'Modules/personal-account/PositionsFilter/ToggleFilterButton'
import {
  toggleFilterList,
  loadPositionsAction,
  changePositionsListSortOrderAction,
  openStatusesModalAction,
  closeStatusesModalAction,
  openStatusHistoryModalAction,
  closeStatusHistoryModalAction,
  openPositionViewModalAction,
  closePositionViewModalAction,
  toggleFilterListAction,
} from 'Actions'

class PersonalAccountPage extends Component {
  componentDidMount() {
    const me = this
    const {
      loadPositionsAction,
      positions,
    } = me.props
    if (!positions.isLoaded) {
      loadPositionsAction()
    }
  }

  getStatusesModalWindow() {
    const me = this
    const {
      closeStatusesModalAction,
      openStatusHistoryModalAction,
    } = me.props
    const {
      title,
      statuses,
      isLoading,
      isOpen,
    } = me.props.statuses
    const statusesModalTitle = `Статус кандидатов на вакансию ${title}`

    return (
      <BaseModalWindow
        title={statusesModalTitle}
        isOpen={isOpen}
        onClose={closeStatusesModalAction}
      >
        <StatusesTable
          isLoading={isLoading}
          data={statuses}
          onRead={openStatusHistoryModalAction}
        />
      </BaseModalWindow>
    )
  }

  getPositionViewModalWindow() {
    const me = this
    const {
      closePositionViewModalAction,
    } = me.props
    const {
      position,
      isLoading,
      isOpen,
    } = me.props.position
    const modalTitle = `Просмотр требований к вакансии ${position.title}`

    return (
      <BaseModalWindow
        title={modalTitle}
        isOpen={isOpen}
        onClose={closePositionViewModalAction}
      >
        <PositionView
          isLoading={isLoading}
          position={position}
        />
      </BaseModalWindow>
    )
  }

  getStatusHistoryModalWindow() {
    const me = this
    const {
      closeStatusHistoryModalAction,
    } = me.props
    const {
      isHistoryOpen,
      historyOptions,
    } = me.props.statuses
    const modalTitle = `Изменение статуса кандидата ${historyOptions.fio}`

    return (
      <BaseModalWindow
        title={modalTitle}
        isOpen={isHistoryOpen}
        onClose={closeStatusHistoryModalAction}
      >
        <StatusHistoryBlock {...historyOptions} />
      </BaseModalWindow>
    )
  }

  onChangeSortOrder = (e) => {
    this.props.changePositionsListSortOrderAction(e.target.value)
  }

  render() {
    const me = this
    const {
      match,
      filters,
      positions,
      openStatusesModalAction,
      openPositionViewModalAction,
    } = me.props

    const { isCollapsed } = filters
    const { sortOrderItems, sortOrder } = positions

    return (
      <div className="personal-account-wrapper">
        <PageTitleBar
          title={<IntlMessages id="sidebar.personalAccount" />}
          enableBreadCrumb={false}
          match={match}
        />

        <div className="row">
          <div className="col-sm">
            <div className="rct-block">
              <div className="m-5 clearfix">
                {isCollapsed && <ToggleFilterButton />}
                <SortingOrder
                  className="pull-right"
                  items={sortOrderItems}
                  defaultValue={sortOrder}
                  onChange={me.onChangeSortOrder}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">

          {!isCollapsed && <div className="col-12 col-md-3">
              <div className="rct-block">
                <PositionsFilterList />
              </div>
            </div>
          }

          <div className={classnames('col-12', { 'col-md-9': !isCollapsed })}>
            <div className="rct-block">
              <PositionsList
                onShowStatus={openStatusesModalAction}
                onReadRequirements={openPositionViewModalAction}
              />
            </div>
          </div>
        </div>

        {me.getStatusesModalWindow()}
        {me.getPositionViewModalWindow()}
        {me.getStatusHistoryModalWindow()}
      </div>
    )
  }
}

const mapStateToProps = ({ personalAccount }) => ({
  ...personalAccount,
})

export default connect(mapStateToProps, {
  toggleFilterList,
  loadPositionsAction,
  openStatusesModalAction,
  closeStatusesModalAction,
  changePositionsListSortOrderAction,
  openStatusHistoryModalAction,
  closeStatusHistoryModalAction,
  openPositionViewModalAction,
  closePositionViewModalAction,
  toggleFilterListAction,
})(PersonalAccountPage)
