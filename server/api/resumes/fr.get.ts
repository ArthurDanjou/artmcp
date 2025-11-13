export default defineEventHandler(async (event) => {
  return sendRedirect(event, '/resumes/CV 2026 FR.pdf', 302)
})
