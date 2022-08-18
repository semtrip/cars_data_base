import Report from '../models/report.js'

//Add report
export const addReport = async (req, res) => {
    try {
        let {carName, carModel, win, gosNumber, bodyNumber, year, engineType, enginePower, allInfo} = req.body
        allInfo = JSON.stringify(allInfo)
        const newReport = new Report({
            carName, 
            carModel, 
            win, 
            gosNumber, 
            bodyNumber, 
            year, 
            engineType, 
            enginePower,
            allInfo
        })
        await newReport.save()
        return res.json({
            message: 'Отчет успешно сохранен'
        })
    } catch (error) {
        return res.json({message: 'Ошибка при сохранение отчета', type: 'error'})
    }
}

//Delete report
export const deleteReport = async (req, res) => {
    try {
        const {id} = req.body

        Report.findByIdAndDelete(id, function(err, result){
            if(err) return res.json({message: 'Ошибка при удаление отчета ID: id', type: 'error'})
        });
        const reports = await Report.find()
        return res.json(reports)
    } catch (error) {
        return res.json({message: 'Ошибка при удаление отчета', type: 'error'})
    }
}
//Get reports
export const getReports = async (req, res) => {
    try {
        const reports = await Report.find()
        return res.json(reports)
    } catch (error) {
        return res.json({message: 'Ошибка при получении отчетов', type: 'error'})
    }
}
//Get report
export const getReport = async (req, res) => {
    try {
        const {id} = req.body
        const report = await Report.findById(id)
        return res.json(report)
    } catch (error) {
        //console.log(error)
        return res.json({message: 'Ошибка при получение отчета', type: 'error'})
    }
}