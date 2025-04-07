import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm Prem Sai Gadwal
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A passionate software engineer with expertise in building scalable and efficient
            applications.
          </p>
          <div className="space-x-4">
            <Button asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">About Me</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            I am a software engineer with a strong foundation in computer science and a passion for
            building innovative solutions. My expertise lies in full-stack development, with a focus
            on creating scalable and efficient applications.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Experience
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Software Engineer</CardTitle>
                <CardDescription>Company Name • 2022 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4">
                  <li>Developed and maintained scalable web applications</li>
                  <li>Implemented efficient algorithms and data structures</li>
                  <li>Collaborated with cross-functional teams</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Software Developer Intern</CardTitle>
                <CardDescription>Company Name • 2021 - 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4">
                  <li>Built and deployed microservices</li>
                  <li>Optimized database queries</li>
                  <li>Implemented CI/CD pipelines</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Project 1</CardTitle>
                <CardDescription>Description of project 1</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Technologies used: React, Node.js, MongoDB</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project 2</CardTitle>
                <CardDescription>Description of project 2</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Technologies used: Next.js, TypeScript, PostgreSQL</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Get in Touch
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your visions.
          </p>
          <Button asChild>
            <a href="mailto:your.email@example.com">Email Me</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
