import express from 'express'

/*Express*/
const app = express()
app.use(express.json())

/*Cors*/
import  cors  from 'cors'
app.use(cors())

/*Postgres*/
import { config } from './db-config.model'
import {Client} from 'pg'

const client = new Client (config)
const PORT = 5000

client.connect(() => {
    try {
        console.log('Connected to the PostgreSQL database')
    } catch (error) {
        console.log('Error connecting to the PostgreSQL database', error)
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})