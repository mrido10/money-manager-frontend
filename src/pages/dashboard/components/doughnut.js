import React, { Component } from 'react'
import Chart from 'chart.js/auto';
import './doughnut.css'
import axios from 'axios';

class Doughnut extends Component {
    state = {
        data: {
            color: []
        }
    }
    showDoughnut = () => {
        let data = {
            labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [1, 2, 3, 4, 5],
                    backgroundColor: this.state.data.color
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
        axios.get(this.props.url)
        .then(resp => {

        })
        .catch(err => {
            this.setState({
                data: {
                    color: [
                        '#ef5350',
                        '#ec407a',
                        '#ab47bc',
                        '#5c6bc0',
                        '#d4e157',
                    ]
                }
            }, () => {
                this.showDoughnut()
            })
        })
       
    }

    render() {
        return(
            <div className='dahboard-doughnut'>
                <h2>{this.props.title}</h2>
                <div className='box-doughnut bg-light rounded-2 pt-4 pb-4 shadow-sm'>
                    <canvas id={'doughnut' + this.props.seq} ></canvas>
                </div>
            </div>
        )
    }
}

export default Doughnut