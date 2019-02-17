import json
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from .models import College, Student


def base(request):
    return render(request,'base.html')

def datatable(request):
    students = Student.objects.all()
    data={'students':students}
    return render(request,'datatables.html',data)


def college(request):
    return render(request,'collegeapp/college.html')


@csrf_exempt
def save_college(request):
    print(request.POST)
    College(
        college_Name=request.POST.get('college_Name'),
        street=request.POST.get('street'),
        city=request.POST.get('city')
    ).save()
    data = {'success': 'send'}
    return HttpResponse(json.dumps(data), content_type='application/json')
