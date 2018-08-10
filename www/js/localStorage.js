Storage.prototype.getArray = function(arrayName) {
  var thisArray = [];
  var fetchArrayObject = this.getItem(arrayName);
  if (typeof fetchArrayObject !== 'undefined') {
    if (fetchArrayObject !== null) { 
      thisArray = JSON.parse(fetchArrayObject); 
    }
  }
  return thisArray;
}

Storage.prototype.pushArrayItem = function(arrayName,arrayItem) {
  var existingArray = this.getArray(arrayName);
  existingArray.push(arrayItem);
  this.setItem(arrayName,JSON.stringify(existingArray));
}


Storage.prototype.removeArrayItem = function(arrayName,arrayItem) {
  var existingArray = this.getArray(arrayName);  
  //console.log(existingArray);

  existingArray = existingArray.filter(function(themObjects){
               return themObjects.id !== arrayItem.id;
        });
  //console.log(existingArray);
  this.setItem(arrayName,JSON.stringify(existingArray));
 }


 Storage.prototype.getArrayItem = function(arrayName, arrayItem) { 
   var existingArray = this.getArray(arrayName);    
   var iteminfavorite = false;
   existingArray.filter(function(themObjects){
    //console.log('themObjects' ,themObjects.id);
    //console.log('arrayitem' ,arrayItem.id);
      if(themObjects.id === arrayItem.id) {
          iteminfavorite = true;
        } 
      else {
          iteminfavorite = false;
        }
    });
  return iteminfavorite; 
}

Storage.prototype.popArrayItem = function(arrayName) {
  var arrayItem = {};
  var existingArray = this.getArray(arrayName);
  if (existingArray.length > 0) {
    arrayItem = existingArray.pop();
    this.setItem(arrayName,JSON.stringify(existingArray));
  }
  return arrayItem;
}

Storage.prototype.shiftArrayItem = function(arrayName) {
  var arrayItem = {};
  var existingArray = this.getArray(arrayName);
  if (existingArray.length > 0) {
    arrayItem = existingArray.shift();
    this.setItem(arrayName,JSON.stringify(existingArray));
  }
  return arrayItem;
}

Storage.prototype.unshiftArrayItem = function(arrayName,arrayItem) {
  var existingArray = this.getArray(arrayName);
  existingArray.unshift(arrayItem);
  this.setItem(arrayName,JSON.stringify(existingArray));
}

Storage.prototype.deleteArray = function(arrayName) {
  this.removeItem(arrayName);
}

