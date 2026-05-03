"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    setIsSubmitting(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-sage-muted">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mb-4">
            Contact
          </h2>
          <div className="w-12 h-px bg-charcoal/30 mx-auto mb-8" />
          <p className="text-lg text-charcoal/70">
            {"Let's discuss your funding or capital raising requirement."}
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-background rounded-sm p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-accent/10">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-foreground mb-2">
              Thank you for your enquiry
            </h3>
            <p className="text-muted-foreground">
              We will be in touch with you shortly.
            </p>
          </div>
        ) : (
          <form action="https://formsubmit.co/lizo@demng.co.za" method="POST" onSubmit={handleSubmit} className="bg-background rounded-sm p-8 md:p-12">
            <input type="hidden" name="_subject" value="New DEM website inquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="source" value="DEM website / TikTok / SEO inquiry" />
            <FieldGroup>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="bg-muted/50 border-border/50 focus:border-accent"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="company">Company</FieldLabel>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company"
                    className="bg-muted/50 border-border/50 focus:border-accent"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="name@company.co.za"
                    className="bg-muted/50 border-border/50 focus:border-accent"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="phone">Phone</FieldLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+27 79 442 5113"
                    className="bg-muted/50 border-border/50 focus:border-accent"
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us if you came from TikTok or Google, and describe your invoice, PO, trade, working-capital or capital raising need..."
                  className="bg-muted/50 border-border/50 focus:border-accent resize-none"
                />
              </Field>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-charcoal text-white hover:bg-charcoal/90 h-12"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Spinner className="h-4 w-4" />
                      Sending...
                    </span>
                  ) : (
                    "Send Inquiry"
                  )}
                </Button>
              </div>
            </FieldGroup>
          </form>
        )}
      </div>
    </section>
  )
}
