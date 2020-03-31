"use strict";

/**
 * Used to route requests for images to the handler that returns them.
 * This allows the server to host the images that the client expects to
 * be provided (eg. trader icons, quest images, etc.)
 */
function getImage(url, info, sessionID) {
    return "IMAGE";
}

router.addDynamicRoute(".jpg", getImage);
router.addDynamicRoute(".png", getImage);