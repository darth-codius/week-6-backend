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

exports.saveData = saveData;