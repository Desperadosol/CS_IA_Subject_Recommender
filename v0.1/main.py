import json
from tensorflow import keras
import numpy as np

def getAnswers():
    with open(r'v0.1\answers.json', 'r') as f:
        answers = json.load(f)
    return [list(answers.values())]


model = keras.models.load_model("./v0.1/model.h5")

result = getAnswers()

print(model.predict(result))

