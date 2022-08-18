var inputName =  document.getElementById("Name");
var inputURL =  document.getElementById("URL");
var addBtn = document.getElementById("addBtn");
var updataBtn = document.getElementById("updataBtn");
var tableBody = document.getAnimations("tableBody");

var prodactContainer ; 
var productIndex ;

if(localStorage.getItem("myProducts") != null){
    prodactContainer = JSON.parse(localStorage.getItem("myProducts"));
    displayProducts(prodactContainer);
}
else{
    prodactContainer =[];
}

addBtn.onclick =  function addProdact() {
        var prodact = {
            name:inputName.value,
            url:inputURL.value
        }
        prodactContainer.push(prodact);
        console.log(prodactContainer);

    localStorage.setItem("myProducts",JSON.stringify(prodactContainer));
    clearForm();
    displayProducts(prodactContainer);
}


function clearForm() {
    inputName.value = '';
    inputURL.value = ''
};

function displayProducts(list) {
    var cartoona = ``;
    for(var i=0; i<list.length; i++){
        cartoona+=` <tr>
        <td>${list[i].name}</td>
        <td><a class="btn btn-primary" href="${list[i].url}" target="_blank">Visit</a></td>
        
        <td><button onclick="UpdataItem(${i}); productIndex=${i}" class="btn btn-info">Updata</button></td>
        <td><button onclick="deleteProducts(${i})" class="btn btn-danger">Delete</button></td>
    </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartoona;
};

function deleteProducts(Delete) {
    prodactContainer.splice(Delete,1);
    localStorage.setItem("myProducts",JSON.stringify(prodactContainer));
    displayProducts(prodactContainer);
};


function UpdataItem(UpdataIndex) {
    inputName.value=prodactContainer[UpdataIndex].name;
    inputURL.value=prodactContainer[UpdataIndex].url;
    addBtn.classList.add('d-none');
    updataBtn.classList.remove('d-none');
};

function UpdataBook(Index) {
    prodactContainer[Index].name=inputName.value;
    prodactContainer[Index].url=inputURL.value;
    clearForm();
    localStorage.setItem("myProducts",JSON.stringify(prodactContainer));

    displayProducts(prodactContainer);
    updataBtn.classList.add('d-none');
    addBtn.classList.remove('d-none');
};



function searchProducts(searchTerm) {
    var searchResult = []; 
    for(var i=0; i<prodactContainer.length; i++){
        if(prodactContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true){
            searchResult.push(prodactContainer[i]);
        }
    }
    displayProducts(searchResult)
};