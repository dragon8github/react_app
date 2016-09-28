var React = require('react');

var Add_edit = React.createClass({
	render () {
		return (
			<div className="cont_comm">
			        <h4 className="template">新增运费模板</h4>
			        <div className="default_wrap">
			            <ul>
			                <li>
			                    <label className="label_titles lrg_w75">模板名称：</label>
			                    <input type="text" value="" name="" className="width-250" />
			                </li>
			                <li>
			                    <label className="label_titles lrg_w75">是否包邮：</label>
			                    <input type="radio" name="show_stage" />
			                    <label className="width10" htmlFor="">是</label>
			                    <input type="radio" name="show_stage" className="fl" />
			                    <label className="width10" htmlFor="">否</label>
			                </li>
			                <li>
			                    <label className="label_titles lrg_w75">运送方式：</label>
			                    <div className="freight" id="yunfei_table">
			                        <p>未添加设置的地区默认为不可配送地区。</p>
			                        <div className="inputchek">
			                            <input type="checkbox" id="express" className="freight_check" data-select="express" />
			                            <label className="kuaidi" htmlFor="express">快递</label>
			                            <div className="chektab">
			                                <table cellPadding="0" cellSpacing="0" className="check_table" id="expressage">
			                                    <tbody>
			                                        <tr>
			                                            <th className="firtab">运送到</th>
			                                            <th>首件/元</th>
			                                            <th>续件/元</th>
			                                            <th className="lasttab">操作</th>
			                                        </tr>
			                                    </tbody>
			                                </table>
			                                <em className="addtr">为指定地区城市设置运费</em>
			                            </div>
			                        </div>
			                        <div className="inputchek">
			                            <input type="checkbox" id="ems" className="freight_check" data-select="ems" />
			                            <label className="kuaidi" htmlFor="ems">EMS</label>
			                            <div className="chektab">
			                                <table cellPadding="0" cellSpacing="0" className="check_table" id="expressage">
			                                    <tbody>
			                                        <tr>
			                                            <th className="firtab">运送到</th>
			                                            <th>首件/元</th>
			                                            <th>续件/元</th>
			                                            <th className="lasttab">操作</th>
			                                        </tr>
			                                    </tbody>
			                                </table>
			                                <em className="addtr">为指定地区城市设置运费</em>
			                            </div>
			                        </div>
			                        <div className="inputchek">
			                            <input type="checkbox" id="post" className="freight_check" data-select="post" />
			                            <label className="kuaidi" htmlFor="post">平邮</label>
			                            <div className="chektab">
			                                <table cellPadding="0" cellSpacing="0" className="check_table" id="expressage">
			                                    <tbody>
			                                        <tr>
			                                            <th className="firtab">运送到</th>
			                                            <th>首件/元</th>
			                                            <th>续件/元</th>
			                                            <th className="lasttab">操作</th>
			                                        </tr>
			                                    </tbody>
			                                </table>
			                                <em className="addtr">为指定地区城市设置运费</em>
			                            </div>
			                        </div>
			                    </div>
			                </li>
			            </ul>
			        </div>
			    </div>
		)
	}
})

exports.Add_edit = Add_edit;