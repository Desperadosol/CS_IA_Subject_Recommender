from random import randint, random
from pprint import pprint
import numpy as np

def sigmoid(x):
    return 1/(1 + np.exp(-x))

def sigmoid_bounded(x, boundary):
    if x > boundary:
        return 1
    elif x < -boundary:
        return 0
    else:
        return 1/(1 + np.exp(-x))

numberOfQuestions = 20
numberOfNodesFirstLayer = 16
numberOfSubjects = 12

questions = [randint(0,1) for i in range(numberOfQuestions)]
layer1 = [0 for i in range(numberOfNodesFirstLayer)]
subjects = [[0,0] for i in range(numberOfSubjects)]

weights1 = [[2 * round(random()*2 - 1, 2) for i in range(numberOfNodesFirstLayer)] for i in range(numberOfQuestions)]
weights2 = [[2 * round(random()*2 - 1, 2) for i in range(numberOfSubjects)] for i in range(numberOfNodesFirstLayer)]



for _ in range(numberOfQuestions):
    for i in range(numberOfNodesFirstLayer):
        layer1[i] += round(weights1[_][i] * questions[_], 2)

for i in range(numberOfNodesFirstLayer):
    layer1[i] = round(sigmoid_bounded(layer1[i], 2), 2)

for _ in range(numberOfNodesFirstLayer):
    for i in range(numberOfSubjects):
        subjects[i][0] += round(weights2[_][i] * layer1[_], 2)
        subjects[i][1] += round(weights2[_][i] * layer1[_], 2)

for i in range(numberOfSubjects):
    subjects[i][0] = round(sigmoid_bounded(subjects[i][0], 2), 2)
    subjects[i][1] = round(subjects[i][1], 2)

print(questions)
print()
for i in weights1:
    print(i)
print()
print(layer1)
print()
for i in weights2:
    print(i)
print()
print(subjects)


