function createSearchDiv(arr){ 
    let searchDiv = document.getElementById("search");
    let inputBox = document.createElement("input");
    inputBox.setAttribute("id", "input-box");
    inputBox.placeholder  = "Search player";

    


    // let searchBtn  = document.createElement("div");
    // searchBtn.setAttribute("id", "search-btn");
    // searchBtn.textContent = "Search";


    let ulList = document.createElement("ul");
    let liList;
    ulList.setAttribute("id", "ul-list");
    ulList.setAttribute("tabindex", "1");

    


    arr.forEach(element => {
        liList = document.createElement("li");
        liList.setAttribute("class", "li-list");
        liList.addEventListener("blur", ()=>{
            ulList.style.display = 'none';
        })
        liList.append(element.fullname);
        ulList.appendChild(liList);
    })

    
    
    


    

    searchDiv.appendChild(inputBox);
    searchDiv.appendChild(ulList);
    // searchDiv.appendChild(searchBtn);



    let playerDiv = document.querySelectorAll(".player-div");
    let playerDivArr = Array.from(playerDiv);

    inputBox.addEventListener("focus", () => {
        ulList.style.display = 'block'
    })
    ulList.addEventListener("blur", () => {
        ulList.style.display = 'none';
    })
    document.getElementById("body").addEventListener("focus", ()=>{
        ulList.style.display = 'none';
    })

    let liNodeList = document.querySelectorAll(".li-list")
            let li = Array.from(liNodeList);
    li.forEach((element) => {
        element.addEventListener("click", () => {
            inputBox.value = element.innerText;
            playerDivArr.forEach(element => {
                if(element.innerText.toLowerCase() !== inputBox.value.toLowerCase()){
                    element.style.display = 'none';
                    console.log(inputBox.value)
                }
                else{
                    element.style.display = '';
                    console.log(inputBox.value)
                }
            })
        })
    })
    
    inputBox.addEventListener("keyup", () => {
        console.log(inputBox.value)
        playerDivArr.forEach(element => {
            element.style.display = '';
        })

        let  filter;
        let a;
        let txtValue;

            
            filter = inputBox.value.toUpperCase();
            

            
            
            
            
        for (let i = 0; i < li.length; i++) {
                a = li[i];
                txtValue =  a.innerText;
                console.log(txtValue.toUpperCase().indexOf(filter));
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }


        

        

    })
}

export default createSearchDiv;