module.exports = {
  auth: function(req, res) {
    console.log('logged in');
    res.json({
      user: req.user
    });
  },
  logout: function(req, res, next) {
    req.logout();
    res.send('logged out', 201);
  },
  check: function(req, res) {
    res.json({user: req.user});
  }
};
