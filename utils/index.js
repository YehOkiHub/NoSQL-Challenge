const moment = require("moment")
module.export = (date) =>{
 return moment(date).format('MMMM DD YYYY, h:mm:ss a')
}

// function dateFormat(timeStamp){
//     return timeStamp = moment().format("MMM Do YY");  

// } 

let dateFormat = moment().format('MMMM DD YYYY, h:mm:ss a')

module.export = dateFormat