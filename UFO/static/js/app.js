// from data.js
var tableData = data;
console.log(tableData)

var body = d3.select("tbody")

// for(var i = 0; i < tableData.length; i++) {
//     var row = body.append("tr")
//     row.append('td').text(tableData[i]['datetime'])
//     row.append('td').text(tableData[i]['city'])
//     row.append('td').text(tableData[i]['state'])
//     row.append('td').text(tableData[i]['country'])
//     row.append('td').text(tableData[i]['shape'])
//     row.append('td').text(tableData[i]['durationMinutes'])
//     row.append('td').text(tableData[i]['comments'])
// }

tableData.forEach(function(i){
    row = body.append('tr')
    row.append('td').text(i['datetime'])
    // row.append('td').text(tableData[i]['city'])
    // row.append('td').text(tableData[i]['state'])
    // row.append('td').text(tableData[i]['country'])
    // row.append('td').text(tableData[i]['shape'])
    // row.append('td').text(tableData[i]['durationMinutes'])
    // row.append('td').text(tableData[i]['comments'])
});

d3.select("#filter-btn").on("click", filterTable);
function filterTable(){
    var userInput = d3.select("#datetime").property("value")
    var cityInput = d3.select("#city").property("value")
    var stateInput = d3.select("#state").property("value")
    var countryInput = d3.select("#country").property("value")
    var shapeInput = d3.select("#shape").property("value")
    var filterDate = tableData
    if(userInput != ""){
        filterDate = filterDate.filter(d => d.datetime == userInput)
    }
    if(cityInput != ""){
        filterDate = filterDate.filter(d => d.city == cityInput)
    }
    if(stateInput != ""){
        filterDate = filterDate.filter(d => d.state == stateInput)
    }
    if(countryInput != ""){
        filterDate = filterDate.filter(d => d.country == countryInput)
    }
    if(shapeInput != ""){
        filterDate = filterDate.filter(d => d.shape == shapeInput)
    }
    d3.select("tbody").html("");
    for(var i = 0; i < filterDate.length; i++) {
        var row = body.append("tr")
        row.append('td').text(filterDate[i]['datetime'])
        row.append('td').text(filterDate[i]['city'])
        row.append('td').text(filterDate[i]['state'])
        row.append('td').text(filterDate[i]['country'])
        row.append('td').text(filterDate[i]['shape'])
        row.append('td').text(filterDate[i]['durationMinutes'])
        row.append('td').text(filterDate[i]['comments'])
    }
}