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
                let li = document.getElementsByClassName('');
                for (let i = 0; i < 20; i++) {
                    // let fragment = new DocumentFragment();
                    // let li = document.createElement('li');
                    // li.append(i);
                    // // ol_name.append('li').innerHTML = `Элемент {i}`;
                    // fragment.append(li);
                    //setTimeout(() => $(".listDOM").prepend(`<li id="list">${i}<li>`) = "#e7e7e7", 2000);

                    //$("#sub4Chapter").prepend("<p>Test</p>");
                }
            }
            sub4Chapter.append(reconstructPage());
            // reconstructPage();

            break;
        case 4:

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