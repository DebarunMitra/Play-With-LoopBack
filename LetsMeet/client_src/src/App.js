import React,{Component} from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: ''
    }
  }
  componentDidMount(){
    this.setState({
      userToken: localStorage.getItem("userToken") ? localStorage.getItem("userToken") : ''
    });
  }

  render(){
    console.log(this.state.userToken);
    console.log(localStorage.getItem("userkey"));

    return (
      <div>
        <Navbar userToken={this.state.userToken} />
        <div className="container">
          <Main userToken={this.state.userToken} />
        </div>
        <div className="fixed-action-btn">
          <Link to="/letsmeets/add" className="btn-floating btn-large orange">
            <i className="fa fa-plus"></i>
          </Link>
        </div>
      </div>
    );
  }

}

