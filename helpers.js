const fs = require('fs')

fun saveData(data){
    fs.writeFileSync(path.resolve(__dirname, 'student.json'), JSON.stringify(student));
}