import React from 'react';
import { render } from 'react-dom';
import { browserHistory} from 'react-router';
import XMPP from 'stanza.io';
import Emitter from './main/Emitter';

export default class Login extends React.Component {

	constructor(props) {
		super();
		this.state	= {
			username: "",
			password: "",
		}
	}

		loginControl() {
		var client = XMPP.createClient({
			jid: '',
			password: this.state.password,
			transport: 'bosh',
			boshURL: '',
			sasl: 'plain',
			resource: 'BNet',
		});
		client.connect();
	
		client.on('session:started', () => {
			  browserHistory.push('/ChatScreen');
    		client.getRoster((err , res) => {
    			if(err) {
    				console.log(err);
    			}else {
    				Emitter.emit('onRoster' , res);
    			}
        		client.sendPresence();
    		})
		});

		client.on('message' , (message) => {
			Emitter.emit('onMessage' , {
				message: message.body
			})
		})

		Emitter.on('sendMessage' ,(messageData , to) => {
			client.sendMessage({
				type:'chat',
				to:to,
				body:messageData
			});
		})
	}

	render() {

		return(
			<div className="container">	
				<div className="loginForm">
						<div className="form-group">
							<label>Kullanıcı Adı</label>
							<input 
							type="text" 
							className="form-control" 
							name="username"
							onChange={e => this.setState({username: e.target.value})}
							>
							</input>

							<label>Parola</label>
							<input 
							type="password" 
							className="form-control" 
							onChange={e => this.setState({password: e.target.value})} 
							name="password">
							</input>

							<input 
							type="submit" 
							onClick={() => this.loginControl()}  
							className="form-control btn btn-primary" 
								value="Giris" 
							></input>
						</div>
				</div>
			</div>
		)
	}
}

