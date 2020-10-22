$(function(){
    init(); //임시 호출
});

//초기 셋팅 함수
function init(){
    //풀페이지 플러그인 호출
    $(".fullpage").fullpage({
        sectionsColor:["#fff","#eaeef2","#b6e4fe", "#e2dcd4","#fff"],
        navigation:true,
        navigationTooltips:["MAIN","PROFILE","SKILL","PORTFOLIO","CONTACT"],
        anchors:["page1","page2","page3","page4","page5"],
        scrollngSpeed:1500,
    });
};

// $(function(){

// });