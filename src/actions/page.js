import {
  PAGE__SELECT,
  PAGE__RESET
} from '.'

export const selectPage = pageSlug => ({
  type: PAGE__SELECT,
  payload: pageSlug
})

export const resetPage = () => ({
  type: PAGE__RESET
})
