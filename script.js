let outputscreen=document.getElementById("screen");
let button = document.querySelector('button')



    function display(num)
        {
            outputscreen.value+=num
            try{
                outputscreen.value=eval(outputscreen.value)

            }
            catch(err)
            {
               
               console.log("invalid");
            }

        }
        function clr()
        {
            outputscreen.value="  "

        }
        function del(){
            outputscreen.value=outputscreen.value.slice(0,-1)
        }
    
        