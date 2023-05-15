# This api will be requested by the Django app
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def hello():
    return {"message": "Hello World"}

# This endpoint will be used to translate the messages
@app.get("/translate/{filter}")
async def read_root(filter: str, language: str = None):
    # This is a dictionary with the messages to be translated
    messages = {"about_me": {"presentation": ("Hello, my name is Wladimir", "Hola, mi nombre es Wladimir"),
                             "interests": ("I like coding", "Me gusta programar")},
                "stack": {"python": ("I use python for data science", "Uso python para ciencia de datos"),
                          "javascript": ("I use javascript for web development", "Uso javascript para desarrollo web")}
                }
    # If the filter is "all" return all the messages
    if filter == "all":
        # if language == "spanish":
        if language == "es":
            #return all messages in spanish
            spanish_messages = {key: {sub_key: sub_value[1] for sub_key, sub_value in value.items()} for key, value in messages.items()}
            return spanish_messages
        # if language is not specified return all messages in english
        elif language == "en":
            english_messages = {key: {sub_key: sub_value[0] for sub_key, sub_value in value.items()} for key, value in messages.items()}
            return english_messages
        else:
            # if language is not specified return all messages
            return messages
    # If the filter is not "all" return the message for the filter with no translation
    else:
        if filter not in messages:
            return {"error": "filter not found"}
        return messages[filter]
