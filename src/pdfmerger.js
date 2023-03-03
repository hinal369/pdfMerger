const PDFMerger = require('pdf-merger-js');
const path = require('path');
const fs = require('fs');
const merger = new PDFMerger();

const destPath = path.join(__dirname, '../public')
const mergePDF = (files) => {
  let filename = new Date().getTime();
  files.forEach( async (element) => {
    await merger.add(element.path); 
    await merger.save(`${destPath}/mergerfile/${filename}.pdf`); //save under given name and reset the internal document
    fs.unlinkSync(element.path);
  });

  return filename
  // await merger.add(pdf1);  //merge all pages. parameter is the path to file and filename.
  // await merger.add(pdf2); // merge only page 2
  // await merger.save(`${destPath}/merged.pdf`); //save under given name and reset the internal document

};

module.exports = mergePDF;