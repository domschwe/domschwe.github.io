function sampleSize(){
  let populationSize = document.forms["samplingTool"]["population"].value;
  let confidence = document.forms["samplingTool"]["confidence"].value / 100;
  let deviation = document.forms["samplingTool"]["deviation"].value / 100;

  console.log("Formula from https://www.qualitymag.com/articles/91991-sample-sizes-how-many-do-i-need");
  let sampleSize = Math.round((Math.log(1 - confidence) / Math.log(1 - deviation)) + 0.5);
  sampleSize = Math.round(sampleSize / (1 + ((sampleSize - 1) / populationSize)) + 0.5);

  // Error Checks
  if(populationSize < sampleSize) {
    sampleSize = populationSize;
  };

  if(populationSize == 0 || confidence == 0 || deviation == 0 || confidence > 100|| deviation > 100) {
    sampleSize = 0;
  };

  // Set form value
  document.forms["samplingTool"]["sample"].value = sampleSize;
};
