from django.http import HttpResponse
import time
from .models import PageCount
from django.shortcuts import render
from pyfiglet import Figlet

# Create your views here.

def index(request):
    row, create = PageCount.objects.get_or_create(page='index')
    row.count += 1
    row.save()
    message = "Hello, visitor #" + str(row.count) + " at " + time.strftime("%c")
    f = Figlet()
    bigger = f.renderText(message)
    return HttpResponse("<pre>" + bigger + "</pre>")

def fib(request):
    row, create = PageCount.objects.get_or_create(page='fib')
    row.count += 1
    row.save()
    return render(request, 'hello/index.html', {'row': row})
