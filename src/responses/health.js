"use strict";

/**
 * Handle health updates from client.
 *
 * @param info Used to get the type of change and the magnitude
 * @param sessionID User this change is applied to
 * @returns {string} Json string with null data property
 */
function updateHealth(url, info, sessionID) {
    health_f.healthServer.updateHealth(info, sessionID);
    return '{"err":0, "errmsg":null, "data":null}';
}

/**
 * Handle player eating and drinking when not in a raid.
 * Consumes the relevant item and modifies the players energy and
 * hydration as appropriate.
 *
 * @param pmcData User data for the consumer
 * @param body Data on the item being consumed
 * @param sessionID Users ID
 * @returns {string} Information on the item removal
 */
function offraidEat(pmcData, body, sessionID) {
    return health_f.healthServer.offraidEat(pmcData, body, sessionID)
}

/**
 * Handle player healing when not in a raid. Consumes the relevant
 * item and modifies the players health as appropriate.
 *
 * @param pmcData User data for the patient
 * @param body Data on the medical supply being used
 * @param sessionID Users ID
 * @returns {string} Information on the item removal
 */
function offraidHeal(pmcData, body, sessionID) {
    return health_f.healthServer.offraidHeal(pmcData, body, sessionID);
}

router.addStaticRoute("/player/health/events", updateHealth);
item_f.itemServer.addRoute("Eat", offraidEat);
item_f.itemServer.addRoute("Heal", offraidHeal);