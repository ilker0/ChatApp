import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter , Route , browserHistory } from 'react-router';
import XMPP from 'stanza.io';


export default class UserList extends React.Component {
	constructor(){
		super();
	}

	render() {
		return(			
			  
				<div className="UserList">

					<div className="UserList-name">
					<div className="Bar">
						<div className="Search-bar text-center">
							<input className="searchInput text-center" placeholder="Ara..."></input>
						</div>
						<div className="Plus-bar">

						</div>
					</div>
					<ul>

						{
							this.props.userList.map((x , i) => (
								 <li key = {i} className="text-center">
						 			<a href="#" onClick = {() => browserHistory.push({
						 				pathname: '/Chat',
						 				state: {jid:x.jid}
						 			})}>{x.name}</a>
						 		</li>
							))
						}
						
					</ul>
					</div>

				</div>

		)
	}
}