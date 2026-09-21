import './App.css'

const highlights = [
  { value: '92%', label: 'noticed a brighter tone' },
  { value: '4.9/5', label: 'average ritual rating' },
  { value: '12k+', label: 'glow goals completed' },
]

const features = [
  {
    name: 'Dawn Repair',
    text: 'Barrier-first hydration with peptides that smooth texture overnight.',
  },
  {
    name: 'Cloud Calm',
    text: 'Dermatologist-backed soothing formulas for sensitive, stressed skin.',
  },
  {
    name: 'Sunlit Finish',
    text: 'Lightweight radiance layers that leave a healthy, dewy veil.',
  },
]

const products = [
  { name: 'Radiant Serum', price: '$58', tone: 'gold' },
  { name: 'Velvet Cleanser', price: '$32', tone: 'rose' },
  { name: 'Moon Milk', price: '$46', tone: 'lilac' },
]

function App() {
  return (
    <div className="horizon-app">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">H</div>
          <span>Horizon Beauty</span>
        </div>

        <nav className="nav">
          <a href="#rituals">Rituals</a>
          <a href="#ingredients">Ingredients</a>
          <a href="#journal">Journal</a>
        </nav>

        <button type="button" className="nav-button">
          Shop now
        </button>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">NEW • Skin-first rituals</p>
            <h1>Glow beyond the horizon.</h1>
            <p className="lede">
              Thoughtful formulas for luminous skin, calmer routines, and a softer
              kind of confidence that lasts all day.
            </p>

            <div className="cta-row">
              <button type="button" className="primary-btn">
                Build your ritual
              </button>
              <button type="button" className="secondary-btn">
                Discover more
              </button>
            </div>

            <div className="hero-stats">
              {highlights.map((item) => (
                <div key={item.label} className="stat-box">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="visual-panel" aria-label="Horizon Beauty product display">
            <div className="parallax-orb orb-one" />
            <div className="parallax-orb orb-two" />
            <div className="product-card highlight-card">
              <span className="mini-label">signature care</span>
              <h3>Golden Hour Serum</h3>
              <p>Niacinamide • peptides • saffron</p>
            </div>

            <div className="product-visual">
              <div className="cap" />
              <div className="bottle">
                <span>Horizon</span>
              </div>
            </div>

            <div className="product-card review-card">
              <div className="stars">★★★★★</div>
              <p>“My skin looks rested, smooth, and naturally luminous.”</p>
              <strong>— Maya L.</strong>
            </div>
          </div>
        </section>

        <section className="feature-section" id="rituals">
          <div className="section-heading">
            <p className="eyebrow">Designed for daily rituals</p>
            <h2>Beauty that feels as effortless as it looks.</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.name} className="feature-card">
                <div className="feature-icon" aria-hidden="true" />
                <h3>{feature.name}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="product-section" id="ingredients">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Best sellers</p>
              <h2>Skin rituals, elevated.</h2>
            </div>
            <a href="#" className="text-link">
              See all essentials
            </a>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article key={product.name} className={`product-item ${product.tone}`}>
                <div className="product-art" aria-hidden="true" />
                <div className="product-meta">
                  <h3>{product.name}</h3>
                  <span>{product.price}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="journal-section" id="journal">
          <div className="journal-card">
            <div>
              <p className="eyebrow">Journal</p>
              <h2>What your skin wants next.</h2>
            </div>
            <p>
              A simple, intelligent routine for brighter mornings, calmer evenings,
              and a finish that feels naturally radiant.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
