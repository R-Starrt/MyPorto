import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-primary">
            <span>Rain Pedro M.</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden md:flex">
              <Link href="#contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32 space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Rain Pedro M.</h1>
              <p className="text-xl text-muted-foreground">Information Systems Student & UI/UX Enthusiast</p>
              <p className="max-w-[600px] text-muted-foreground">
                I'm passionate about UI design for web and applications, UML diagramming, and using Agile as a framework
                for speed and flexibility.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary bg-primary/10">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Rain Pedro M"
                  width={320}
                  height={320}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-accent py-12 md:py-24">
          <div className="container space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">About Me</h2>
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <p className="text-lg">
                I'm an Information Systems student at Bina Nusantara University with a passion for UI/UX design and
                system analysis.
              </p>
              <p>
                My academic journey has equipped me with skills in designing user interfaces, creating UML diagrams, and
                implementing Agile methodologies for efficient project management.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Cileungsi, Bogor</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>rainpedromaurinho036@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>081382977836</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-12 md:py-24">
          <div className="container space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="transition-all hover:shadow-lg border-primary/20 hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-primary/10 p-2 rounded-full mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                        <path d="M12 2v2"></path>
                        <path d="M12 22v-2"></path>
                        <path d="m17 20.66-1-1.73"></path>
                        <path d="M11 10.27 7 3.34"></path>
                        <path d="m20.66 17-1.73-1"></path>
                        <path d="m3.34 7 1.73 1"></path>
                        <path d="M14 12h8"></path>
                        <path d="M2 12h2"></path>
                        <path d="m20.66 7-1.73 1"></path>
                        <path d="m3.34 17 1.73-1"></path>
                        <path d="m17 3.34-1 1.73"></path>
                        <path d="m11 13.73-4 6.93"></path>
                      </svg>
                    </span>
                    UI/UX Design
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Designing user interfaces according to user needs, focusing on usability and aesthetics.</p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg border-primary/20 hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-primary/10 p-2 rounded-full mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                        <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z"></path>
                        <path d="M9 9h1"></path>
                        <path d="M9 13h6"></path>
                        <path d="M9 17h6"></path>
                      </svg>
                    </span>
                    Project Documentation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Documenting projects in a structured and systematic manner to ensure clarity and maintainability.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg border-primary/20 hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-primary/10 p-2 rounded-full mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                        <line x1="3" x2="21" y1="9" y2="9"></line>
                        <line x1="3" x2="21" y1="15" y2="15"></line>
                        <line x1="9" x2="9" y1="3" y2="21"></line>
                        <line x1="15" x2="15" y1="3" y2="21"></line>
                      </svg>
                    </span>
                    UML Diagram
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Illustrating the flow of existing or designed systems using UML diagrams for better visualization
                    and understanding.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="experience" className="bg-accent py-12 md:py-24">
          <div className="container space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
              Experience & Education
            </h2>
            <Tabs defaultValue="experience" className="mx-auto max-w-3xl">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
              <TabsContent value="experience" className="space-y-4 pt-4">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle>Business Analyst</CardTitle>
                    <CardDescription>Bogor Valley Hotel | February 2025 - June 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Jl Sholeh Iskandar No 05 Tanah Sereal Kota Bogor</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://bogorvalleyhotel.com/" target="_blank" rel="noopener noreferrer">
                        Visit Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle>Volunteer - Business</CardTitle>
                    <CardDescription>HIMSISFO Binus | September 2023 - December 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Binus Anggrek</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href="https://student-activity.binus.ac.id/himsisfo/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="education" className="space-y-4 pt-4">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle>Bachelor's Degree - Information Systems</CardTitle>
                    <CardDescription>Bina Nusantara University | August 2022 - September 2026</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Binus Anggrek - Kemanggisan</p>
                    <p className="font-medium mt-2">GPA: 3.6</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://binus.ac.id/" target="_blank" rel="noopener noreferrer">
                        Visit Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle>Certification</CardTitle>
                    <CardDescription>Belajar Pemrograman Java Menggunakan GUI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Bina Nusantara | December 23, 2023</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://bit.ly/3Gne6Jx" target="_blank" rel="noopener noreferrer">
                        View Certificate
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24">
          <div className="container space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="transition-all hover:shadow-lg border-primary/20 hover:border-primary/50">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m2 12 5.45 5.45"></path>
                      <path d="M2 12h10"></path>
                      <path d="m12 2 5.45 5.45"></path>
                      <path d="m12 2v10"></path>
                    </svg>
                  </div>
                  <CardTitle>PT Elvano Sukses Abadi</CardTitle>
                  <CardDescription>September 2024 - January 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Proposed UI/UX application design and created UML Diagram flow for PT Elvano Sukses Abadi's
                    application.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://bit.ly/3YwWMrI" target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-lg border-primary/20 hover:border-primary/50">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                      <circle cx="12" cy="10" r="2"></circle>
                      <path d="M12 12v8"></path>
                    </svg>
                  </div>
                  <CardTitle>BENGKELS</CardTitle>
                  <CardDescription>February 2024 - May 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Designed a prototype for our business idea "Bengkel" as a solution for drivers experiencing issues
                    like flat tires to quickly find the nearest repair shop.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://bit.ly/3YwWMrI" target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-accent py-12 md:py-24">
          <div className="container space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Get In Touch</h2>
            <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="grid grid-cols-1 gap-4">
                  <Card className="border-primary/20 hover:border-primary/50 transition-all">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">rainpedromaurinho036@gmail.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20 hover:border-primary/50 transition-all">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-sm text-muted-foreground">081382977836</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20 hover:border-primary/50 transition-all">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4">
                        <MapPin className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-sm text-muted-foreground">Cileungsi, Bogor</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex justify-center md:justify-start gap-4 pt-4">
                  <Button variant="outline" size="icon" asChild className="border-primary/20 hover:border-primary/50">
                    <Link href="#" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="border-primary/20 hover:border-primary/50">
                    <Link href="#" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="border-primary/20 hover:border-primary/50">
                    <Link href="mailto:rainpedromaurinho036@gmail.com" aria-label="Email">
                      <Mail className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8 bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Rain Pedro M. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="#" className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
