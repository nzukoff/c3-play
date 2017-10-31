var chart = c3.generate({
    bindto: '#chart',
    data: {
        x : 'x',        
        columns: [
            ['x', 'Top 5%', 'Bottom 5%', 'All Schools'],
            ['Rural', 42, 24, 32],
            ['Town', 12, 15, 14], 
            ['Suburban', 29, 37, 33], 
            ['City', 17, 24, 20]
        ], 
        type: 'bar', 
        colors: {
            Rural: '#0086bf',
            Town: '#5dbc5b',
            Suburban: '#ffd34e',
            City: '#e75135'
        },
        names: {
            data1: 'Name 1',
            data2: 'Name 2'
        }
   },
   axis: {
        x: {
            type: 'category'
        }
    }
});