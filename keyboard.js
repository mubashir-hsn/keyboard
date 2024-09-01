let screen = document.getElementById('textarea');
 buttons = document.querySelectorAll('input');
let screenValue = "";

for (item of buttons ){
    item.addEventListener('click' , (e) => {

      buttonText = e.target.innerText;
      console.log('Button Text is ', buttonText);

    // if (  buttonText == 'x'  ){
    //     buttonText = '*';
    //     screenValue += buttonText;
    //     screen.value = screenValue;
    // }

    // else if ( buttonText == 'AC'  ){
    //     screenValue = "" ;
    //     screen.value = screenValue;
    // }

    // else if ( buttonText == 'DEL'  ){
    //    screen.value = screenValue.slice(0 , screen.value.length -1);
    // }

    // else if ( buttonText == '=' ){
    //      screen.value = eval(screenValue);
    // }

    
        screenValue += buttonText;
        screen.value = screenValue;
    
    })
}