$(function(){
    $(".box_intro .btn_setting").click(function(){
        $(".box_intro").slideUp(); 
        loadDataFn() //json데이터 호출 함수 
    });
    var completeData //json 데이터를 담는 변수
    var seatSave = []; //선택된 자리 정보를 담는 배열
    var seatPriceSave = 0;


    function loadDataFn(){
        $.ajax({
            url:"js/data.json",
            dataType:"json",
            success:function(result){
                completeData = result.seatInfo;
                settingSeatFn(); //자리세팅함수호출
            }
        });
    }
    //자리셋팅함수
    function settingSeatFn(){ 
        //선택된 정보 초기화
        $(".txt_info_number").text("");
        $(".txt_info_total").text("0");

        for(var i=0; i<completeData.length; i++){
          //데이터 파싱
          var n =completeData[i].name;
          var p = completeData[i].price;
          var r = completeData[i].reserve;

          $(".section.reservation > ol").append("<li class='unit'><button data-price='"+p+"' "+r+">"+n+"</button></li>")
        }

        $(".section.reservation").slideDown(); //자리선택 노출
 
        $(".section.reservation .unit button").click(function(){
            $(this).toggleClass("select");
            seatSave = []; //배열 초기화
            seatPriceSave = 0;
         //select라는 클래스를 갖고 있는 정보만 저장하는 for 문 

            for(var i=0; i<completeData.length; i++){
               var boo = $(".section.reservation .unit").eq(i).find("button").hasClass("select");
               if(boo){ 
                   seatSave.push(completeData[i].name); 
                   seatPriceSave += Number(completeData[i].price); //선택좌석 가격 합산
               }
            }
           console.log(seatSave, seatPriceSave);

           $(".txt_info_number").text(seatSave);
           $(".txt_info_total").text(seatPriceSave);
        });

        $(".btn_submit").click(function(){
            $(".section.reservation").slideUp();
            $(".section.complete").slideDown()();   

            $(".txt_number").text(seatSave);
            $(".txt_price >strong").text(seatPriceSave); 
        });

        $(".section.complete .btn_reset").click(function(){
            $(".section.complete").slideUp(); //완료 div를 숨김 
            $(".box_intro").slideDown();  //첫화면 div를 보여줌
            $(".section.reservation >ol .unit").remove(); //json데이터 로드후 셋팅된 자리 li들을 삭제 

           
        });
    };
})

//카페체크