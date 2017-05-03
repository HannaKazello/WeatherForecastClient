import React, {
    Component
} from 'react';
class ErrorMessage extends Component{
    render(){
        return(
            <div className="ErrorMessage">
                <p>{this.props.message}</p>
            </div>
        )
    }
}
export default ErrorMessage
