const fs = require("fs");

const saveData = (data) => {
    const rawData = fs.readFileSync("students.json");
    const list = JSON.parse(rawData);
    list.push(data);
    fs.writeFileSync(
        "students.json",
        JSON.stringify(list, null, 2)
    );
};

const getStudentsData = () =>{
    const studentList = fs.readFileSync("students.json")
    return JSON.parse(studentList)
}

exports.saveData = saveData;
exports.getStudentsData = getStudentsData