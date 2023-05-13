# This api will be requested by the Django app
from fastapi import FastAPI

app = FastAPI()
# This endpoint will be used to translate the messages
@app.get("/translate/{filter}")
async def read_root(filter: str):
    # This is a dictionary with the messages to be translated
    messages = {"about_me": {"presentation": ("Hello, my name is Wladimir", "Hola, mi nombre es Wladimir"),
                             "interests": ("I like coding", "Me gusta programar")},
                "stack": {"python": ("I use python for data science", "Uso python para ciencia de datos"),
                          "javascript": ("I use javascript for web development", "Uso javascript para desarrollo web")}
                }
    # If the filter is "all" return all the messages
    if filter == "all":
        return messages
    # If the filter is not "all" return the message for the filter
    else:
        if filter not in messages:
            return {"error": "filter not found"}
        return messages[filter]
