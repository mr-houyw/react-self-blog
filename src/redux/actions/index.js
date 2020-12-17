// const { type } = require("react-typical")
export const SHOW_BACKGROUND = 'SHOW_BACKGROUND'

/**
 * @description action 函数
 * @param {Boolean} show
 */
export function showBackground(show) {
  return {
    type: SHOW_BACKGROUND,
    show,
  }
}