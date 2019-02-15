from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^studentform',views.student),
    url(r'^save-student',views.save_student),
]
