"use strict";

/**
 * Calculates and returns insurance costs for the provided items at the requests traders.
 *
 * @param info Json object containing an array of items and traders to check
 * @returns {string} Stringified json containing the array of insurance costs under the 'data' property
 */
function getInsuranceCost(url, info, sessionID) {
    return json.stringify({"err": 0, "errmsg": null, "data": insurance_f.cost(info, sessionID)});
}

router.addStaticRoute("/client/insurance/items/list/cost", getInsuranceCost);
item_f.itemServer.addRoute("Insure", insurance_f.insure);