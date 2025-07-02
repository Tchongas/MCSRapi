function getSsg116(e){
  var data = { 'runs':[] };

  var lastRow = ssg116.getLastRow();

  for(var i = 1; i <= lastRow; i++){
    let name = ssg116.getRange(i, 11).getValue();
    let time = ssg116.getRange(i, 12).getValue();
    let seed = ssg116.getRange(i, 13).getValue();
    let date = ssg116.getRange(i, 14).getValue(); 
    let verified = ssg116.getRange(i, 15).getValue();
    let link = ssg116.getRange(i, 16).getValue(); // FIXED
    let description = ssg116.getRange(i, 17).getValue();

    data.runs.push([name, time, seed, date, verified, link, description]);
  }

  var result = JSON.stringify(data);

  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}