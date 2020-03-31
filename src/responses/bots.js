"use strict";

/**
 * Generates and returns a set of bots that match the conditions that the client has set.
 * These bots are then used for offline gameplay.
 *
 * @param info A json object containing the configuration of bots for this instance
 * @returns {string} Stringified json with an array of bots as the property, data
 */
function getBots(url, info, sessionID) {
    return json.stringify({"err": 0, "errmsg": null, "data": bots_f.generate(info, sessionID)});
}

router.addStaticRoute("/client/game/bot/generate", getBots);