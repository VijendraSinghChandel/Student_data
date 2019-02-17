function college_save1(){
var flag=true;
if ($('#college_Name').val() == ''){
    flag=false;
    $("#college_name_error").css("display","block");
    }
else{
     $("#college_name_error").css("display","none");
}

if ($('#street').val() == ''){
    flag=false;
    $("#street_error").css("display","block");
    }
else{
     $("#street_error").css("display","none");
}
if ($('#city').val() == ''){
    flag=false;
    $("#city_error").css("display","block");
    }
else{
     $("#city_error").css("display","none");
}


if (flag){
     $.ajax({
        type:'POST',
        url:'/collegeapp/save-college/',
        data: $('#formid').serialize(),
        success:function (response)
        {
            console.log (response);
            alert(response.success );
        },
            error:function (response)
            {
            }

    })
    }
else{
    return false;
    }


}

//
//function college_save1(){
//    $.ajax({
//        type:'POST',
//        url:'/collegeapp/save-college/',
//        data: $('#formid').serialize(),
//        success:function (response)
//        {
//            console.log (response);
//            alert(response.success );
//        },
//            error:function (response)
//            {
//            }
//
//    })
//}
$(document).ready(function () {
$('#dtBasicExample').DataTable();
$('.dataTables_length').addClass('bs-select');
});