import React from 'react';
import UserPage from 'templates/UserPage';

const twitters = [
  {
    header: 'Hello Adam',
    date: '3 days',
    content: 'Culpa eveniet ipsum praesentium sunt vel. Dolores!',
    link:
      'https://scontent.fktw2-1.fna.fbcdn.net/v/t1.0-9/p960x960/83120798_2739813729417672_3825953439892897792_o.jpg?_nc_cat=103&_nc_ohc=BEjbQwOrImMAX93jNhS&_nc_ht=scontent.fktw2-1.fna&_nc_tp=6&oh=0350b9065dd7f0fcee4005ffb9ec1281&oe=5EFF9F10',
  },
  {
    header: 'Damn',
    date: '3 days',
    content: 'Culpa eveniet ipsum praesentium sunt vel. Dolores!',
    link:
      'https://scontent.fktw2-1.fna.fbcdn.net/v/t1.0-9/p960x960/83120798_2739813729417672_3825953439892897792_o.jpg?_nc_cat=103&_nc_ohc=BEjbQwOrImMAX93jNhS&_nc_ht=scontent.fktw2-1.fna&_nc_tp=6&oh=0350b9065dd7f0fcee4005ffb9ec1281&oe=5EFF9F10',
  },
  {
    header: 'Jan Kowalski',
    date: '2 days',
    content: 'Culpa eveniet ipsum praesentium sunt vel. Dolores!',
    link:
      'https://scontent.fktw2-1.fna.fbcdn.net/v/t1.0-9/p960x960/83120798_2739813729417672_3825953439892897792_o.jpg?_nc_cat=103&_nc_ohc=BEjbQwOrImMAX93jNhS&_nc_ht=scontent.fktw2-1.fna&_nc_tp=6&oh=0350b9065dd7f0fcee4005ffb9ec1281&oe=5EFF9F10',
  },
];

const Twitters = () => <UserPage pageType="twitters">{twitters}</UserPage>;

export default Twitters;
