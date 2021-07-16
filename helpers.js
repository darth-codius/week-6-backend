const fs = require("fs");
const path = require("path");

const saveData = (data) => {
    const rawData = fs.readFileSync("students.json");
    const list = JSON.parse(rawData);
    list.push(data);
    fs.writeFileSync("students.json", JSON.stringify(list, null, 2));
};

const getStudentsData = () => {
    const studentList = fs.readFileSync("students.json");
    return JSON.parse(studentList);
};

const deleteData = () => {
    const data = fs.readFileSync("students.json");
    let list = JSON.parse(data);
    list = [];
    fs.writeFileSync("students.json", JSON.stringify(list, null, 2));
};

const isExist = (student) => {
    const data = JSON.parse(fs.readFileSync("students.json"));
    return data.some(
        (val) =>
            student.name.toLowerCase() == val.name.toLowerCase() &&
            student.seat == val.seat &&
            student.class.toLowerCase() == val.class.toLowerCase()
    );
};

exports.saveData = saveData;
exports.getStudentsData = getStudentsData;
exports.deleteData = deleteData;
exports.isExist = isExist;
