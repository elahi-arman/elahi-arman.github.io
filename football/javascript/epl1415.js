window.onload = function(){

  //variables initialization
  var clubList = document.getElementById('club-list');
  var clubs = OPENFUTBOL.gatherClubDataForSeason(EPL1415CLUBS);

  //set on change handler to set table data
  // clubDropdown.onchange = function(e){
  //   OPENFUTBOL.tables.generateSeasonResultsTable(
  //     document.getElementById('season-results'),
  //     e.target.value,
  //     document.getElementById('win-loss').getContext('2d'));
  // };


  //initialize all the clubs for this season
  clubs.forEach(function(club){
    var newClubOption = document.createElement('button');
    newClubOption.textContent = club.name;
    newClubOption.value = club.code;
    newClubOption.className = 'club-button';
    clubList.appendChild(newClubOption);
  })
}
