import json
import csv
from datetime import date

today = date.today().strftime("%Y%m%d")

print("Hello! Today's date is ",today)

#Open the JSON file.
file = open('data.json')

#get the object as a dictionary.
data = json.load(file)

for line in data:
    ##The creditcard number
    card = line["creditcard"]
    #If there is a credit card, continue. Else, loop.
    if(card):
        csvline = line["name"] + ","+card
        print(csvline)
    

file.close()