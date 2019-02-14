function college_save1(){
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