function exceptionHandler (err, res) {
    res.sendStatus(500)
    console.error(err)
}

export default exceptionHandler