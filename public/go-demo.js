var chart = new OrgChart(document.getElementById("orgchart"), {
  mouseScrool: OrgChart.action.none,
  nodeMouseClick: OrgChart.action.none,
  // nodeMouseClick: function () {
  //   console.log('nodeMouseClick -> ', arguments);
  // },
  nodeBinding: {
    field_0: "name"
  },
  nodes: [
    { id: 1, name: "Amber McKenzie" },
    { id: 2, pid: 1, name: "Ava Field" },
    { id: 3, pid: 1, name: "Peter Stevens" }
  ]
});
chart.on('click', function (sender, args) {
  console.log('click -> ', arguments);
  // your code goes here
  // return false; to cancel the operation
});
