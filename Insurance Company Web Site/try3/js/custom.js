let acclist = document.querySelectorAll('#accordion .title');

for(let i=0;i<acclist.length;i++){
    acclist[i].onclick=function(e){
        e.preventDefault();

        if(this.nextElementSibling.style.maxHeight=="0px"){
            this.nextElementSibling.style.maxHeight=this.nextElementSibling.scrollHeight+"px";

            this.nextElementSibling.style.zIndex  = 1;
            this.nextElementSibling.style.opacity  = 1;
        }
        else if(this.nextElementSibling.style.maxHeight==this.nextElementSibling.scrollHeight+"px"){
            this.nextElementSibling.style.maxHeight=0;
           
            this.nextElementSibling.style.zIndex  = 0;
            this.nextElementSibling.style.opacity  = 0;

        }
    }
}


let acclist2 = document.querySelectorAll('#buton');

for(let i=0;i<acclist2.length;i++){
    acclist2[i].onclick=function(e){
        e.preventDefault();
        console.log(this.nextElementSibling);

        if(this.nextElementSibling.style.maxHeight=="0px"){

            this.nextElementSibling.style.maxHeight=this.nextElementSibling.scrollHeight+"px";

        }
        else if(this.nextElementSibling.style.maxHeight==this.nextElementSibling.scrollHeight+"px"){
            
            this.nextElementSibling.style.maxHeight=0;
           
        }
    }
}

// sexs elave et butonu ile table-a tr elave et
const addPerson = document.querySelector('#addPerson');
let personCount = 1;
addPerson.addEventListener('click', function() {
    personCount++;
    let person = document.querySelector('#person');
    let tableRow = document.createElement('tr');
    tableRow.setAttribute('id','tableRow');
    tableRow.classList.add('text-center');
    tableRow.setAttribute('align','center');
    person.appendChild(tableRow);

    let tableDataCount = document.createElement('td');
    tableDataCount.textContent = personCount;
    tableRow.appendChild(tableDataCount);

    let tableDataRemoveBtn = document.createElement('td');
    tableRow.appendChild(tableDataRemoveBtn);

    let removeBtn = document.createElement('button');
    removeBtn.setAttribute('id','removePerson');
    removeBtn.setAttribute('type','button');
    removeBtn.classList.add('btn','btn-danger');
    removeBtn.textContent = 'X';
    tableDataRemoveBtn.appendChild(removeBtn);

    let tableDataBirthday = document.createElement('td');
    tableRow.appendChild(tableDataBirthday);

    let birthdayInput = document.createElement('input');
    birthdayInput.setAttribute('type','text');
    birthdayInput.setAttribute('name','birthday');
    birthdayInput.classList.add('form-control');
    tableDataBirthday.appendChild(birthdayInput);

    let tableDataName = document.createElement('td');
    tableRow.appendChild(tableDataName);

    let nameInput = document.createElement('input');
    nameInput.setAttribute('type','text');
    nameInput.setAttribute('name','name');
    nameInput.classList.add('form-control');
    tableDataName.appendChild(nameInput);

    let tableDataSurname = document.createElement('td');
    tableRow.appendChild(tableDataSurname);

    let surnameInput = document.createElement('input');
    surnameInput.setAttribute('type','text');
    surnameInput.setAttribute('name','surname');
    surnameInput.classList.add('form-control');
    tableDataSurname.appendChild(surnameInput);

    let tableDataFatherName = document.createElement('td');
    tableRow.appendChild(tableDataFatherName);

    let fatherInput = document.createElement('input');
    fatherInput.setAttribute('type','text');
    fatherInput.setAttribute('name','fathername');
    fatherInput.classList.add('form-control');
    tableDataFatherName.appendChild(fatherInput);

    let tableDataPassportNo = document.createElement('td');
    tableRow.appendChild(tableDataPassportNo);

    let passportNoInput = document.createElement('input');
    passportNoInput.setAttribute('type','text');
    passportNoInput.setAttribute('name','x_pass_num');
    passportNoInput.classList.add('form-control');
    tableDataPassportNo.appendChild(passportNoInput);

    let tableDataGender = document.createElement('td');
    tableRow.appendChild(tableDataGender);

    let genderSelectTag = document.createElement('select');
    genderSelectTag.setAttribute('name','gender');
    genderSelectTag.classList.add('form-control');
    tableDataGender.appendChild(genderSelectTag);

    let genderOption1 = document.createElement('option');
    genderOption1.setAttribute('value', '1');
    genderOption1.innerHTML = 'M';
    genderSelectTag.appendChild(genderOption1);

    let genderOption2 = document.createElement('option');
    genderOption2.setAttribute('value', 2);
    genderOption2.textContent = 'W';
    genderSelectTag.appendChild(genderOption2);

    let tableDataRadioBtn = document.createElement('td');
    tableRow.appendChild(tableDataRadioBtn);

    let radioBtn = document.createElement('input');
    radioBtn.setAttribute('type','radio');
    radioBtn.setAttribute('checked','checked');
    radioBtn.setAttribute('name','m_alan_sexs');
    radioBtn.setAttribute('value', '1');
    radioBtn.classList.add('radio_btn');
    tableDataRadioBtn.appendChild(radioBtn);

    let tableDataInsuranceMoney = document.createElement('td');
    tableRow.appendChild(tableDataInsuranceMoney);
    
    let tableDataContractNo = document.createElement('td');
    tableRow.appendChild(tableDataContractNo);

    let tableDataPrintBtn = document.createElement('td');
    tableRow.appendChild(tableDataPrintBtn);

    let printBtn = document.createElement('button');
    printBtn.setAttribute('id','printContract');
    printBtn.setAttribute('type','button');
    printBtn.setAttribute('disabled','disabled');
    printBtn.classList.add('btn','btn-info');
    printBtn.textContent = 'Çap et';
    tableDataPrintBtn.appendChild(printBtn);

});

// sexs sil butonu ile table-a tr elave et
const removePerson = document.querySelector('#removePerson');

removePerson.addEventListener('click', function() {
    let removeTableRow = document.querySelector('#tableRow');

    personCount--;
    console.log(removeTableRow);
    removeTableRow.remove();

   
});
