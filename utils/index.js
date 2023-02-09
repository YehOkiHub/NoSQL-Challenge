const moment = require("moment")
module.export = (date) =>{
 return moment(date).format('MMMM DD YYYY, h:mm:ss a')
}


// let dateFormat  = Date.now()
// let timeStamp = Date.now()

// function dateFormat(date){

//     return date

// }

// function timeStamp(date){

//     return date

// }


// module.export = dateFormat
// module.export = timeStamp

// module.export = {dateFormat, timeStamp}