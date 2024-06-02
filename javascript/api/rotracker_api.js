const axios = require('axios');

class Ro_Tracker {
    constructor(roblox_apikey, rotracker_apikey, universeid) {
        this._base_url = "https://sufi.homes/";
        this._users_route = `${this._base_url}/users`;
        this._countries_route = `${this._base_url}/countries`;
        this._roblox_key = roblox_apikey;
        this._tracker_key = rotracker_apikey;
        this._universeid = universeid;
    }

    async get_country_data(countrycode) {
        const headers = {
            "Ro-Tracker-Key": this._tracker_key,
            "Roblox-Api-Key": this._roblox_key,
            "Roblox-Universe-Id": String(this._universeid)
        };

        try {
            const response = await axios.get(`${this._countries_route}/getcountrydata/${countrycode}`, { headers });
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    }

    async ban_user(userid, length, reason) {
        const headers = {
            "Ro-Tracker-Key": this._tracker_key,
            "Roblox-Api-Key": this._roblox_key,
            "Roblox-Universe-Id": String(this._universeid),
            "Ban-Length": length,
            "Ban-Reason": reason
        };

        try {
            const response = await axios.post(`${this._users_route}/ban/${String(userid)}`, {}, { headers });
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    }

    async unban_user(userid) {
        const headers = {
            "Ro-Tracker-Key": this._tracker_key,
            "Roblox-Api-Key": this._roblox_key,
            "Roblox-Universe-Id": String(this._universeid)
        };

        try {
            const response = await axios.post(`${this._users_route}/unban/${String(userid)}`, {}, { headers });
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    }

    async getuser_data(userid) {
        const headers = {
            "Ro-Tracker-Key": this._tracker_key,
            "Roblox-Api-Key": this._roblox_key,
            "Roblox-Universe-Id": String(this._universeid)
        };

        try {
            const response = await axios.get(`${this._users_route}/getuserdata/${String(userid)}`, { headers });
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    }

    async kick_user(userid) {
        const headers = {
            "Ro-Tracker-Key": this._tracker_key,
            "Roblox-Api-Key": this._roblox_key,
            "Roblox-Universe-Id": str(this._universeid),
            "Kick-Reason": reason
        }
        try{
            const response = await axios.post(`${this._users_route}/kick/${String(userid)}`, {}, { headers });
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    }
}

module.exports = Ro_Tracker;
