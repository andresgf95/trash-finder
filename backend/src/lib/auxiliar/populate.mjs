import { User, Object, File } from "../db/RunDB.mjs";

const users = [
    {
        UserName: "Ramón",
        passResume: "$2b$10$0hDbmFnnJwAtu1AWDO61KeahL1g2UHWX192r9gDgbciSrsL82VJ/K",
        Karma: 0,
        Email: "ramon@ramonmail.gal",
    }, {
        UserName: "Josefa",
        passResume: "$2b$10$0hDbmFnnJwAtu1AWDO61KeahL1g2UHWX192r9gDgbciSrsL82VJ/K",
        Karma: 298,
        Email: "josefa@lugomail.gal",
    }, {
        UserName: "AugaBendita69",
        passResume: "$2b$10$0hDbmFnnJwAtu1AWDO61KeahL1g2UHWX192r9gDgbciSrsL82VJ/K",
        Karma: -40,
        Email: "ab69@pp.es",
    },
    {
        UserName: "Andres",
        passResume: "$2b$10$0hDbmFnnJwAtu1AWDO61KeahL1g2UHWX192r9gDgbciSrsL82VJ/K",
        Karma: 0,
        Email: "hola@hola.gal"
    }
]

const objects = [
    {
        Title: "Alfombra",
        Description: "qwèifnqwèifnqweipfqwoifhqwiufhiwqufpioqueh"
    }, {
        Title: "Arandano",
        Description: "ergwergwegrewrgwergggggggggggggggwergwergwerg"
    }, {
        Title: "Zarihuella",
        Description: "wergwergggggggggggwergwerwrtyyyyyyyyyywerwreywer"
    }
]

const files = [
    {
        Data: "a"
    }
]

User.bulkCreate(users)
Object.bulkCreate(objects)
File.bulkCreate(files)