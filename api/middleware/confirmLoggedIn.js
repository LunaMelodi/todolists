function confirmLoggedIn(req, res, next) {
  console.log('Object.keys(req.params) :>> ', Object.keys(req.params));
  console.log('middleware 1: req.params.id :>> ', req.params.id);

  //console.log('req.signedCookies :>> ', req.signedCookies);
  
  if(req.signedCookies.user_id) {
    //console.log('req.signedCookies.user_id :>> ', req.signedCookies.user_id);
    next();
  } else {
    console.log('No cookie found.');
    next();
  }
}

export default confirmLoggedIn;