var data = {
    labels: ["HTML5/CSS3", "React", "SCSS", "JavaScript", "Android", "SQL", "C/C++", "Networks"],
    datasets: [
        {
            label: "Web SkillSet",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [90, 70, 50, 50, 50, 60, 60, 40]
        }
    ]
};

var options = {
  pointLabelFontColor: '#ECF0F1', 
  responsive: true,
  scaleFontColor: '#ECF0F1',
  showTooltips: false,
}
window.onload = function(){
  var context = document.getElementById('skillsChart').getContext("2d");
  var skillsChart = new Chart(context).Radar(data, options);

}
