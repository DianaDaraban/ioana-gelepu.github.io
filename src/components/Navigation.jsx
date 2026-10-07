import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/navigation.css'

// Desktop navigation. The active underline follows the current URL, so it is right after a
// reload, a direct link or the browser's back button (it used to stay on "Experiență").
const pages = [
  { to: '/', label: 'Experiență', sub: 'Domenii de activitate', className: 'experience-btn' },
  { to: '/top10', label: 'Top 10', sub: 'proiecte relevante', className: 'top10-btn' },
  { to: '/echipa', label: 'Echipa', className: 'team-btn' },
  { to: '/povestea', label: 'Povestea', className: 'story-btn' },
  { to: '/testimoniale', label: 'Testimoniale', className: 'testimonials-btn' },
  { to: '/probono', label: 'Pro bono', className: 'proBono-btn' },
  // Activități hidden until it has real content (it only had placeholder text)
  { to: '/contact', label: 'Contact', className: 'contact-btn' },
]

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 300,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
}

export default function Navigation() {
  const { pathname } = useLocation()

  return (
    <nav>
      <ul className="nav-list">
        {pages.map((page, index) => {
          const active = pathname === page.to
          return (
            <div key={page.to} className={`nav-btn ${page.className}`}>
              <div className="line-nav"></div>
              <li>
                <Link to={page.to} style={linkStyle} aria-current={active ? 'page' : undefined}>
                  {page.label}
                  {page.sub && <span className="nav-subText">{page.sub}</span>}
                  {/* Items with a subtitle show the underline inside the link, the others below it */}
                  {page.sub && active && <div className="active-link"></div>}
                </Link>
                {!page.sub && active && <div className="active-link" style={{ marginTop: '.8em' }}></div>}
              </li>
              {index === pages.length - 1 && <div className="line-nav"></div>}
            </div>
          )
        })}
      </ul>
    </nav>
  )
}
