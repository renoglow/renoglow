import Image from "next/image"
import { ContactForm } from "./components/contact-form"
import { ThemeToggle } from "./components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <ThemeToggle />

      <header className="container mx-auto py-6 px-4 text-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-20_124417-transformed-xgrtgFTNquVJmPtoIwqpVjKMDzC6GE.jpeg"
          alt="RenoGlow Logo"
          width={400}
          height={120}
          className="w-auto h-24 mx-auto"
          priority
        />
      </header>

      <main className="container mx-auto px-4">
        {/* Hero Section with Blurred Background */}
        <section className="relative py-32 mb-20">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-notswervo-2398375.jpg-WbOJy1EhYUOFzWENBHekeKsm7oZajw.jpeg"
              alt="Modern Kitchen"
              width={1920}
              height={1080}
              className="w-full h-full object-cover blur-[2px]"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">We </span>
              <span className="text-yellow-400">Fill Your Calendar </span>
              <span className="text-white">With Qualified Customers, </span>
              <span className="text-yellow-400">Without The Marketing Stress.</span>
            </h1>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-8">Our Philosophy</h2>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            At RenoGlow, we are a Bay Area focused agency that helps home improvement companies gain more attention and
            customers via strategic advertisements on social media. Our focused approach ensures reliable quality,
            quote-ready customers for companies we work with, free from the marketing stress.
          </p>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-yellow-400 text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Highlight Results",
                content:
                  "We collect photos of your best renovation work. These real examples promote attention and show potential customers the glowing quality they can expect from your business.",
              },
              {
                title: "2. Reach Local Customers",
                content:
                  "We put your work in front of people actively looking to renovate their homes on popular social media sites. Our targeted, concise ads will create a consistent flow of ideal customers ready to work with your business.",
              },
              {
                title: "3. Generate Leads",
                content:
                  "We send you details of people seriously interested in starting their own home renovations - without the time wasters; just customers ready to discuss their needs.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black border border-yellow-400/20 rounded-lg p-8 hover:border-yellow-400/40 transition-colors text-center"
              >
                <h3 className="text-xl font-bold text-yellow-400 mb-4">{step.title}</h3>
                <p className="opacity-90">{step.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-yellow-400 text-center mb-12">Ready to grow your business?</h2>
          <ContactForm />
        </section>
      </main>

      <footer className="container mx-auto py-12 px-4 text-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-20_124417-transformed-xgrtgFTNquVJmPtoIwqpVjKMDzC6GE.jpeg"
          alt="RenoGlow Logo"
          width={200}
          height={60}
          className="w-auto h-12 mx-auto mb-4"
        />
        <p className="opacity-75">© {new Date().getFullYear()} RenoGlow. All rights reserved.</p>
      </footer>
    </div>
  )
}

