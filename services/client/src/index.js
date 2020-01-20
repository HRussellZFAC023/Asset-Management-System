import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';

class App extends Component {
    constructor() {
        super();

        this.state = {
            users: [],
            username: "",
            email: ""
        };

    }
    componentDidMount() {
        this.getUsers();
    };

    handleChange = (event) => {
        const obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    };

    addUser = (event) => {
        event.preventDefault();

        const data = {
            username: this.state.username,
            email: this.state.email
        };

        axios.post(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`, data)
            .then((res) => { console.log(res); })
            .catch((err) => { console.log(err); });

    };

    getUsers() {
        axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
            .then((res) => { this.setState({ users: res.data }); })
            .catch((err) => { console.log(err); });
    };
    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <br />
                            <h1 className="title is-1">Users</h1>
                            <hr /><br />
                            <AddUser
                                addUser={this.addUser}
                                username={this.state.username}
                                email={this.state.email}
                                // eslint-disable-next-line react/jsx-handler-names
                                handleChange={this.handleChange}
                            />
                            <br /><br />
                            <UsersList users={this.state.users} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
