import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Stethoscope,
  Ear,
  Smile,
  HeartPulse,
  Phone,
  MapPin,
  Clock,
  CalendarCheck,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import * as React from "react";

import heroImage from "../assets/hero-medical.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lakeside Medical Clinic | Expert Care in JLT, Dubai" },
      {
        name: "description",
        content:
          "Lakeside Medical Clinic in JLT, Dubai offers trusted General Physician, ENT, Dental, and Cardiology care. Book an appointment today.",
      },
      {
        property: "og:title",
        content: "Lakeside Medical Clinic | Expert Care in JLT, Dubai",
      },
      {
        property: "og:description",
        content:
          "Expert care, close to home. General Physician, ENT, Dentist, and Cardiologist services in JLT, Dubai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const specialties = [
  {
    title: "General Physician",
    description: "Comprehensive primary care for everyday health needs.",
    icon: Stethoscope,
  },
  {
    title: "ENT",
    description: "Expert ear, nose, and throat diagnosis and treatment.",
    icon: Ear,
  },
  {
    title: "Dentist",
    description: "Preventive, cosmetic, and restorative dental care.",
    icon: Smile,
  },
  {
    title: "Cardiologist",
    description: "Heart health screenings and cardiovascular consultations.",
    icon: HeartPulse,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-primary">
            <HeartPulse className="h-6 w-6 text-medical" aria-hidden="true" />
            <span>Lakeside Medical</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground sm:flex">
            <a href="#specialties" className="transition-colors hover:text-foreground">
              Specialties
            </a>
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-medical px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-medical/90"
          >
            Book now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-medical/5 to-background py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-medical/20 bg-medical/10 px-3 py-1 text-sm font-medium text-medical">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-medical" />
                Now accepting appointments
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Expert care, <span className="text-medical">close to home</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Trusted medical services in the heart of JLT, Dubai. Our team of
                experienced specialists is here to keep you and your family healthy.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-medical px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-medical/90 hover:shadow-lg"
                >
                  <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                  Book an appointment
                </a>
                <a
                  href="#specialties"
                  className="inline-flex items-center justify-center gap-1 rounded-full border border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  Our specialties
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl shadow-xl ring-1 ring-border">
                <img
                  src={heroImage}
                  alt="Bright, modern medical clinic waiting area"
                  className="h-full w-full object-cover"
                  loading="eager"
                  width={1280}
                  height={640}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-background p-4 shadow-lg lg:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-medical/10 text-medical">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Mon – Sat</p>
                    <p className="text-sm text-muted-foreground">9:00 AM – 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section id="specialties" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our specialties
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive outpatient care across four key departments.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((specialty) => {
              const Icon = specialty.icon;
              return (
                <div
                  key={specialty.title}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-medical/10 text-medical transition-colors group-hover:bg-medical group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-card-foreground">
                    {specialty.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {specialty.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-border bg-accent/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                About us
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Lakeside Medical Clinic is a patient-focused outpatient center located
                in Jumeirah Lakes Towers, Dubai. We combine modern facilities with
                compassionate care to make every visit comfortable, efficient, and
                personalized.
              </p>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Whether you need a routine check-up, a specialist consultation, or
                ongoing treatment, our team is committed to helping you feel your best.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Experienced, multilingual medical team",
                  "Same-day appointments available",
                  "Modern diagnostic and treatment facilities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-medical/10 text-medical">
                      <ChevronRight className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm sm:p-10">
              <h3 className="text-xl font-semibold text-foreground">Why patients choose us</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-3xl font-bold text-medical">4</p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    Specialist departments
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-medical">6</p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    Days open per week
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-medical">JLT</p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    Central Dubai location
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-medical">Walk-in</p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    Appointments welcome
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Visit us in JLT or call to book your appointment.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="https://maps.google.com/?q=Cluster+X,+JLT,+Dubai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:bg-accent"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-medical/10 text-medical">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Address</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Cluster X, Jumeirah Lakes Towers (JLT), Dubai, UAE
                </p>
              </div>
            </a>
            <a
              href="tel:+97140000000"
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:bg-accent"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-medical/10 text-medical">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Phone</h3>
                <p className="mt-1 text-sm text-muted-foreground">+971 4 XXX XXXX</p>
                <p className="text-xs text-destructive">Please provide the clinic phone number.</p>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-medical/10 text-medical">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Opening hours</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Monday – Saturday: 9:00 AM – 9:00 PM
                </p>
                <p className="text-sm font-medium text-destructive">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            Lakeside Medical Clinic · built at London International ·{" "}
            <a
              href="https://lisrc.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              lisrc.ae
            </a>{" "}
            · by jihen
          </p>
        </div>
      </footer>
    </div>
  );
}
