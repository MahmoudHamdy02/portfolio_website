from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("projects/", views.projects, name="projects"),
    path("contact/", views.contact, name="contact"),
    path("thankyou/", views.thankyou, name="thankyou"),
    path("games/", views.games, name="games"),
    path("snake/", views.snake, name="snake"),
]
