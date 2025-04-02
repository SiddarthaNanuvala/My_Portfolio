export default function About() {
    return (
      <section className="container mx-auto py-12 pt-24 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg">
              I’m a developer with a focus on front-end technologies and cybersecurity. I enjoy building responsive web apps and earning badges on platforms like TryHackMe.
            </p>
          </div>
          <div>
            <ul className="list-disc pl-6 text-lg">
              <li>Next.js & React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Cybersecurity Basics</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }