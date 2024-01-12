// survey_utils.js

const fs = require('fs');

// Function to retrieve data from the survey_data.json file
function getData() {
    try {
        const data = fs.readFileSync('survey_data.json', 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data from survey_data.json:', error);
        return null;
    }
}

// Function to update data in the survey_data.json file
function updateData(data) {
    try {
        const jsonData = JSON.stringify(data);
        fs.writeFileSync('survey_data.json', jsonData, 'utf8');
        console.log('Data updated successfully');
    } catch (error) {
        console.error('Error updating data in survey_data.json:', error);
    }
}

module.exports = {
    getData,
    updateData
};
