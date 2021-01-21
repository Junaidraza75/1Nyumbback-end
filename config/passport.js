
var FacebookStrategy = require('passport-facebook').Strategy;

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// var Customer = require('../models/customersignup');
var configAuth = require('./auth');

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    Customer.findById(id, function(err, user) {
      done(err, user);
    });
  });

  

  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    profileFields: ['id', 'email', 'first_name', 'last_name'],
  },
  function(token, refreshToken, profile, done) {
    process.nextTick(function() {
      //   CustomerSignup.findOne({ 'facebook.id': profile.id }, function(err, user) {
      //   if (err)
      //     return done(err);
      //   if (user) {
      //     return done(null, user);
      //   } else {
      //     var newUser = new User();
      //     newUser.facebook.id = profile.id;
      //     newUser.facebook.token = token;
      //     newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
      //     newUser.facebook.email = (profile.emails[0].value || '').toLowerCase();

      //     newUser.save(function(err) {
      //       if (err)
      //         throw err;
      //       return done(null, newUser);
      //     });
      //   }
      // });
    });
  }));


  passport.use(new GoogleStrategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL,
  },
    function(token, refreshToken, profile, done) {
      process.nextTick(function() {
        // Customer.findOne({ 'google.id': profile.id }, function(err, user) {
        //   if (err)
        //     return done(err);
        //   if (user) {
        //     return done(null, user);
        //   } else {
        //     var newUser = new Customer();
        //     newUser.google.id = profile.id;
        //     newUser.google.token = token;
        //     newUser.google.name = profile.displayName;
        //     newUser.google.email = profile.emails[0].value;
        //     newUser.save(function(err) {
        //       if (err)
        //         throw err;
        //       return done(null, newUser);
        //     });
        //   }
        // });
      });
    }));

};