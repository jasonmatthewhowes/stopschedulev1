export const URLBuilder = (locone, loctwo, locthree, locfour, userId) => {
    return `http://localhost:8088/stops?_expand=location&userId=${userId}&locationId=${locone}&locationId=${loctwo}&locationId=${locthree}&locationId=${locfour}`
}