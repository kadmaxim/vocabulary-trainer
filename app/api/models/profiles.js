module.exports = {
  auth: function(req, res) {
    console.log('logged in');
    res.json({
      user: req.user
    });
  },
  logout: function(req, res) {
    req.logout();
    //res.redirect('/admin');
  },
  check: function(req, res) {
    
    res.json({ user: req.user });
  }
};
