function search(){
	$("#effects").html('');
	var key = "N5yTRuaToqSWtxOOLYjesPAlyQ71wNdzco8D86yt"
	var searchTerm = document.getElementById("fdaSearch").value

	$.ajax({
    
	   	url: "https://api.fda.gov/drug/event.json?api_key="+ key + "&search=" + searchTerm+"&count=patient.reaction.reactionmeddrapt.exact",
	   	dataType: "json",
	   	success: function(data) {
	   		for(i=0;i<15;i++){
	    		var results = (data.results[i].term)
          if(data.results[i].term === "DRUG INEFFECTIVE"){
            results[i].term = ""
          }else if(data.results[i].term === ""){
            document.write("Try another search") 
          }else{
            		$("#effects").append(results + " " + "<br>" + "")
				console.log(data.results[i].term)
          }
	    
			}
	   	},
	   type: 'GET'
	});
}