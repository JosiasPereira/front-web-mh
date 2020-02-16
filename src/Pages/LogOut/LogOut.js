import React, {useEffect} from 'react';
import history from '../../history';
// import { Container } from './styles';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const LogOut = function ({signOut}) {

  useEffect(() =>{
    const log = async() =>{
      await localStorage.removeItem('@mh-token');
      signOut();
      history.push('/login');
    }
    log();
  },[])

  return null
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  signOut : actions.signOut
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOut);
