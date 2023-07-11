from django.shortcuts import render
from django.utils import translation
import requests
import logging
import json
from django.conf import settings
from .functions.create_html import create_stacks, create_projects
# Create your views here.

logger = logging.getLogger(__name__)


def index(request):
    # detect language
    current_language = request.META.get('HTTP_ACCEPT_LANGUAGE')
    # logger.warning(f'Current language: {current_language}')
    data = False

    # Get all the languages available in the API
    languages = requests.get('http://api_dev:80/translations/languages/')
    selected_language = "english"  # full name of the language, by default english
    # languages converted to dictionary
    languages = languages.json()
    if current_language:
        for i in range(0, len(current_language.split(','))):
            temp_lang = current_language.split(',')[i]
            # get the first two letters of the language code
            temp_lang = temp_lang[:2]
            if temp_lang in languages:
                selected_language = languages[temp_lang]
                break

    response = requests.get(
        f'http://api_dev:80/translations/all/?language={selected_language}')
    data = response.json()
    # generate the html for the stack section
    stacksHtml:List = create_stacks(data,settings.STATIC_URL)
    # generate the html for the projects section
    projectsHtml:List = create_projects(data,settings.STATIC_URL)

    context = {"messages": data, "stacksHtml": stacksHtml, "projectsHtml": projectsHtml}
    return render(request, 'index.html', context)
