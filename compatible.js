/**
 * js相关兼容问题
 */
getComputedStyle(dom)[styleName]
dom.currentStyle[styleName]

attachEvent()  addEventListener()

event || window.event

document.body.scrollTop || document.documentElement.scrollTop

str[i](低版本ie不支持) || str.charAt(i)

firstChild,lastChild,nextSibling,previousSibling ||
firstElementChild,lastElementChild,nextElementSibling,previousElementSibling

return false || ev.preventDefault()

ev.cancelBubble || ev.stopPropagation

DOMMouseScroll(火狐) || onmousewheel(非火狐)


