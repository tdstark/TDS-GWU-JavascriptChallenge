var tableData = data;
var button = d3.select("#filter-btn");  
// var form = d3.select("#datetime");
var form = d3.select("#form");
var tbody = d3.select("tbody");

data.forEach(function(weatherReport) {
  console.log(weatherReport);
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});

function runEnter() {

  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");

  filteredData = data.filter(entries => {
    return entries.datetime === inputValue
  });

  console.log(filteredData);

  d3.selectAll("td").remove()

  filteredData.forEach(function(weatherReport) {
    console.log(weatherReport);
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

button.on("click", runEnter);
form.on("submit", runEnter);