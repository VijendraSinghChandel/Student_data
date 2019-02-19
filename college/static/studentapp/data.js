function get_student_data(student_id){
//    student_id = student_id
//    alert(student_id)
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
//                $("input[name=gender]").val(response.gender);
                $("input[name=gender][value=" + response.gender + "]").attr('checked', 'checked');
//                if(response.gender=='Male'){
//                    document.getElementById("male_radio").checked = true;
//                }
//                else if(response.gender=='Female'){
//                    document.getElementById("female_radio").checked = true;
//                }
//                else if(response.gender=='Other'){
//                     document.getElementById("other_radio").checked = true;
//                }
//                document.mainForm.onclick = function(){
//                var gender = document.querySelector('input[name = gender]:checked').value;
//                result.innerHTML =  gender;
//                    }
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


//    $.ajax({
//        type:'POST',
//        url:'/studentapp/get_student_data/',
//        data:$('#student').serialize(),
//        success:function (response)
//        {
////            if (response.success == 'error'){
////                alert('error');
////            }
////            else{
////                alert(response.success);
////            }
//
//            console.log(response);
//            alert(response.success);
//        },
//            error:function (response)
//            {
//            }
//    })
