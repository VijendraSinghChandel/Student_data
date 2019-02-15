from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^collegeform',views.college),
    url(r'^save-college', views.save_college),

]
