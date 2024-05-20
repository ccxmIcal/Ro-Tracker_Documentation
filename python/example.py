import api.rotracker_api as RoTracker

RoTracker = RoTracker.Ro_Tracker(
    rotracker_apikey = "ssPx6jZUY309N2edvvCZ4Ep0k",
    roblox_apikey = "wyJdaB9mgkO8HHSnaknNMf/ITUoDGe7GkaMY4F//cu7i9XQx",
    universeid = 5940508014
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
