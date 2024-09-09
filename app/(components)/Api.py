from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message')
    # Process the message and generate a response
    response = process_message(user_message)
    return jsonify({'response': response})

def process_message(message):
    # Implement your chatbot logic here
    return "This is a response to: " + message

if __name__ == '__main__':
    app.run(debug=True)
