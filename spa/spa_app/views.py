from django.shortcuts import render
from django.http import HttpResponse, Http404
# Create your views here.

texts = ["<p>Page 1</p>", "<p>Page 2</p>", "<p>Page 3</p>"]

def index(request):
    return render(request, 'index.html')

def section(request, section):
    if 1 <= section <= 3:
        return HttpResponse(texts[section - 1])
    else:
        raise Http404("No such section")