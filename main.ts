// //Question :1
let fetchGreeting=new Promise((res,rej)=>{
    console.log("Promise is panding");
    setTimeout(() => {
       console.log("Resolved");
        
    }, 2000);
    
})


//Question :2
function simulateTask(){
    console.log("Task started");
    setTimeout(() =>{
    console.log("Task complited");
 }, 1000);
}
simulateTask()


//Question :3
async function fetchData(){
    return new Promise((resolve) => {
setTimeout(() => {
    resolve("data fetched successfully");
    },1000)
});
}
fetchData().then((response) => (console.log(response))).catch((err) => (console.log(err)))



//Questoin :4
async function fetchWithError(){
  return new Promise((res,rej)  => {
   setTimeout(() => {
rej("Data fetch failed!");
   }, 1000);
  });    
}
fetchData().then((Response) => (console.log(Response))).catch((err) => (console.log(err)))

//Question:5

async function functionData5() {
    return 42;
}

async function Processdata(data:number) {
  return `Processed data: ${data}`;  
}
async function  executeSquentialy() {
    try {
     const fetchData = await functionData5 () ;
     console.log(`Fetched data: ${fetchData}`);

     const ProcessedResult = await Processdata(fetchData);
     console.log(ProcessedResult);
      }catch (error){
        console.error(`Error occured:`, error);
        
      }
}
executeSquentialy();