import React from 'react';
import { render } from 'react-dom';
import XMPP from 'stanza.io';
import Emitter from './main/Emitter';

export default class Chat extends React.Component{
	constructor(props){
		super(props);
		this.jid = this.props.location.state.jid;
		this.sendMessage = this.sendMessage.bind(this);
		this.state = {
			messageList: [
			{
				message: "asdadsasdasdasd"
			},
			{
				message: "asdadsasdasdasd"
			}
			],
		}

	}

	componentWillMount(){

		var self = this;
		Emitter.on('onMessage' , function (data) {
			self.state.messageList.push(data);

			self.setState({
				messageList: self.state.messageList
			})	
		})
	}
	componentWillUnmount(){
		Emitter.off('onMessage');
	}

	sendMessage(){
		Emitter.emit('sendMessage', this.input.value , this.jid)
		this.state.messageList.push({
			message: this.input.value
		});
		this.setState({
			messageList:this.state.messageList
		});
	}

	render() {
		return(
			<div className="ChatList">
			<div className="message1">
				{this.state.messageList.map((x , i) => (
					<div key = {i}>{x.message}</div>
				))}
			</div>	
				<div className="ChatList-message">
					<div className="input-group mb-3">
						<input 
						 type="text" 
						 className="form-control ChatList-box"
						 ref={(ref) => {
						 	this.input = ref
						 }}
						/>
						 <input className="btn btn-primary" value="Gönder" onClick = {() => this.sendMessage()} />
					</div>

				</div>
			</div>
		);
	}
}