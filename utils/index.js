const moment = require("moment")
module.export = (date) =>{
 return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}