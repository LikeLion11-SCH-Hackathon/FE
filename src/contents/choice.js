 // 더블클릭 구분을 위한 변수
 var clickState = null;
 function btn_OnClick(){
  
  // 원클릭 구분
if(clickState == null){
    clickState = setTimeout("btn_OnClick()", 200);
  }else{
   ClearClickState();
   alert("원클릭");
  }
 }
 
 function btn_OnDbClick(){
  ClearClickState();
  alert("더블클릭");
 }
 
 function ClearClickState(){
  clearTimeout(clickState);
  clickState = null;
 }