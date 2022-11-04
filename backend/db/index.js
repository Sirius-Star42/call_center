const { Pool } = require('pg')

let dbSettings = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
}

if (process.env.NODE_ENV === 'development') {
    dbSettings = {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    }
}


const pool = new Pool(dbSettings)

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.log(`It has occured an error!: ${err}`)
        return
    }
    console.log('Database has been connected successfully')
    pool.end()
})

