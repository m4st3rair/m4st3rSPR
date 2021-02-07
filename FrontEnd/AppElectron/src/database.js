
const mysql= require('promise-mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'electrondb'
});


function getConection(){
    return connection;
}

module.exports={
    getConection
};