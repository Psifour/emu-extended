"use strict";

function intialize() {
    global.items = json.parse(json.read(db.user.cache.items));
    global.globals = json.parse(json.read(db.globals));
    global.templates = json.parse(json.read(db.user.cache.templates));
}

module.exports.intialize = intialize;