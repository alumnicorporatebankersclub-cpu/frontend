"use client";

import { type FormEvent, useState } from "react";
import { BTN_PRIMARY, Field, Icon, Input } from "@/components/ui";
import { CONTACT_FORM } from "@/config/contact";

const CONTROL =
  "w-full rounded-brand border border-line bg-background px-3 text-[15px] text-foreground placeholder:text-muted focus-visible:border-ink focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ink/20";

/**
 * Contact form. There is no messaging endpoint yet, so submitting opens the visitor's
 * email app with the message composed and addressed to the secretariat.
 */
export function ContactForm() {
  const f = CONTACT_FORM;
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const classSet = get("classSet") && `${f.classSetPrefix} ${get("classSet")}`;
    const signature = [get("name"), classSet, get("email")].filter(Boolean).join("\n");
    const subject = `${get("subject")} — ${get("name")}`;
    const body = `${get("message")}\n\n${signature}`;
    window.location.href = `mailto:${f.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <Field id="contact-name" label={f.fields.name.label}>
        <Input id="contact-name" name="name" required autoComplete="name" placeholder={f.fields.name.placeholder} />
      </Field>
      <Field id="contact-email" label={f.fields.email.label}>
        <Input id="contact-email" name="email" type="email" required autoComplete="email" placeholder={f.fields.email.placeholder} />
      </Field>
      <Field id="contact-class" label={f.fields.classSet.label}>
        <Input id="contact-class" name="classSet" inputMode="numeric" placeholder={f.fields.classSet.placeholder} />
      </Field>
      <Field id="contact-subject" label={f.fields.subject.label}>
        <div className="relative">
          <select id="contact-subject" name="subject" required className={`${CONTROL} h-11 appearance-none pr-10`}>
            {f.subjects.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <Icon name="chevronDown" className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted" />
        </div>
      </Field>
      <div className="sm:col-span-2">
        <Field id="contact-message" label={f.fields.message.label}>
          <textarea id="contact-message" name="message" required rows={6} placeholder={f.fields.message.placeholder} className={`${CONTROL} resize-y py-3`} />
        </Field>
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className={BTN_PRIMARY}>
          <Icon name="mail" className="size-4" />
          {f.submit}
        </button>
        <p role="status" className="mt-4 text-[14px] leading-[1.7] text-ink-soft">
          {sent ? f.sent : null}
        </p>
      </div>
    </form>
  );
}
