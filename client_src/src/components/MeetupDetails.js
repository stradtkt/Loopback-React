import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class MeetupDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: ''
        }
    }
    componentWillMount() {
        this.getMeetup();
    }
    getMeetup() {
        let meetupId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/meetups/${meetupId}`)
            .then(res => {
                this.setState({details: res.data}, () => {

                })
            })
            .catch(err => console.log(err));
    }
    onDelete() {
        let meetupId = this.state.details.id;
        axios.delete(`http://localhost:3000/api/meetups/${meetupId}`)
            .then(res => {
                this.props.history.push('/');
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <Link to="/" className="btn grey">Back</Link>
                <h1>{this.state.details.name}</h1>
                <ul className="collection">
                    <li className="collection-item">City: {this.state.details.city}</li>
                    <li className="collection-item">Address: {this.state.details.address}</li>
                </ul>
                <Link to={`/meetups/edit/${this.state.details.id}`} className="btn">Edit</Link>
                <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
            </div>
        );
    }
}

export default MeetupDetails;