from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

def api_data(request):
    data = {
        'key': 'Sanath'
    }
    return JsonResponse(data)