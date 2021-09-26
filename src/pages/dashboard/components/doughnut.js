import React, { Component } from 'react'
import Chart from 'chart.js/auto';
import './doughnut.css'

class Doughnut extends Component {
    showDoughnut = () => {
        let data = {
            labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [1, 2, 3, 4, 5],
                    backgroundColor: [
                        'red',
                        'orange',
                        'yellow',
                        'green',
                        'blue',
                    ],
                }
            ]
        }
        new Chart(document.getElementById('doughnut' + this.props.seq), {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                legend: {
                    display: true,
                    position: 'right',
                },
                title: {
                        display: false,
                        text: 'Chart.js Doughnut Chart'
                    }
                }
            }
        }).update()
    }

    componentDidMount() {
        this.showDoughnut()
    }

    render() {
        return(
            <div className='dahboard-doughnut'>
                <h2>{this.props.title}</h2>
                <div className='box-doughnut bg-light rounded-2'>
                    <canvas id={'doughnut' + this.props.seq} ></canvas>
                </div>
            </div>
        )
    }
}

export default Doughnut