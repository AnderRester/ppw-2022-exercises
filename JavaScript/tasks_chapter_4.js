//                      Task 4                                //

//                      Example
//document.body.style.background = 'red';

document.addEventListener("DOMContentLoaded", () => {
    // alert("DOM ready!");
    document.body.style.background = 'red'
  });

setTimeout("document.body.style.background = 'green'", 3000);

document.getElementsById("colorToOrange").addEventListener("click", colorToOrange);

colorToOrange = () => {
    document.body.style.background = 'orange';
}

let animTime = setInterval(animTest, 5)

const animTest = () => {
    let colorPulse = document.getElementById("body");
}

const chooseTaskCh4 = () => {
    let option = document.getElementById("variant_4").value;
    switch (Number(option)) {
        case 0:
            
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            
            break;
        case 4:
            
            break;
        case 5:
            alert(1);
            break;
        case 6:
            alert(1);
            break;
        case 7:
            alert(1);
            break;
        case 8:
            alert(1);
            break;
        case 9:
            alert(1);
            break;
    }
}
