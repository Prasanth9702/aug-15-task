let ele=document.createElement("div")
ele.classList.add("container")
let count=document.getElementById("span")
count.innerHTML=10
document.body.append(ele)
let time=10;
setTimeout(()=>{
    time=time-1;
    count.innerHTML=time
    setTimeout(()=>{
        time=time-1;
        count.innerHTML=time
        setTimeout(()=>{
            time=time-1;
            count.innerHTML=time
            setTimeout(()=>{
                time=time-1;
                count.innerHTML=time
                setTimeout(()=>{
                    time=time-1;
                    count.innerHTML=time
                    setTimeout(()=>{
                        time=time-1;
                        count.innerHTML=time
                        setTimeout(()=>{
                            time=time-1;
                            count.innerHTML=time
                            setTimeout(()=>{
                                time=time-1;
                                count.innerHTML=time
                                setTimeout(()=>{
                                    time=time-1;
                                    count.innerHTML=time
                                    setTimeout(()=>{
                                        count.innerHTML=  `HAPPY 
                                                INDIPENDENCE
                                                            DAY`


                                    },1000)
                                  

                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
  
},1000)
