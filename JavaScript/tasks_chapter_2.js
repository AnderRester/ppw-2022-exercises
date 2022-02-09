//                      Task 2.1                          //

const array = [1, 2, 3, 4, 6, 0];

const chooseTaskCh2 = () => {
    let option = document.getElementById("variant_2").value;
    switch (Number(option)) {
        case 0:
            const chooseSubFunction = +prompt("Введите номер желаемой подфункции (0-4)", 0);
            switch (Number(option)) {
                case 0:
                    for (let i = 0; i < array.length; i++) {
                        alert(array[i]);
                    }
                    break;
                case 1:
                    for (let i in array) {
                        alert(array[i]);
                    }
                    break;
                case 2:
                    for (let i of array) {
                        alert(i);
                    }
                    break;
                case 3:
                    array.forEach(i => alert(i));
                    break;
                case 4:
                    let i = array.map((i) => alert(i));
                    // let i = array.map(function(num) {
                    //     alert(num);
                    // });
                    break;
                }
            break;
        case 1:
            //                      Task 2.2                               //

            const dataBase = [
                first = {
                    name: "First",
                    marks: [2, 2, 7, 5, 2]
                },
                second = {
                    name: "Second",
                    marks: [8, 10, 4, 5, 4]
                },
                third = {
                    name: "Third",
                    marks: [8, 9, 7, 5, 6]
                },
                firth = {
                    name: "Firth",
                    marks: [8, 10, 7, 5, 5]
                },
                fifth = {
                    name: "Fifth",
                    marks: [8, 10, 9, 10, 10]
                }
            ]
            let averageMarks = []

            // for (let i = 0; i < dataBase.length; i++) {
            //     alert(dataBase[i].marks.length);
            // }


            // for (let i = 0; i < dataBase.length; i++) {
            //     unitAverage = Math.Average(dataBase[i].marks.length);
            //     alert(1);
            // }

            let unitAverage = 1;
            const average = () => {
                    for (let i = 0; i < dataBase.length; i++) {
                        for (let a = 0; a < dataBase[i].marks.length; a++) {
                            unitAverage += dataBase[i].marks[a];
                        }
                        averageMarks[i] = unitAverage / dataBase[i].marks.length;
                        return (averageMarks[i]);
                        unitAverage = 0;
                    }
                }
                // average(unitAverage);

            const averageRemastered = () => {
            console.log("Hello, there");
            }
            averageRemastered();

            const sort = () => {
                for (let i = 0; i < dataBase.length; i++) {
                    if (averageMarks[i] < 5) {
                        alert(dataBase[i].name);
                    }
                }
            }
            sort();

            // const sort = () => {
            //     if (unitAverage < 5) {
            //         alert(1);
            //     }
            // }
            break;
        case 2:
            //                      Task 2.3                               //
            break;
        case 3:
            alert(1);
            break;
        case 4:
            alert(1);
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
