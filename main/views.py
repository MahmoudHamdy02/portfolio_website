from django.shortcuts import render
from django.http import HttpResponse, request
from django.core.mail import send_mail
from django.conf import settings
from .models import Emails
# Create your views here.

def home(response):
    return render(response, "main/home.html", {})
def projects(response):
    return render(response, "main/projects.html", {})
def games(response):
    return render(response, "main/games.html", {})
def snake(response):
    return render(response, "main/snake.html", {})
def contact(response):
    if response.method == 'POST':
        name = response.POST.get('name')
        email = response.POST.get('email')
        message = response.POST.get('message')
        body = '''
        New Message from {} at {},
        
        
        {}
        '''.format(name, email, message)
        if len(email) == 0:
            return render(response, "main/contact.html", {'error':"Email can't be blank!", 'email':email, 'name':name, 'message':message})
        elif len(name) == 0 or name.isspace():
            return render(response, "main/contact.html", {'error':"Name can't be blank!", 'email':email, 'name':name, 'message':message})
        elif len(message) == 0 or message.isspace():
            return render(response, "main/contact.html", {'error':"Message can't be blank!", 'email':email, 'name':name, 'message':message})
        else:
            send_mail('New Django Message', body, '', [settings.RECIPIENT_ADDRESS])
            email_object = Emails(name=name,email=email,message=message)
            email_object.save()
            return render(response, "main/thankyou.html", {})
    return render(response, "main/contact.html", {})
def thankyou(response):
    return render(response, "main/thankyou.html", {})
