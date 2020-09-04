/* eslint-disable*/
const isNumeroCalculadora = () => (req, res, next) =>{
    const { value1, value2, operator } = req.params;
    console.log({value1, value2, operator})
    const verifyValue1 = isNaN(Number(value1)) 
    const verifyValue2 = isNaN(Number(value2)) 
    console.log(verifyValue1)
    console.log(verifyValue2)
    return verifyValue1 && verifyValue2 ? res.status(404).json({
        statusCode: 404,
        isNumberEndpoint1: verifyValue1,
        isNumberEndpoint2: verifyValue2
    }) : next()
}

module.exports = {
    isNumeroCalculadora
}