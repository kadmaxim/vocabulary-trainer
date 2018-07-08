module.exports = {
  auth: function(req, res) {
    console.log("logged in");
    res.json({
      user: req.user
    });
  },
  logout: function(req, res, next) {
    req.logout();
    res.status(201).send("logged out");
  },
  check: function(req, res) {
    if (req.user !== undefined) {
      res.json({ user: req.user });
    } else {
      res.json({ status: "danger", message: "You aren't logged in!" });
    }
  }
};
