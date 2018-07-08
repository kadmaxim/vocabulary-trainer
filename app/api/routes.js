const Words = require("./models/words");
const Users = require("./models/users");
const Profile = require("./models/profiles");

const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

module.exports = function(app, passport) {
  app.put("/api/register", Users.add);
  app.get("/api/user/:id", Users.get);
  app.post("/api/user/:id", Users.update);
  app.delete("/api/user/:id", Users.del);

  app.get("/api/words", ensureLoggedIn("/404"), Words.getAll);
  app.post("/api/word", ensureLoggedIn("/404"), Words.add);
  app.get("/api/word/:id", ensureLoggedIn("/404"), Words.get);
  app.post("/api/word/:id", ensureLoggedIn("/404"), Words.update);
  app.delete("/api/word/:id", ensureLoggedIn("/404"), Words.del);

  app.post(
    "/api/login",
    passport.authenticate("local", { failureRedirect: "/404" }),
    Profile.auth
  );
  app.post("/api/check", Profile.check);
  app.get("/api/logout", Profile.logout);
};
