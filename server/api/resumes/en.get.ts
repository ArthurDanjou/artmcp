export default defineEventHandler(async (event) => {
  return sendRedirect(event, '/resumes/CV 2026 EN.pdf', 302)
})
