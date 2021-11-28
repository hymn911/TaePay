/*!
 * Chart_script.js
 * Author       : Bestwebcreator.
 * Template Name: Cryptocash – ICO, Cryptocurrency Website & ICO Landing Page HTML + Dashboard Template
 * Version      : 1.7
*/
var config3 = {
  type: 'doughnut',
  data: {
    datasets: [
    {
     data: [40, 40, 10, 5, 5],
      backgroundColor: ['#f17776','#0eadc9','#5b5da8','#f69040','#78c596'],
	  borderWidth: 1,
	  labels: [
      "ICO",
      "Team & Advisor",
      "Angel Inestors",
	  "Reserve",
	  "Airdrop"
	  ]
    },
    /* Outer doughnut data ends*/
    /* Inner doughnut data starts*/
    {
      data: [40, 40, 10, 5, 5],
      backgroundColor: ['#9a46cc','#d3b62f','#d26187','#00e1f4','#4449cc'],
	  borderWidth: 1,
	  labels: [
      "ICO",
      "Team & Advisor",
      "Angel Inestors",
	  "Reserve",
	  "Airdrop"
    ]
    }
    /* Inner doughnut data ends*/
    ],

  },
  options: {
    maintainAspectRatio : false,
    responsive: true,
    legend: {
      display: false,
    },
	tooltips: {
		callbacks: {
			label: function(tooltipItem, data) {
				var dataset = data.datasets[tooltipItem.datasetIndex];
				var index = tooltipItem.index;
				return dataset.labels[index] ;
			}
		}
	},
    title: {
      display: false,
      text: 'Chart.js Doughnut Chart'
    },
	 pieceLabel: {
	  render: 'percentage',
	  fontColor: ['#fff','#fff','#fff','#fff','#fff'],
	  fontSize: 16,
	  arc: true,
	  fontStyle: 'bold',
	  position: 'inside',
	  precision: 2
	 },
    animation: {
      animateScale: true,
      animateRotate: true
    },
  }
};

window.onload = function() {
var ctx3 = document.getElementById("token_dist2").getContext("2d");
window.myDoughnut = new Chart(ctx3, config3);
};