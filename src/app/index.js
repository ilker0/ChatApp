import React , { Component } from 'react';
import { render } from 'react-dom';
import { Router , Route , browserHistory} from 'react-router';
import XMPP from 'stanza.io';

//CSS

import css  from '../assets/css/style.css';

//Component Import

import Login  from '../components/Login';
import ChatScreen from '../components/ChatScreen';
import Chat from '../components/Chat';

class App extends Component {
	constructor() {
		super();
	}


	render() {
		return(
			<Router history={browserHistory}>
				<Route path={"Login"} component={Login} />
				<Route path={"ChatScreen"} component={ChatScreen}/>
				<Route path={"Chat"} component={Chat}/>
			</Router>
		);
	}
}

render(<App/> , window.document.getElementById('app'));