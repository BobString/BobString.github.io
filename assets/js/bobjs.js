$(document).ready(function() {
 // note that months are zero-based in the JavaScript Date object, so month 3 is April
  var edu =   [
    {className:'first', id: 1, content: 'Computer Science Engineering, University of Seville, Spain', start: new Date(2009, 1, 1), end: new Date(2014, 8, 7),image:"assets/img/us.gif", link: '<a href="https://www.informatica.us.es/index.php/plan-del-97/ingenieria-informatica/asignaturas-ii" target="_blank" style="color:#ffd777">University courses</a>'},
    {className:'second', id: 2, content: 'MSc Information Technology, University of Stavanger, Norway ', start: new Date(2012, 7, 7),end: new Date(2014, 6, 7),image:"assets/img/work-2r.png", link: '<a href="http://www.uis.no/studies/master-s-programmes-in-english/computer-science/study-plan-and-course-combination/" target="_blank" style="color:#ffd777">Master courses</a>'}
  ];
  var itemsEdu = new vis.DataSet(edu);

 
 
  var containeredu = document.getElementById('visualization-education');
  var options = {
   	editable: false,
	moveable: false,
	groupOrder: 'id'
	  };
  var timelineedu = new vis.Timeline(containeredu, itemsEdu, options);
  timelineedu.on('select', function (properties) {
	var text = "";
	var image = "";
	var link = "";
	for(i in edu){
		if(edu[i].id == properties.items[0]){
			text= edu[i].content;
			image = edu[i].image;
			link = edu[i].link;
			var unique_id = $.gritter.add({
			    // (string | mandatory) the heading of the notification
			    title: 'Education',
			    // (string | mandatory) the text inside the notification
			    text: text+". "+link,
			    // (string | optional) the image to display on the left
			    image: image,
			    // (bool | optional) if you want it to fade out on its own or just sit there
			    sticky: false,
			    // (int | optional) the time you want it to be alive for before fading out
			    time: '3000',
			    // (string | optional) the class name you want to apply to that specific message
			    class_name: 'my-sticky-class'
			});
		}
	}
});
  
  
  
var jobs= [
    {className:'first', id: 3, content: 'Internship as computer analyst, Zaizi, Seville, Spain', start: new Date(2012, 2, 1), end: new Date(2012, 8, 7),image:"assets/img/work-1r.png"},
    {className:'second', id: 4, content: 'Student Assistant, Institutt for data- og elektroteknikk, University of Stavanger, Norway', start: new Date(2013, 0, 1),end: new Date(2013, 5, 25),image:"assets/img/work-2r.png"},
{className:'thrid', id: 5, content: 'Android Developer, Time and Date AS, Norway', start: new Date(2013, 3, 1),end: Date.now(),image:"assets/img/work-3r.png"}
  ];
  var itemsWork = new vis.DataSet(jobs);

  var containerwork = document.getElementById('visualization-work');
  var timelinework = new vis.Timeline(containerwork, itemsWork, options);

timelinework.on('select', function (properties) {
	var text = "";
	var image = "";
	for(i in jobs){
		if(jobs[i].id == properties.items[0]){
			text= jobs[i].content;
			image = jobs[i].image;
			var unique_id = $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'Job description',
            // (string | mandatory) the text inside the notification
            text: text,
            // (string | optional) the image to display on the left
            image: image,
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: false,
            // (int | optional) the time you want it to be alive for before fading out
            time: '3000',
            // (string | optional) the class name you want to apply to that specific message
            class_name: 'my-sticky-class'
        });
		}
	}
});


$.localScroll();

});
