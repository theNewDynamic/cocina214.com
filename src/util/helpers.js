import { url_mapping } from "@data/site"

/**
 * Returns the current year at build time.
 * @returns The current Year in the format: 2023
 */
export const getCurrentYear = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return currentYear
}

/**
 * Truncate a text from character limit.
 * @param {string} text - The blob to be truncated.
 * @param {int} [length=300] - The number of characters allowed before truncation.
 * @returns 
 */
export const getExcerpt = (string, length = 300) => {
  if(string.length > length) {
    return string.substring(0, length) + '...'
  } else {
    return string
  }
}

/**
 * Truncate a text from a word limit.
 * @param {string} text - The blob to be truncated.
 * @param {int} [numWords=50] - The number of words allowed before truncation.
 * @returns {string} 
 */
export const truncateText = (text, numWords = 50) => {
  // Split the text into an array of words
  const words = text.split(' ');

  // Select the desired number of words and join them back together
  const truncatedWords = words.slice(0, numWords);
  let truncatedText = truncatedWords.join(' ');

  // Add an ellipsis if the truncated text is shorter than the original text
  if (words.length > numWords) {
    truncatedText += '...';
  }

  return truncatedText;
}

/**
 * Identify the service of a given video ID
 * @param {string} video_id The video ID.
 * @returns {string} `(youtube|vimeo)` The service to which belong this video id format.
 */
export const getVideoService = (video_id) => {
  // Regular expressions for Vimeo and YouTube video IDs
  var vimeoRegex = /^\d+$/; // Vimeo video ID is a sequence of numbers
  var youtubeRegex = /^[a-zA-Z0-9_-]{11}$/; // YouTube video ID is 11 characters long, including letters, numbers, underscores, and hyphens
  
  if (vimeoRegex.test(video_id)) {
    return 'vimeo';
  } else if (youtubeRegex.test(video_id)) {
    return 'youtube';
  } else {
    return 'unknown';
  }
}

/**
 * Strips a string of any URL hasardous characters.
 * @param {string} string The input string to be slugified.
 * @returns {string} The string, slugified.
 */
export const slugify = (string) => {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

/**
 * Format a Date
 * @param {string} dateInput The date as a string
 * @param {string} [style=null] (full, long, medium, short)
 * @returns The localized formated date
 */
export const formatDate = (dateInput, style = null) => {
  let date = dateInput
  if(typeof date == "string"){
    date = new Date(dateInput)
  }
  let date_string = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
  if(style){
    date_string = new Intl.DateTimeFormat('en', { dateStyle: style }).format(date);
  }
  return date_string
}
/**
 * Format a Time
 * @param {string} dateInput The time as a string
 * @param {string} [style=null] (full, long, medium, short)
 * @returns The localized formated time
 */
export const formatTime = (dateInput, style = null) => {
  let date = dateInput
  if(typeof date == "string"){
    date = new Date(dateInput)
  }
  let time_string = [(date.getHours()<10?'0':'') + date.getHours(), (date.getMinutes()<10?'0':'') + date.getMinutes()].join(':')
  if(style) {
    time_string = new Intl.DateTimeFormat('en', { timeStyle: style}).format(date);
  }
  return time_string
}

/**
 * Format two dates, starts and end into one comprehensible phrase.
 * @param {string} start_input Starting date
 * @param {(string|boolean)} [start_input=false] end_input Ending date
 * @param {boolean} [time_hidden=false] Should the time be hidden
 * @returns {string}
 */
export const formatStartEnd = (start_input, end_input = false, time_hidden = false) => {
  const start = start_input || false
  const end = end_input

  if(!start){
    return "Missing date"
  }
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  let start_string
  let end_string
  let start_date = new Date(start);
  let isSameDay = false
  const start_date_formated = formatDate(start_date, 'medium')
  const start_time_formated = formatTime(start_date, 'short')

  if(time_hidden){
    start_string = start_date_formated
  }
  else {
    start_string = [start_date_formated, start_time_formated].join(' | ')
  }


  
  if(end) {
    let end_date = new Date(end)
    const end_date_formated = formatDate(end_date, 'medium')
    const end_time_formated = formatTime(end_date, 'short')
    

    if(time_hidden){
      end_string = end_date_formated
    }
    else {
      end_string = [end_date_formated, end_time_formated].join(' | ')
    }


    isSameDay = sameDay(start_date, end_date)
    if(isSameDay) {
      if(!time_hidden) {
        return `${start_date_formated} | ${start_time_formated} - ${end_time_formated}`
      } else {
        return start_date_formated
      }
    }
    return [start_string, end_string].join(' - ')
  }
  return start_string
}

/**
 * Returns a comma delimited localized string without the infamous oxford comma.
 * @param {string[]} list - A list of strings
 * @returns 
 */
export const delimit = (list = []) => {
  const formater =  new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
  let string = formater.format(list)
  if(string.includes(', and')) {
    string = string.replace(', and', ' and')
  }
  return string
}

/**
 * Isolate the domain from a URL.
 * @param {string} url_input - A URL
 * @returns {string}
 */
export const getURLDomain = (url_input) => {
  const url = new URL(url_input);
  const domain = url.hostname;
  return domain
}

/**
 * Ready the blocks array for template consumption.
 * @param {Object[]} blocks - The blocks to prepare
 * @param {string} [variant] - An optional variant.
 * @returns 
 */
export const prepareBlocks = (blocks, variant) => {
  if(!blocks) {
    return []
  }
  return blocks.map((block, index) => {
    let id =`${block.layout}_${index}`
    if(block.title) {
      id = slugify(block.title)
    }
    id = `${id}_${index}`
    return {
      ...block,
      variant,
      id,
      index
    }
  })
}