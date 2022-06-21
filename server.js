const { response } = require('express')
const express = require('express')
const app = express()

const PORT = 4000

const albums = {
    'born to die': {
        1: "Video Games",
        2: "Born to Die",
        3: "Blue Jeans",
        4: "Summertime Sadness",
        5: "National Anthem",
        6: "Dark Paradise"
    },
    'ultraviolence': {
        1: "Cruel World",
        2: "Ultraviolence",
        "3": "Shades of Cool",
        "4": "Brooklyn Baby",
        "5": "West Coast",
        "6": "Sad Girl",
        "7": "Pretty When You Cry",
        "8": "Money Power Glory",
        "9": "Fucked My Way Up to the Top",
        "10": "Old Money",
        "11": 	"The Other Woman"
    },
    'unknown' : {
        "1": "unknown",
        "2": "unknown",
        "3": "unknown",
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/api', (req, res)=>{
    res.json(albums)
})
app.get('/api/:name', (req, res)=>{
    const albumName = req.params.name.toLowerCase()
    if (albums[albumName]) {
        console.log(`The length of this album is ${Object.keys(albums[albumName]).length} tracks`)
        res.json(albums[albumName])
    } else {
        res.json(albums['unknown'])
    }
})
app.get('/api/:name/:number', (req, res)=>{
    const albumName = req.params.name.toLowerCase()
    const trackNumber = req.params.number

    if (albums[albumName][trackNumber]) {
        console.log(`The length of this album is ${Object.keys(albums[albumName]).length} tracks`)
        res.json(`Track ${trackNumber} is ${albums[albumName][trackNumber]}`)
    } else {
        res.json(albums['unknown']["1"])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!!`)
})