import React from "react";
import {connect} from "react-redux";
import {getProfileData} from "../../actions/profile";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProfileData();
  }

  render() {
    const {error, data} = this.props.profile;

    if(error.length) {
      return (
        <div className="profile-page">
          <h2 className="profile-page__error">
            {error}
          </h2>
        </div>
      )
    } else if(Object.keys(data).length) {
      return (
        <div className="profile-page">
          <div className="profile-page__card">
            <div className="profile-page__card-image">
              <img src="https://timedotcom.files.wordpress.com/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg?w=800&quality=85" alt=""/>
            </div>
            <div className="profile-page__card-content">
              <div className="profile-page__card-content-item">
                <strong>Town: </strong>{data.city}
              </div>
              <div className="profile-page__card-content-item">
                <strong>Languages: </strong>{data.languages.map((elem) => elem + ' ')}
              </div>
              <div className="profile-page__card-content-item">
                <strong>Socials:</strong>{data.social.map((elem, index) => (
                  <a className="profile-page__card-social" key={index} target="_blank" href={elem.link}>{elem.label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div className="profile-page">
          <h2 className="profile-page__error">
            Profile information is empty
          </h2>
        </div>
      )
    }
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    profile: store.profile,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getProfileData: () => dispatch(getProfileData()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);