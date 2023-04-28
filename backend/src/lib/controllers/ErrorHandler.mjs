function errorHandler (err, res) {
    console.error(err)
    res.status(500).send()
}

export default errorHandler