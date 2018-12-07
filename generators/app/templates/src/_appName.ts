function onOpen(e){
  SpreadsheetApp.getUi().createAddonMenu()
    .addItem('Menu Item', 'functionName')
    .addToUi()
}

function functionName() {
  let ss = SpreadsheetApp.getActiveSpreadsheet() //|| SpreadsheetApp.openByUrl('testingSheetUrl')
  let sheet = ss.getActiveSheet()
  let sheetData = sheet.getDataRange().getValues()
}

