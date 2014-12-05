
  fiveOnFive = function(size) {
      shultz = document.getElementsByTagName("table");
      cells = shultz[0].getElementsByTagName("td");
      number = Math.floor((Math.random() * size) + 1);
      numbers = [];

          for (var i = 1; i < size + 1; i++) {

          numbers.push(i);
      }
      shuffle = function (array) {
          var currentIndex = array.length, temporaryValue, randomIndex;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;

              // And swap it with the current element.
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
          }

          return array;
      };


      var inputNumber = shuffle(numbers);
      for (var i = 0; i < size; i++) {

          cells[i].innerHTML = inputNumber[i];

      }
  };

  CreateTableFiveOnFive = function(rows) {
    var body=document.getElementsByTagName('div1')[0];
    var tbl=document.createElement('table');
    tbl.style.width='100%';
    tbl.setAttribute('border','1');
    tbl.setAttribute( "class", "tdClass" );
    tbl.setAttribute("onclick","onclickFunction()")
    var tbdy=document.createElement('tbody');
    for(var i=0;i<rows;i++){
        var tr=document.createElement('tr');
        for(var j=0;j<rows;j++){
            if(i==0 && j==rows){
                break
            } else {
                var td=document.createElement('td');
                td.appendChild(document.createTextNode('\u0020'))
                tr.appendChild(td)
            }
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
};

  clean = function() {
    var elements = document.getElementsByTagName('table')

    while (elements[0]) elements[0].parentNode.removeChild(elements[0])
}



  onclickFunction =function()
  {
      console.log("lol works")
  };







