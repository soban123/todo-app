var toDoItems = [];

console.log('done')


function closes(){
    console.log('hotha');
        document.getElementById("box0").classList.add('hide');
    }

function addnotes(){

   document.getElementById("box0").classList.remove('hide');
   document.getElementById('bigcontainer').classList.add('hide')
}
//

function addbox(){

    var nHTML = '';
    document.getElementById("box0").classList.add('hide');
    document.getElementById("bigcontainer").classList.remove('hide');
    
    var notesobj  = {title:document.getElementById('title').value , Description:document.getElementById('textdescription').value , date : new Date() };

    var div = document.createElement("div");    
                console.log(document.getElementById('textdescription').value);


// toDoItems.push("Title : " + notesobj.title + "<br>" + "Description: " + notesobj.Description + "<br> " + "date : "  + notesobj.date );

toDoItems.push(notesobj ) ;
console.log(toDoItems);
toDoItems.forEach(function(item) {
    nHTML += '<li>' + item.title + '<br>' + item.Description + '<br>' + item.date + '</li>';
    console.log('loop')
  });

  document.getElementById("box").innerHTML = '<ul>' + nHTML + '</ul>'
 }

 function ifchange(){
    var nHTML = '';
    
    
   
    
      

       if (document.getElementById('inputGroupSelect01').value == 1) {
        console.log('date')
        toDoItems.sort((a, b) => b.date - a.date)
        console.log('chnged' , toDoItems);
        toDoItems.forEach(function(item) {
            nHTML += '<li>' + item.title + '<br>' + item.Description + '<br>' + item.date + '</li>';
            console.log('loop')
          });
          document.getElementById("box").innerHTML = '<ul>' + nHTML + '</ul>'
       }
       if (document.getElementById('inputGroupSelect01').value == '2') {
        console.log('last updated')
       }
 }

 function fi(){

    var nHTML = '';

    var lucky =  toDoItems.filter(function(val) {
        return val.title.includes(document.getElementById("filter").value)   ;

     
      });
      console.log( "cons" , lucky );
      lucky.forEach(function(item) {
        nHTML += '<li>' + item.title + '<br>' + item.Description + '<br>' + item.date + '</li>';
        console.log('loop')
      });
      document.getElementById("box").innerHTML = '<ol>' + nHTML + '</ol>'


 }

