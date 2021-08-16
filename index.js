var React = require('react')
var ReactDOM = require('react-dom')

console.log('ok')

var el = function (prop) {
    // return React.createElement('p', {}, ['hello'])
    return <p>hello</p>
}

ReactDOM.render(React.createElement(el, {}, []),
    document.getElementById('content'))

