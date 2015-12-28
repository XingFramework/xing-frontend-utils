export default function whenGoto($location) {
  var search = $location.search();
  if (search.goto) {
    var target = search.goto;

    var queryParts = [];
    for(var key in search){
      if(search.hasOwnProperty(key) && key != "goto"){
        queryParts.push([key, search[key]].join("="));
      }
    }

    if(queryParts.length > 0){
      target = [target, queryParts.join("&")].join("?");
    }

    return target;
  } else {
    return false;
  }
}
