function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div div div div')
}

function increaseRankBy(n) {
  const rank = 
  document.getElementById('app').querySelectorAll('ul.ranked-list li')
  
  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + parseInt(n)
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}