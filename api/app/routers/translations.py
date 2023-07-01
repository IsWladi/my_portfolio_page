# This api will be requested by the Django app
from fastapi import APIRouter, HTTPException
import os
import json

router = APIRouter(prefix="/translations", tags=["translations"])

# import messages.json file to get the messages

# Obtén la ruta absoluta al directorio actual
current_dir = os.path.dirname(os.path.abspath(__file__))

# Construye la ruta completa al archivo JSON
json_path = os.path.join(current_dir, "messages.json")

# Lee el archivo JSON
with open(json_path, "r") as f:
    messages = json.load(f)

# This endpoint will be used to translate the messages
@router.get("/{filter}", status_code=200)
async def filtered_messages(filter: str, language: str = "english"):
    '''
    Return all the messages in the specified language and filter.

    Parameters:

        - filter: str. The filter parameter specifies the filtering criterion.

        - language: str = "english". The language parameter specifies the language of the messages.

    Returns:

        - messages: dict. The messages dictionary containing the filtered messages.

    '''


    # If the filter is "all" return all the messages
    if filter == "all":
        return messages[language]
    # If the filter is not "all" return the message with the filter
    else:
        if filter not in messages[language]:
            raise HTTPException(status_code=404, detail="the filter does not exist")

        return messages[language][filter]
