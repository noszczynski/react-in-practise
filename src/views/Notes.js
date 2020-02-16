import React from 'react';
import UserPage from 'templates/UserPage';
import Card from 'components/molecules/Card/Card';

const notes = [
  {
    header: 'My best note ever!',
    date: '3 days',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ipsum, iste itaque minus, molestiae molestias nulla quae quia rerum sequi suscipit velit voluptatum. Culpa eveniet ipsum praesentium sunt vel. Dolores!',
    link: null,
  },
  {
    header: 'My best note ever!',
    date: '3 days',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ipsum, iste itaque minus, molestiae molestias nulla quae quia rerum sequi suscipit velit voluptatum. Culpa eveniet ipsum praesentium sunt vel. Dolores!',
    link: null,
  },
  {
    header: 'My best note ever!',
    date: '3 days',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ipsum, iste itaque minus, molestiae molestias nulla quae quia rerum sequi suscipit velit voluptatum. Culpa eveniet ipsum praesentium sunt vel. Dolores!',
    link: null,
  },
  {
    header: 'My best note ever!',
    date: '3 days',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ipsum, iste itaque minus, molestiae molestias nulla quae quia rerum sequi suscipit velit voluptatum. Culpa eveniet ipsum praesentium sunt vel. Dolores!',
    link: null,
  },
  {
    header: 'My best note ever!',
    date: '3 days',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ipsum, iste itaque minus, molestiae molestias nulla quae quia rerum sequi suscipit velit voluptatum. Culpa eveniet ipsum praesentium sunt vel. Dolores!',
    link: null,
  },
  {
    header: 'My best note ever!',
    date: '3 days',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ipsum, iste itaque minus, molestiae molestias nulla quae quia rerum sequi suscipit velit voluptatum. Culpa eveniet ipsum praesentium sunt vel. Dolores!',
    link: null,
  },
  {
    header: 'My best note ever!',
    date: '3 days',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ipsum, iste itaque minus, molestiae molestias nulla quae quia rerum sequi suscipit velit voluptatum. Culpa eveniet ipsum praesentium sunt vel. Dolores!',
    link: null,
  },
];

const Notes = () => (
  <UserPage pageType="notes">
    {notes.map(({ header, date, content, link }) => {
      return <Card cardType="notes" header={header} date={date} content={content} link={link} />;
    })}
  </UserPage>
);

export default Notes;
