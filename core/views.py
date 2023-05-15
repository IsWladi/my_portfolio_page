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
    # get data from api with specified language
    if current_language:
        first_lang = current_language.split(',')[0]
        if first_lang.startswith('es'):
            response = requests.get('http://api_dev:80/translate/all/?language=es')
            data = response.json()
        elif first_lang.startswith('en'):
            response = requests.get('http://api_dev:80/translate/all/?language=en')
            data = response.json()
    # get data from api in english if language is not detected(in case I have more languages in the future)
    else:
        response = requests.get('http://api_dev:80/translate/all/?language=en')
        data = response.json()
    context = {"messages": data}
    return render(request, 'index.html', context)
