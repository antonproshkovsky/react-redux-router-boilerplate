import React from "react";
import {connect} from "react-redux";
import {login} from "../../actions/login";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            password: ''
        }
    }

  componentWillReceiveProps(){
      const {error} = this.props.store;

      if(!error.length) {
          this.setState({password: ''});
      }
    }

    //max@test.com
    handleLoginSubmit = (e) => {
        e.preventDefault();
        const {name, password} = this.state;
        this.props.login(name, password);
    };

    handleChange = (e) => this.setState({[e.currentTarget.name]: e.currentTarget.value});

    render() {
        const {name, password} = this.state;
        const {login, error} = this.props.store;
        return (
            <div className="login-page">
                <form onSubmit={(e) => this.handleLoginSubmit(e)} className="login-form">
                    <div className="login-form__item">
                        <label>Email</label>
                        <input placeholder="Enter email"
                               name="name"
                               value={name}
                               onChange={(e) => this.handleChange(e)}
                               type="email"/>
                    </div>
                    <div className="login-form__item">
                        <label>Password</label>
                        <input placeholder="Enter password"
                               name="password"
                               value={password}
                               onChange={(e) => this.handleChange(e)}
                               type="password"/>
                    </div>
                    <div className="login-form__item">
                        <button type="submit">Login</button>
                    </div>
                    <h6 className="login-form_error">{error}</h6>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (store, ownProps) => {
    return {
        store: store.login,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: (email, pass) => dispatch(login(email, pass)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);