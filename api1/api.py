from flask import Flask, jsonify

# Load data from your JSON file
with open('my.json', 'r') as file:
    data = json.load(file)

app = Flask(_name_)

# Route to return the entire JSON data
@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify(data)

# Route to get data by ID
@app.route('/api/data/<int:id>', methods=['GET'])
def get_data_by_id(id):
    for item in data:
        if item['id'] == id:
            return jsonify(item)
    return jsonify({'error': 'Item not found'})

# Start the Flask application
if _name_ == '_main_':
    app.run(debug=True)