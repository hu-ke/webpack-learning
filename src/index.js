

function getComponent() {
  // return import('lodash')
  //   .then(({default: _}) => {
  //     const element = document.createElement('div')
  //     element.innerHTML = _.join(['hello', 'webpack'], ' ')
  //     return element
  //   })
  //   .catch(error => 'An error occurred while loading the component');
  return import('./math.js').then(({default: m}) => {
    const element = document.createElement('div')
    element.innerHTML = m.sum(10,100)
    return element
  })
}




const element = document.createElement('div')
element.innerHTML = 'hello~'
document.body.appendChild(element)
element.addEventListener('click', () => {
  getComponent().then(component => {
    document.body.appendChild(component)
  })
})