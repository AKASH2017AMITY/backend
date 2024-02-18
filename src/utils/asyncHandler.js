const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))

    }
}

export { asyncHandler }


// const asynHandler = () => {}
// const asynHandler = (fn) => { ()=>{}}
// const asynHandler = (fn) => () => {}
// const asynHandler = (fn) => async () => {}


// const asynHandler = (fn) => (req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch(error) {
//         res.status(err.code || 500).json({
//             sucess: false,
//             message: err.message
//         })
//     }
// }
