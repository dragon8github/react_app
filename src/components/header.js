var React = require("react")

var Mysearch = React.createClass({
    render : function()
    {
        return (
                <div className="cont_comm">
                    <div className="comm_list_temp">
                            <div className="comm_input">
                                <ul>
                                    <li className="oneline"><label htmlFor="min_sales">模板名称：</label>
                                        <input type="text" value="" name="" className="nomore" />
                                        <button type="button" className="redbutton fl ml-10">搜索</button>
                                        <button type="reset" className="whitebutton fl ml-10">重置</button>
                                    </li>
                                </ul>
                            </div>
                     </div>
                 </div>
        )
    }
})

exports.Mysearch = Mysearch;