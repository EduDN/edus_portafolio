export default function LinkedInButton() {
  return (
    <a
      href="https://www.linkedin.com/in/eduardo-dominguez-navarrete/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn profile"
      className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 border border-zinc-700"
    >
      {/* LinkedIn "in" logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="currentColor"
        aria-hidden="true"
      >
        <rect width="24" height="24" rx="4" fill="#0A66C2" />
        <path
          fill="white"
          d="M7.75 9.5h-2.5v8h2.5v-8zm-1.25-1a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm10.25 1c-1.38 0-2.25.75-2.5 1.25V9.5h-2.5v8h2.5v-4.25c0-1.1.9-2 2-2s2 .9 2 2V17.5h2.5v-4.75c0-2.62-2.12-3.25-3.5-3.25z"
        />
      </svg>
      LinkedIn
    </a>
  )
}
