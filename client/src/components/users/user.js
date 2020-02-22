import React from 'react';
import userService from '../../services/user.services';
import '../../App.css';

class User extends React.Component {

    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        userService.getAll()
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render(){
        return (
            <div className="App">
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default User;