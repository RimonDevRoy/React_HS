function ownMadeRender(element, container) {
  const domElement = document.createElement(element.type)

  domElement.innerHTML = element.children

  // 1st Way
  // domElement.setAttribute('href', element.props.href)
  // domElement.setAttribute('target', element.props.target)

  // 2nd Way
  // for (let i = 0; i < element.props.length; i++) {
  //   if (prop === 'children') continue;
    
  //   element.setAttribute(element.props[i].name, element.props[i].value)
  // }

  // 3rd Way
  for (const prop in element.props) {
    if (prop === 'children') continue;

    domElement.setAttribute(prop, element.props[prop])
  }

  container.appendChild(domElement)
}

const reactElement = {
  type: `div`,
  props: {
    href: ``,
    target: `_blank`
  },
  children: `Click me`
}


const rootPoint = document.querySelector(`.gura`)

ownMadeRender(reactElement, rootPoint)




