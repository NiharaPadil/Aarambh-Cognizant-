# # Required Libraries
# import pandas as pd
# from sklearn.model_selection import train_test_split
# from sklearn.ensemble import RandomForestClassifier
# from sklearn.feature_extraction.text import CountVectorizer
# from sklearn.metrics import accuracy_score
# from sklearn.feature_extraction.text import TfidfVectorizer
# vectorizer = TfidfVectorizer()


# # Load dataset (You need a proper dataset in CSV format)
# # For this example, we'll assume you have a file "symptoms_diseases.csv"
# # The dataset should have two columns: 'symptom' (symptoms as text) and 'disease' (disease as the target label)
# df = pd.read_csv('symptoms_diseases.csv')

# # Preprocessing - Convert Symptoms to Features using Bag of Words
# vectorizer = CountVectorizer()
# X = vectorizer.fit_transform(df['symptoms'])

# # Target variable
# y = df['disease']

# # Split the data into train and test sets
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# # Train the model using Random Forest Classifier
# model = RandomForestClassifier()
# model.fit(X_train, y_train)

# # Predict on test data (Optional - You can remove if not needed)
# y_pred = model.predict(X_test)
# accuracy = accuracy_score(y_test, y_pred)
# print(f'Training Accuracy: {accuracy * 100:.2f}%')

# # Function to make predictions from user input
# def chatbot():
#     print("Welcome to the Disease Prediction Chatbot!")
#     print("Please enter your symptoms separated by spaces (e.g., 'fever cough headache').")
    
#     while True:
#         user_input = input("\nType your symptoms: ")
#         if user_input.lower() == 'exit':
#             print("Exiting chatbot. Stay healthy!")
#             break
        
#         # Preprocess the input using the same vectorizer
#         user_symptoms_vectorized = vectorizer.transform([user_input])
        
#         # Predict the disease
#         prediction = model.predict(user_symptoms_vectorized)
        
#         # Output the prediction
#         print(f"\nThe predicted disease is: {prediction[0]}")
#         print("\n(You can type 'exit' to stop the chatbot)")

# # Run the chatbot
# if __name__ == "__main__":
#     chatbot()







# new
# Required Libraries
# Required Libraries
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics import accuracy_score
from flask import Flask, request, jsonify



from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load dataset (You need a proper dataset in CSV format)
df = pd.read_csv('symptoms_diseases.csv')

# Preprocessing - Convert Symptoms to Features using Bag of Words
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(df['symptoms'])

# Target variable
y = df['disease']

# Split the data into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model using Random Forest Classifier
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Predict on test data (Optional - You can remove if not needed)
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f'Training Accuracy: {accuracy * 100:.2f}%')

# Function to make predictions from user input
@app.route('/predict', methods=['POST'])
def predict():
    
    data = request.json
    symptoms = data.get('symptoms')
    
    # Check if symptoms were provided
    if not symptoms:
        return jsonify({'error': 'No symptoms provided'}), 400
    
    # Preprocess the input using the same vectorizer
    user_symptoms_vectorized = vectorizer.transform([symptoms])
    
    # Predict the disease
    prediction = model.predict(user_symptoms_vectorized)
    
    # Return the prediction as a JSON response
    return jsonify({'disease': prediction[0]})

# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
