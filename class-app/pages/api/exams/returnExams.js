
export default async function handler(req, res) {
    const fs = require('fs')
    let data = {}
    try {
        data = JSON.parse(fs.readFileSync('C:/Users/USUARIO/Desktop/Escritorio2/Proyectos/Universidad/NextJS/next.js-class-app/class-app/database/exams.json', 'utf8'));
        //console.log(data.count)
        //console.log("Re sape sapetin")
        res.send(data)
    } catch (err) {
        console.error(err)
        res.status(500)
    }

}