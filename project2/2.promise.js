let p=new Promise((resolve,reject)=>{
  setTimeout(function(){
    let a="蘑菇";
    resolve(a);
  },2000)
});
p.then((data)=>{
  console.log(data)
},(err)=>{
  console.log('err')
})


