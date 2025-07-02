var rsg116 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("rsg116");
var ssg116 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ssg116");
var runners = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Runners");

function doGet(e){
  var action = e.parameter.action;

  if(action == 'getrsg116'){
    return getRsg116(e);
  }

  if(action == 'getssg116'){
    return getSsg116(e);
  }

  if(action == 'getrunners') {
    return getRunners(e)
  }

  if(!action) {
    return getRsg116(e);
  }
}


