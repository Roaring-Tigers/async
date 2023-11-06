
// console.log("Order a Pizza") // 3sec
// console.log("Pizza is being made") // 8sec
// console.log("Pizza is being delivered") // 4 secs
// console.log("Eat Pizza") // 1 secs


setTimeout(()=>{console.log("Pizza Ordered")
        setTimeout(()=>{console.log("Pizza is being made")
           setTimeout(()=>{console.log("Pizza is being delivered")
               setTimeout(()=>{console.log("Eat Pizza")}, 1000) // 1 secs
    
    }, 4000) // 4 secs
    
    }, 8000) // 8sec


}, 3000) // 3sec





