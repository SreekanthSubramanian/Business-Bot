const {Client} = require('pg')

const client = new Client({
    host: "ec2-34-231-221-151.compute-1.amazonaws.com",
    user: "vvawcvmrhwfepd",
    port: 5432,
    password: "82ae5a19ce62814131a0b0229b6ed008d3abbbf069ca01b3535e0e2001866844",
    database: "dd7mu7e7m26nv0",
    ssl:{
        rejectUnauthorized: false
    }
})

module.exports = client
