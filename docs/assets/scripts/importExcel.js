function importExcel(filePath) {
  /** Spinner **/
  var spinner;

  var _workstart = function() { spinner = new Spinner().spin(_target); }
  var _workend = function() { spinner.stop(); }

  /** Alerts **/
  var _badfile = function() {
    alertify.alert('This file does not appear to be a valid Excel file.  If we made a mistake, please send this file to <a href="mailto:dev@sheetjs.com?subject=I+broke+your+stuff">dev@sheetjs.com</a> so we can take a look.', function(){});
  };

  var _failed = function(e) {
    console.log(e, e.stack);
    alertify.alert('We unfortunately dropped the ball here.' +
    'If there are issues with the file processor, please send this file to <a href="mailto:dschweyer@cottoncpa.com?subject=I+broke+your+stuff">Dom</a> so he can make things right.', function(){});
  };

  if (document.forms["samplingTool"]["sample"].value == 0) {
    alert("Make sure that all fields are filled out properly.")
    return;
  };

  /** File Upload **/
  let externalScript = document.getElementById('xlsxScript');
  if (externalScript != null) {
    console.log("External XLSX Script Loaded");
    document.getElementById('uploader').disabled = true;
    var externalXlsxLoaded = true;
  };
}
