from data import subjectsDict as subjects
from random import randint
import pprint

for key, value in subjects.items():
    #this is temporary as scores will be generated not randomly in the future
    for subject in value:
        subject['score'] = randint(0, 100)
    #sorting the groups by score
    value.sort(key=lambda x: x['score'], reverse=True)

pprint.pprint(subjects)

def generateSample(subjects: dict) -> dict:
    """
    This function is used to generate a sample of recommended subjects from the list of all subjects.

    It follows ib rules, so that there is no contradiction among the chosen subjects.

    Args:
        subjects (dict) with the following structure:

        {
            'group1': [
                {'name': 'English', 'score': 100},
                ...
            ],

            'group2': [
                ...
            ],
            ...
        } 

    Returns:
        dict with the following structure:

        {
            'HL': [
                {'name': 'English', 'score': 100},
                ...
            ],

            'SL': [
                ...
            ],
        }

        Result always contains exactly 6 subjects: 3 'HL' and 3 'SL'
    """

    sample = []
    #Due to language restrictions we have to use additional variables in order to avoid repetition
    firstLangName = ""
    secondLangName = ""

    #Here we go through the groups and pick subject with the best score within the group
    for key, value in subjects.items():
        #These are exactly these language restrictions
        if key == "group1":
            firstLangName = value[0]['name']
            sample.append(value[0])
        elif key == "group2":
            if firstLangName == value[0]['name']:
                sample.append(value[1])
                secondLangName = value[1]['name']
            else:
                sample.append(value[0])
        else:
            #groups 3-5 are added from here
            sample.append(value[0])

    #Our school doesn't provide the sixth group of subjects, so we have to choose from the existing groups
    #Moreover, I'm pretty sure that you can't choose second math or literature
    #That's why it looks this way
    if len(subjects) == 5:
        #Again: language restrictions
        for subject in subjects['group2']:
            if subject['name'] != firstLangName and subject['name'] != secondLangName:
                secondGroupPick = subject
        sample.append(sorted([secondGroupPick, subjects['group3'][1], subjects['group4'][1]], key=lambda x: x['score'], reverse=True)[0])          

    #We have to sort the sample to deduce 'HL' and 'SL' subjects
    sample.sort(key=lambda x: x['score'], reverse=True)
    newSample = {'HL': sample[:3], 'SL': sample[3:]}

    return newSample

pprint.pprint(generateSample(subjects))