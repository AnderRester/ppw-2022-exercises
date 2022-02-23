//                      Chapter 3                                //

const chooseTaskCh3 = () => {
    let option = document.getElementById("variant_3").value;
    switch (Number(option)) {
        case 0:
            //                  Task 3.1                                //
            const user = {};
            console.log(user);
            user.name = "John";
            console.log(user);
            user.surename = "Smith";
            console.log(user);
            user.name = "Pete";
            console.log(user);
            delete user.name;
            console.log(user);
            break;
        case 1:
            //                      Task 3.2                               //
            let salaries = {
                John: 100,
                Ann: 160,
                Pete: 130
            }
            const totalSalaryRem = (array) => {
                let sum = 0;
                for (i in array) {
                    sum += array[i];
                }
                return (sum);
            }
            console.log(totalSalaryRem(salaries));
            break;
        case 2:
            //                      Task 3.3                               //
            const menu = {
                width: 200,
                height: 300,
                title: "My menu"
            };

            const multiplyNumeric = (obj) => {
                for (i in menu) {
                    if (Number(menu[i])) {
                        menu[i] = menu[i] * 2;
                    }
                }
            }
            multiplyNumeric(menu);
            console.log(menu);
            break;
        case 3:
            //                     Task 3.4                                 //
            const user1 = {
                name: `User 1`,
                age: 123
            }
            let user2 = {
                name: ``,
                age: 0
            }
            console.log(user2);
            user2 = user1;
            console.log(user2);
            user2.name = "User 2";
            console.log(user2);
            user2.age = 321;
            console.log(user2);
            break;
        case 4:
            //                          Task 3.5                              //
            let person = {
                name: `Person`,
                age: 123,
                salary: 1542.33,
                contacts: {
                    phone: `112`,
                    email: 'email@domain.com'
                },
                address: `Moldova`
            }
            console.log(person);
            person.contacts.phone = `+37312345678`;
            console.log(person);
            delete person.address;
            console.log(person);
            break;
        case 5:
            const pointArray = [{
                    x: 1,
                    y: 2
                },
                {
                    x: 3,
                    y: 4
                },
                {
                    x: null,
                    y: 4
                },
                {
                    x: 3,
                    y: undefined
                }
            ];
            const reconstructArray = (array) => {
                for (i in array) {
                    for (key in array[i]) {
                        console.log(array[i][key]);
                        //console.log(typeof(array[i][key]));
                        if (!Number(array[i][key])) {
                            array.splice(i, 1);
                        }
                    }
                }
                return array;
            }
            console.log(reconstructArray(pointArray));
            break;
        case 6:
            const personSix = {
                name: `Person`,
                age: 123,
                salary: 1542.33,
                contacts: {
                    phone: `112`,
                    email: 'email @domain.com'
                },
                address: `Moldova`,
                get infoName() { console.log(this.name); },
                get infoAge() { console.log(this.age); },
                get infoSalary() { console.log(this.salary); },
                get infoContacts() { console.log(this.contacts); },
                get infoPhone() { console.log(this.contacts.phone); },
                get infoemail() { console.log(this.contacts.email); }
            }
            personSix.infoName;
            personSix.infoAge;
            personSix.infoSalary;
            personSix.infoContacts;
            personSix.infoPhone;
            personSix.infoemail;
            break;
        case 7:
            const weekDays = {
                "Mo": "Понедельник",
                "Tu": "Вторник",
                "We": "Среда",
                "Th": "Четверг",
                "Fr": "Пятница",
                "Sa": "Суббота",
                "Su": "Воскресенье",
            }
            console.log(weekDays);
            const weekDaysVocabularyRO = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Simbata", "Duminica"];
            const weekDaysVocabularyEN = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            const translate = (array, arrayVocabulary) => {
                const weekDaysAssistant = {
                    "Mo": "",
                    "Tu": "",
                    "We": "",
                    "Th": "",
                    "Fr": "",
                    "Sa": "",
                    "Su": "",
                }
                let i = 0;
                for (key in weekDaysAssistant) {
                    weekDaysAssistant[key] = arrayVocabulary[i];
                    i++;
                }
                return array = weekDaysAssistant;
            };
            console.log(translate(weekDays, weekDaysVocabularyRO));
            console.log(translate(weekDays, weekDaysVocabularyEN));
            break;
        case 8:
            const weekDaysEight = {
                "Luni": "Mo",
                "Marti": "Tu",
                "Miercuri": "We",
                "Joi": "Th",
                "Vineri": "Fr",
                "Simbata": "Sa",
                "Duminica": "Su"
            };
            console.log(weekDaysEight);
            // const objTransform = (array) => {
            //     for (key in array) {
            //         return array[key].reverse();
            //     }
            // }
            //.map(key=> ({key:key,id:obj[key].id}) );
            //.reduce((key) => (array[key.key] = key.value, array), {})
            const objTransform = (array) => Object.assign({}, ...(Object.keys(array).reverse().map(key => ({ sName: array[key], fName: key })).map(item => ({
                [item.sName]: item.fName
            }))));
            //const objTransform = (array) => Object.keys(array).reduce((ret, key) => (ret[array[key]] = key));
            console.log(objTransform(weekDaysEight));
            break;
        case 9:
            const personTenMark1 = {
                name: `Person Mark 1`,
                age: 123,
                salary: 1542.33,
                contacts: {
                    phone: `112`,
                    email: 'email@domain.com'
                },
                address: `Moldova`
            }
            const personTenMark2 = {
                name: `Person Mark 2`,
                age: 124,
                salary: 1542.33,
                contacts: {
                    phone: `122`,
                    email: 'email@domain.md'
                },
                address: `Moldova`
            }
            const Intersection = (personTenMark1, personTenMark2) => {
                const PersonTenMark3 = {}
                for (key in personTenMark1) {
                    for (subKey in personTenMark1[key]) {
                        if (personTenMark2[key] == personTenMark1[key]) {
                            PersonTenMark3[key] = personTenMark1[key];
                        } else if (personTenMark1[key][subKey] == personTenMark2[key][subKey]) {
                            PersonTenMark3[key][subKey] = personTenMark1[key][subKey];
                        }
                    }
                }
                console.log(PersonTenMark3);
            }
            Intersection(personTenMark1, personTenMark2);
            break;
    }
}