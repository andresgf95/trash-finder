import { Object } from "../db/RunDB.mjs"

async function CreateObjects (req, res) {
    try {
        await Object.create(req.body)
        res.send("OK")
    } catch (error) {
        console.error()
        res.status(500).send()
    }
}

export default CreateObjects