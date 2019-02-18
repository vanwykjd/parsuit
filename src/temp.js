<Distances holes={this.props.course.holes} tees={this.props.course.course_tees} tee_colors={this.props.course.tee_colors} />

const courses = [
  {
    name: "Old South Golf Links",
    location: "Bluffton, SC",
    slope: { 'Gold': 135,
             'Blue': 130,
             'White': 113,
             Red: 120 
           },
    rating: { 'Gold': 72.7,
              'Blue': 70.5,
              'White': 68.5,
              Red: 69.2 
            },
    'tees': [ 'Gold', 'Blue', 'White', 'Red' ],
    holes: { 1: { par: 4, handicap: 5 },
             2: { par: 4, handicap: 11 },
             3: { par: 5, handicap: 9 },
             4: { par: 3, handicap: 17 },
             5: { par: 5, handicap: 13 },
             6: { par: 4, handicap: 1 },
             7: { par: 4, handicap: 7 },
             8: { par: 3, handicap: 15 },
             9: { par: 4, handicap: 3 },
             10: { par: 4, handicap: 10 },
             11: { par: 3, handicap: 18 },
             12: { par: 4, handicap: 12 },
             13: { par: 4, handicap: 4 },
             14: { par: 5, handicap: 2 },
             15: { par: 4, handicap: 14 },
             16: { par: 4, handicap: 8 },
             17: { par: 3, handicap: 16 },
             18: { par: 5, handicap: 6 },
          }
  },
  {
    'name': "Heron Point by Pete Dye",
    'location': "Hilton Head Island",
    'state': 'South Carolina',
    'zip': 29928,
    
    'tees': {
      'M': ['Dye', 'Blue', 'White', 'Gold', 'Green'],
      'F': ['White', 'Gold', 'Green'],
    },
    
    'ratings': {
      'M': 
        {
          'Dye': {
            'Course': 74.0,
            'Slope': 140,
          },
          'Blue': {
            'Course': 72.0,
            'Slope': 135,
          },
          'White': {
            'Course': 70.4,
            'Slope': 124,
          },
          'Gold': {
            'Course': 68.0,
            'Slope': 116,
          },
          'Green': {
            'Course': 66.3,
            'Slope': 112,
          },
      },
      'F': 
        {
          'White': {
            'Course': 76.7,
            'Slope': 139,
            'Tot': 6020,
        },
          'Gold': {
            'Course': 74.6,
            'Slope': 133,
            'Tot': 5569,
          },
          'Green': {
            'Course': 71.6,
            'Slope': 123,
            'Tot': 5151,
          },
        }
      },
    'yardages': {
      'Dye': {
        1: 403,
        2: 312,
        3: 379,
        4: 239,
        5: '441 | 414',
        6: 547,
        7: 179,
        8: 420,
        9: 519,
        10: 367,
        11: 617,
        12: 413,
        13: 157,
        14: '414 | 357',
        15: 470,
        16: '233 | 227',
        17: 489,
        18: '436 | 403',
      },
      'Blue': {
        1: 376,
        2: 286,
        3: 363,
        4: 208,
        5: 380,
        6: 539,
        7: 164,
        8: 412,
        9: 514,
        10: 348,
        11: 550,
        12: 403,
        13: 141,
        14: 350,
        15: 440,
        16: 196,
        17: 476,
        18: 377,
      },
      'White': {
        1: 321,
        2: 268,
        3: 332,
        4: 160,
        5: 349,
        6: 508,
        7: 143,
        8: 386,
        9: 492,
        10: 329,
        11: 516,
        12: 381,
        13: 128,
        14: 328,
        15: 393,
        16: 171,
        17: 449,
        18: 366,
      },
      'Gold': {
        1: 312,
        2: 260,
        3: 309,
        4: 130,
        5: 311,
        6: 495,
        7: 119,
        8: 360,
        9: 480,
        10: 300,
        11: 448,
        12: 360,
        13: 107,
        14: 304,
        15: 348,
        16: 140,
        17: 436,
        18: 350,
      },
      'Green': {
        1: 295,
        2: 244,
        3: 292,
        4: 115,
        5: 305,
        6: 422,
        7: 114,
        8: 319,
        9: 417,
        10: 281,
        11: 448,
        12: 310,
        13: 107,
        14: 304,
        15: 326,
        16: 134,
        17: 401,
        18: 317,
      },
    },
    'pars': {
      '1': 4,
      '2': 4,
      '3': 4,
      '4': 3,
      '5': 4,
      '6': 5,
      '7': 3,
      '8': 4,
      '9': 5,
      '10': 4,
      '11': 5,
      '12': 4,
      '13': 3,
      '14': 4,
      '15': 4,
      '16': 3,
      '17': 5,
      '18': 4,
    },
    'handicaps': {
      'Dye': {
        '1': 13,
        '2': 15, 
        '3': 5, 
        '4': 11,
        '5': 9,
        '6': 3,
        '7': 17,
        '8': 1,
        '9': 7,
        '10': 18,
        '11': 12,
        '12': 4,
        '13': 16,
        '14': 6,
        '15': 2,
        '16': 14,
        '17': 8,
        '18': 10,
      },
      'Blue': {
        '1': 13,
        '2': 15, 
        '3': 5, 
        '4': 11,
        '5': 9,
        '6': 3,
        '7': 17,
        '8': 1,
        '9': 7,
        '10': 18,
        '11': 12,
        '12': 4,
        '13': 16,
        '14': 6,
        '15': 2,
        '16': 14,
        '17': 8,
        '18': 10,
      },
      'White': {
        '1': 13,
        '2': 15, 
        '3': 5, 
        '4': 11,
        '5': 9,
        '6': 3,
        '7': 17,
        '8': 1,
        '9': 7,
        '10': 18,
        '11': 12,
        '12': 4,
        '13': 16,
        '14': 6,
        '15': 2,
        '16': 14,
        '17': 8,
        '18': 10,
      },
      'Gold': {
        '1': 13,
        '2': 15, 
        '3': 5, 
        '4': 11,
        '5': 9,
        '6': 3,
        '7': 17,
        '8': 1,
        '9': 7,
        '10': 18,
        '11': 12,
        '12': 4,
        '13': 16,
        '14': 6,
        '15': 2,
        '16': 14,
        '17': 8,
        '18': 10,
      },
      'Green': {
        '1': 11,
        '2': 13,
        '3': 5,
        '4': 15,
        '5': 9,
        '6': 3,
        '7': 17,
        '8': 1,
        '9': 7,
        '10': 14,
        '11': 8,
        '12': 12,
        '13': 18,
        '14': 10,
        '15': 6,
        '16': 16,
        '17': 4,
        '18': 2,
      },
    },
    'holes': [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
  }  
  
];