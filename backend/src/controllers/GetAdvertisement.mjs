import { Object } from "../db/RunDB.mjs";

async function GetObject (_, res) {
    try {
        const Avisos = await Object.findAll()
        res.json(Avisos)
    } catch (error) {
        console.error(error)
        res.status(404).send
    }
}

export default GetObject