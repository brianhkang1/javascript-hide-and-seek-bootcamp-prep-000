function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var target = document.getElementById('nested')
  var realtarget = target.querySelector('div div div div')
}