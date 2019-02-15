function student_save1(){

    $.ajax({
        type:'POST',
        url:'/studentapp/save-student/',
        data:$('#student').serialize(),
        success:function (response)
        {
            if (response.success == 'error'){
                alert('error');
            }
            else{
                alert(response.success );
            }

            console.log(response);
            alert(response.success );
        },
            error:function (response)
            {
            }
    })
}
