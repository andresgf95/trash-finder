async function CallbackPostObject(Object, HandlerObject=()=>{}) {
    try {
        const ObjectJSON = JSON.stringify(Object)
        const res = await fetch("http://localhost:8000/api/v1.0/objects/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: ObjectJSON
        }
        )
        HandlerObject(res)
    } catch (error) {
        console.error(error)
        res.send("Ay Caramba!")
    }
}

export default CallbackPostObject