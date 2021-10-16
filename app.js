const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');
const indicatorParents = document.querySelector('.controls ul');
var sectionIndex = 0;


const indicators = document.querySelectorAll('.controls li');

// console.log(indicator)
indicators.forEach(function(indicator,ind){
  // console.log(indicator,ind)
  indicator.addEventListener("click",function(){
    sectionIndex = ind;
    // console.log(sectionIndex);
    // console.log(document.querySelector('.controls .selected'));
    document.querySelector('.selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = `translate(${sectionIndex * -20}%)`;
  })
})

// console.log(sectionIndex);

function imageSliderfunc(){
  sectionIndex +=1;
  if(sectionIndex>4){
    sectionIndex=0;
  }
  document.querySelector('.controls .selected').classList.remove('selected');
  indicatorParents.children[sectionIndex].classList.add('selected');
  slider.style.transform = `translate(${sectionIndex * -20}%)`;
}

setInterval(imageSliderfunc,1000*5);
