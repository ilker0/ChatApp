import XMPP from 'stanza.io';
XmppService = {
	jid = "",
	password = "",
	
	connect = () => {
		client = XMPP.createClient({
			
		});
	}
}