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

      var timeSelIndex = document.getElementById("delay_time").value;
      // var contentSelIndex = document.getElementById("contents").selectedIndex;
      var contentSelIndex = document.getElementById("contents").value;
      // var url = 'http://172.24.245.250:8080/api';
      var url = 'http://172.24.245.214:8080/api';
      var d_time;
      console.log("hello");

			var jsondata =  {
        msg: $(".post #msg").val(),
        delay_time: timeSelIndex,
        // contents: document.getElementById("contents").selectedIndex,
        contents: contentSelIndex,
				id: $(".post #user_id").val()
			};
      console.log("hello2");

			alert(JSON.stringify(jsondata));

      // $.post(url,
		  //       jsondata
		  //     //   function (result) {
			// 		// $("#post textarea").text(''+JSON.stringify(result)+'');
		  //     //   },
		  //       // "json"
		  //   );
      $.ajax({
       type: 'post',
       url: url,
       data: JSON.stringify(jsondata),
       dataType:'json',
       success: function(json_data) {      // 成功時の処理
          return;
      },
      error: function() {                 // HTTPエラー時の処理
          alert('Server Error. Please try again later.');
      },
      complete: function() {              // 完了時の処理
      }
    });
	});
})
