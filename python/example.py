import api.rotracker_api as RoTracker

RoTracker = RoTracker.Ro_Tracker(
    rotracker_apikey = "1", # your ro-tracker key that you get through the command /getrotrackerapi in the bot's dms!
    roblox_apikey = "uwu", # your roblox API key
    universeid = 0 # the universe ID of your game
)

# ban user

RoTracker.ban_user(userid = "uruserid", length = "length in days", reason = "ban reason")

# unban user

RoTracker.unban_user(userid = "uruserid")

# get user data

userdata = RoTracker.getuser_data(userid = "uruserid")
data = userdata.json()

# get country stats
countrydata = RoTracker.get_country_data(countrycode = "US")
countriccdata = countrydata.json()
