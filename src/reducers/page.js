import {
  PAGE__SELECT,
  PAGE__RESET
} from '../actions'

const initialState = {
  currentPageSlug: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PAGE__SELECT:
      return {
        ...state,
        currentPageSlug: action.payload
      }

    case PAGE__RESET:
      return {
        ...state,
        currentPageSlug: null
      }

    default:
      return state
  }
}
