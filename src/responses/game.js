"use strict";

/**
 * Returns a null data property to "stub" unhandled endpoints.
 *
 * @deprecated Will be removed once endpoints are fully implemented.
 * @returns {string} Stringified json with null property (data)
 */
function nullResponse(url, info, sessionID) {
    return '{"err":0, "errmsg":null, "data":null}';
}

/**
 * Fetches and returns information about current game-state.
 * This information includes current ban state, login queues,
 * language preferences, and other useful data.
 *
 * @returns {string} Stringified json with game data
 */
function getGameConfig(url, info, sessionID) {
    return json.stringify({"err": 0, "errmsg":null, "data": {"queued": false, "banTime": 0, "hash": "BAN0", "lang": "en", "aid": sessionID, "token": "token_" + sessionID, "taxonomy": "341", "activeProfileId": "user" + sessionID + "pmc", "nickname": "user", "backend": {"Trading": server.getBackendUrl(), "Messaging": server.getBackendUrl(), "Main": server.getBackendUrl(), "RagFair": server.getBackendUrl()}, "totalInGame": 0}});
}

/**
 * Accepts the users profile selection and returns notifier information that is used
 * to update the client about chat, dialogs, and other information.
 *
 * @returns {string} Stringified json with property status as "ok" and notifier server information
 */
function selectProfile(url, info, sessionID) {
    return json.stringify({"err": 0, "errmsg": null, "data": {"status":"ok", "notifier": {"server": server.getBackendUrl() + "/", "channel_id": "testChannel"}}});
}

/**
 * Returns the status of the player's profiles. This includes if they are currently in a match or not.
 * Used to allow a player to reconnect to a match in-progress.
 *
 * @returns {string} Stringified json with an array of profiles as a property (data)
 */
function getProfileStatus(url, info, sessionID) {
    return json.stringify({"err": 0, "errmsg": null, "data":[{"profileid": "scav" + sessionID, "status": "Free", "sid": "", "ip": "", "port": 0}, {"profileid": "pmc" + sessionID, "status": "Free", "sid": "", "ip": "", "port": 0}]});
}

/**
 * Returns an array of servers for the client to use
 *
 * @returns {string} Stringified json with the data property as an array of servers
 */
function getServer(url, info, sessionID) {
    return json.stringify({"err": 0, "errmsg": null, "data": [{"ip": server.getIp(), "port": server.getPort()}]});
}

/**
 * Connect to the match that was indicated to be available.
 *
 * @returns {string} Stringified json of the connection details
 */
function joinMatch(url, info, sessionID) {
    let shortid = "";

    // check if the player is a scav
    if (info.savage) {
        shortid = "3XR5";
    } else {
        shortid = "3SRC";
    }

    return json.stringify({"err": 0, "errmsg": null, "data":[{"profileid": sessionID, "status": "busy", "ip": server.getIp(), "port": 25565, "location": info.location, "sid": "", "gamemode": "deathmatch", "shortid": shortid}]});
}

/**
 * Handles informing the client if a match has been found for them.
 * This is accomplished by returning a json string with a boolean property
 * (data) indicating if a match has been found.
 *
 * @returns {string} Stringified json indicating match availability
 */
function canMatchmake(url, info, sessionID) {
    return json.stringify({"err": 0, "errmsg": null, "data": false});
}

router.addStaticRoute("/client/game/profile/select", selectProfile);
router.addStaticRoute("/client/profile/status", getProfileStatus);
router.addStaticRoute("/client/server/list", getServer);
router.addStaticRoute("/client/game/version/validate", nullResponse); // TODO: Implement endpoint
router.addStaticRoute("/client/game/config", getGameConfig);
router.addStaticRoute("/client/game/logout", nullResponse); // TODO: Implement endpoint
router.addStaticRoute("/client/match/group/status", nullResponse); // TODO: Implement endpoint
router.addStaticRoute("/client/match/exit", nullResponse); // TODO: Implement endpoint
router.addStaticRoute("/client/match/available", canMatchmake);
router.addStaticRoute("/client/match/join", joinMatch);
router.addStaticRoute("/client/match/group/looking/stop", nullResponse); // TODO: Implement endpoint
router.addStaticRoute("/client/match/group/exit_from_menu", nullResponse); // TODO: Implement endpoint

