import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

  componentDidMount() {
    const userId = this.props.match.params.userId;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile = {this.props.profile}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

const withURLDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {setUserProfile})(withURLDataContainerComponent);