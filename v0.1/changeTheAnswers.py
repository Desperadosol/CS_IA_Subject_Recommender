import json

result = [] 

with open('v0.1\questions.json', 'r') as f:
    questions = json.load(f)

i = 0
while i < len(questions):
    try:
        answer = int(input(f"{questions[i]}: "))
        if answer == 1 or answer == 0:
            result.append(answer)
            i += 1
        else:
            print("Please enter a valid answer (0 or 1)")
    except ValueError:
        print("Please enter a valid answer (0 or 1)")
    


with open(r'v0.1\answers.json', 'r') as f:
    answers = json.load(f)

for key, value in zip(answers.keys(), result):
    answers[key] = value

with open(r'v0.1\answers.json', 'w') as f:
    json.dump(answers, f, indent=4)