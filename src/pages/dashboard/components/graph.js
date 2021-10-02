import React, { Component } from 'react'
import Chart from 'chart.js/auto';
import './graph.css'


class Graph extends Component {
    state = {
        statistic: {
            labels: {
                month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                ]
            }
        }
    }

    showChart = () => {
        let data = {
            labels: this.state.statistic.labels.month,
            datasets: [
                { 
                    data: [6000000, 5900000, 6100000, 5800000, 6000000, 8000000, 9000000, 10000000, 9000000],
                    label: 'Income',
                    borderColor: 'rgb(31, 157, 255)',
                    fill: false,
                    tension: 0.3, 
                    backgroundColor: 'rgba(96, 91, 255, 0.1)',
                    fill: 'start'
                }, { 
                    data: [3100000, 2900000, 1700000, 2600000, 3000000, 2500000, 1400000, 2100000, 2000000],
                    label: 'Expence',
                    borderColor: 'rgb(253, 104, 107)',
                    fill: false,
                    tension: 0.3, 
                    backgroundColor: 'rgba(255, 161, 4, 0.1)',
                    fill: 'start'
                }
            ]
        }
        new Chart(document.getElementById('statistic'), {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                        position: 'right',
                    },
                    title: {
                        display: false,
                        text: 'Statistic'
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            callback: (val, idx, values) => {
                                if (val.toString().length >= 0 &&val.toString().length <= 3) {
                                    return val
                                } else if (val.toString().length > 3 && val.toString().length <= 6) {
                                    return this.getAxis(val.toString(), 3)  + 'K'
                                } else if (val.toString().length > 6 && val.toString().length <= 9) {
                                    return this.getAxis(val.toString(), 6) + 'M'
                                }
                            }
                        }
                    }
                }
            }
        });
    }

    getAxis = (val, x) => {
        return val.substring(0, val.length - x)
    }

    componentDidMount() {
        this.showChart()
    }

    render() {
        return(
            <div id='dashboard-graph'>
                <h2>Statistic</h2>
                <div className='box-graph bg-light rounded-2 p-4 shadow-sm'>
                    <canvas id='statistic' ></canvas>
                </div>
            </div>
        )
    }
}

export default Graph