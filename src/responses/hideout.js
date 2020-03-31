"use strict";

/**
 * Returns db data related to hideout recipes
 *
 * @returns {string} Json object containing recipes
 */
function getRecipes(url, info, sessionID) {
    return json.read(db.user.cache.hideout_production);
}

/**
 * Returns db data related to hideout settings
 *
 * @returns {string} Json object containing default hideout settings
 */
function getSettings(url, info, sessionID) {
    return json.read(db.hideout.settings);
}

/**
 * Returns db data related to hideout areas
 *
 * @returns {string} Json object containing hideout area details
 */
function getAreas(url, info, sessionID) {
    return json.read(db.user.cache.hideout_areas);
}

/**
 * Returns db data related to scavcase recipes
 *
 * @returns {string} Json object containg scavcase recipes
 */
function getScavDatacaseRecipes(url, info, sessionID) {
    return json.read(db.user.cache.hideout_scavcase);
}

router.addStaticRoute("/client/hideout/production/recipes", getRecipes);
router.addStaticRoute("/client/hideout/settings", getSettings);
router.addStaticRoute("/client/hideout/areas", getAreas);
router.addStaticRoute("/client/hideout/production/scavcase/recipes", getScavDatacaseRecipes);
item_f.itemServer.addRoute("HideoutUpgrade", hideout_f.upgrade);
item_f.itemServer.addRoute("HideoutUpgradeComplete", hideout_f.upgradeComplete);
item_f.itemServer.addRoute("HideoutContinuousProductionStart", hideout_f.continuousProductionStart);
item_f.itemServer.addRoute("HideoutSingleProductionStart", hideout_f.singleProductionStart);
item_f.itemServer.addRoute("HideoutScavCaseProductionStart", hideout_f.scavCaseProductionStart);
item_f.itemServer.addRoute("HideoutTakeProduction", hideout_f.takeProduction);
item_f.itemServer.addRoute("HideoutPutItemsInAreaSlots", hideout_f.putItemsInAreaSlots);
item_f.itemServer.addRoute("HideoutTakeItemsFromAreaSlots", hideout_f.takeItemsFromAreaSlots);
item_f.itemServer.addRoute("HideoutToggleArea", hideout_f.toggleArea);