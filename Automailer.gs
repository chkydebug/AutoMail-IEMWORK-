function sendMails() {
 
  var quota=MailApp.getRemainingDailyQuota();
  console.log(quota);
  
  var wrkShtEmailIDs = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/10_r5_IJ7lrR7yqTs1Y-TZjHUyna3LHeuBkKO18t61W8/edit?usp=sharing").getSheetByName("Mail");
  var wrkShtMessage = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/10_r5_IJ7lrR7yqTs1Y-TZjHUyna3LHeuBkKO18t61W8/edit?usp=sharing").getSheetByName("Message");
  var subject = wrkShtMessage.getRange('A1').getValue();
  var message = wrkShtMessage.getRange('B1').getValue();
  var file=DriveApp.getFilesByName("Attachement.pdf");
  var f=file.next();
  for(var i=2;i<=101;i++)
  {
    var name = wrkShtEmailIDs.getRange('A' + i).getValue();
    var emailaddress  = wrkShtEmailIDs.getRange('B' + i).getValue();
    var finalmsg="";
    finalmsg="Dear " + name + ",\n" + message;
    MailApp.sendEmail(emailaddress,subject,finalmsg,{attachments: [f.getAs(MimeType.PDF)]});
  }
  
}
