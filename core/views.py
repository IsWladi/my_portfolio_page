from django.shortcuts import render
from django.utils import translation
import requests
import logging
# Create your views here.

logger = logging.getLogger(__name__)


def index(request):
    # detect language
    current_language = request.META.get('HTTP_ACCEPT_LANGUAGE')
    logger.warning(f'Current language: {current_language}')
    data = False

    # Get all the languages available in the API
    languages = requests.get('http://api_dev:80/translations/languages/')
    selected_language = "english" # full name of the language, by default english
    # languages converted to dictionary
    languages = languages.json()
    if current_language:
        for i in range(0, len(current_language.split(','))):
            temp_lang = current_language.split(',')[i]
            temp_lang = temp_lang[:2] # get the first two letters of the language code
            if temp_lang in languages:
                selected_language = languages[temp_lang]
                break

    response = requests.get(f'http://api_dev:80/translations/all/?language={selected_language}')
    data = response.json()
    context = {"messages": data}
    return render(request, 'index.html', context)
