from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from openai import OpenAI

app = Flask(__name__)
CORS(app)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        message = data.get('message')
        
        if not message:
            return jsonify({'error': 'Message is required'}), 400

        response = client.chat.completions.create(
            model="gpt-4o-mini", # Faster model
            messages=[
                {"role": "system", "content": "You are a helper who gives very brief explanations."},
                {"role": "user", "content": f"{message}"}
            ],
            max_tokens=500,  # Short responses
            temperature=0.7  # More focused responses
        )

        ai_response = response.choices[0].message.content

        return jsonify({
            'response': ai_response
        })
    except Exception as e:
        print(f"Unexpected error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    app.run(debug=True)