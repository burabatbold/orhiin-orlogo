//Delgetstei ajillah Control
var uiController = (function(){

})();
// Sanhvvtei ajillah kontroller
var financeController = (function(){

})();


var appController = (function(fnCtrl,uiCtrl){

  var ctrlAdditem = function(){
    console.log("Sainuu?");
  }

  document.querySelector('.add__btn').addEventListener('click',function(){
    ctrlAdditem();
  });
    document.addEventListener('keypress',function(event){
    if(event.keyCode === 13){
      ctrlAdditem();
    }
  });
})(financeController,uiController);

