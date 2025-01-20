"use client"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", business: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-yellow-400 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-white dark:bg-black border border-yellow-400/30 rounded-md 
                   text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 
                   focus:border-transparent placeholder-black/50 dark:placeholder-white/50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-yellow-400 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-white dark:bg-black border border-yellow-400/30 rounded-md 
                   text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 
                   focus:border-transparent placeholder-black/50 dark:placeholder-white/50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="business" className="block text-yellow-400 mb-2">
          Business Name
        </label>
        <input
          type="text"
          id="business"
          name="business"
          value={formData.business}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-white dark:bg-black border border-yellow-400/30 rounded-md 
                   text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 
                   focus:border-transparent placeholder-black/50 dark:placeholder-white/50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-yellow-400 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 bg-white dark:bg-black border border-yellow-400/30 rounded-md 
                   text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 
                   focus:border-transparent placeholder-black/50 dark:placeholder-white/50"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-yellow-300 
                 transition-colors font-semibold"
      >
        Get Started
      </button>
    </form>
  )
}

