/* 加载React系列 */
var React = require("react")
var ReactDOM = require("react-dom")
import { Router, Route, hashHistory,IndexRoute } from 'react-router';

/* 加载组件 */
import { Home } from './../router/Home.js'
import { Accounts } from './../router/Accounts.js' 

/* 加载CSS */
require('./../assets/css/style.css')
require('./../assets/css/cont.css')
require('./../assets/css/eTong.Layer1.0.css')
   

var App = React.createClass({
	render () {
		return (
			<div>
				<Home />
				<Accounts />
			</div>
		)
	}
})


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="accounts" component={Accounts}/> 
    </Route>
  </Router>
), document.getElementById('app'));