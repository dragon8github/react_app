var React = require("react")

var Mytable = React.createClass({
	render () {
		return (
				<div className="cont_comm">
				    <div className="online_bg">
				       <button type="button" className="whitebutton fl">新增运费模板</button>
				    </div>
					<div className="temp_table">
				        <table cellPadding="0" cellSpacing="0" className="yunfei_tab">
				            <tbody>
				                <tr className="tab_tr">
				                    <th className="firtab">模板名称</th>
				                    <th>状态</th>
				                    <th></th>
				                    <th className="lasttab">操作</th>
				                </tr>
				            </tbody>
				        </table>
				        <table cellPadding="0" cellSpacing="0" className="yunfei_tab">
				            <tbody>
				                <tr className="linetab">
				                    <td className="firtab">默认运费</td>
				                    <td><span>未使用</span></td>
				                    <td>
				                        <input type="button" value="[查看明细]" className="input_edting list-edting blue" />
				                        <input type="button" value="[复制模板]" className="input_edting blue ml-10" />
				                    </td>
				                    <td className="lasttab">
				                        <input type="button" value="[修改]" className="input_edting red" />
				                        <input type="button" value="[删除]" className="input_edting blue ml-10" />
				                    </td>
				                </tr>
				                <tr className="tab_none">
				                    <td colSpan="4">
				                        <table cellPadding="0" cellSpacing="0" className="yftab">
				                            <tbody>
				                                <tr>
				                                    <th className="firtab">运送方式</th>
				                                    <th></th>
				                                    <th>首件运费</th>
				                                    <th className="lasttab">续件运费</th>
				                                </tr>
				                                <tr>
				                                    <td>快递</td>
				                                    <td>全国</td>
				                                    <td>10.00</td>
				                                    <td>3.00</td>
				                                </tr>
				                                <tr>
				                                    <td>快递</td>
				                                    <td>全国</td>
				                                    <td>10.00</td>
				                                    <td>3.00</td>
				                                </tr>
				                            </tbody>
				                        </table>
				                    </td>
				                </tr>
				            </tbody>
				        </table>
				        <table cellPadding="0" cellSpacing="0" className="yunfei_tab">
				            <tbody>
				                <tr className="linetab">
				                    <td className="firtab">默认运费</td>
				                    <td><span className="red">已使用</span></td>
				                    <td>
				                        <input type="button" value="[查看明细]" className="input_edting list-edting blue" />
				                        <input type="button" value="[复制模板]" className="input_edting blue ml-10" />
				                    </td>
				                    <td className="lasttab">
				                        <input type="button" value="[修改]" className="input_edting red" />
				                        <input type="button" value="[删除]" className="input_edting blue ml-10" />
				                    </td>
				                </tr>
				                <tr className="tab_none">
				                    <td colSpan="4">
				                        <table cellPadding="0" cellSpacing="0" className="yftab">
				                            <tbody>
				                                <tr>
				                                    <th className="firtab">运送方式</th>
				                                    <th></th>
				                                    <th>首件运费</th>
				                                    <th className="lasttab">续件运费</th>
				                                </tr>
				                                <tr>
				                                    <td>快递</td>
				                                    <td>全国</td>
				                                    <td>10.00</td>
				                                    <td>3.00</td>
				                                </tr>
				                                <tr>
				                                    <td>快递</td>
				                                    <td>全国</td>
				                                    <td>10.00</td>
				                                    <td>3.00</td>
				                                </tr>
				                            </tbody>
				                        </table>
				                    </td>
				                </tr>
				            </tbody>
				        </table>
				    </div>
				</div>
		)
	}
})

exports.Mytable = Mytable;