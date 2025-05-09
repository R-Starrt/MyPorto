"use client"

import type React from "react"

import { useState } from "react"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { submitContactForm } from "@/app/actions"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const initialState = {
  success: false,
  errors: {},
  message: "",
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        "Send Message"
      )}
    </Button>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setFormSubmitted(true)
    // The form will be handled by the formAction
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Send a Message</CardTitle>
        <CardDescription>Fill out the form below to get in touch with me directly.</CardDescription>
      </CardHeader>
      <CardContent>
        {state.success && formSubmitted ? (
          <Alert className="mb-4 border-green-500 text-green-500">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        ) : null}

        <form action={formAction} onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              aria-describedby={state.errors?.name ? "name-error" : undefined}
              aria-invalid={Boolean(state.errors?.name)}
            />
            {state.errors?.name && formSubmitted ? (
              <p id="name-error" className="text-sm text-destructive flex items-center gap-1 mt-1">
                <AlertCircle className="h-3 w-3" />
                {state.errors.name}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              aria-describedby={state.errors?.email ? "email-error" : undefined}
              aria-invalid={Boolean(state.errors?.email)}
            />
            {state.errors?.email && formSubmitted ? (
              <p id="email-error" className="text-sm text-destructive flex items-center gap-1 mt-1">
                <AlertCircle className="h-3 w-3" />
                {state.errors.email}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="What is this regarding?"
              aria-describedby={state.errors?.subject ? "subject-error" : undefined}
              aria-invalid={Boolean(state.errors?.subject)}
            />
            {state.errors?.subject && formSubmitted ? (
              <p id="subject-error" className="text-sm text-destructive flex items-center gap-1 mt-1">
                <AlertCircle className="h-3 w-3" />
                {state.errors.subject}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              rows={5}
              aria-describedby={state.errors?.message ? "message-error" : undefined}
              aria-invalid={Boolean(state.errors?.message)}
            />
            {state.errors?.message && formSubmitted ? (
              <p id="message-error" className="text-sm text-destructive flex items-center gap-1 mt-1">
                <AlertCircle className="h-3 w-3" />
                {state.errors.message}
              </p>
            ) : null}
          </div>

          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  )
}
