const slides=document.querySelectorAll(".brew");
var count=0;

slides.forEach(

(brew,index)=>{
    brew.style.left=`${index*100}%`;
}

)

const goNext=()=>{
count++;
slideImage()


}

const goPrev=()=>{
count--;
slideImage()


}

const slideImage = () =>{

slides.forEach(

(slide)=>{

slide.style.transform = `translateX(-${count*100}%)`

}



)



}