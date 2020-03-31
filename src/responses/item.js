"use strict";

/**
 * Passes all item moving calls to the itemServer to then route to the appropriate handler.
 *
 * @returns {string} On success the handler returns a stringified json object
 */
function handleRoutes(url, info, sessionID) {
    return item_f.itemServer.handleRoutes(info, sessionID);
}

router.addStaticRoute("/client/game/profile/items/moving", handleRoutes);