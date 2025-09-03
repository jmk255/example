$(function(){//document.ready
  //#works의 top위치값을 변수에 할당
  const wTop = $("#works").offset().top;
  console.log(wTop)

  //스크롤을 조금(50)이라도 이동시키면 top버튼이 화면에 표시되고 스크롤 이동값이 0이면 top버튼이 화면에서 사라지게 만들어 줍니다
  
  $(window).scroll(function(){//스크롤 이벤트 발생시
    //y축으로 스크롤 이동값을 구해서 st변수에 할당
    let st = $(window).scrollTop()
    //스크롤 이동값이 50보다 크면
    if(st > 50){
      //top버튼을 화면에 표시
      $(".top").css("display","block")
    } else {//스크롤 이동값이 50보다 작으면
      //top버튼을 화면에서 제거
      $(".top").css("display","none")
    }

    if(st > wTop){//스크롤이동값이 works의 top위치를 넘어가면 실행
      //.member요소에 on클래스를 추가
      $("#about .member").addClass("on");
    }else{
      //스크롤 이동값이 works의 top위치를 넘어가지 않으면 .member요소에 on클래스를 제거
      $("#about .member").removeClass("on");
    }
  })
  
});