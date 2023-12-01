let grade1;
let grade2;
let grade3;
let grade4;
let grade5;

let excellentNumber = 0;
let goodNumber = 0;
let poorNumber = 0;

let poorSurnames = new Array();
let arrayElement = 0;

document.getElementById('Remember').onclick = function(){
    grade1 = document.getElementById('Grade1').value;
    grade2 = document.getElementById('Grade2').value;
    grade3 = document.getElementById('Grade3').value;
    grade4 = document.getElementById('Grade4').value;
    grade5 = document.getElementById('Grade5').value;

    if(document.getElementById('Surname').value != "") {
        if((grade1 >= 2 && grade1 <= 5) && (grade2 >= 2 && grade2 <= 5) && (grade3 >= 2 && grade3 <= 5) && (grade4 >= 2 && grade4 <= 5) && (grade5 >= 2 && grade5 <= 5)) {
            if(grade1 == 5 && grade2 == 5 && grade3 == 5 && grade4 == 5 && grade5 == 5) {
                excellentNumber++;
            }
            else if((grade1 >= 3 && grade1 <= 5) && (grade2 >= 3 && grade2 <= 5) && (grade3 >= 3 && grade4 <= 5) && (grade4 >= 3 && grade4 <= 5) && (grade5 >= 3 && grade5 <= 5)) {
                goodNumber++;
            }
            if(grade1 == 2 || grade2 == 2 || grade3 == 2 || grade4 == 2 || grade5 == 2) {
                poorNumber++;
                
                poorSurnames[arrayElement] = " " + document.getElementById('Surname').value;
                arrayElement++;
            }
    
            document.getElementById('Excellent').innerText="Відмінників:";
            document.getElementById('ExcellentNumber').innerText = excellentNumber;
    
            document.getElementById('Good').innerText="Хорошистів:";
            document.getElementById('GoodNumber').innerText = goodNumber;
    
            document.getElementById('Poor').innerText="Неуспішних:";
            document.getElementById('PoorNumber').innerText = poorNumber;
    
            document.getElementById('PoorSurname').innerText="Прізвища неуспішних:";
            document.getElementById('PoorSurnames').innerText = poorSurnames;
    
            document.getElementById('Surname').value = '';
    
            document.getElementById('Grade1').value = '';
            document.getElementById('Grade2').value = '';
            document.getElementById('Grade3').value = '';
            document.getElementById('Grade4').value = '';
            document.getElementById('Grade5').value = '';
        }
        else {
            alert('Введіть значення оцінки в діапазоні від 2 до 5!');
        }
    }
    else {
        alert('Введіть прізвище!');
    }
}