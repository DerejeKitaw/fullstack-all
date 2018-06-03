function MyEventEmitter(){
  this.events = {};
}

MyEventEmitter.prototype.addListener = function(name, cb){
  if(this.events[name] === undefined){
    this.events[name] = [cb];  
  } else {
    this.events[name].push(cb);
  }
};

MyEventEmitter.prototype.emit = function(event) {
  var args = [].slice.call(arguments, 1);
  this.events[event].forEach(function(callback){
    callback.apply(null, args);
  });
};
