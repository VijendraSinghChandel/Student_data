function student_save1(){
var flag=true;
if ($('#name').val() == ''){
    flag=false;
    $("#name_error").css("display","block");
    }
else{
     $("#name_error").css("display","none");
}

if ($('#contact_no').val() == ''){
    flag=false;
    $("#contact_error").css("display","block");
    }
else{
     $("#contact_error").css("display","none");
}

alert($('#college_list_id').val())
if ($('#college_list_id').val() == ''){
    flag=false;
    $("#college_error").css("display","block");
    }
else{
     $("#college_error").css("display","none");
}
if ($('#city').val() == ''){
    flag=false;
    $("#city_error").css("display","block");
    }
else{
     $("#city_error").css("display","none");
}

if ($('#branch').val() == ''){
    flag=false;
    $("#branch_error").css("display","block");
    }
else{
     $("#branch_error").css("display","none");
}
if ($('#gender').val() == ''){
    flag=false;
    $("#gender_error").css("display","block");
    }
else{
     $("#gender_error").css("display","none");
}



if (flag){
    $.ajax({
        type:'POST',
        url:'/studentapp/save-student/',
        data:$('#student').serialize(),
        success:function (response)
        {
//            if (response.success == 'error'){
//                alert('error');
//            }
//            else{
//                alert(response.success);
//            }

            console.log(response);
            alert(response.success);
        },
            error:function (response)
            {
            }
    })
}
}