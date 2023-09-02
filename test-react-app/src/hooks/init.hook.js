import { useEffect, useState } from "react"
import sectorService from "../services/sector.service"
import userService from "../services/user.service"
import { forceActionEvents, notificationMessages, sessionStorageEvents, sessionStorageKeys, userKeys } from "../constants"
import handleSessionStorage from "../utils/sessionStorage.util"

const defaultUser = {
    name: '',
    agreeToTerms: true,
    sectors: []
}

const defaultNotification = {
    message: "",
    theme: ""
}

const useInit = () => {

    const [sectors, setSectors] = useState([]) // sectors 
    const [user, setUser] = useState({ ...defaultUser }) // user
    const [notification, setNotification] = useState({ ...defaultNotification })

    const clearNotification = () => {
        setNotification(defaultNotification)
    }

    // fetch sectors from backend
    const fetchSectors = async () => {
        const sectors = await sectorService.getAllSectors()
        // add notification here!
        if (!sectors) {
            setNotification(notificationMessages.SECTOR_NOT_FOUND)
            return
        }
        setSectors(sectors)
    }

    // updating user sectors for UI
    const updateUserSectors = (sectors, clickedSector, event) => {
        let partialUserSectors = [...sectors]
        const currentIndex = sectors.findIndex((userSector) => userSector._id === clickedSector._id)

        switch (event) {
            // case when we are forcefully adding sub-sectors because of parent selector
            case forceActionEvents.ADD: {
                // dont need to add sector if already exist
                if (currentIndex < 0) {
                    partialUserSectors = [...sectors, { ...clickedSector }]
                }
                break
            }
            // case when we are forcefully removing sub-sectors because of parent selector
            case forceActionEvents.REMOVE: {
                // remove if sector exist                
                if (currentIndex >= 0) {
                    partialUserSectors = [...sectors.slice(0, currentIndex), ...sectors.slice(currentIndex + 1, sectors.length)]
                }
                break
            }
            // default case when sector with no sub-sectors selected.
            default: {
                if (currentIndex >= 0) {
                    partialUserSectors = [...sectors.slice(0, currentIndex), ...sectors.slice(currentIndex + 1, sectors.length)]
                } else {
                    partialUserSectors = [...sectors, { ...clickedSector }]
                }
            }
        }

        return partialUserSectors
    }

    // recursive add/delete 
    const recursiveIterationToUserSectors = (usersSectors, clickedSector, event = null) => {

        let newUsersSectors = updateUserSectors(usersSectors, clickedSector, event)
        // case where we need to skip addition and removal of user sectora because of parent sector 
        // recursively adding / removing  sub-sectors from user's sectors
        if (clickedSector?.subSectors?.length && newUsersSectors.length !== usersSectors.length) {
            clickedSector.subSectors.map(subSector => {
                newUsersSectors =
                    // forced events are when we need to de-select/select all below options 
                    recursiveIterationToUserSectors(newUsersSectors, subSector,
                        newUsersSectors.length > usersSectors.length ? forceActionEvents.ADD : forceActionEvents.REMOVE)
            })
        }
        return newUsersSectors
    }

    // updating user for UI
    const updateUser = (key, value) => {
        setNotification({ ...defaultNotification })
        let partialUser = { ...user }
        if (key === userKeys.SECTORS) {
            // value is clicked sector / subSector
            partialUser[key] = recursiveIterationToUserSectors([...user.sectors], value)
        } else {
            partialUser[key] = value
        }
        setUser(partialUser)
    }

    const handleValidation = () => {
        let notification;
        if (!user[userKeys.NAME]) {
            notification = notificationMessages.INVALID_NAME
        } else if (!user[userKeys.SECTORS].length) {
            notification = notificationMessages.INVALID_SECTORS
        } else if (!user[userKeys.AGREE_TO_TERMS]) {
            notification = notificationMessages.SIGN_TERMS
        }

        if (notification) {
            setNotification(notification)
            return false
        }
        return true
    }

    // upserting user to backend and setting upsertedUser to currentUSer
    const upsertUser = async () => {
        if (handleValidation()) {
            const upsertedUser = await userService.upsertUser(user)
            // once user upserted, updating session storage and UI
            if (upsertedUser) {
                setUser(upsertedUser)
                setNotification(notificationMessages.USER_UPDATED)
                handleSessionStorage(sessionStorageKeys.USER, JSON.stringify(upsertedUser), sessionStorageEvents.SET_ITEM)
            }
        }
    }

    // fetching sectors after mounting mount
    // setting user in  
    useEffect(() => {
        fetchSectors()
        // if user already in session then set default user here below.
        // this is safe as we save latest updated user earlier
        const sessionUser = handleSessionStorage(sessionStorageKeys.USER, null, sessionStorageEvents.GET_ITEM)
        if (sessionUser) {
            setUser(sessionUser)
            setNotification(notificationMessages.USER_RESTORED)
        }
    }, [])

    return [
        sectors, user, updateUser, upsertUser, notification, clearNotification
    ]

}
export default useInit