const diseasesData = [
  {
    "id": "1",
    "title": "Malaria",
    "symptoms": "Fever, chills, and flu-like illness.",
    "dos": ["Use insect repellent", "Sleep under a mosquito net", "Take prescribed medications"],
    "donts": ["Don't leave stagnant water around", "Avoid going out during mosquito peak hours"]
  },
  {
    "id": "2",
    "title": "Dengue",
    "symptoms": "High fever, headache, muscle and joint pain.",
    "dos": ["Wear full-sleeved clothes", "Use mosquito repellents", "Clean up water containers regularly"],
    "donts": ["Avoid self-medication", "Don't let water stagnate near your home"]
  },
  {
    "id": "3",
    "title": "COVID-19",
    "symptoms": "Fever, dry cough, fatigue, and shortness of breath.",
    "dos": ["Wear a mask", "Maintain social distancing", "Wash hands frequently"],
    "donts": ["Don't touch your face", "Avoid crowded places", "Don't spread misinformation"]
  },
  {
    "id": "4",
    "title": "Typhoid",
    "symptoms": "Fever, weakness, stomach pain, and headache.",
    "dos": ["Drink only purified water", "Wash hands regularly", "Take prescribed antibiotics"],
    "donts": ["Avoid eating street food", "Don't drink untreated water"]
  },
  {
    "id": "5",
    "title": "Cholera",
    "symptoms": "Watery diarrhea, nausea, and dehydration.",
    "dos": ["Drink plenty of clean water", "Practice good sanitation", "Take oral rehydration solution"],
    "donts": ["Don't eat raw or undercooked seafood", "Avoid unclean food or water"]
  },
  {
    "id": "6",
    "title": "Common Cold",
    "symptoms": "Sneezing, runny nose, sore throat, cough, fatigue.",
    "dos": ["Drink warm liquids", "Get plenty of rest"],
    "donts": ["Avoid cold drinks", "Exposure to cold environments"]
  },
  {
    "id": "7",
    "title": "Fever",
    "symptoms": "Rest, drink fluids, and take antipyretics like paracetamol.",
    "dos": ["Stay hydrated", "Take proper rest"],
    "donts": ["Avoid heavy meals", "Strenuous activities"]
  },
  {
    "id": "8",
    "title": "Headache",
    "symptoms": "Rest in a quiet, dark room. Take over-the-counter pain relievers.",
    "dos": ["Apply a cold pack", "Relax"],
    "donts": ["Avoid bright lights", "Avoid loud noise"]
  },
  {
    "id": "9",
    "title": "Influenza (Flu)",
    "symptoms": "Fever, chills, body aches, fatigue, cough, sore throat.",
    "dos": ["Stay home and rest", "Drink plenty of fluids", "Use over-the-counter pain relievers"],
    "donts": ["Do not take antibiotics unless prescribed", "Avoid contact with others to prevent spread"]
  },
  {
    "id": "10",
    "title": "Sore Throat",
    "symptoms": "Pain, scratchiness, or irritation in the throat.",
    "dos": ["Gargle with salt water", "Drink warm fluids", "Use throat lozenges"],
    "donts": ["Avoid irritants like smoke", "Do not shout or talk loudly"]
  },
  {
    "id": "11",
    "title": "Stomach Flu (Gastroenteritis)",
    "symptoms": "Nausea, vomiting, diarrhea, stomach cramps.",
    "dos": ["Stay hydrated with clear fluids", "Rest", "Gradually reintroduce bland foods"],
    "donts": ["Do not consume dairy or fatty foods initially", "Avoid caffeine and alcohol"]
  },
  {
    "id": "12",
    "title": "Allergies (e.g., Hay Fever)",
    "symptoms": "Sneezing, itching, runny nose, watery eyes.",
    "dos": ["Identify and avoid triggers", "Use antihistamines", "Keep windows closed during high pollen seasons"],
    "donts": ["Do not smoke", "Avoid outdoor activities during high pollen days"]
  },
  {
    "id": "13",
    "title": "Asthma",
    "symptoms": "Wheezing, shortness of breath, chest tightness, coughing.",
    "dos": ["Use prescribed inhalers", "Avoid known triggers", "Monitor symptoms regularly"],
    "donts": ["Do not ignore early symptoms", "Avoid allergens and irritants"]
  },
  {
    "id": "14",
    "title": "Diabetes",
    "symptoms": "Increased thirst, frequent urination, fatigue, blurred vision.",
    "dos": ["Monitor blood sugar levels", "Follow a balanced diet", "Exercise regularly"],
    "donts": ["Avoid sugary foods and drinks", "Do not skip meals"]
  },
  {
    "id": "15",
    "title": "Hypertension (High Blood Pressure)",
    "symptoms": "Often asymptomatic; may have headaches, dizziness.",
    "dos": ["Follow a low-sodium diet", "Exercise regularly", "Manage stress"],
    "donts": ["Do not smoke", "Avoid excessive alcohol consumption"]
  },
  {
    "id": "16",
    "title": "Cardiac Arrest",
    "symptoms": "Sudden loss of responsiveness, abnormal breathing.",
    "dos": ["Call emergency services immediately", "Perform CPR if trained", "Use an AED if available"],
    "donts": ["Do not waste time; act quickly", "Avoid unnecessary delays in calling for help"]
  },
  {
    "id": "17",
    "title": "Pneumonia",
    "symptoms": "Cough, fever, chills, difficulty breathing.",
    "dos": ["Seek medical attention", "Stay hydrated", "Use cough suppressants if necessary"],
    "donts": ["Do not ignore severe symptoms", "Avoid smoking"]
  },
  {
    "id": "18",
    "title": "Chronic Obstructive Pulmonary Disease (COPD)",
    "symptoms": "Shortness of breath, chronic cough, wheezing.",
    "dos": ["Avoid smoking", "Follow prescribed treatment plans", "Engage in regular physical activity"],
    "donts": ["Do not expose yourself to pollutants", "Avoid respiratory irritants"]
  },
  {
    "id": "19",
    "title": "Anxiety Disorders",
    "symptoms": "Excessive worry, restlessness, fatigue, irritability.",
    "dos": ["Practice relaxation techniques", "Seek therapy or counseling", "Exercise regularly"],
    "donts": ["Do not self-medicate with drugs or alcohol", "Avoid isolating yourself"]
  },
  {
    "id": "20",
    "title": "Depression",
    "symptoms": "Persistent sadness, loss of interest, fatigue, changes in appetite.",
    "dos": ["Seek professional help", "Stay connected with loved ones", "Engage in physical activity"],
    "donts": ["Do not ignore symptoms", "Avoid withdrawing from social activities"]
  },
  {
    "id": "21",
    "title": "Cuts and Scrapes",
    "symptoms": "Bleeding, pain, redness, swelling.",
    "dos": ["Clean the wound with soap and water", "Apply an antiseptic to prevent infection", "Cover the cut with a sterile bandage"],
    "donts": ["Do not pick at scabs or remove dressings prematurely", "Avoid exposing the wound to dirty environments"]
  },
  {
    "id": "22",
    "title": "Drowning",
    "symptoms": "Difficulty breathing, coughing, blue skin, unresponsiveness.",
    "dos": ["Call emergency services immediately", "Perform CPR if trained and the person is unresponsive", "Provide warmth to the person after rescue"],
    "donts": ["Do not leave the person alone", "Avoid unnecessary delays in calling for help"]
  },
  {
    "id": "23",
    "title": "Choking",
    "symptoms": "Inability to speak, difficulty breathing, coughing, clutching the throat.",
    "dos": ["Encourage the person to cough if they can", "Perform the Heimlich maneuver if they are unable to breathe", "Call emergency services if the person loses consciousness"],
    "donts": ["Do not slap the person on the back while they are choking, as it may worsen the situation", "Avoid giving them water or food until cleared"]
  },
  {
    "id": "24",
    "title": "Sunburn",
    "symptoms": "Red, painful skin, blistering, swelling.",
    "dos": ["Cool the burn with a cold compress or aloe vera gel", "Stay hydrated by drinking plenty of fluids", "Apply moisturizing lotion to soothe the skin"],
    "donts": ["Do not pop blisters", "Avoid further sun exposure until healed"]
  },
  {
    "id": "25",
    "title": "Insect Bites",
    "symptoms": "Redness, swelling, itching, pain at the bite site.",
    "dos": ["Wash the area with soap and water", "Apply ice or cold compress to reduce swelling", "Use over-the-counter antihistamines to relieve itching"],
    "donts": ["Do not scratch the bite", "Avoid applying heat to the affected area"]
  }
];

export default diseasesData;