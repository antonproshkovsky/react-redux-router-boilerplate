import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {login} from "../../actions/login";
import {compose} from "redux";

class Login extends React.Component{
  constructor(props){
    super(props)
  }

  handleLoginSubmit(e){
    e.preventDefault();
    this.props.login('test','test');
  }

  render(){
    return(
      <div className="login-page">
        <form onSubmit={(e)=>this.handleLoginSubmit(e)} className="login-form">
          <div className="login-form__item">
            <label>Email</label>
            <input placeholder="Enter email" type="email"/>
          </div>
          <div className="login-form__item">
            <label>Password</label>
            <input placeholder="Enter password" type="password"/>
          </div>
          <div className="login-form__item">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    login: store.login,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email,pass) => dispatch(login(email,pass)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Login)