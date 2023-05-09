import { User, UserProfile, Object } from "../db/RunDB.mjs";

const users = [
    {
        id: 0,
        UserName: "Ramón",
        Karma: 0,
        Email: "ramon@ramonmail.gal",
    }, {
        id: 1,
        UserName: "Josefa",
        Karma: 298,
        Email: "josefa@lugomail.gal",
    }, {
        id: 2,
        UserName: "AugaBendita69",
        Karma: -40,
        Email: "ab69@pp.es",
    },
    {
        id: 3,
        UserName: "Andres",
        passResume: "$2b$10$0hDbmFnnJwAtu1AWDO61KeahL1g2UHWX192r9gDgbciSrsL82VJ/K",
        Karma: 0,
        Email: "hola@hola.gal"
    }
]

const profiles = [
    {
        IdUser: 0,
        ProfileImg: 0,
    }, {
        IdUser: 1,
        ProfileImg: 1,
    }, {
        IdUser: 2,
        ProfileImg: 2,
    }
]

const objects = [
    {
        id: 0,
        Title: "Alfombra",
        Description: "qwèifnqwèifnqweipfqwoifhqwiufhiwqufpioqueh",
        IDUser: 1,
        Has: "po52h3u23ph42ou4"
    }, {
        id: 1,
        Title: "Arandano",
        Description: "ergwergwegrewrgwergggggggggggggggwergwergwerg",
        IDUser: 0,
        Has: "23ñoj46b23o45ub6"
    }, {
        id: 2,
        Title: "Zarihuella",
        Description: "wergwergggggggggggwergwerwrtyyyyyyyyyywerwreywer",
        IDUser: 2,
        Has: "12ñjlkbn12l5jñb"
    }
]

User.bulkCreate(users)
UserProfile.bulkCreate(profiles)
Object.bulkCreate(objects)