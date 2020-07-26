export default padLeft

/**
 * Original Source: http://stackoverflow.com/a/34083277/971592
 *
 * This method will pad the left of the given string by
 * the given size with the given character
 *
 * @param {String} stri - The string to pad
 * @param {Number} size - The total size to pad
 * @param {String} padWith - The character to use for padding
 * @return {String} - The padded string
 */
function padLeft(stri, size, padWith) {
  if (size <= stri.length) {
    return stri
  } else {
    return Array(size - stri.length + 1).join(padWith || '0') + stri
  }
}
