const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy; 
const LinkedInStrategy = require('passport-linkedin').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const  RememberMeStrategy = require('passport-remember-me').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;

const  GOOGLE_CLIENT_ID = '864091533668-ps240s91h4lleon5l11kdeok7teo7j2c.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = 'Ti2Jo8ltRtR9OagmemiYlWVP'


passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3002/google/callback",
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