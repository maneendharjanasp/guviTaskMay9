var submit = document.getElementById("submit-btn");
submit.addEventListener("click",function(e){
    e.preventDefault();
    var address = [];
    if(addr1.value.length > 0){
        address.push(addr1.value);
    }
    if(addr2.value.length > 0){
        address.push(addr2.value);
    }
    var gender = document.getElementsByName("gender");
    var genderVal;
    for(let i=0;i<gender.length;i++){
        if(gender[i].checked){
            genderVal = gender[i].value;
        }
    }
    if(!genderVal){
        genderVal = "";
    }
    var food = document.getElementsByName("foodchoice");
    var foodVal = [];
    var foodCount = 0;
    var foodResult;
    for(let i=0;i<food.length;i++){
        if(food[i].checked){
            foodVal.push(food[i].value);
            foodCount++;
        }
    }
    if(foodVal.length >= 2){
        foodResult = foodVal.join(",");
        createTable(fname.value, lname.value, address.join(","), pincode.value, genderVal,foodResult, state.value, country.value)
        fname.value = ""
        lname.value = ""
        addr1.value = ""
        addr2.value = ""
        pincode.value = ""
        state.value = ""
        country.value = ""
        var genderEle = document.getElementsByName("gender");
        for(var i=0;i<genderEle.length;i++){
            genderEle[i].checked = false;
        }
        var foodEle = document.getElementsByName("foodchoice");
        for(var i=0;i<foodEle.length;i++){
            foodEle[i].checked = false;
        }
    }else{
        alert("Kindly Choose atleast 2 foods from available food choices");
    }  
});

function createTable(fname, lname, address, pincode, gender, foodchoice, state, country){
    var tbody = document.getElementById("tbody");
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");
    var td8 = document.createElement("td");
    td1.innerHTML = fname;
    td2.innerHTML = lname;
    td3.innerHTML = address;
    td4.innerHTML = pincode;
    td5.innerHTML = gender;
    td6.innerHTML = foodchoice;
    td7.innerHTML = state;
    td8.innerHTML = country;
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    tbody.append(tr);
}