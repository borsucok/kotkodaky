import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from './API';

class Grid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guys: [
                {
                    id: 1,
                    x: 1,
                    y: 1
                },
                {
                    id: 1,
                    x: 3,
                    y: 1
                },
                ,
                {
                    id: 5,
                    x: 6,
                    y: 1
                }
            ],
            board: [
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 1,
                      "y": 1
                    }
                  },
                  "pieces": [
                    {
                      "id": 1,
                      "playerId": 1,
                      "name": "IVAN.HROZNY_1_piece"
                    },
                    {
                      "id": 3,
                      "playerId": 3,
                      "name": "kikiriki_3_piece"
                    },
                    {
                      "id": 7,
                      "playerId": 7,
                      "name": "riekt_7_piece"
                    },
                    {
                      "id": 6,
                      "playerId": 6,
                      "name": "C++_6_piece"
                    }
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 1,
                      "y": 2
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 1,
                      "y": 3
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 1,
                      "y": 4
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 1,
                      "y": 5
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 1,
                      "y": 6
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 1,
                      "y": 7
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 1,
                      "y": 8
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 1,
                      "y": 9
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 1,
                      "y": 10
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 1,
                      "y": 11
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 1,
                      "y": 12
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 1,
                      "y": 13
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 1,
                      "y": 14
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 1,
                      "y": 15
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 1,
                      "y": 16
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 1,
                      "y": 17
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 1,
                      "y": 18
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 1,
                      "y": 19
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 2,
                      "y": 1
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 2,
                      "y": 2
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 2,
                      "y": 3
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 2,
                      "y": 4
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 2,
                      "y": 5
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 2,
                      "y": 6
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 2,
                      "y": 7
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 2,
                      "y": 8
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 2,
                      "y": 9
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 2,
                      "y": 10
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 2,
                      "y": 11
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 2,
                      "y": 12
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 2,
                      "y": 13
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 2,
                      "y": 14
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 2,
                      "y": 15
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 2,
                      "y": 16
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 2,
                      "y": 17
                    }
                  },
                  "pieces": [
                  ],
                  "action": {
                    "actionData": {
                      "id": 10
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 2,
                      "y": 18
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 2,
                      "y": 19
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 3,
                      "y": 1
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 3,
                      "y": 2
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 3,
                      "y": 3
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 3,
                      "y": 4
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 3,
                      "y": 5
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 3,
                      "y": 6
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 3,
                      "y": 7
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 3,
                      "y": 8
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 3,
                      "y": 9
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 3,
                      "y": 10
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 3,
                      "y": 11
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 3,
                      "y": 12
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 3,
                      "y": 13
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 3,
                      "y": 14
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 3,
                      "y": 15
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 3,
                      "y": 16
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 3,
                      "y": 17
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 3,
                      "y": 18
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 3,
                      "y": 19
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 4,
                      "y": 1
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 4,
                      "y": 2
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 4,
                      "y": 3
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 4,
                      "y": 4
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 4,
                      "y": 5
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 4,
                      "y": 6
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 4,
                      "y": 7
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 4,
                      "y": 8
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 4,
                      "y": 9
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 4,
                      "y": 10
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 4,
                      "y": 11
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 4,
                      "y": 12
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 4,
                      "y": 13
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 4,
                      "y": 14
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 4,
                      "y": 15
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 4,
                      "y": 16
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 4,
                      "y": 17
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 4,
                      "y": 18
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 4,
                      "y": 19
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 5,
                      "y": 1
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 5,
                      "y": 2
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 5,
                      "y": 3
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 5,
                      "y": 4
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 5,
                      "y": 5
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 5,
                      "y": 6
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 5,
                      "y": 7
                    }
                  },
                  "pieces": [
                    {
                      "id": 9,
                      "playerId": 9,
                      "name": "Zoligor_9_piece"
                    }
                  ],
                  "action": {
                    "actionData": {
                      "id": 7
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 5,
                      "y": 8
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 5,
                      "y": 9
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 5,
                      "y": 10
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 5,
                      "y": 11
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 5,
                      "y": 12
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 5,
                      "y": 13
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 5,
                      "y": 14
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 5,
                      "y": 15
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 5,
                      "y": 16
                    }
                  },
                  "pieces": [
                  ],
                  "action": {
                    "actionData": {
                      "id": 13
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 5,
                      "y": 17
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 5,
                      "y": 18
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 5,
                      "y": 19
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 6,
                      "y": 1
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 6,
                      "y": 2
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 6,
                      "y": 3
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 6,
                      "y": 4
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 6,
                      "y": 5
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 6,
                      "y": 6
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 6,
                      "y": 7
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 6,
                      "y": 8
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 6,
                      "y": 9
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 6,
                      "y": 10
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 6,
                      "y": 11
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 6,
                      "y": 12
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 6,
                      "y": 13
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 6,
                      "y": 14
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 6,
                      "y": 15
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 6,
                      "y": 16
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 6,
                      "y": 17
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 6,
                      "y": 18
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 6,
                      "y": 19
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 7,
                      "y": 1
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 7,
                      "y": 2
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 7,
                      "y": 3
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 7,
                      "y": 4
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 7,
                      "y": 5
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 7,
                      "y": 6
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 7,
                      "y": 7
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 7,
                      "y": 8
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 7,
                      "y": 9
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 7,
                      "y": 10
                    }
                  },
                  "pieces": [
                  ],
                  "action": {
                    "actionData": {
                      "id": 9
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 7,
                      "y": 11
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 7,
                      "y": 12
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 7,
                      "y": 13
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 7,
                      "y": 14
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 7,
                      "y": 15
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 7,
                      "y": 16
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 7,
                      "y": 17
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 7,
                      "y": 18
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 7,
                      "y": 19
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 8,
                      "y": 1
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 8,
                      "y": 2
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 8,
                      "y": 3
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 8,
                      "y": 4
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 8,
                      "y": 5
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 8,
                      "y": 6
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 8,
                      "y": 7
                    }
                  },
                  "pieces": [
                    {
                      "id": 4,
                      "playerId": 4,
                      "name": "admin_4_piece"
                    }
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 8,
                      "y": 8
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 8,
                      "y": 9
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 8,
                      "y": 10
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 8,
                      "y": 11
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 8,
                      "y": 12
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 8,
                      "y": 13
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 8,
                      "y": 14
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 8,
                      "y": 15
                    }
                  },
                  "pieces": [
                  ],
                  "action": {
                    "actionData": {
                      "id": 21
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 8,
                      "y": 16
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 8,
                      "y": 17
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 8,
                      "y": 18
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 8,
                      "y": 19
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 9,
                      "y": 1
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 9,
                      "y": 2
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 9,
                      "y": 3
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 9,
                      "y": 4
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 9,
                      "y": 5
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 9,
                      "y": 6
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 9,
                      "y": 7
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 9,
                      "y": 8
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 9,
                      "y": 9
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 9,
                      "y": 10
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 9,
                      "y": 11
                    }
                  },
                  "pieces": [
                  ],
                  "action": {
                    "actionData": {
                      "id": 17
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 9,
                      "y": 12
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 9,
                      "y": 13
                    }
                  },
                  "pieces": [
                  ],
                  "action": {
                    "actionData": {
                      "id": 4
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 9,
                      "y": 14
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 9,
                      "y": 15
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 9,
                      "y": 16
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 9,
                      "y": 17
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 9,
                      "y": 18
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 9,
                      "y": 19
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 10,
                      "y": 1
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 10,
                      "y": 2
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 10,
                      "y": 3
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 10,
                      "y": 4
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 10,
                      "y": 5
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 10,
                      "y": 6
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 10,
                      "y": 7
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 10,
                      "y": 8
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 10,
                      "y": 9
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 10,
                      "y": 10
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 10,
                      "y": 11
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 10,
                      "y": 12
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 10,
                      "y": 13
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 10,
                      "y": 14
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 10,
                      "y": 15
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 10,
                      "y": 16
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 10,
                      "y": 17
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 10,
                      "y": 18
                    }
                  },
                  "pieces": [
                  ],
                  "action": {
                    "actionData": {
                      "id": 23
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 10,
                      "y": 19
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 11,
                      "y": 1
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 11,
                      "y": 2
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 11,
                      "y": 3
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 11,
                      "y": 4
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 11,
                      "y": 5
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 11,
                      "y": 6
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 11,
                      "y": 7
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 11,
                      "y": 8
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 11,
                      "y": 9
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 11,
                      "y": 10
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 11,
                      "y": 11
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 11,
                      "y": 12
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 11,
                      "y": 13
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 11,
                      "y": 14
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 11,
                      "y": 15
                    }
                  },
                  "pieces": [
                  ],
                  "action": {
                    "actionData": {
                      "id": 24
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 11,
                      "y": 16
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 11,
                      "y": 17
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 11,
                      "y": 18
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 11,
                      "y": 19
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 12,
                      "y": 1
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 12,
                      "y": 2
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 12,
                      "y": 3
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 12,
                      "y": 4
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 12,
                      "y": 5
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 12,
                      "y": 6
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 12,
                      "y": 7
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 12,
                      "y": 8
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 12,
                      "y": 9
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 12,
                      "y": 10
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 12,
                      "y": 11
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 12,
                      "y": 12
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 12,
                      "y": 13
                    }
                  },
                  "pieces": [
                  ],
                  "action": {
                    "actionData": {
                      "id": 20
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 12,
                      "y": 14
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 12,
                      "y": 15
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 12,
                      "y": 16
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 12,
                      "y": 17
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 12,
                      "y": 18
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 12,
                      "y": 19
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 13,
                      "y": 1
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 13,
                      "y": 2
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 13,
                      "y": 3
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 13,
                      "y": 4
                    }
                  },
                  "pieces": [
                  ],
                  "action": {
                    "actionData": {
                      "id": 22
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 13,
                      "y": 5
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 13,
                      "y": 6
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 13,
                      "y": 7
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 13,
                      "y": 8
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 13,
                      "y": 9
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 13,
                      "y": 10
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 13,
                      "y": 11
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 13,
                      "y": 12
                    }
                  },
                  "pieces": [
                  ],
                  "action": {
                    "actionData": {
                      "id": 18
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 13,
                      "y": 13
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 13,
                      "y": 14
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 13,
                      "y": 15
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 13,
                      "y": 16
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 13,
                      "y": 17
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 13,
                      "y": 18
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 13,
                      "y": 19
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 14,
                      "y": 1
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 14,
                      "y": 2
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 14,
                      "y": 3
                    }
                  },
                  "pieces": [
                    {
                      "id": 8,
                      "playerId": 8,
                      "name": "Kotkodaky_8_piece"
                    }
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 14,
                      "y": 4
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 14,
                      "y": 5
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 14,
                      "y": 6
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 14,
                      "y": 7
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 14,
                      "y": 8
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 14,
                      "y": 9
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 14,
                      "y": 10
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 14,
                      "y": 11
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 14,
                      "y": 12
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 14,
                      "y": 13
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 14,
                      "y": 14
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 14,
                      "y": 15
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 14,
                      "y": 16
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 14,
                      "y": 17
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 14,
                      "y": 18
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 14,
                      "y": 19
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 15,
                      "y": 1
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 15,
                      "y": 2
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 15,
                      "y": 3
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 15,
                      "y": 4
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 15,
                      "y": 5
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 15,
                      "y": 6
                    }
                  },
                  "pieces": [
                  ],
                  "action": {
                    "actionData": {
                      "id": 3
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 15,
                      "y": 7
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 15,
                      "y": 8
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 15,
                      "y": 9
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 15,
                      "y": 10
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 15,
                      "y": 11
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 15,
                      "y": 12
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 15,
                      "y": 13
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 15,
                      "y": 14
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 15,
                      "y": 15
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 15,
                      "y": 16
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 15,
                      "y": 17
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 15,
                      "y": 18
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 15,
                      "y": 19
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 16,
                      "y": 1
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 16,
                      "y": 2
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 16,
                      "y": 3
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 16,
                      "y": 4
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 16,
                      "y": 5
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 16,
                      "y": 6
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 16,
                      "y": 7
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 16,
                      "y": 8
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 16,
                      "y": 9
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 16,
                      "y": 10
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 16,
                      "y": 11
                    }
                  },
                  "pieces": [
                  ],
                  "action": {
                    "actionData": {
                      "id": 19
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 16,
                      "y": 12
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 16,
                      "y": 13
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 16,
                      "y": 14
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 16,
                      "y": 15
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 16,
                      "y": 16
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 16,
                      "y": 17
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 16,
                      "y": 18
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 16,
                      "y": 19
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 17,
                      "y": 1
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 17,
                      "y": 2
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 17,
                      "y": 3
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 17,
                      "y": 4
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 17,
                      "y": 5
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 17,
                      "y": 6
                    }
                  },
                  "pieces": [
                  ],
                  "action": {
                    "actionData": {
                      "id": 6
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 17,
                      "y": 7
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 17,
                      "y": 8
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 17,
                      "y": 9
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 17,
                      "y": 10
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 17,
                      "y": 11
                    }
                  },
                  "pieces": [
                  ],
                  "action": {
                    "actionData": {
                      "id": 15
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 17,
                      "y": 12
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 17,
                      "y": 13
                    }
                  },
                  "pieces": [
                  ],
                  "action": {
                    "actionData": {
                      "id": 12
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 17,
                      "y": 14
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 17,
                      "y": 15
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 17,
                      "y": 16
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 17,
                      "y": 17
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 17,
                      "y": 18
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 17,
                      "y": 19
                    }
                  },
                  "pieces": [
                  ],
                  "action": {
                    "actionData": {
                      "id": 16
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 18,
                      "y": 1
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 18,
                      "y": 2
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 18,
                      "y": 3
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 18,
                      "y": 4
                    }
                  },
                  "pieces": [
                  ],
                  "action": {
                    "actionData": {
                      "id": 2
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 18,
                      "y": 5
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 18,
                      "y": 6
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 18,
                      "y": 7
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 18,
                      "y": 8
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 18,
                      "y": 9
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 18,
                      "y": 10
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 18,
                      "y": 11
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 18,
                      "y": 12
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 18,
                      "y": 13
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 18,
                      "y": 14
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 18,
                      "y": 15
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 18,
                      "y": 16
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 18,
                      "y": 17
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 18,
                      "y": 18
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 18,
                      "y": 19
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 19,
                      "y": 1
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 19,
                      "y": 2
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 19,
                      "y": 3
                    }
                  },
                  "pieces": [
                  ],
                  "action": {
                    "actionData": {
                      "id": 5
                    }
                  }
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 19,
                      "y": 4
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 19,
                      "y": 5
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 19,
                      "y": 6
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 19,
                      "y": 7
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 19,
                      "y": 8
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 19,
                      "y": 9
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 19,
                      "y": 10
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 19,
                      "y": 11
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 19,
                      "y": 12
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 19,
                      "y": 13
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 19,
                      "y": 14
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 19,
                      "y": 15
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 19,
                      "y": 16
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 19,
                      "y": 17
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 19,
                      "y": 18
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                },
                {
                  "id": null,
                  "position": {
                    "data": {
                      "x": 19,
                      "y": 19
                    }
                  },
                  "pieces": [
                  ],
                  "action": null
                }
              ]
        }

        this.width = 950;
        this.height = 950;
        this.ctx = null;
    }

    componentDidMount() {
        let canvas = document.getElementById('grid');
        canvas.width = this.width;
        canvas.height = this.height;
        let ctx = canvas.getContext('2d');
        this.ctx = ctx;
        this.redrawAll();
        document.onkeydown = this.onClickKey;
    }

    async login() {
        try {
            await API.join('Kotkodaky_8', 'kikirik');
            const myPos = await API.getMyPosition();
            console.log(myPos);
        }
        catch (e) {
            alert(e);
        }

    }

    onClickKey = (e) => {

        let newX = this.state.guys[0].x;
        let newY = this.state.guys[0].y;

        if (e.keyCode == '38') {
            // alert('up')
            newY -= 1;
        }
        if (e.keyCode == '40') {
            // alert('down')
            newY += 1;
        }
        if (e.keyCode == '37') {
            // alert('left')
            newX -= 1;
        }
        if (e.keyCode == "39") {
            // alert('right')
            newX += 1;
        }

        if (newY < 1) {
            newY = 1;
        }

        if (newY > 19) {
            newY = 19;
        }

        if (newX < 1) {
            newX = 1;
        }

        if (newX > 19) {
            newX = 19;
        }


        this.setState((prevState) => {
            prevState.guys[0].x = newX;
            prevState.guys[0].y = newY;
            return prevState;
        })
    }

    drawAllGuy = () => {
        this.state.guys.forEach((guy) => {
            this.drawGuy(guy.x, guy.y)
        })
    }

    drawGuy = (x, y) => {
        x = x - 1;
        y = y - 1;
        this.ctx.fillRect(x * 50, y * 50, 50, 50);
    }

    drawGrid = (w, h, step) => {
        let ctx = this.ctx;
        ctx.beginPath();
        for (let x = 0; x <= w; x += step) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
        }
        // set the color of the line
        // ctx.strokeStyle = 'rgb(255,0,0)';
        ctx.lineWidth = 1;
        // the stroke will actually paint the current path
        ctx.stroke();
        // for the sake of the example 2nd path
        ctx.beginPath();
        for (let y = 0; y <= h; y += step) {
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
        }
        // set the color of the line
        // ctx.strokeStyle = 'rgb(20,20,20)';
        // just for fun
        ctx.lineWidth = 1;
        // for your original question - you need to stroke only once
        ctx.stroke();
    }

    cleanAll = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
        // this.state.guys.forEach((guy) => {
        //     let x = guy.x - 1;
        //     let y = guy.y - 1;
        //     this.ctx.clearRect(x * 50,y * 50,50,50)
        // })
        this.drawGrid(this.width, this.height, 50);
    }

    redrawAll = () => {
        this.cleanAll();
        this.drawAllGuy();
    }

    render() {

        if (this.ctx) {
            this.redrawAll();
        }

        return (
            <div>
                <canvas id="grid">

                </canvas>
                <button onClick={this.redrawAll}>CLEAR ALL</button>
            </div>
        )
    }
}

Grid.propTypes = {};

export default Grid;