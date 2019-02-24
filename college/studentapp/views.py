import json
import traceback
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from collegeapp.models import College
from collegeapp.models import Student


def modal (request):
    return render(request,'studentapp/student_dat_modal.html')


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



@csrf_exempt
def get_student_detail(request):
    print(request.GET)
    try:
        student_obj = Student.objects.get(id=request.GET.get('student_id'))
        data = {'success': 'true','name':student_obj.name,'city':student_obj.city,'contact_no':student_obj.contact_no,'Branch':student_obj.branch,'college_list_id':student_obj.college.id,'gender':student_obj.gender,'student_id':student_obj.id}
        print data
    except Exception, e:
        print e,str(traceback.print_exc())
        data = {'success': 'false'}
    return HttpResponse(json.dumps(data), content_type='application/json')



@csrf_exempt
def update_student_detail(request):
    print(request.POST)
    try:
        student=Student.objects.get(id=request.POST.get('id'))
        student.name=request.POST.get('name')
        student.city=request.POST.get('city')
        student.contact_no=request.POST.get('contact-no')
        student.branch=request.POST.get('Branch')
        student.gender=request.POST.get('gender')
        student.college=College.objects.get(id=request.POST.get('college_list_id'))
        student.save()
        data = {'success': 'send'}
    except Exception, e:
        print e, str(traceback.print_exc())
        data = {'success': 'error'}
    return HttpResponse(json.dumps(data), content_type='application/json')
