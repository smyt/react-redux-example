/**
 * Suggests Actions
 */
import { action } from 'Actions/utils'
import {
  ADD_SUGGESTION,
  CANCEL_SUGGESTION,
  TRY_MINIMIZE_SUGGESTION,
  TRY_MAXIMIZE_SUGGESTION,
} from 'Actions/personal-account/types'

/**
 * Redux Action for opening form for suggestion.
 * @param vacancyId int
 */
export const addSuggestionAction = vacancyId => action(ADD_SUGGESTION, { vacancyId })

/**
 * Redux Action for canceling suggestion (remove it from suggestions).
 * @param id int
 */
export const cancelSuggestionAction = id => action(CANCEL_SUGGESTION, { id })

/**
 * Redux Action for minimize form and save form values in redux.
 * @param id
 */
export const minimizeSuggestionAction = id => action(TRY_MINIMIZE_SUGGESTION, { id })

/**
 * Redux Action for restore form values
 * @param id
 */
export const maximizeSuggestionAction = id => action(TRY_MAXIMIZE_SUGGESTION, { id })
