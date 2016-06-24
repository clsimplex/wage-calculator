// Simple wage calculator, by Levon Zadravec-Powell 2013.
// If I really wanted to be fancy, I'd take the hard-coded selectors out.
(function($) {
    var timeDelay = 250; // Quarter seconds
    var wage = 9;
    var runningTotal = 0;
    setWage=function(newWage){wage=newWage;}
    resetTotal=function(){runningTotal=0;}
    function adjustTotal(){
	var addedAmount=(wage/3600/4);
	var decimals = 3;
	runningTotal=runningTotal+addedAmount;

	$("#wage").text(runningTotal.toFixed( decimals ));
    }
    main = function(){window.setInterval(adjustTotal,timeDelay);};
})(jQuery);

