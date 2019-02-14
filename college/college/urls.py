from django.conf.urls import include, url
from django.contrib import admin
from collegeapp import url as collegeurl
from studentapp import url as studenturl
from collegeapp import views
urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^collegeapp/', include(collegeurl)),
    url(r'^studentapp/', include(studenturl)),
    url(r'^$', 'collegeapp.views.base'),

]
