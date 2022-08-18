export const test = async (req, res) => {
    try {
        console.log(req.body)
    } catch (error) {
        return res.json({message: 'Ошибка при тестировании', type: 'error'})
    }
}