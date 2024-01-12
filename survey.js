// survey.js

// Add event listeners to each option card
document.getElementById("internet-card").addEventListener("click", displayVotes);
document.getElementById("mobile-card").addEventListener("click", displayVotes);
document.getElementById("wearable-card").addEventListener("click", displayVotes);
document.getElementById("local-branch-card").addEventListener("click", displayVotes);

// Function to display the votes for the clicked option card
function displayVotes(event) {
    var cardId = event.currentTarget.id;
    var votesElement = document.getElementById(cardId + "-votes");
    
    // Retrieve the votes for the option from the server and update the votesElement
    fetch("/votes/" + cardId)
        .then(response => response.json())
        .then(data => {
            votesElement.textContent = data.votes;
        })
        .catch(error => {
            console.error("Error retrieving votes:", error);
        });
}

// Function to update the total number of votes
function updateTotalVotes() {
    var totalVotesElement = document.getElementById("total-votes");
    
    // Retrieve the total number of votes from the server and update the totalVotesElement
    fetch("/total-votes")
        .then(response => response.json())
        .then(data => {
            totalVotesElement.textContent = data.totalVotes;
        })
        .catch(error => {
            console.error("Error retrieving total votes:", error);
        });
}

// Implement real-time updating of votes as other users vote
setInterval(updateTotalVotes, 5000); // Update total votes every 5 seconds