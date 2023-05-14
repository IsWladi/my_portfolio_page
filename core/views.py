from django.shortcuts import render
from django.utils import translation
import requests
import logging
# Create your views here.

logger = logging.getLogger(__name__)

def index(request):
    current_language = translation.get_language()
    logger.warning(f'Current language: {current_language}')
    # if current_language == 'es':
    #     response = requests.get('http://127.0.0.1:9000/translate/all/?language=es')
    #     data = response.json()
    #
    # else:
    #     response = requests.get('http://127.0.0.1:9000/translate/all/?language=en')
    #     data = response.json()

    return render(request, 'index.html')
