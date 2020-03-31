"use strict";

/**
 * Returns all customization options the server has initialized.
 *
 * @returns {string} Stringified json containing an array of all customization options
 */
function getCustomization(url, info, sessionID) {
    return json.stringify(customization_f.getCustomization());
}

/**
 * Returns the storage.json json object from the users profile directory.
 *
 * @returns {string} Json object containing all customizations the user owns
 */
function getCustomizationStorage(url, info, sessionID) {
    return json.read(customization_f.getPath(sessionID));
}

router.addStaticRoute("/client/customization", getCustomization);
router.addStaticRoute("/client/trading/customization/storage", getCustomizationStorage);
item_f.itemServer.addRoute("CustomizationWear", customization_f.wearClothing);
item_f.itemServer.addRoute("CustomizationBuy", customization_f.buyClothing);