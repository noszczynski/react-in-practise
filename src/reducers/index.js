const initialState = {
  twitters: [
    {
      id: 1,
      header: 'Sample twitter profile',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      date: '1 day',
      link: 'https://i.pravatar.cc/300',
    },
    {
      id: 2,
      header: 'Redux guy',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      date: '1 day',
      link: 'https://i.pravatar.cc/300',
    },
    {
      id: 3,
      header: 'React router stuff',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      date: '5 days',
      link: 'https://i.pravatar.cc/300',
    },
    {
      id: 4,
      header: 'Super animacje!',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      date: '10 days',
      link: 'https://i.pravatar.cc/300',
    },
  ],
  articles: [
    {
      id: 1,
      header: 'Why we need code review?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      date: '1 day',
      link: 'https://dzone.com/articles/what-is-code-review-and-why-do-you-need-it',
    },
    {
      id: 2,
      header: 'Global warming',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      date: '2 day',
      link:
        'https://www.skeptic.com/reading_room/how-we-know-global-warming-is-real/?gclid=Cj0KCQiAtOjyBRC0ARIsAIpJyGOj0Pl2e7kkE1emqChVUK8wTd40Tk_zgk4vHZiPUKM1qdt-gx1xutIaAv5IEALw_wcB',
    },
    {
      id: 3,
      header: 'Virus pandemic',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      date: '3 day',
      link: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019',
    },
    {
      id: 4,
      header: 'React course',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      date: '4 day',
      link: 'https://eduweb.pl/sciezki/react',
    },
  ],
  notes: [
    {
      id: 1,
      header: 'Shopping list for party',
      content: `
        - milk
        - beer
        - good mood
        `,
      date: '1 day',
    },
    {
      id: 2,
      header: 'Stand-up',
      content: `daily stand-up was postponed to tomorrow`,
      date: '1 day',
    },
  ],
};

// eslint-disable-next-line
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(({ id }) => id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
