// const getTodo=(resource)=>{
//     return new Promise((resolve,reject)=>{
//         const request=new XMLHttpRequest();

//         request.addEventListener('readystatechange',()=>{
//         if(request.readyState==4 && request.status==200){
//             const data=JSON.parse(request.responseText);
//             resolve(data);
//         }
//         else if(request.readyState==4){
//             reject("Got some Error");
//         }
//     });
//     request.open("GET",resource);
//     request.send();
//     });

// };
// getTodo('data.json')
//   .then((res)=>console.log(res))
//   .catch((err)=>console.log(err));

// const getTodo=(resource,callbackfun)=>{
    
//     const request=new XMLHttpRequest();

// request.addEventListener('readystatechange',()=>{
//     if(request.readyState==4 && request.status==200){
//         // console.log(request.responseText);
//         callbackfun(undefined,request.responseText);
//     }
//     else if(request.readyState==4){
//         // console.log("no data");
//         callbackfun("Something wrong",undefined);
//     }
// });
// request.open("GET",resource);
// request.send();
// };

// getTodo('data.json',(err,data)=>{
//     console.log(data);
//     if(err){
//         console.log(err);
//     }else{
//         // console.log(data);
//         const result=JSON.parse(data);
//         let html=result.map((todo)=>{
//             return `<span>${todo.id}</span></br>`;
//         });
//         clock.innerHTML=html
//     }
// });
//   ===========call back hell================
// const getSomeThisgs =()=>{
//     return new Promise((resolve,reject)=>{
//         resolve("Fetched Data");
//         reject("Got Error");
//     });
// };
// getSomeThisgs().then(
//     // (res)=> console.log(res),
//     (err)=>console.log(err)
//     );

// fetch('data.json')
// .then((res)=>{
//     const data=res.json();
//     return data;
// })
// .then((res)=>console.log(res));
// const dosomethings=()=>{
//     return fetch('data.json');
// };
// const data=dosomethings().then((res)=>res);
// console.log(data);

// const getTodos=async () =>{
//     const response=await fetch('datas.json');
//     // const result=await data.json();
//     // console.log(result);
//     if(response.status!=200){
//         throw new Error(response.statusText);
//     }
//     console.log(response);
// };
// getTodos();
// 

// try catch.......

// const getTodos=async () =>{

//     try{
//         const response=await fetch('datas.json');
//         const result=await response.json();
//         if(response.status!=200){
//             throw new Error(response.statusText);
//         }
//         console.log(response);
//     }catch{
//         console.log("ERRPR");
//     }
//     console.log(result);
// };
// getTodos();

