export const userKeys = {
    NAME: "name",
    SECTORS: "sectors",
    AGREE_TO_TERMS: "agreeToTerms"
}

export const sessionStorageEvents = {
    SET_ITEM: "setItem",
    GET_ITEM: "getItem",
}

export const sessionStorageKeys = {
    USER: 'user'
}

export const forceActionEvents = {
    ADD: "add",
    REMOVE: "remove"
}

export const messageThemes = {
    INFO: "INFO",
    ERROR: "ERROR",
}

export const notificationMessages = {
    USER_RESTORED: {
        message: "User's session successfully restored.",
        theme: messageThemes.INFO
    },
    INVALID_NAME: { message: "Please enter valid Name.", theme: messageThemes.ERROR },
    INVALID_SECTORS: { message: "Please select atleast 1 Sector.", theme: messageThemes.ERROR },
    SIGN_TERMS: { message: "Please sign terms.", theme: messageThemes.ERROR },
    USER_UPDATED: { message: "User has been successfully updated.", theme: messageThemes.INFO },
    SECTOR_NOT_FOUND: { message: "Please reload, sectors not found", theme: messageThemes.ERROR }

}