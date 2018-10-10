var fs = require('fs');

function pi(filePath) {
  fs.readFile(filePath, 'utf-8', function (error, data) {
    if (error) {
      console.log(error);
    } else {
      var oldTxt = data.toString();
      if (!/^document\.addEventListener\("DOMContentLoaded"/.test(oldTxt)) {
        var newTxt = 'document.addEventListener("DOMContentLoaded", function(event) {\n' + oldTxt + '\n});';
        fs.writeFile(filePath, newTxt, 'utf8', function (error2) {
          if (error2) {
            console.log(error2);
          }
        });
      }
    }
  });
}

pi('dist/amazeui.touch.js');
pi('dist/amazeui.touch.min.js');
