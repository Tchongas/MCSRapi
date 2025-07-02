function getRsg116(e){
  var data = { 'runs':[] };

  var lastRow = rsg116.getLastRow();

  for(var i = 1; i <= lastRow; i++){
    let name = rsg116.getRange(i, 12).getValue();
    let time = rsg116.getRange(i, 13).getValue();
    let bastion = rsg116.getRange(i, 14).getValue();
    let date = rsg116.getRange(i, 15).getValue(); 
    let verified = rsg116.getRange(i, 16).getValue();
    let seed = rsg116.getRange(i, 17).getValue();
    let link = rsg116.getRange(i, 18).getValue(); // FIXED
    let description = rsg116.getRange(i, 19).getValue();

    data.runs.push([name, time, bastion, date, verified, seed, link, description]);
  }

  var result = JSON.stringify(data);

  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}