// require csvtojson module
const CSVToJSON = require('csvtojson')
const fs = require("fs");


// convert users.csv file to JSON array
CSVToJSON()
    .fromFile('products_export_1.csv')
    .then(users => {
        // users is a JSON array
        // log the JSON array
        // (users)
        fs.writeFile('users.json', JSON.stringify(users, null, 4), err => {
            if (err) {
                throw err
            }
            ('JSON array is saved.')

        });

    })
    .catch(err => {
        // log error if any
        (err)
    })
// Write JSON array to a file
