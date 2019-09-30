const express = require('express')
const path = require('path')
const port = process.env.PORT || 4444

const app = express()

app.use(express.static(__dirname + '/dist/courses'))

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/courses/index.html'))
})


app.listen(port, () => {
    console.log('Up on ' + port)
});