var c3chart1 = c3.generate({
    bindto: '#c3chart1',
    data: {
        x : 'x',        
        type: 'bar', 
        colors: {
            'Top 5%': '#cdc348',
            'Bottom 5%': '#15608d'
        },
        columns: []
    },
    legend: {
        position: 'right'
    },
    axis: {
        x: {
            type: 'category'
        },
        y: {
            min: 800,
            max: 1200,
            padding: {top:0, bottom:0}
        }
    },
    transition: {duration: 2000}
});

setTimeout(function () {
    c3chart1.load({
        columns: [
            ['x', 'Overall CASE Score', 'Classroom: 4Cs'],
            ['Top 5%', 1118, 1066],
            ['Bottom 5%', 989, 866], 
        ], 
    });
}, 500);

var c3chart2 = c3.generate({
    bindto: '#c3chart2',
    data: {
        x : 'x',        
        type: 'bar', 
        colors: {
            'Top 5%': '#cdc348',
            'Bottom 5%': '#15608d'
        },
        columns: []
    },
    legend: {
        position: 'right'
    },
    axis: {
        x: {
            type: 'category'
        },
        y: {
            max:60,
            padding: {top:0, bottom:0},
            tick: {
                values: [10,20,30,40,50,60],
                format: function (d) { return `${d}%`; }
            }
        }
    },
    transition: {duration: 2000}
});

setTimeout(function () {
    c3chart2.load({
        columns: [
            ['x', 'Overall CASE Score', 'Classroom: 4Cs'],
            ['Top 5%', 39.81, 40.31],
            ['Bottom 5%', 39.69, 34.47], 
        ], 
    });
}, 500);

var c3chart3 = c3.generate({
    bindto: '#c3chart3',
    data: {
        x : 'x',        
        type: 'bar', 
        colors: {
            'Top 5%': '#cdc348',
            'Bottom 5%': '#15608d'
        },
        columns: []
    },
    legend: {
        position: 'right'
    },
    axis: {
        x: {
            type: 'category'
        },
        y: {
            max:60,
            padding: {top:0, bottom:0},
            tick: {
                values: [10,20,30,40,50,60],
                format: function (d) { return `${d}%`; }
            }
        }
    },
    transition: {duration: 2000}
});

setTimeout(function () {
    c3chart3.load({
        columns: [
            ['x', 'Overall CASE Score', 'Classroom: 4Cs'],
            ['Top 5%', 40.66, 39.17],
            ['Bottom 5%', 54.43, 50.78], 
        ], 
    });
}, 500);

var c3chart4 = c3.generate({
    bindto: '#c3chart4',
    data: {
        x : 'x',        
        type: 'bar', 
        colors: {
            'Top 5%': '#cdc348',
            'Bottom 5%': '#15608d'
        },
        columns: []
    },
    legend: {
        position: 'right'
    },
    axis: {
        x: {
            type: 'category'
        },
        y: {
            max:60,
            padding: {top:0, bottom:0},
            tick: {
                values: [10,20,30,40,50,60],
                format: function (d) { return `${d}%`; }
            }
        }
    },
    transition: {duration: 2000}
});

setTimeout(function () {
    c3chart4.load({
        columns: [
            ['x', 'Access at School', 'Access at Home'],
            ['Top 5%', 38.62, 28.05],
            ['Bottom 5%', 58.43, 77.79], 
        ], 
    });
}, 500);

var c3chart5 = c3.generate({
    bindto: '#c3chart5',
    data: {
        x : 'x',        
        type: 'bar', 
        colors: {
            'Top 5%': '#cdc348',
            'Bottom 5%': '#15608d'
        },
        columns: []
    },
    legend: {
        position: 'right'
    },
    axis: {
        x: {
            type: 'category'
        },
        y: {
            max:60,
            padding: {top:0, bottom:0},
            tick: {
                values: [10,20,30,40,50,60],
                format: function (d) { return `${d}%`; }
            }
        }
    },
    transition: {duration: 2000}
});

setTimeout(function () {
    c3chart5.load({
        columns: [
            ['x', 'FRL Percent Rate'],
            ['Top 5%', 49.97],
            ['Bottom 5%', 52.32], 
        ], 
    });
}, 500);

var c3chart6 = c3.generate({
    bindto: '#c3chart6',
    data: {
        x : 'x',        
        type: 'bar', 
        colors: {
            'Top 5%': '#cdc348',
            'Bottom 5%': '#15608d'
        },
        columns: []
    },
    legend: {
        position: 'right'
    },
    axis: {
        x: {
            type: 'category'
        },
        y: {
            max:60,
            padding: {top:0, bottom:0},
            tick: {
                values: [10,20,30,40,50,60],
                format: function (d) { return `${d}%`; }
            }
        }
    },
    transition: {duration: 2000}
});

setTimeout(function () {
    c3chart6.load({
        columns: [
            ['x', 'Environment: The 3Ps', 'Environment: Beliefs'],
            ['Top 5%', 43.31, 44.43],
            ['Bottom 5%', 55.02, 55.50], 
        ], 
    });
}, 500);