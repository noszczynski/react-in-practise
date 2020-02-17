import React from 'react';
import GridTemplate from 'templates/GridTemplate';

const notes = [
  {
    id: '1',
    header: 'My best note ever!',
    date: '3 days',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ipsum, iste itaque minus, molestiae molestias nulla quae quia rerum sequi suscipit velit voluptatum. Culpa eveniet ipsum praesentium sunt vel. Dolores!',
    link: null,
  },
];

const Notes = () => <GridTemplate pageType="notes">{notes}</GridTemplate>;

Notes.propTypes = {};

export default Notes;
