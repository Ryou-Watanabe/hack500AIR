// function FormSubmit() {
//   alert("ボタンが押されました");
//
//   var target = document.getElementById("postForm");
//   target.method = "post";
//   target.submit();
// }

$(function(){
		$("#postForm").click( function(){
      // alert("ボタンが押されました");

      var timeSelIndex = document.getElementById("delay_time").selectedIndex;
      var contentSelIndex = document.getElementById("contents").selectedIndex;
			var url = '172.24.245.250:8080/api';
      console.log("hello");

			var jsondata =  {
        msg: $(".post #msg").val(),
        delay_time: timeSelIndex,
        // contents: document.getElementById("contents").selectedIndex,
        contents: contentSelIndex,
				id: $(".post #user_id").val(),
			};

			alert(JSON.stringify(jsondata));

      $.post(url,
		        jsondata,
		        function (result) {
					$("#post textarea").text(''+JSON.stringify(result)+'');
		        },
		        "json"
		    );
		})
	})
