"use server"

import { z } from "zod"

// Define the form schema with validation rules
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export type ContactFormData = z.infer<typeof formSchema>

export async function submitContactForm(formData: FormData) {
  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Extract form data
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // Validate form data
  const result = formSchema.safeParse({ name, email, subject, message })

  if (!result.success) {
    // Return validation errors
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    }
  }

  // In a real application, you would send an email or store the message in a database
  // For now, we'll just simulate a successful submission

  return {
    success: true,
    message: "Your message has been sent successfully! I'll get back to you soon.",
  }
}
