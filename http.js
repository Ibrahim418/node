var fs = require('fs')
var path = require('path')

var dir = process.argv[2]
var filterStr = process.argv[3]

function getFiles(dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}

var http = require('http')
var https = require('https')

var url = process.argv[2]
var prefix = url.substring(0,8)

if (prefix === 'https://'){
  https.get(url, function (response) {
    response.on('data', function (data) {
      console.log(data.toString());
    })
  })
} else {
  http.get(url, function (response) {
    response.on('data', function (data) {
      console.log(data.toString());
    })
  })
}