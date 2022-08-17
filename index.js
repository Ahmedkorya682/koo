var productNameInput=document.getElementById("productName")
var productPriceInput=document.getElementById("productPrice")
var productCategoryInput=document.getElementById("productCategory")
var productDescriptionInput=document.getElementById("productDescription")
var searchinput=document.getElementById("searchInput")
var koryaindex11 ;
var productList;
if(localStorage.getItem("list")!=null){
    productList=JSON.parse(localStorage.getItem("list"))
    displayData()
}
else{
    productList=[]
}

function addProduct(){
    if(validProductName()&&validProductPrice()){
    var product={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        desc:productDescriptionInput.value
    }
    
    productList.push(product) ;
    localStorage.setItem("list",JSON.stringify(productList))
    displayData() 
}
}




function displayData(){
    
    temp=""
    for(i=0;i<productList.length;i++){
        temp+=`<tr>
        <td>`+i+`</td>
        <td>`+productList[i].name+`</td>
        <td>`+productList[i].price+`</td>
        <td>`+productList[i].category+`</td>
        <td>`+productList[i].desc+`</td>

        <td>
            <button onclick="updateForm(`+i+`)" class="btn btn-outline-warning">update</button>
        </td>
        <td>
            <button class="btn btn-outline-danger" onclick="deleteProduct(`+i+`) ">delete</button>
        </td>
    </tr>`
    }
    document.getElementById("tableData").innerHTML=temp
}
function deleteProduct(index){
    productList.splice(index,1)
    localStorage.setItem("list",JSON.stringify(productList))
    displayData()
}
function clearProduct() {
    productNameInput.value=""
    productPriceInput.value=""
    productCategoryInput.value=""
    productDescriptionInput.value=""

}
function updateForm(index){
    koryaindex11 =index

    productNameInput.value=productList[index].name
    productPriceInput.value=productList[index].price
    productCategoryInput.value=productList[index].category
    productDescriptionInput.value=productList[index].desc



    document.getElementById("editbtn").style.display="inline"
    document.getElementById("addbtn").style.display="none"

}
function editProduct(){  //probelm
    
        
    productList[koryaindex11].name= productNameInput.value
    productList[koryaindex11].price= productPriceInput.value
    productList[koryaindex11].category= productCategoryInput.value
    productList[koryaindex11].desc= productDescriptionInput.value
    localStorage.setItem("list",JSON.stringify(productList))
    displayData()

   
    
    
    document.getElementById("editbtn").style.display="none"
    document.getElementById("addbtn").style.display="inline"

}


function search(){
    var temp=""
    for(i=0;i<productList.length;i++){
        if(productList[i].name.toLowerCase().includes(searchinput.value.toLowerCase())
        ||productList[i].category.toLowerCase().includes(searchinput.value.toLowerCase())){


            temp+=`<tr>
            <td>`+i+`</td>
            <td>`+productList[i].name+`</td>
            <td>`+productList[i].price+`</td>
            <td>`+productList[i].category+`</td>
            <td>`+productList[i].desc+`</td>
    
            <td>
                <button onclick="updateForm(`+i+`)" class="btn btn-outline-warning">update</button>
            </td>
            <td>
                <button class="btn btn-outline-danger" onclick="deleteProduct(`+i+`) ">delete</button>
            </td>
        </tr>`

        }
        document.getElementById("tableData").innerHTML=temp
        

    }
}
function validProductName(){
    var y=false ;
    var x=/^[A-Z][a-z]{2,10}$/
    if(x.test(productNameInput.value)){
        document.getElementById("validName").style.display="none";
        y=true ;
    }
    else{
        y=false;
        document.getElementById("validName").style.display="block";
    }
    return y ;
}

function validProductPrice(){
    var y=false ;
    var x=/^[1-9]{2,5}$/
    if(x.test(productPriceInput.value)){
        document.getElementById("validPrice").style.display="none";
        y=true ;
    }
    else{
        y=false;
        document.getElementById("validPrice").style.display="block";
    }
    return y ;
}