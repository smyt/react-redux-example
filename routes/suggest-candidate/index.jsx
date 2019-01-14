/**
 * Suggest candidate page
 */
import React, { Component } from 'react'
import IntlMessages from 'Util/IntlMessages'
import { connect } from 'react-redux'
import { initialize } from 'redux-form'
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar'
import CandidateSuggestForm from 'Modules/personal-account/CandidateSuggestForm/CandidateSuggestForm'
import {
  getPosition,
  isPositionLoaded,
  getVisibleSuggestion,
  getVisibleSuggestId,
  getSuggests,
} from 'Selectors/personal-account'
import {
  loadPositionAction,
  addSuggestionAction,
  cancelSuggestionAction,
  minimizeSuggestionAction,
  maximizeSuggestionAction,
  addWindowButton,
  removeWindowButton,
  resetCurrentPositionAction,
} from 'Actions'

class SuggestCandidatePage extends Component {
  componentDidMount() {
    const me = this
    const {
      loadPositionAction,
      addSuggestionAction,
      suggestion,
      match,
    } = me.props

    loadPositionAction(match.params.id)

    if (!suggestion) {
      addSuggestionAction(match.params.id)
    }
  }

  componentDidUpdate(prevProps) {
    const me = this
    const {
      loadPositionAction,
      initialize,
      match,
    } = me.props

    if (prevProps.visibleId && prevProps.visibleId !== me.props.visibleId) {
      loadPositionAction(match.params.id)
      initialize('suggestForm', me.props.suggestion)
    }
  }

  componentWillUnmount() {
    const me = this
    const {
      suggestion,
      minimizeSuggestionAction,
      resetCurrentPositionAction,
    } = me.props

    minimizeSuggestionAction(suggestion.id)
    me.doAddWindowButton()
    resetCurrentPositionAction()
  }

  renderForm() {
    const me = this

    return (
      me.props.suggestion &&
      <CandidateSuggestForm
        onSave={me.doSaveSuggestion}
        onCancel={me.doCancelSuggestion}
        onMinimize={me.doMinimizeSuggestion}
      />
    )
  }

  doSaveSuggestion = () => {
  }

  doCancelSuggestion = () => {
    const me = this
    const {
      history,
      suggestion,
      cancelSuggestionAction,
      removeWindowButton,
    } = me.props

    cancelSuggestionAction(suggestion.id)
    removeWindowButton(suggestion.id)
    history.push('/personal-account')
  }

  doMinimizeSuggestion = () => {
    this.props.history.push('/personal-account')
  }

  doAddWindowButton = () => {
    const me = this
    const {
      location,
      history,
      suggestion,
      position,
      addWindowButton,
      maximizeSuggestionAction,
      cancelSuggestionAction,
    } = me.props

    function afterShowAction() {
      maximizeSuggestionAction(suggestion.id)
      history.push(`/suggest-candidate/${position.id}`)
    }

    function afterRemoveAction(visibleId) {
      cancelSuggestionAction(suggestion.id)
      if (location.pathname !== '/personal-account' && visibleId === suggestion.id) {
        history.push('/personal-account')
      }
    }

    addWindowButton({
      id: suggestion.id,
      title: `Должность: ${position.title}`,
      showAction: afterShowAction,
      removeAction: afterRemoveAction,
    })
  }

  render() {
    const me = this
    const {
      match,
      position,
    } = me.props
    const title = (isPositionLoaded) ? position.title : ''

    return (
      <div className="suggest-candidate-wrapper">
        <PageTitleBar
          title={<IntlMessages id="page.SuggestCandidate" values={{ title }} />}
          enableBreadCrumb={false}
          match={match}
        />
        <div className="row">
          <div className="col-12">
            <div className="rct-block">
              <div className="m-5">
                {me.renderForm()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    position: getPosition(state),
    visibleId: getVisibleSuggestId(state),
    isPositionLoaded: isPositionLoaded(state),
    suggestion: getVisibleSuggestion(state),
    suggestions: getSuggests(state),
  }
}

export default connect(mapStateToProps, {
  loadPositionAction,
  addSuggestionAction,
  cancelSuggestionAction,
  minimizeSuggestionAction,
  maximizeSuggestionAction,
  addWindowButton,
  removeWindowButton,
  resetCurrentPositionAction,
  initialize,
})(SuggestCandidatePage)
