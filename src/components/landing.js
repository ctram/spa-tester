import { connect } from 'react-redux';
import React from 'react';
import userActionCreator from '../actionCreators/userActionCreator';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <p>The current users is: {(currentUser && currentUser.name) || 'none'}</p>
        <button role="button" onClick={this.props.getUser}>
          Get User
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: () => {
      dispatch(userActionCreator.setCurrentUser({ name: 'hank' }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
