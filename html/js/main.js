$(function(){
		$("#postForm").click( function(){

      var timeSelIndex = document.getElementById("delay_time").value;
      var contentSelIndex = document.getElementById("contents").value;
      // var url = 'http://172.24.245.214:8080/api/check';
      var url = 'http://172.24.245.214:8080/api/user_data';
      var d_time;

			var jsondata =  {
        msg: $(".post #msg").val(),
        delay_time: timeSelIndex,
        contents: contentSelIndex,
				id: $(".post #user_id").val()
			};
      $.ajax({
       type: 'post',
       url: url,
       data: jsondata,
       dataType:'json',
       success: function(json_data) {
         console.log(json_data);
      },
      error: function() {
          alert('Server Error. Please try again later.');
      },
      complete: function() {
      }
    })
	});
})
