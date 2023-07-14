from django.shortcuts import render
from django.utils import translation
import requests
import logging
import json
from django.conf import settings
from .functions.create_html import create_stacks, create_projects, create_lang_selector
# for the language
from django.http import JsonResponse
# Create your views here.

logger = logging.getLogger(__name__)

# return only the keys of the languages
def format_languages(languages:dict):
    only_keys = []
    for key in languages:
        only_keys.append(key)
    return only_keys


def save_language(request):
    if request.method == 'POST':
        lenguaje = request.POST.get('language')
        # Hacer lo que desees con el valor del lenguaje en tu vista de Django
        # ...
        logger.warning(f'Current PosteeeeLANGU: {lenguaje}')
        logger.warning(f'Current LANGU: {request.POST}')

        return JsonResponse({'success': True})
    return JsonResponse({'success': False})


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
    stacksHtml: List = create_stacks(data, settings.STATIC_URL)
    # generate the html for the projects section
    projectsHtml: List = create_projects(data, settings.STATIC_URL)

    # get keys of the languages
    formated_languages = format_languages(languages)
    languagesHtml: str = create_lang_selector(formated_languages)

    context = {"messages": data, "stacksHtml": stacksHtml,
               "projectsHtml": projectsHtml, "languagesHtml": languagesHtml}
    return render(request, 'index.html', context)
