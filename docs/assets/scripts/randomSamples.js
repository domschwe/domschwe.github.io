function randomSamples(){

    /** Sample Generation **/
    let sampleSize = document.forms["samplingTool"]["sample"].value;

    if (sampleSize == 0) {
        window.alert('Check Inputs');
        return;
    }

    let sampleTable = document.getElementById("sampleTable");
    let populationSize = document.forms["samplingTool"]["population"].value;
    let d = new Date();
    document.getElementById('generationDate').innerHTML = 'Generated on ' + d.toDateString();

    document.getElementById("sampleSection").style.display = "block";

    console.log("Clear table with " + sampleTable.rows.length + " rows");
    while (sampleTable.rows.length > 1) {
        sampleTable.deleteRow(1);
    }

    console.log("Build table with " + sampleSize + " rows.");
    var i;
    var numbers = new Array();
    for (i = 1; i <= sampleSize; i++) {
        do {
            var randNum = Math.round(Math.random() * populationSize);
        }while(numbers.includes(randNum) || randNum == 0)
        numbers.push(randNum);
    }
    numbers.sort(function(a, b){return b - a});

    numbers.forEach(function(value) {
        let row = sampleTable.insertRow(1);
        let cell = row.insertCell(0);
        cell.innerHTML = value;
    });
    numbers.sort(function(a, b){return a - b});

    /** Export to CSV **/
    exportToCsv("Sample.csv", numbers);
    print();
}
