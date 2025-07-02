function getRunners(e) {
  var data = { 'runners':[] };

  var lastRow = runners.getLastRow();

  for(var i = 1; i <= lastRow; i++) {
    let commonName = runners.getRange(i,2).getValue();
    let state = runners.getRange(i,3).getValue();
    let nameColor = runners.getRange(i,4).getValue();

    data.runners.push([commonName,state,nameColor])
  }

  var result = JSON.stringify(data);

  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}