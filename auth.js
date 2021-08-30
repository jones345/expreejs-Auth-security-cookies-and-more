const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
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
    return done(err, user);
  }
));