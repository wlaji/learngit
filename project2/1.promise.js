function buy(callback){
  setTimeout(()=>{
    a="蘑菇";
    callback(a);
  },1000)
}
buy(function cookie(val){
  console.log(val);
})
//回掉函数，将后续的处理传入到当前要做的事，事情做好后调用此函数
//promise 解决回调问题的promise 三个状态
//成功态 失败态 等待
