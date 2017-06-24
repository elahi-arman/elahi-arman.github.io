// d3.select(parent).selectAll(element)
//     .data(data)
//   .enter().append(element);

function getY(d){
  return d.accidental == "natural" ? 55 : d.accidental == "flat" ? 95 : 15
}

function getX(d){
    return d.id * 100
}

function colorChord(container, data){
  let t = d3.transition().duration(300);

  let notes = d3.select(container)
    .selectAll("circle")
    .data(data, d => d)

  // notes.attr("class", "update")

  notes.exit()
      .attr("class", "exit")
    .transition(t)
      .attr("y", 0)
      .style("fill-opacity", 1e-6)
      .remove()

  notes.attr("class", "update")
    .transition(t)
      .style("fill-opacity", 1)

  notes.enter().append("circle")
      .attr("class", "enter")
      // .merge(notes)
      .attr("cx", d => getX(d))
      .attr("cy", d => getY(d))
      .attr("r", radius)
      .attr("fill", d => d.on ? "#3498db" : "#eee")
      .attr("class", "inChord")
    .transition(t)
      .style("fill-opacity", 1)

  // notes.exit().transition(t).remove()
}

function changeChord(event){
  colorChord('#svg-container', Chords[event.target.dataset.chord])
  window.currentChord = Chords[event.target.dataset.chord]
  Array.from(document.getElementsByClassName('js-chordSet')).forEach(element => {
    if (element.classList.contains('current')){
      element.classList.remove('current')
    }

    event.target.classList.add('current')

  })
}

const container = '#svg-container'
const radius = 10;
window.currentChord = Chords['major']
colorChord(container, Chords['major'])
Array.from(document.getElementsByClassName('js-chordSet')).forEach(element => {
  element.onclick = changeChord
})
