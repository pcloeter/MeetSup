import {connect} from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';


const msp = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'Sign up',
    alt_message: 'Already a member? ',
    alt_link: <Link to="/login">Log in.</Link>
  };
};

const mdp = (dispatch) => {
  return{
    formAction: (user) => dispatch(signup(user))
  }
};

export default connect(msp, mdp)(SignupForm);