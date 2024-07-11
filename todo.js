function getAndUpdate(){
    title = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if(localStorage.getItem('itemJson')==null) 
    {
        itemJsonArray = [];
        itemJsonArray.push([title,desc]);
        localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([title,desc]);
        localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
    }
    update();
}


function update(){
    if(localStorage.getItem('itemJson')==null){
        itemJsonArray = [];
        localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }

    // adding data into table
    let str="";
    tablebody = document.getElementById('tablebody');
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
            <td>${index+1}</td>
            <td colspan="20"> ${element[0]}</td>
            <td colspan="50"> ${element[1]}</td>
            <td colspan="3"> <button onclick="deletetask(${index})"> Delete </button></td>
        </tr>`;
    });
    tablebody.innerHTML = str;
}

add = document.getElementById("add");
add.addEventListener("click",getAndUpdate);
update();
// window

function deletetask(itemindex){
    itemJsonArrayStr = localStorage.getItem('itemJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.splice(itemindex,1);
    localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
    update();
}

function clearData(){
    if(confirm("Do you really want to clear all tasks ??????")){
        localStorage.clear();
        update();
    }
}