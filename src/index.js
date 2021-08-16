var React = require('react')
var ReactDOM = require('react-dom')

console.log('ok')

var El = function (prop) {
    // return React.createElement('p', {}, ['hello'])
    return <p>hello</p>
}

ReactDOM.render(<El />,
    document.getElementById('content'))

