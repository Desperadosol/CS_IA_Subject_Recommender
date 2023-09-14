import json
from tensorflow import keras
import numpy as np
from pprint import pprint

from checklist import generateSample

def getAnswers():
    with open(r'v0.1\answers.json', 'r') as f:
        answers = json.load(f)
    return [list(answers.values())]

def transformProbIntoScores(probabilities: list):
    return np.around(probabilities[0]*100, 2)

def setSubjectScores(scores: list):
    with open(r'v0.1\subjects.json', 'r') as f:
        subjects = json.load(f)
    
    for i in range(len(subjects)):
        subjects[i]['score'] = round(float(scores[i]), 2)
    
    with open(r'v0.1\subjects.json', 'w') as f:
        json.dump(subjects, f, indent=4)

    return subjects

model = keras.models.load_model("./v0.1/model.h5")

result = model.predict(getAnswers())
print(result)
subjects = setSubjectScores(transformProbIntoScores(result))

recommendation = generateSample(subjects)

pprint(recommendation)

for subject in recommendation:
    print(f"For your {subject['group']} subject you should take {subject['name']}, where you scored {subject['score']}%")

print("If you want to change your predictions - type the 6 indexes of the subjects listed below which you would love to get:")
for i in range(len(subjects)):
    print(f"{i}: {subjects[i]['name']}")


target_indexes = list(map(int, input().split()))

target_list = [0 for _ in range(17)]

for i in target_indexes:
    target_list[i] = 1

print(target_list)


model.fit(getAnswers(), [target_list], epochs=50)


result = model.predict(getAnswers())
subjects = setSubjectScores(transformProbIntoScores(result))

recommendation = generateSample(subjects)

pprint(recommendation)