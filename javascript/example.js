const Ro_Tracker = require('./api/Ro_Tracker');

// Initialize the Ro_Tracker instance
const roTracker = new Ro_Tracker(
    "1", // your ro-tracker key
    "uwu", // your roblox API key
    0 // the universe ID of your game
);

// Ban user
roTracker.ban_user("uruserid", "length in days", "ban reason")
    .then(response => {
        console.log("Ban User Response:", response);
    })
    .catch(error => {
        console.error("Error banning user:", error);
    });

// Unban user
roTracker.unban_user("uruserid")
    .then(response => {
        console.log("Unban User Response:", response);
    })
    .catch(error => {
        console.error("Error unbanning user:", error);
    });

// Get user data
roTracker.getuser_data("uruserid")
    .then(response => {
        console.log("User Data:", response);
    })
    .catch(error => {
        console.error("Error getting user data:", error);
    });

// Get country stats
roTracker.get_country_data("US")
    .then(response => {
        console.log("Country Data:", response);
    })
    .catch(error => {
        console.error("Error getting country data:", error);
    });


roTracker.kick_user("uruserid", "reason").then(response => {
    console.log("Kick user response:", response);
}).catch(error => {
    console.log("Error kicking user:", error);
})
