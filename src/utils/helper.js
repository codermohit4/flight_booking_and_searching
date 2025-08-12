/**
 * Compares two time strings to check if the first one is later than the second.
 * 
 * @param {string} timeString1 - First time in string format (e.g., "2025-08-02T14:00:00Z")
 * @param {string} timeString2 - Second time in string format
 * @returns {boolean} - Returns true if timeString1 is after timeString2
 */
function comparetime(timeString1, timeString2) {
    // Convert both time strings to Date objects
    let time1 = new Date(timeString1);
    let time2 = new Date(timeString2);

    if (isNaN(time1.getTime()) || isNaN(time2.getTime())) {
        console.log("❌ Invalid date format:", timeString1, timeString2);
        return false;
    }

    
    // Convert both Date objects to timestamps (milliseconds since epoch)
    // and compare them to check which is later
    return time1.getTime() < time2.getTime();
}

module.exports = { comparetime };
