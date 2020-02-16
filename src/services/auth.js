module.exports ={
  isAuth(){        
    return localStorage.getItem('@mh-token') ? true : false
  },
  token(){        
    return localStorage.getItem('@mh-token')
  }
}