import sqlite3

# Define the recommend_channel function
def recommend_channel(user_input):
    # Validate the user input
    if validate_input(user_input):
        # Store the recommendation in the database
        store_recommendation(user_input)
        return "Success: Recommendation submitted"
    else:
        return "Error: Invalid input"

# Define the get_recommended_channels function
def get_recommended_channels():
    # Fetch the recommended channels from the database
    recommended_channels = fetch_recommended_channels()
    return recommended_channels

# Define the vote_for_channel function
def vote_for_channel(channel):
    # Validate the user's vote
    if validate_vote(channel):
        # Update the vote count for the channel in the database
        update_vote_count(channel)
        return "Success: Vote casted"
    else:
        return "Error: Invalid vote"

# Define the get_vote_count function
def get_vote_count():
    # Fetch the vote count for each recommended channel from the database
    vote_count = fetch_vote_count()
    return vote_count

# Define any helper functions if needed
def validate_input(user_input):
    # Validate the user input
    if user_input:
        return True
    else:
        return False

def store_recommendation(user_input):
    # Store the recommendation in the database
    conn = sqlite3.connect('recommendations.db')
    c = conn.cursor()
    c.execute("INSERT INTO recommendations (channel) VALUES (?)", (user_input,))
    conn.commit()
    conn.close()

def fetch_recommended_channels():
    # Fetch the recommended channels from the database
    conn = sqlite3.connect('recommendations.db')
    c = conn.cursor()
    c.execute("SELECT channel FROM recommendations")
    recommended_channels = c.fetchall()
    conn.close()
    return recommended_channels

def validate_vote(channel):
    # Validate the user's vote
    if channel:
        return True
    else:
        return False

def update_vote_count(channel):
    # Update the vote count for the channel in the database
    conn = sqlite3.connect('recommendations.db')
    c = conn.cursor()
    c.execute("UPDATE recommendations SET vote_count = vote_count + 1 WHERE channel = ?", (channel,))
    conn.commit()
    conn.close()

def fetch_vote_count():
    # Fetch the vote count for each recommended channel from the database
    conn = sqlite3.connect('recommendations.db')
    c = conn.cursor()
    c.execute("SELECT channel, vote_count FROM recommendations")
    vote_count = c.fetchall()
    conn.close()
    return vote_count