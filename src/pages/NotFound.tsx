import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { business } from '../config/business'

export default function NotFound() {
  useEffect(() => {
    document.title = `Page Not Found | ${business.name}`
  }, [])

  return (
    <section className="min-h-[60svh] flex items-center justify-center py-8 px-4">
      <div className="text-center">
        <p
          className="mb-6 font-heading leading-[1.02] text-sage-deep"
          style={{ fontSize: 'clamp(6rem, 18vw, 14rem)', letterSpacing: '-0.05em' }}
          aria-hidden="true"
        >
          404
        </p>
        <h1 className="mb-4 font-heading text-3xl text-forest" style={{ fontWeight: 400 }}>Page not found</h1>
        <p className="font-ui text-stone text-sm mb-8 max-w-sm mx-auto leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Try one of the links below.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/" className="btn-primary">
            <ArrowLeft size={14} strokeWidth={2.5} /> Back to home
          </Link>
          <Link to="/contact" className="btn-ghost">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
