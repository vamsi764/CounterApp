let counterValue=0;
        function incrementCounter()
        {
            counterValue++;
            document.getElementById("display").textContent=counterValue;
        }
        function decrementCounter()
        {
            if(counterValue>0){
                counterValue--;
            }
            else{
                counterValue=0;
            }
            document.getElementById("display").textContent=counterValue;
        }