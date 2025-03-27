export default (data) => {
  const { action, redirect, netlify = false, formspree = false } = data
  return action || (netlify && redirect) || formspree && formspree.id && `https://formspree.io/${formspree.id}`
}