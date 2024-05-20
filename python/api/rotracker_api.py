## Do not mess with this unless you know what you are doing!
## The length of bans is converted automatically. All you have to do is pass the length header.

import requests

class Ro_Tracker():
    def __init__(self, roblox_apikey: str, rotracker_apikey: str, universeid: int) -> None:
        self._base_url = "https://sufi.homes/"
        self._users_route = f"{self._base_url}/users"
        self._countries_route = f"{self._base_url}/countries"
        self._roblox_key = roblox_apikey
        self._tracker_key = rotracker_apikey
        self._universeid = universeid
    
    def get_country_data(self, countrycode: str) -> requests.Response:
        headers = {
            "Ro-Tracker-Key": self._tracker_key,
            "Roblox-Api-Key": self._roblox_key,
            "Roblox-Universe-Id": str(self._universeid)
        }

        return requests.get(f"{self._countries_route}/getcountrydata/{countrycode}", headers = headers)
    
    def ban_user(self, userid: str, length: str, reason: str) -> requests.Response:
        headers = {
            "Ro-Tracker-Key": self._tracker_key,
            "Roblox-Api-Key": self._roblox_key,
            "Roblox-Universe-Id": str(self._universeid),
            "Ban-Length": length,
            "Ban-Reason": reason
        }
        return requests.post(f"{self._users_route}/ban/{str(userid)}", headers = headers)
    
    def unban_user(self, userid: str) -> requests.Response:
        headers = {
            "Ro-Tracker-Key": self._tracker_key,
            "Roblox-Api-Key": self._roblox_key,
            "Roblox-Universe-Id": str(self._universeid),
        }
        return requests.post(f"{self._users_route}/unban/{str(userid)}", headers = headers)
    
    def getuser_data(self, userid: str) -> requests.Response:
        headers = {
            "Ro-Tracker-Key": self._tracker_key,
            "Roblox-Api-Key": self._roblox_key,
            "Roblox-Universe-Id": str(self._universeid),
        }
        return requests.get(f"{self._users_route}/getuserdata/{str(userid)}", headers = headers)
    
