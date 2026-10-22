import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | EstatePros Carpet Cleaning'
  }, [])

  return (
    <section className="bg-ivory min-h-[60svh] flex items-center justify-center py-24 px-4">
      <div className="text-center">
        <p
          className="font-heading font-800 text-mist leading-none mb-6"
          style={{ fontSize: 'clamp(6rem, 18vw, 14rem)', letterSpacing: '-0.05em' }}
          aria-hidden="true"
        >
          404
        </p>
        <h1 className="font-heading font-700 text-teal text-2xl mb-4">Page not found</h1>
        <p className="font-ui text-stone text-sm mb-8 max-w-sm mx-auto leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Try one of the links below.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-ivory font-heading font-700 text-sm rounded-full hover:bg-teal-light transition-colors"
            style={{ letterSpacing: '0.03em' }}
          >
            <ArrowLeft size={14} strokeWidth={2.5} /> Back to home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-teal/30 text-teal font-heading font-700 text-sm rounded-full hover:bg-mist/60 transition-colors"
            style={{ letterSpacing: '0.03em' }}
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
