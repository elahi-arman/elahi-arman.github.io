


// d3.select(parent).selectAll(element)
//     .data(data)
//   .enter().append(element);

const container = '#svg-container'

function colorChord(container, data){
  var t = d3.transition().duration(750);

  var notes = d3.select(container)
    .selectAll("circle")
    .data(data)

  notes.exit().remove()

  notes.enter()
    .append("circle")
      .attr("cx", d => d.id * 100 - 50)
      .attr("cy", d => d.accidental == "natural" ? 55 : d.accidental == "flat" ? 95 : 15)
      .attr("r", 10)
      .attr("fill", d => d.on ? "#333" : "#eee")
      .attr("class", "inChord")
}

function changeChord(event){
  colorChord('#svg-container', Chords[event.target.dataset.chord])
}

colorChord(container, Chords.major)
Array.from(document.getElementsByClassName('js-chordSet')).forEach(element => {
  element.onclick = changeChord
})
