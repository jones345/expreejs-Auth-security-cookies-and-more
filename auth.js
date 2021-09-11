const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy; 
const LinkedInStrategy = require('passport-linkedin').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const  RememberMeStrategy = require('passport-remember-me').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;

const  GOOGLE_CLIENT_ID = '832301978846-ghrcdtbruthb2eivgkhqgelq7o4o374k.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '7vD998RByGuqwWROs9gaMWFp'


passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "https://netlix-node.herokuapp.com/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
    return done(null, profile);
  }
));

passport.serializeUser(function(user, done){
done(null,user)
});
passport.deserializeUser(function(user, done){
  done(null,user)
  });