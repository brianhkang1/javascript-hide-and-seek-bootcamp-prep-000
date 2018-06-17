function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var target = document.getElementById('nested').querySelectorAll('div div div div')
}