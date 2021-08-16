var { useState } = require('react');
var React = require('react')
var ReactDOM = require('react-dom')

console.log('ok')

var El = function (props) {
    var [path, setPath] = useState('')
    console.log('path', path)
    return <p>hello</p>
}

ReactDOM.render(<El />,
    document.getElementById('content'))
