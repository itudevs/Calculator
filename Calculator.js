let btn=document.querySelectorAll("button");
let Output=document.querySelector(".Output");
let Calculate={Numbers:[],
Operations:"",
cClear:0,
Outputs:"",
more:0,
Clear:false
};
//Event to allow each click to display the value
btn.forEach(btn=>{
    let total=0;
    btn.addEventListener("click",()=>{
     let text=btn.textContent;
     if (text==="CE")
     {
        Output.innerText=" ";
       //remove any elements inside the array
        Calculate.Numbers=[];
        total=0;
        Calculate.Operations="";
        Calculate.Outputs="";
        Calculate.Clear=false;
        Calculate.cClear=0;
        Calculate.more=0;
     }
     //aquire operation needed to be done 
     else if ((text==="+" || text==="/" || text==="x" || text==="-" ) && Calculate.cClear===0){
     Calculate.Operations=text;
     Calculate.cClear=1;
     Calculate.more
     Calculate.Clear=true;
     }
     else if (isFinite(text) || text==="=") {
        // Check if the user is entering digits after selecting an operation
        if (Calculate.Operations !== "") {
            if (Calculate.Outputs === "") {
                // Start entering a new number
                Calculate.Outputs = text;
                Output.innerText = Calculate.Outputs;
                Calculate.Clear=false;
                Calculate.cClear=1;
                Calculate.more+=1;
            } else {
                // Continue appending digits to the current number
                if (text==="="){
                 
                    Calculate.Numbers.push(Calculate.Outputs)}
                if (Calculate.Clear===true)
                {
                    Calculate.Numbers.push(Calculate.Outputs);
                    Calculate.Outputs="";
                    Calculate.Clear=false;
                }
                
            }
           
            if (Calculate.more===0) {
                Calculate.Outputs += text;
                Output.innerText = Calculate.Outputs;
            } 
            Calculate.more=0;
            // Update display
        } else {
            // No operation selected yet, continue forming the first number
            Calculate.Outputs += text;
            Output.innerText = Calculate.Outputs;
        }
    }
    
    
     switch (Calculate.Operations) {
        case "x":
            total=1;
             for (let i = 0; i < Calculate.Numbers.length; i++) {
                total*=Calculate.Numbers[i];  
             }
            break;
            case "/":
                    total=Calculate.Numbers[0]/Calculate.Numbers[1];  
                break;
                case "-":
                    total=Calculate.Numbers[0]-Calculate.Numbers[1];
                    break;
                    case "+":
                        total=Calculate.Numbers[0]+Number(Calculate.Numbers[1]);
                        break;
        default:
            break;
     }


     //output final value;
     if (text==="="){
        Output.innerText=total;
        Calculate.Operations="";
        Calculate.Outputs="";
        Calculate.cClear=0;
        Calculate.Numbers=[];
        Calculate.Numbers.push(total);
        total=0;
     }
     
    });
 });
