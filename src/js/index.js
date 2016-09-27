var React = require("react")
var ReactDOM = require("react-dom")

var NavLI = React.createClass({
    myFunc : function(){alert("123")},
    render : function()
    {
        return  <ul>
                    <li><a href='#' onClick={this.myFunc}>最新电影</a></li>
                    <li><a href='#'>最新评论</a></li>
                </ul>
    }
})

ReactDOM.render(
         <NavLI />,
         document.getElementById('navbar')
)    