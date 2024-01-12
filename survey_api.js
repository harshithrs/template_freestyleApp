// survey_api.js

// Function to retrieve the current votes for each option from the server
async function getVotes() {
    try {
        const response = await fetch('/votes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data.votes;
    } catch (error) {
        console.error('Error retrieving votes:', error);
        return null;
    }
}

// Function to update the votes for each option in the server
async function updateVotes(votes) {
    try {
        const response = await fetch('/votes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ votes })
        });
        const data = await response.json();
        return data.success;
    } catch (error) {
        console.error('Error updating votes:', error);
        return false;
    }
}
