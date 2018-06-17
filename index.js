function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div div div div')
}

function increaseRankBy(n) {
  const rank = 
  document.getElementById('app').querySelectorAll('u1.ranked-list li')
  
  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = (parseInt(rank[i]) + n)
  }
  
  return rank
}