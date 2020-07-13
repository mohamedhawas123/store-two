import React, {Component } from 'react'



class Detail extends Component {
    
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <h1> you are trying to reach {this.props.location.pathname} but it doesn't exist</h1>
            </React.Fragment>
        )
    }
}

export default Detail;