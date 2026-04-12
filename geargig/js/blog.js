/**
 * GearGig — Blog Engine
 * ─────────────────────────────────────────────
 * HOW TO ADD A NEW BLOG POST:
 *
 *   1. Add a new object to the POSTS array below.
 *   2. Fill in all fields (id, title, category, date, emoji, image, excerpt, body).
 *   3. The post will automatically appear on blog.html and be fully
 *      readable on blog-post.html?id=YOUR_ID
 *   4. The first post in the array is always shown as the Featured post
 *      on blog.html — move your latest/best post to the top.
 *
 * BODY FORMAT:
 *   Use simple HTML tags inside the body string:
 *   <h2>, <h3>, <p>, <ul><li>, <ol><li>, <blockquote>, <strong>, <hr>
 * ─────────────────────────────────────────────
 */

const POSTS = [
  {
    id: 1,
    title: "The Future of Freelancing: Why Platforms Like GearGig Are Built for What’s Next",
    category: "freelancing",
    categoryLabel: "Freelancing",
    date: "December 29, 2025",
    author: "GearGig Team",
    authorInitial: "G",
    readTime: "5 min read",
    emoji: "🚀",
    image: "blog/blog1.png",
    excerpt: "Freelancing has moved far beyond side hustles. It is now a core component of the global workforce, driven by digital platforms and specialized skills.",
    tags: ["freelancing", "future of work", "gig economy", "industrial"],
    body: `
      <p>Freelancing has moved far beyond side hustles and temporary work. It is now a core component of the global workforce, driven by digital platforms, remote collaboration, and the growing need for specialized skills. According to global workforce estimates, nearly 1.57 billion people worldwide are engaged in freelance or independent work, accounting for almost 47% of the global workforce (Quantumrun, 2024).</p>

      <h2>Freelancing Growth: What the Data Says</h2>
      <p>The rapid growth of freelancing is supported by strong economic data:</p>
      <ul>
        <li>The global freelance platform market was valued at USD 7.65 billion in 2025 and is projected to reach USD 16.54 billion by 2030.</li>
        <li>Freelancers contributed approximately USD 1.27 trillion to the U.S. economy in 2023.</li>
        <li>India has emerged as one of the largest freelance talent hubs, with over 15 million freelancers.</li>
        <li>The gig and project-based workforce in India grew by 38% in FY25.</li>
      </ul>

      <h2>Why Specialized Freelancing Platforms Are the Future</h2>
      <p>As freelancing matures, businesses are shifting away from generic talent platforms toward specialized marketplaces that offer domain expertise. Research shows that companies increasingly prefer project-based specialists for roles in engineering, automation, quality, and manufacturing.</p>

      <h2>GearGig: Powering the Next Generation of Industrial Freelancing</h2>
      <p>Unlike general freelance platforms, GearGig is designed specifically for manufacturing, engineering, and industrial services. It connects businesses with skilled professionals across areas such as industrial automation, design & prototyping, quality inspection, and more.</p>

      <blockquote>
        "Freelancing is no longer an alternative career path; it is a dominant workforce model supported by strong global and Indian growth data."
      </blockquote>

      <h2>Conclusion: Freelancing Is the Future — Specialization Is the Advantage</h2>
      <p>As businesses prioritize agility and expertise, specialized platforms like GearGig are better positioned than generic marketplaces to deliver real value. By enabling project-based collaboration, GearGig represents the next evolution of freelancing.</p>
    `
  },
  {
    id: 2,
    title: "Carbon Credits: A Career & Business Opportunity in Manufacturing, Agriculture, and Beyond",
    category: "sustainability",
    categoryLabel: "Sustainability",
    date: "October 08, 2025",
    author: "GearGig Team",
    authorInitial: "G",
    readTime: "6 min read",
    emoji: "🌱",
    image: "blog/blog2.png",
    excerpt: "As climate change continues to shape global policy, the carbon credit market has emerged as a lucrative avenue for careers and business innovation.",
    tags: ["carbon credits", "green careers", "sustainability", "manufacturing"],
    body: `
      <p>As climate change continues to shape global policy and corporate responsibility, the carbon credit market has emerged not just as a tool for environmental sustainability, but also as a lucrative avenue for careers and business innovation.</p>

      <h2>What Are Carbon Credits?</h2>
      <p>Carbon credits are permits that allow a company or individual to emit a certain amount of carbon dioxide or other greenhouse gases. One credit equals one tonne of CO₂ emissions. These credits can be traded in a market, encouraging emissions reductions where it is cheapest to do so.</p>

      <h2>Carbon Credits in the Manufacturing Sector</h2>
      <p>The manufacturing industry is one of the largest contributors to carbon emissions. However, it's also uniquely positioned to benefit from the carbon credit system.</p>
      <h3>Opportunities for Businesses:</h3>
      <ul>
        <li>Carbon Capture Technology: Invest in emission-reducing technologies to generate sellable credits.</li>
        <li>Process Optimization: Upgrade machinery and improve energy efficiency to lower emissions.</li>
        <li>Sustainability Branding: Use carbon neutrality to boost brand value in ESG-conscious markets.</li>
      </ul>

      <h2>Carbon Credits in Agriculture</h2>
      <p>Agriculture is both a contributor to and a solution for climate change. Practices like no-till farming, agroforestry, and methane reduction in livestock management can generate carbon credits.</p>

      <blockquote>
        "The world is shifting from fossil-fuel dependency to a carbon-conscious economy. In this transition, carbon credits aren’t just a regulatory checkbox — they’re a career accelerator."
      </blockquote>

      <h2>GearGig’s Role in the Green Revolution</h2>
      <p>At GearGig, we help professionals and businesses tap into the growing carbon economy by connecting talent with green startups and upskilling professionals in ESG and sustainability tech.</p>
    `
  },
  {
    id: 3,
    title: "Why India's $200B Automotive Market is the Next Big Investment Opportunity?",
    category: "manufacturing",
    categoryLabel: "Manufacturing",
    date: "September 19, 2025",
    author: "GearGig Team",
    authorInitial: "G",
    readTime: "7 min read",
    emoji: "🚗",
    image: "blog/blog3.png",
    excerpt: "India's automotive sector is experiencing unprecedented transformation, positioning the country as the world's third-largest market.",
    tags: ["automotive", "EV", "manufacturing", "investment"],
    body: `
      <p>India's automotive sector is experiencing unprecedented transformation, positioning the country as the world's third-largest automotive market. With combined passenger and commercial vehicle sales projected to reach 7.5 million units by 2030, India presents compelling opportunities.</p>

      <h2>Key Market Drivers</h2>
      <p>The automotive boom is fueled by robust economic fundamentals. India's GDP per capita is expected to nearly double by 2030, while the middle-class population expands significantly.</p>

      <h2>Electrification Takes Center Stage</h2>
      <p>India's EV ecosystem is rapidly evolving with strong government support. The PM E-Drive scheme allocates ₹10,900 crore for EV promotion. By 2030, electric penetration is expected to reach 51% for two-wheelers and 19% for passenger vehicles.</p>

      <h2>Digital Transformation</h2>
      <p>Connected vehicle penetration is expected to reach 88% by 2025. ADAS (Advanced Driver Assistance Systems) adoption is accelerating, with Level 2 autonomous features becoming more prevalent.</p>

      <blockquote>
        "India's automotive revolution represents more than market growth—it's a fundamental shift toward sustainable, connected, and consumer-centric mobility solutions."
      </blockquote>

      <h2>Investment Opportunities</h2>
      <p>The transformation presents opportunities across the value chain, including battery manufacturing, charging infrastructure, and component localization.</p>
    `
  },
  {
    id: 4,
    title: "How AI is Revolutionizing Jobs in the Manufacturing Industry!",
    category: "technology",
    categoryLabel: "Technology",
    date: "July 24, 2025",
    author: "GearGig Team",
    authorInitial: "G",
    readTime: "5 min read",
    emoji: "🤖",
    image: "blog/blog4.png",
    excerpt: "The manufacturing industry is undergoing a massive transformation driven by AI. From predictive maintenance to quality checks, AI is reshaping work.",
    tags: ["AI", "manufacturing", "automation", "predictive maintenance"],
    body: `
      <p>The manufacturing industry—once known for assembly lines and human-intensive labor—is undergoing a massive transformation. At the heart of this change is Artificial Intelligence (AI).</p>

      <h2>Predictive Maintenance: A New Skill Frontier</h2>
      <p>AI-powered sensors can now predict when machines are likely to fail. Instead of reacting to breakdowns, factories are preventing them altogether. This creates high demand for maintenance freelancers who can interpret data from AI systems.</p>

      <h2>AI in Quality Control: Accuracy on Autopilot</h2>
      <p>Computer vision and machine learning are now widely used to inspect components in real-time. AI detects flaws that even the human eye can miss, creating new hybrid roles for Quality Control experts.</p>

      <blockquote>
        "AI won’t replace jobs. But people who can work with AI will replace those who can't."
      </blockquote>

      <h2>AI Is Creating More Gigs—Not Less</h2>
      <p>Contrary to fear, AI is creating more flexible, skilled work. Most in-demand AI-touched gigs on GearGig include AI-based automation consultants and machine learning engineers for vision systems.</p>
    `
  },
  {
    id: 5,
    title: "Types of AMC for Manufacturing Sector Machine",
    category: "maintenance",
    categoryLabel: "Maintenance",
    date: "July 22, 2025",
    author: "GearGig Team",
    authorInitial: "G",
    readTime: "4 min read",
    emoji: "🔧",
    image: "blog/blog5.png",
    excerpt: "Annual Maintenance Contracts (AMCs) are essential to keep manufacturing machines running efficiently and minimizing costly downtimes.",
    tags: ["AMC", "maintenance", "manufacturing", "equipment"],
    body: `
      <p>Annual Maintenance Contracts (AMCs) are essential to keep manufacturing machines running efficiently, minimizing costly downtimes and prolonging equipment life. Understanding the different types of AMCs helps manufacturers select the right service level.</p>

      <h2>Main Types of AMC for Manufacturing Machines</h2>
      <ol>
        <li><strong>Comprehensive AMC:</strong> Covers all maintenance services, including replacement of both labor and parts.</li>
        <li><strong>Non-Comprehensive AMC:</strong> Covers only basic maintenance and labor; parts are charged extra.</li>
        <li><strong>Hybrid AMC:</strong> A mix based on the client’s needs, such as labor plus spare parts limited to a fixed amount.</li>
      </ol>

      <h2>Benefits of AMCs for Manufacturing Sector</h2>
      <ul>
        <li>Predictable Maintenance Costs: Easier budgeting and cost control.</li>
        <li>Reduced Downtime: Regular checks minimize unexpected breakdowns.</li>
        <li>Expert Support: Trained professionals service complex machinery.</li>
        <li>Prolonged Equipment Life: Preventive maintenance improves reliability.</li>
      </ul>

      <blockquote>
        "Investing in the right AMC not only keeps your machines in top condition but also fortifies your business against unexpected repair costs."
      </blockquote>
    `
  },
  {
    id: 6,
    title: "Electronics Parts Manufacturing in India: A Comprehensive Guide",
    category: "manufacturing",
    categoryLabel: "Manufacturing",
    date: "July 16, 2025",
    author: "GearGig Team",
    authorInitial: "G",
    readTime: "8 min read",
    emoji: "📟",
    image: "blog/blog6.png",
    excerpt: "India is quickly becoming a major player in making electronic parts for the world, driven by 'Make in India' and PLI schemes.",
    tags: ["electronics", "manufacturing", "India", "PLI scheme"],
    body: `
      <p>India is quickly becoming a major player in making electronic parts for the world. As demand for electronics rises, industries like telecom, consumer gadgets, and autos want more local parts. Programs such as "Make in India" and PLI schemes are pushing companies to produce more here.</p>

      <h2>The Current Landscape</h2>
      <p>India’s market for electronic goods is expanding at around 10% a year. Big names like Bharat Electronics Limited and private giants such as Reliance and Tata dominate the scene, while international companies like Foxconn are also investing heavily.</p>

      <h2>Critical Components Manufactured in India</h2>
      <ul>
        <li><strong>Semiconductors:</strong> India is working to build its own chip-making units with major investments from Vedanta and STMicroelectronics.</li>
        <li><strong>Passive Components:</strong> India's factories make large quantities of resistors and capacitors for global export.</li>
        <li><strong>Sensors:</strong> Indian firms are entering this high-growth field with innovative products for IoT and healthcare.</li>
      </ul>

      <blockquote>
        "If India plays its cards right, it can become a true leader in electronics parts manufacturing by 2030."
      </blockquote>

      <h2>Future Outlook</h2>
      <p>India is set to benefit from 5G, IoT, and smart device trends. Experts predict that by 2030, India could be a top manufacturing hub for electronics globally.</p>
    `
  },
  {
    id: 7,
    title: "How Freelancers are Revolutionizing Machine Maintenance and Breakdown Services",
    category: "maintenance",
    categoryLabel: "Maintenance",
    date: "July 13, 2025",
    author: "GearGig Team",
    authorInitial: "G",
    readTime: "6 min read",
    emoji: "🛠️",
    image: "blog/blog7.png",
    excerpt: "The way industries keep their machines running is changing fast. Fresh workers from the gig economy are reshaping maintenance fixed.",
    tags: ["freelancing", "maintenance", "machine repair", "gig economy"],
    body: `
      <p>The way industries keep their machines running is changing fast. Once, only in-house teams handled maintenance. Now, fresh workers from the gig economy are stepping in to reshape how breakdowns are fixed.</p>

      <h2>The Growing Role of Freelancers</h2>
      <p>Companies are turning to freelancers for tasks that need a quick fix or specialty skills. Platforms like GearGig connect businesses with skilled maintenance workers, providing verified professionals in minutes.</p>

      <h2>Technological Innovations</h2>
      <p>Sensors on machinery send real-time data to cloud systems, allowing freelancers to analyze data remotely and diagnose problems early. This tech massively reduces downtime and improves efficiency.</p>

      <blockquote>
        "Freelancers are changing how industries keep machines running. Their quick access and specialized skills make them a smart choice."
      </blockquote>

      <h2>Impact on Cost Efficiency</h2>
      <p>Hiring freelancers saves money compared to full-time staff. They work on a pay-per-task basis, allowing businesses to optimize their maintenance budgets while enhancing quality through specialized expertise.</p>
    `
  },
  {
    id: 8,
    title: "Top 10 Freelance Skills in Demand in Indian Manufacturing Today",
    category: "careers",
    categoryLabel: "Careers",
    date: "July 13, 2025",
    author: "GearGig Team",
    authorInitial: "G",
    readTime: "6 min read",
    emoji: "📊",
    image: "blog/blog8.png",
    excerpt: "India’s manufacturing sector is changing fast. Knowing which skills are in high demand makes it easier to find good projects.",
    tags: ["skills", "manufacturing", "freelancing", "India"],
    body: `
      <p>India’s manufacturing sector is changing fast. More companies are turning to freelance experts to get work done. For freelancers, knowing which skills are in high demand makes it easier to find good projects.</p>

      <h2>Top In-Demand Skills</h2>
      <ol>
        <li><strong>CAD Design:</strong> Skilled designers in AutoCAD and SolidWorks are highly sought after.</li>
        <li><strong>CNC Programming:</strong> Writing G-code and setting up automated machines.</li>
        <li><strong>Process Optimization:</strong> Expertise in Lean Manufacturing and Six Sigma.</li>
        <li><strong>Industrial Automation:</strong> PLC programming and robotics installation.</li>
        <li><strong>Data Analysis:</strong> Turning sensor data into actionable insights for output improvement.</li>
      </ol>

      <blockquote>
        "The future for skilled freelancers in Indian manufacturing looks bright. Now is the perfect time to grow your freelance career."
      </blockquote>

      <h2>Sustainability and Green Tech</h2>
      <p>Eco-friendly practices are a growing focus. Skills in waste reduction and renewable energy systems are becoming increasingly important for modern factories.</p>
    `
  },
  {
    id: 9,
    title: "Why Platforms Like GearGig Are Reshaping the Future of Work",
    category: "freelancing",
    categoryLabel: "Freelancing",
    date: "July 13, 2025",
    author: "GearGig Team",
    authorInitial: "G",
    readTime: "4 min read",
    emoji: "💡",
    image: "blog/blog9.png",
    excerpt: "In a world where agility defines success, freelancing is no longer just a side hustle—it’s a career path and the future.",
    tags: ["future of work", "freelancing", "GearGig", "flexibility"],
    body: `
      <p>In a world where agility and innovation define success, the way we work is undergoing a massive transformation. Freelancing is no longer just a side hustle—it’s a career path, a lifestyle, and for many, the future.</p>

      <h2>The Shift: From Full-Time to Flex-Time</h2>
      <p>The traditional 9-to-5 job is slowly making room for a new kind of work culture—one that values freedom and outcome-based delivery. Companies need access to talent that can jump in and scale with project needs.</p>

      <h2>Enter GearGig: The Platform for Tech-Driven Freelancers</h2>
      <p>GearGig is a curated marketplace that brings industry-grade professionals together with businesses. Whether you’re a PLC Programmer or a Product Designer, GearGig is built to help you find high-value projects.</p>

      <blockquote>
        "GearGig isn’t just about gigs. It’s about growth, collaboration, and building a future-ready workforce."
      </blockquote>

      <h2>For Companies: Hire Fast, Work Smart</h2>
      <p>GearGig helps startups and enterprises find pre-screened experts, reducing time-to-hire by over 60% and allowing them to scale without increasing long-term overhead.</p>
    `
  },
  {
    id: 10,
    title: "The State of Mechanical Engineering and Manufacturing Salaries in India (2025)",
    category: "careers",
    categoryLabel: "Careers",
    date: "June 26, 2025",
    author: "GearGig Team",
    authorInitial: "G",
    readTime: "9 min read",
    emoji: "💰",
    image: "blog/blog10.png",
    excerpt: "Understanding earning potential from a middle-class perspective in India's rapidly evolving industrial landscape.",
    tags: ["salaries", "mechanical engineering", "manufacturing", "India"],
    body: `
      <p>In India's rapidly evolving industrial landscape, mechanical engineering and manufacturing remain cornerstone sectors. As we navigate 2025, professionals are keenly interested in understanding earning potential.</p>

      <h2>Current Salary Landscape</h2>
      <p>The average base salary for mechanical engineers in India is approximately 20,850 INR per month. However, specialized roles and senior positions can command significantly higher compensation.</p>

      <h2>Factors Influencing Compensation</h2>
      <ul>
        <li><strong>Geographic Variations:</strong> Bangalore and Mumbai offer higher salaries compared to other hubs.</li>
        <li><strong>Education Level:</strong> Master's and PhD holders command significant premiums.</li>
        <li><strong>Specialized Skills:</strong> Expertise in robotics or additive manufacturing can command 20-30% premiums.</li>
      </ul>

      <blockquote>
        "The manufacturing sector is projected to see a 9.7% salary increase in 2025, outperforming the national average."
      </blockquote>

      <h2>Future Outlook</h2>
      <p>Industry 4.0 adoption and the electric vehicle boom are driving demand for high-skill mechanical expertise, leading to brighter prospects for engineering professionals.</p>
    `
  }
];


/* ══════════════════════════════════════════════
   BLOG LISTING PAGE (blog.html)
══════════════════════════════════════════════ */

/** Render the entire blog grid dynamically */
function renderBlogGrid() {
  const featured = POSTS[0];
  const others = POSTS.slice(1);

  // 1. Render Featured Post
  const featuredContainer = document.querySelector('.blog-featured');
  if (featuredContainer && featured) {
    featuredContainer.innerHTML = `
      <a href="blog-post.html?id=${featured.id}" class="featured-card" aria-label="Read featured post">
        <div class="featured-card__image">
          ${featured.image ? `<img src="${featured.image}" alt="${featured.title}" style="width:100%;height:100%;object-fit:cover;">` : featured.emoji}
          <span class="featured-badge">Featured</span>
        </div>
        <div class="featured-card__body">
          <div class="featured-card__category">${featured.categoryLabel}</div>
          <h2 class="featured-card__title">${featured.title}</h2>
          <p class="featured-card__excerpt">${featured.excerpt}</p>
          <div class="featured-card__meta">
            <div class="featured-card__author-avatar">${featured.authorInitial}</div>
            <div>
              <div class="featured-card__author-name">${featured.author}</div>
              <div class="featured-card__date">${featured.date}</div>
            </div>
          </div>
          <div class="featured-card__read-more">Read Article →</div>
        </div>
      </a>
    `;
  }

  // 2. Render Grid
  const grid = document.getElementById('blog-grid');
  if (grid) {
    grid.innerHTML = others.map(p => `
      <a href="blog-post.html?id=${p.id}" class="blog-card" data-category="${p.category}">
        <div class="blog-card__thumb">
          ${p.image ? `<img src="${p.image}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;">` : p.emoji}
          <span class="blog-card__category-tag">${p.categoryLabel}</span>
        </div>
        <div class="blog-card__body">
          <h3 class="blog-card__title">${p.title}</h3>
          <p class="blog-card__excerpt">${p.excerpt}</p>
          <div class="blog-card__footer">
            <div class="blog-card__author">
              <div class="blog-card__avatar">${p.authorInitial}</div>
              <div>
                <div class="blog-card__author-name">${p.author}</div>
                <div class="blog-card__date">${p.date}</div>
              </div>
            </div>
            <span class="blog-card__arrow">→</span>
          </div>
        </div>
      </a>
    `).join('');
  }
}

/** Filter cards by category tab */
function filterPosts(btn) {
  const category = btn.dataset.category;

  // Update active button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Show/hide cards
  document.querySelectorAll('.blog-card').forEach(card => {
    const match = category === 'all' || card.dataset.category === category;
    card.classList.toggle('hidden', !match);
  });
}

/** Search posts by title / excerpt */
function searchPosts() {
  const query = document.getElementById('search-input').value.trim().toLowerCase();
  if (!query) {
    document.querySelectorAll('.blog-card').forEach(c => c.classList.remove('hidden'));
    return;
  }
  document.querySelectorAll('.blog-card').forEach(card => {
    const title   = card.querySelector('.blog-card__title')?.textContent.toLowerCase()   || '';
    const excerpt = card.querySelector('.blog-card__excerpt')?.textContent.toLowerCase() || '';
    card.classList.toggle('hidden', !title.includes(query) && !excerpt.includes(query));
  });
}

// Allow Enter key to trigger search
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('search-input');
  if (input) {
    input.addEventListener('keydown', e => { if (e.key === 'Enter') searchPosts(); });
  }

  // If on blog.html, render the grid
  if (document.getElementById('blog-grid')) {
    renderBlogGrid();
  }

  // If on blog-post.html, render the post
  if (document.getElementById('post-body')) {
    renderPost();
  }
});


/* ══════════════════════════════════════════════
   BLOG POST PAGE (blog-post.html)
══════════════════════════════════════════════ */

function renderPost() {
  // Get ?id= from URL
  const params = new URLSearchParams(window.location.search);
  const id     = parseInt(params.get('id'), 10);
  const post   = POSTS.find(p => p.id === id);

  if (!post) {
    document.getElementById('post-title').textContent    = 'Post not found.';
    document.getElementById('post-category').textContent = '';
    document.getElementById('post-body').innerHTML       =
      '<p>Sorry, this post does not exist. <a href="blog.html">Back to Blog →</a></p>';
    return;
  }

  // Update <title>
  document.getElementById('page-title').textContent = post.title + ' — GearGig Blog';

  // Hero fields
  document.getElementById('post-category').textContent = post.categoryLabel;
  document.getElementById('post-title').textContent    = post.title;
  document.getElementById('post-avatar').textContent   = post.authorInitial;
  document.getElementById('post-author').textContent   = post.author;
  document.getElementById('post-date').textContent     = post.date;
  document.getElementById('post-read').textContent     = post.readTime;

  // Cover image/emoji
  const coverEl = document.getElementById('post-cover');
  if (post.image) {
    coverEl.innerHTML = `<img src="${post.image}" alt="${post.title}" style="width:100%;height:100%;object-fit:cover;">`;
    coverEl.style.fontSize = '0'; // Hide emoji placeholder if any
  } else {
    coverEl.textContent = post.emoji;
  }

  // Body content
  const bodyEl = document.getElementById('post-body');
  bodyEl.innerHTML = post.body;

  // Tags
  if (post.tags && post.tags.length) {
    const tagHtml = `
      <div class="post-tags">
        ${post.tags.map(t => `<span class="post-tag">#${t}</span>`).join('')}
      </div>`;
    bodyEl.insertAdjacentHTML('beforeend', tagHtml);
  }

  // Share bar
  bodyEl.insertAdjacentHTML('beforeend', `
    <div class="post-share">
      <span class="post-share__label">Share:</span>
      <button class="share-btn" title="Copy link" onclick="copyLink()">🔗</button>
      <button class="share-btn" title="Share on WhatsApp"
        onclick="window.open('https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}')">💬</button>
      <button class="share-btn" title="Share on Twitter/X"
        onclick="window.open('https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}')">🐦</button>
    </div>
  `);

  // Related posts (up to 3, excluding current)
  const related = POSTS.filter(p => p.id !== id).slice(0, 3);
  const relatedGrid = document.getElementById('related-grid');
  if (relatedGrid) {
    relatedGrid.innerHTML = related.map(p => `
      <a href="blog-post.html?id=${p.id}" class="blog-card" data-category="${p.category}">
        <div class="blog-card__thumb">
          ${p.image ? `<img src="${p.image}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;">` : p.emoji}
          <span class="blog-card__category-tag">${p.categoryLabel}</span>
        </div>
        <div class="blog-card__body">
          <h3 class="blog-card__title">${p.title}</h3>
          <p class="blog-card__excerpt">${p.excerpt}</p>
          <div class="blog-card__footer">
            <div class="blog-card__author">
              <div class="blog-card__avatar">${p.authorInitial}</div>
              <div>
                <div class="blog-card__author-name">${p.author}</div>
                <div class="blog-card__date">${p.date}</div>
              </div>
            </div>
            <span class="blog-card__arrow">→</span>
          </div>
        </div>
      </a>
    `).join('');
  }
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert('Link copied to clipboard!');
  });
}
