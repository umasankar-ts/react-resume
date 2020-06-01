import React, {Component} from 'react';

class MessageComponent extends Component{
	render(){
		return(
		 	<div className="message" align="center">
                <h5 className="secondary-dark-font">Please rotate your phone</h5>
                <p className="secondary-dark-font">We don't support portrait mode. Please go back to landscape mode for the best experience.</p>
            </div>
		)
	}
}

export default MessageComponent