function errorHandler (err, res) {
    res.sendStatus(500)
    console.error(err)
}

export default errorHandler