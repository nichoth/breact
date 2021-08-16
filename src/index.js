import React, { useState } from 'react';
var ReactDOM = require('react-dom')

console.log('ok')

var El = function (props) {
    return <p>hello</p>
}

ReactDOM.render(<El />,
    document.getElementById('content'))
