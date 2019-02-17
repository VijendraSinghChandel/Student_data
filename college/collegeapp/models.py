import django
from django.db import models
IS_DELETED = (
     (True, True),
     (False, False),
)


class College(models.Model):
    college_Name = models.CharField(max_length=500, blank=False)
    street = models.CharField(max_length=100, blank=False)
    city = models.CharField(max_length= 500,blank=False)

    def __unicode__(self):
        return unicode(self.college_Name)


class Student(models.Model):
    name = models.CharField (max_length=500,blank=False)
    city = models.CharField(max_length=500, blank=False)
    contact_no = models.CharField(max_length=12,blank=False)
    branch = models.CharField(max_length=100, blank=False)
    gender =models.CharField(max_length=100, blank=False,null=True)
    college = models.ForeignKey (College,null=True, blank=False)


    def __unicode__(self):
        return unicode(self.name)