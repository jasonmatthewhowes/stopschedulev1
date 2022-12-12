/*
 

    const timeStampToDate = (timestamp) => {
        let formattedDate =new Date(timestamp * 1000)
        return `${formattedDate}`
    }

    let z = timeStampToDate(1670354090.559)
   
    
    let timesplit = z.split(" ", 1)
    console.log(timesplit)
    let timeObject = timesplit[0]
    console.log(timeObject)
    if (timeObject === "Tue") {
        console.log("dicks")
    }



    */
export const timeStampToDayNumber = (timestamp) => {
    let fullDateFormat = new Date(timestamp * 1000)
    let fullDateObject = `${fullDateFormat}`
    let timesplit = fullDateObject.split(" ", 1)
    let timeObject = timesplit[0]
    
    let dayNumber=-1
    if (timeObject === "Sun") {
        dayNumber = 0
    }
    else if (timeObject === "Mon") {
        dayNumber = 1
    }
    else if (timeObject === "Tue") {
        dayNumber = 2
    }
    else if (timeObject === "Wed") {
         dayNumber = 3
    }
    else if (timeObject === "Thur") {
         dayNumber = 4
    }
    else if (timeObject === "Fri") {
         dayNumber = 5
    }
    else if (timeObject === "Sat") {
         dayNumber = 6
    }
   
    return dayNumber

}

export const timeStampToTime = (timestamp) => {
    let convertDate = new Date(timestamp * 1000)
    return `${convertDate.toLocaleTimeString("en-US")}`
}


