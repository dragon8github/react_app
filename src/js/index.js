/* 加载React */
var React = require("react")
var ReactDOM = require("react-dom")

/* 加载组件 */
import { Mysearch } from './../components/header.js'
import { Mytable } from './../components/table.js'

/* 加载CSS */
require('./../css/style.css')
require('./../css/cont.css')
require('./../css/eTong.Layer1.0.css')


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