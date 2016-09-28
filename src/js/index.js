/* 加载React系列 */
var React = require("react")
var ReactDOM = require("react-dom")
import { Router, Route, hashHistory } from 'react-router';

/* 加载组件 */
import { Mysearch } from './../components/header.js'
import { Mytable } from './../components/table.js'
/* 加载CSS */
require('./../assets/css/style.css')
require('./../assets/css/cont.css')
require('./../assets/css/eTong.Layer1.0.css')
   

var App = React.createClass({
	render () {
		return (
			<div>
				<Mysearch />,
   				<Mytable />
			</div>
		)
	}
})

ReactDOM.render( 
    <App />,
    document.getElementById('app') 
)     
