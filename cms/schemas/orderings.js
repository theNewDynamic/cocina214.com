export const defaultOrdering = [  
  {
    name: 'publishedAtAsc',
    title: 'Date (asc)',
    by: [{ field: 'publishedAt', direction: 'asc' }],
  },
  {
    name: 'publishedAtDesc',
    title: 'Date (desc)',
    by: [{ field: 'publishedAt', direction: 'desc' }],
  },
  {
    name: 'titleAsc',
    title: 'Title (A-Z)',
    by: [{ field: 'title', direction: 'asc' }],
  },
  {
    name: 'titleDesc',
    title: 'Title (Z-A)',
    by: [{ field: 'title', direction: 'desc' }],
  },    
 
]

export const eventOrdering = [
  {
    name: 'start_dateAsc',
    title: 'Event Date (asc)',
    by: [{field: 'time_start', direction: 'asc'}],
  },
  {
    name: 'start_dateDesc',
    title: 'Event Date (desc)',
    by: [{field: 'time_start', direction: 'desc'}],
  },
  {
    name: 'titleAsc',
    title: 'Title (A-Z)',
    by: [{field: 'title', direction: 'asc'}],
  },
  {
    name: 'titleDesc',
    title: 'Title (Z-A)',
    by: [{field: 'title', direction: 'desc'}],
  },
]

export const personOrdering =  [
  {
    name: 'last_name',
    title: 'Last Name (A-Z)',
    by: [{ field: 'last_name', direction: 'asc' }],
  },
  {
    name: 'associations',
    title: 'Associations (A-Z)',
    by: [{ field: 'associations', direction: 'asc' }],
  },
]