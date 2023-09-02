const { sessionStorageEvents } = require("../constants");

const handleSessionStorage = (key = null, value = null, event) => {
    switch (event) {
        case sessionStorageEvents.SET_ITEM: {
            sessionStorage.setItem(key, value)
            return;
        }
        case sessionStorageEvents.GET_ITEM: {
            const value = key ? sessionStorage.getItem(key) : null
            return value ? JSON.parse(value) : null
        }
    }
}

module.exports = handleSessionStorage