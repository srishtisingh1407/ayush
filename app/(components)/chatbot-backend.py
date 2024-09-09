from flask import Flask, request, jsonify
from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration
import warnings
warnings.filterwarnings("ignore", category=FutureWarning)

# Initialize Flask app
app = Flask(__name__)

# Load Blenderbot model and tokenizer

MODEL_NAME = "facebook/blenderbot-400M-distill"
# Increase the timeout limit
tokenizer = BlenderbotTokenizer.from_pretrained(MODEL_NAME, timeout=60)
model = BlenderbotForConditionalGeneration.from_pretrained(MODEL_NAME)


# Define route for chatbot API
@app.route('/chat', methods=['POST'])
def chat():
    try:
        # Extract user input from the request
        data = request.json
        user_input = data.get('message', '')

        if not user_input:
            return jsonify({"error": "No message provided"}), 400

        # Tokenize the input
        inputs = tokenizer(user_input, return_tensors="pt")

        # Generate a response
        reply_ids = model.generate(**inputs)
        response = tokenizer.decode(reply_ids[0], skip_special_tokens=True)

        # Return the response
        return jsonify({"response": response}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)