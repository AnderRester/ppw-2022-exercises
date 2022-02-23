//                      Chapter 2                          //

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

            const dataBase = [{
                    name: "First",
                    marks: [2, 2, 7, 5, 2]
                },
                {
                    name: "Second",
                    marks: [8, 10, 4, 5, 4]
                },
                {
                    name: "Third",
                    marks: [8, 9, 7, 5, 6]
                },
                {
                    name: "Firth",
                    marks: [8, 10, 7, 5, 5]
                },
                {
                    name: "Fifth",
                    marks: [8, 10, 9, 10, 10]
                }
            ]

            let averageMarks = [];
            let findAverage = () => {
                //let averageMarks = dataBase.map(dataBase.marks.reduce((prev, now) => now + prev));
                for (let i = 0; i < dataBase.length; i++) {
                    averageMarks.push({ name: dataBase[i].name, average: ((dataBase[i].marks.reduce((prev, curr) => curr + prev)) / dataBase[i].marks.length) });
                    //alert(dataBase[i].marks);
                }
                console.log(averageMarks);
            }

            findAverage();

            const filter = () => {
                for (let i = 0; i < dataBase.length; i++) {
                    if (averageMarks[i].average < 5) {
                        console.log(dataBase[i].name);
                    }
                }
            }

            filter();

            const sort = () => {
                averageMarks.sort((a, b) => a.average > b.average ? -1 : 1);
                console.log(averageMarks);
            }

            sort();

            const compare = () => {
                let tempAverage = 0;
                for (let i = 0; i < averageMarks.length; i++) {
                    tempAverage += averageMarks[i].average;
                }
                tempAverage = tempAverage / averageMarks.length;

                for (let i = 0; i < averageMarks.length; i++) {
                    if (averageMarks[i].average > tempAverage) {
                        console.log(averageMarks[i]);
                    }
                }
            }

            compare();

            break;
        case 2:
            //                      Task 2.3                               //

            const styles = ["Джаз", "Блюз"];

            styles.push("Рок-Н-Ролл");
            console.log(styles);

            styles.splice((styles.length / 2), 1, "Классика");
            console.log(styles);

            console.log(styles.shift());

            styles.unshift("Рэп", "Регги");

            console.log(styles);
            break;
        case 3:
            //                     Task 2.4                                 //
            const arrayOfInfo = [];

            const sumInputNumbers = () => {
                enteredInfo = +prompt("Введите число или цифру", 0);

                while ((enteredInfo / enteredInfo) == 1 || enteredInfo == 0 && enteredInfo != null) {
                    enteredInfo = +prompt("Введите число или цифру", 0);
                    if (enteredInfo / enteredInfo === 1 || enteredInfo == 0) {
                        arrayOfInfo.push(enteredInfo);
                    } else {
                        console.log("Нарушение условий работы.")
                        console.log(arrayOfInfo.reduce((a, b) => a + b));
                        break;
                    }
                }
            }
            sumInputNumbers();

            break;
        case 4:
            //                          Task 2.5                              //
            const exArray = [1, 2, 3];
            const convert = (fn, array) => array.map(fn);
            const square = (x) => x * x;
            console.log(convert(square, exArray));
            break;
        case 5:
            const arraySix = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            arraySix.splice(4, 1, 0, 0, 0);
            console.log(arraySix);
            break;
        case 6:
            const arraySeven = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const extract = (array) => {
                const a = +prompt("enter left barrier", 0);
                const b = +prompt("enter right barrier", 0);
                return array.slice(a, b + 1);
            }
            console.log(extract(arraySeven));
            break;
        case 7:
            const colors = ["red", "green", "blue"];
            const color = prompt("enter a color", "red");
            // const checkColor = () => {
            //     const color = prompt("enter a color", "red");
            //     return colors.find(item => color == item){

            //     });
            // }
            // Beta-v
            //const checkColor1 = () => colors.find(item => color == item);
            const checkColor = (colors) => colors.indexOf(colors.find(item => color == item));
            console.log(checkColor());
            break;
        case 8:
            const arrayNine = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];
            const filterNine = (arrayNine) => arrayNine.filter(a => Number(a) && (a => 0) && (a <= 9));
            console.log(filterNine(arrayNine));
            break;
        case 9:
            const arrayTen = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];
            console.log(arrayTen);
            const uniqueSorted = (array) => {
                array.sort((a, b) => a - b);
                //console.log(array);
                return array.filter((item, index) => array.indexOf(item) === index);
            };
            console.log(uniqueSorted(arrayTen));
            break;
    }
}