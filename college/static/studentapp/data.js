function get_student_data(student_id){
        $.ajax({
        type:'GET',
        url:'/get-student-detail/',
        data : {'student_id':student_id},
        success:function (response)
        {
            if (response.success == 'true'){
                $("#name_modal").val(response.name);
                $("#city_modal").val(response.city);
                $("#contact_no_modal").val(response.contact_no);
                $("#college_list_id_modal").val(response.college_list_id);
                $("#branch_modal").val(response.Branch);
                $("input[name=gender][value=" + response.gender + "]").attr('checked', 'checked');

            }
            else{
                alert(response.success);
            }

            console.log(response);
        },
            error:function (response)
            {
            }
    })

}

function update_student_data(student_id){
        $.ajax({
        type:'POST',
        url:'/update-student-detail/',
        data : {'student_id':student_id},
        success:function (response)
        {
           console.log(response);
        },
            error:function (response)
            {
            }
    })

}

function validate_data(){
var flag=true;
if ($('#name_modal').val() == ''){
    flag=false;
    $("#name_error").css("display","block");
    }
else{
     $("#name_error").css("display","none");
}


if ($('#contact_no_modal').val() == ''){
    flag=false;
    $("#contact_error").css("display","block");
    }
    else{
         $("#contact_error").css("display","none");
         x= $('#contact_no_modal').val();
         filter = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
         if (!filter.test(x)) {
             flag=false;
             $("#contact_pattern_error").css("display","block");}
         else{
             $("#contact_pattern_error").css("display","none");
}}


if ($('#college_list_id_modal').val() == ''){
    flag=false;
    $("#college_error").css("display","block");
    }
else{
     $("#college_error").css("display","none");
}



if ($('#city_modal').val() == ''){
    flag=false;
    $("#city_error").css("display","block");
    }
else{
     $("#city_error").css("display","none");
}



if ($('#branch_modal').val() == ''){
    flag=false;
    $("#branch_error").css("display","block");
    }
else{
     $("#branch_error").css("display","none");
}


if ($('#gender_modal').val() == ''){
    flag=false;
    $("#gender_error").css("display","block");
    }
else{
     $("#gender_error").css("display","none");
}


}
