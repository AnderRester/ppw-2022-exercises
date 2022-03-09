//                      Example
//document.body.style.background = 'red';


//                          Task 1                           //

// document.addEventListener("DOMContentLoaded", () => {
//     alert("DOM ready!");
//     document.body.style.background = 'red'
// });



//document.getElementsById("colorToOrange").addEventListener("onclick", colorToOrange);

//          Task 3 

// colorToOrange = () => {
//     document.body.style.background = 'orange';
// }

function colorToOrange() {
    document.body.style.background = 'orange';
}

//let animTime = setInterval(animTest, 5)

// const animTest = () => {
//     let colorPulse = document.getElementById("body");
// }
const chooseTaskCh4 = () => {
    let option = document.getElementById("variant_4").value;
    switch (Number(option)) {
        case 0:
            console.log("Is commented");
            break;
        case 1:
            //                        Task 2                              //
            setTimeout("document.body.style.background = 'green'", 3000);
            break;
        case 2:
            //                        Task 3                            //
            console.log("function is upper");
            break;
        case 3:
            // let ol = document.createElement('ol').id = "ol";
            // let liFirst = document.createElement('li');
            function reconstructPage() {
                const foundation = document.getElementById("listDOM");
                for(let i = 1; i <= 20; i++){
                    setTimeout(function(){
                        let listElement = document.createElement("li");
                    listElement.innerHTML = `Element ${i}`;
                    if(i%2==0){
                        listElement.style.background = "green";
                        foundation.append(listElement);
                    } else {
                        listElement.style.background = "violet";
                        foundation.append(listElement);
                    }
                    }, 2000*i);
                }
            }
            reconstructPage();
            break;
        case 4:
            const settingsContInput = document.getElementById("settingsContField");
            settingsContInput.setAttribute("readonly", true);
            const settingsContMinus = document.getElementById("settingsContMinus");
            const settingsContPlus = document.getElementById("settingsContPlus");
            settingsContMinus.addEventListener("click", function() {
                if(settingsContInput.value >= 1) {
                    settingsContPlus.disabled =  false;
                    return settingsContInput.value = +settingsContInput.value-1;
                } else {
                    settingsContMinus.setAttribute("disabled", true);
                }
            });
            settingsContPlus.addEventListener("click", function() {
                if(settingsContInput.value < 9) {
                    settingsContMinus.disabled =  false;
                    return settingsContInput.value = +settingsContInput.value + 1;
                } else {
                    settingsContPlus.setAttribute("disabled", true);
                }
            });
            break;
        case 5:

            break;
        case 6:

            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
    }
}