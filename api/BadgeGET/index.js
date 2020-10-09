/*
Please use async / promise style operations. 
You can "promisify" synchronous operations, e.g. read from a local file
*/
const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

// Axios is a http client lib
// see https://github.com/axios/axios#axios-api
const axios = require('axios');

const filenameQR = './BadgeGET/builder-qr.png'

module.exports = async function (context, req) {
    context.log('HTTP trigger: GET badge');

    let data = await readFileAsync(filenameQR);


    context.res = {
        status: 200, /* Defaults to 200 */
        headers: {
            'Content-Type': 'image/png'
        },
        body: data,
    };
}