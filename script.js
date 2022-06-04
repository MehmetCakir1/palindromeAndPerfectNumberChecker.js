const lowNumber=document.getElementById("lowNumber");
const highNumber=document.getElementById("highNumber");
const palinBtn=document.getElementById("palinBtn");
const perfectBtn=document.getElementById("perfectBtn");

palinBtn.addEventListener("click",()=>{
    if(Number(lowNumber.value) >= Number(highNumber.value)){
        alert("High number should be bigger than low number")
    }else{
        for(let i=Number(lowNumber.value);i<=Number(highNumber.value);i++){
            if(isPalindrome(i)){
                document.querySelector(".palindromeList").innerHTML +=i + `<br>`
            }
        }
    }
})

perfectBtn.addEventListener("click",()=>{
    if(Number(lowNumber.value) >= Number(highNumber.value)){
        alert("High number should be bigger than low number")
    }else{
        for(let j=Number(lowNumber.value);j<=Number(highNumber.value);j++){
            if(isPerfect(j)){
                document.querySelector(".perfectList").innerHTML +=j + `<br>`
            }
        }
    }

});

function isPalindrome(num){
    for(let i=lowNumber;i<=highNumber;i++){
        let reversedNum=String(num).split("").reverse().join("");
        return num==reversedNum
    }
};


    function isPerfect(num){
        let result=0;
        for(let i=1;i<num;i++){
            if(num%i==0){
                result+=i
            }
        } 
        return result==num
    }

