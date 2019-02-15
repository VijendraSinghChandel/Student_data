import json
import traceback
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from collegeapp.models import College

from collegeapp.models import Student

@csrf_exempt
def student(request):
    data={}
    College_list=College.objects.all()
    data={'College_list':College_list}
    return render(request,'studentapp/student.html',data)


@csrf_exempt
def save_student(request):
    print(request.POST)
    try:
        Student(
            name=request.POST.get('name'),
            city=request.POST.get('city'),
            contact_no=request.POST.get('Contact-no'),
            branch=request.POST.get('Branch'),
            gender=request.POST.get('gender'),
            college=College.objects.get(id=request.POST.get('college_list_id'))
            ).save()
        data = {'success': 'send'}
    except Exception, e:
        print e,str(traceback.print_exc())
        data = {'success': 'error'}
    return HttpResponse(json.dumps(data), content_type='application/json')


