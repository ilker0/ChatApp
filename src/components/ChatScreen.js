import React from 'react';
import { render } from 'react-dom';
import XMPP from 'stanza.io';
import { Router , Route , browserHistory} from 'react-router';
import Emitter from './main/Emitter';

//Component İmport 
import UserList from './UserList';
import Login from './Login';

export default class ChatScreen extends React.Component {
	constructor(){
		super();
		this.state = {
			userList : [],
		}

	}

	componentWillMount(){
		var self = this;
		Emitter.on('onRoster' , function (data) {

			self.setState({
				userList : data.roster.items
			}); 
		});
	}

	componentWillUnmount(){
		Emitter.off('onRoster');
	}

	render() {
		return(
				<div className="container-fluid">
					<div className="ChatScreen">
							<div className="row no-gutters"> 
								<div className="col-4">
									<UserList userList = {this.state.userList} />
								</div>
								<div className="col-8">

								</div>
							</div>
					</div>
				</div>
		)	
	}
}