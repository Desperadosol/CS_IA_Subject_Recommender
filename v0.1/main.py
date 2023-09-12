import json

def getAnswers():
    with open(r'v0.1\answers.json', 'r') as f:
        answers = json.load(f)
    return list(answers.values())

print(getAnswers())