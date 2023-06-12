# import requests
# import json

# url = "https://www.themealdb.com/api/json/v1/1/search.php?f=p"

# response = requests.get(url)
# if response.status_code == 200:
#     data = response.json()
#     # Process the fetched JSON data here

#     # Save JSON data to a file
#     with open("fetchedData.json", "w") as json_file:
#         json.dump(data, json_file)
#         print("Data saved to fetchedData.json file.")
# else:
#     print("Error fetching data:", response.status_code)


import requests
import json

url = "https://www.themealdb.com/api/json/v1/1/search.php?f=p"

response = requests.get(url)
if response.status_code == 200:
    data = response.json()
    formatted_data = json.dumps(data, indent=4)  # Format the JSON string with indentation

    # Save formatted JSON data to a file
    with open("fetchedData.json", "w") as json_file:
        json_file.write(formatted_data)
        print("Data saved to fetchedData.json file.")
else:
    print("Error fetching data:", response.status_code)