import { Object } from "../db/RunDB.mjs";

const objects = [
    {
        Title: "Alfombra",
        Description: "qwèifnqwèifnqweipfqwoifhqwiufhiwqufpioqueh",
        LocationDescription: "aaaaaaaaaaaaaaaa",
        UserId: 1
    }, {
        Title: "Arandano",
        Description: "ergwergwegrewrgwergggggggggggggggwergwergwerg",
        LocationDescription: "bbbbbbbbbbb",
        UserId: 2
    }, {
        Title: "Zarihuella",
        Description: "wergwergggggggggggwergwerwrtyyyyyyyyyywerwreywer",
        LocationDescription: "ccccccccccccc",
        UserId: 3
    }
]

Object.bulkCreate(objects)