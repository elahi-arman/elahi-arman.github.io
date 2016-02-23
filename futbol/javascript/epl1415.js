window.onload = function(){

  //variables initialization
  var clubList = document.getElementById('club-list');
  var clubs = OPENFUTBOL.gatherClubDataForSeason(EPL1415CLUBS);
  var clubButtons = document.querySelectorAll('.club-button');

  // console.dir(clubButtons);
  // //set on change handler to set table data
  // clubButtons.forEach(function(element){
  //   OPENFUTBOL.tables.generateSeasonResultsTable(
  //     document.getElementById('season-results'),
  //     element.value
  //   )
  // });


  //initialize all the clubs for this season
  clubs.forEach(function(club){
    var newClubOption = document.createElement('button');
    newClubOption.textContent = club.name;
    newClubOption.value = club.code;
    newClubOption.className = 'club-button inactive';

    newClubOption.onclick= function(e){
      OPENFUTBOL.tables.generateSeasonResultsTable(
        document.getElementById('season-results-body'),
        e.target.value
      );

      [].filter.call(e.target.parentNode.children, function(child) {

          if (child === e.target)
            child.className = 'club-button active';
          else
            child.className = 'club-button inactive'
      });

    }
    clubList.appendChild(newClubOption);

  })
}
