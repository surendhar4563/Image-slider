let imgslide = document.querySelector(".box");
let imgbtn = document.querySelectorAll(".btn");

// let imgList = ["1","2","3","4","5","6","7","8","9","10"]
let imgList = ["Himalaya","Horse","Hells","park"]
let index = 0;

imgbtn.forEach(button => {
    button.addEventListener("click",()=>{
        if(button.classList.contains("btn-left")){
            index--;
            if(index<0){
                index = imgList.length-1;
            }
            imgslide.style.background = `url("/images/${imgList[index]}.jpg") no-repeat center`
        }
        else{
            index++;
            if(index >= imgList.length){
                index = 0
            }
            imgslide.style.background = `url("/images/${imgList[index]}.jpg") no-repeat center`
        }
    })
    
});




