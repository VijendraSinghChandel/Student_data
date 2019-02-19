from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^studentform',views.student),
    url(r'^save-student',views.save_student),
    url(r'^get_student_data/(?P<student_id>\d+)/$','studentapp.views.get_student_detail',name='get_student_detail'),
]
