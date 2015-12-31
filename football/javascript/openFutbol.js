/*

  OPENFUTBOL JSON Data Analyzer
    This is a library for analyzing the JSON Data from https://github.com/openfootball which has a lot of data on Futbol matches

*/

var OPENFUTBOL = {

  /*

      gatherClubDataForSeason :: formats the teams for a given league in a given season represented by {clubData}
        INPUT
          {clubData} -- holds the formatted data from a clubs JSON
        OUTPUT
          array of clubs with the keys {name, code}

  */


  gatherClubDataForSeason: function(clubData){
    var clubs = [];

    clubData.clubs.forEach(function(club){
      clubs.push({
        name: club.name,
        code: club.code
      })
    })

    return clubs;
  },

  /*

      gatherTeamDataForSeason :: gathers all matches played by {teamCode} in a given {season}
        INPUT
          season -- holds the formatted data from a season JSON
          teamCode -- three letter code for the team
        OUTPUT
          array of matches with the keys {date, score, atHome, opponent, goalDifference}
            NOTE: goalDifference will be negative for a loss and positive for a win

  */

  gatherTeamDataForSeason: function(season, teamCode){
    var teamResults = [];

    //Question 1, on which Matchdays did MUN play?
    season.rounds.forEach(function(round){
      round.matches.forEach(function(match){
        var matchData = {};
        if(match.team1.code === teamCode || match.team2.code === teamCode){

          matchData.date = match.date;
          matchData.score = match.score1.toString() + '-' + match.score2.toString();

          if (match.team1.code === teamCode){
            matchData.opponent = match.team2.name;
            matchData.goalDifference = match.score1 - match.score2;
            matchData.atHome = true;
          } else {
            matchData.opponent = match.team1.name;
            matchData.goalDifference = match.score2 - match.score1;
            matchData.atHome = false;
          }

          teamResults.push(matchData);
          return;
        }
      });
    });

    return teamResults;
  },

  charts: {

    /*

      generateWinLoss :: draws a pie chart into the {chartContext} canvas showing {wins, losses, and draws}
        INPUT
          wins -- number of wins for the season
          losses -- number of losses for the season
          draws -- number of draws for the season
          chartContext -- a 2D context for a canvas element
        OUTPUT
          none, stateful, draws into the chart context

    */

    generateWinLoss: function(wins, losses, draws, chartContext){
      var data = [
        {
          value: wins,
          color: '#019875',
          highlight: '#1E824C',
          label: 'Wins'
        },
        {
          value: losses,
          color: '#96281B',
          highlight: '#C0392B',
          label: 'Losses'
        },
        {
          value: draws,
          color: '#96281B',
          highlight: '#C0392B',
          label: 'Ties'
        }
      ]

      var pieChart = new Chart(chartContext).Pie(data, {
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
      });
    }
  },

  tables:{

    /*

      generateSeasonResultsTable :: draws a pie chart into the {chartContext} canvas and fills in the {seasonResultsTable} with all matches played by {currentClub}
        INPUT
          seasonResultsTable -- a <table> into which the results will be drawn
          currentClub -- club code for which to generate the table
          [chartContext] -- a 2D context for a canvas element (optional)
        OUTPUT
          none, stateful, draws into the chart context

    */

    generateSeasonResultsTable: function(seasonResultsTable, currentClub, chartContext){
      var headings = "<tr><th>Date</th><th>Opponent</th><th>Score</th></tr>"
      seasonResultsTable.innerHTML= headings;

      var season = OPENFUTBOL.gatherTeamDataForSeason(EPL1415SCORES, currentClub);

      var wins = 0, losses = 0, draws = 0;

      // displaying the results of the season as a table
      season.forEach(function(match){
        var row = document.createElement('tr');

        var date = document.createElement('td');
        date.innerText = match.date;
        row.appendChild(date);

        var opponent = document.createElement('td');
        opponent.innerText = match.opponent;
        row.appendChild(opponent);

        var score = document.createElement('td');
        if (match.goalDifference > 0){
          score.innerText = match.score+' (W)';
          wins += 1;
        }else {
          score.innerText = match.score+' (L)';
          losses += 1;
        }
        row.appendChild(score);

        seasonResultsTable.appendChild(row);
      })

      //only generate the chart if its specified
      if (!!chartContext)
        OPENFUTBOL.charts.generateWinLoss(wins, losses, draws, chartContext);
    }
  }



}
