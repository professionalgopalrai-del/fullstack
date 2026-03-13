


let age = 18;


// switch(expression){
//     case value1:
//         // code block
//         break;
//         case value2:
//             // code block
//             break;
//             case value3:
//                 // code block
//                 break;
//                 default:
//                     // code block
// }

    const prompt = require("prompt-sync")();

    let day = parseInt(prompt("Enter day number(1 t0 7):  ")); 

switch(day){
    case 1 :
    console.log("monday");
        
        break;
        case 2:
        console.log("Tuseday");
            break;
    case 3: 
    console.log ("Wednesday");
         break;
         case 4 :
         console.log ("Thurseday");
            break;
            case 5:
            console.log("Friday");
            break;
                case 6:
                console.log("Saturday");
                    break;
                    case 7:
                    console.log("sunday");
                    break;
                    default:
                        console.log("Invalide day number! please enter between 1 to 7.");
                        
}