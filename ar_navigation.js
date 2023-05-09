let cordinates={}
$(document).ready(function(){
    getcoordinates()
})

function getcoordinates(){
    let search_params=new URLSearchParams(window.location.search)
    if(search_params.has('source') && search_params.has('destination'))
{
    let source=search_params.get('source')
    let destination=search_params.get('destination')
    cordinates.source_lat=source.split(";")[0]
    cordinates.source_lon=source.split(";")[1]
    
    cordinates.destination_lat=destination.split(";")[0]
    cordinates.destination_lon=destination.split(";")[1]
}

else{
    alert("COORDINATES NOT SELECTED")
    window.history.back()
}

}