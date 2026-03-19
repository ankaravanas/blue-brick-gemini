# Savor.it Website Analysis
## Reference Document for Blue Brick Project

**Source:** https://savor.it/
**Analysis Date:** March 2026
**Purpose:** Design and animation reference for Blue Brick Athens website

---

## Executive Summary

Savor.it is a premium food-tech brand website that uses sophisticated scroll-based storytelling, canvas animations, and carefully orchestrated transitions to create an immersive narrative experience. The site transforms scrolling into a journey, making the user feel they're discovering something rather than just reading content.

**Key Takeaways for Blue Brick:**
- Scroll-triggered narrative builds anticipation
- Dark backgrounds with warm accents create premium feel
- Typography scale creates clear hierarchy
- Video heroes grab attention immediately
- Sticky sections create depth and layering
- Subtle hover states reward interaction

---

## 1. Technical Stack

### Libraries Used
| Library | Purpose |
|---------|---------|
| **Lenis** | Smooth scrolling with velocity tracking |
| **Rive** | Vector animations (logo reveal, bubbles) |
| **Vue.js** | Frontend framework |
| **Pinia** | State management (scroll progress, transitions) |
| **GSAP** (likely) | Complex timeline animations |

### For Blue Brick Implementation
We can achieve similar effects with:
- **Lenis** or **Locomotive Scroll** for smooth scrolling
- **Framer Motion** (already in project) for animations
- **React** (already in project)
- Custom scroll progress tracking via IntersectionObserver

---

## 2. Animation System

### Loading Sequence
1. Logo loader displays (full-screen overlay)
2. Yellow curtain (#f8e47d) wipe animation
3. Logo reveals within curtain
4. Page fades in (opacity 0 → 1)

**Blue Brick Application:**
- Blue curtain reveal with BB logo
- Brick-building animation for loader
- Staggered text reveal for "BLUE BRICK"

### Scroll-Triggered Animations

**Text Reveals:**
```css
/* Initial state */
opacity: 0;
transform: translateY(40px);

/* Revealed state */
opacity: 1;
transform: translateY(0);
transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
```

**Image Parallax:**
```css
.parallax-container {
  height: 220lvh;  /* Taller than viewport */
  margin-top: -100lvh;  /* Overlaps previous section */
}

.parallax-content {
  position: sticky;
  top: 0;
  height: 100vh;
}
```

**Staggered Children:**
```javascript
// Framer Motion equivalent
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    }
  }
};
```

### Hover Animations

**Button Hover (Dash Effect):**
```css
.button-dash {
  width: 2.2em;
  transition: transform 0.8s cubic-bezier(0, 0, 0, 1),
              opacity 0.3s linear;
}

.button:hover .button-dash {
  transform: scaleX(0);
  opacity: 0;
}

.button:hover .word-left {
  transform: translateX(1em);
}

.button:hover .word-right {
  transform: translateX(-1em);
}
```

**Image Hover:**
```css
.image-card {
  transition: opacity 0.6s linear,
              scale 0.6s cubic-bezier(0.33, 1, 0.48, 0.89);
}

.image-card:hover {
  scale: 1.05;
}

.image-overlay {
  transform: scale(0.8);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.33, 1, 0.48, 0.89);
}

.image-card:hover .image-overlay {
  transform: scale(1);
  opacity: 1;
}
```

---

## 3. Easing Functions Reference

| Name | Value | Use Case |
|------|-------|----------|
| Sharp Decel | `cubic-bezier(0, 0, 0, 1)` | Dash/line animations |
| Smooth Out | `cubic-bezier(0.22, 1, 0.36, 1)` | Text/element reveals |
| Bounce Out | `cubic-bezier(0.33, 1, 0.48, 0.89)` | Scale/hover effects |
| Linear | `linear` | Opacity fades |

**Transition Delays:**
- Enter: 0.2s delay
- Exit: 0s (immediate)
- Stagger: 0.15s between children

---

## 4. Typography System

### Fonts
| Role | Font | Weights |
|------|------|---------|
| Display | Roslindale Display Condensed | 300-700 |
| Body | Suisse Intl | 400, 600 |

**Blue Brick Equivalent:**
| Role | Font | Weights |
|------|------|---------|
| Display | Bebas Neue | 400 |
| Body | Inter | 300-700 |
| Accent | Caveat | 400-700 |

### Fluid Typography Formula
```css
/* Pattern: min(calc((min) + (max - min) * (100vw - 375px) / 1065px), max) */

/* Hero title: 6.4rem → 12rem */
font-size: min(calc(6.4rem + (12 - 6.4) * (100vw - 37.5rem) / 106.5), 12rem);

/* Body: 1.8rem → 2.2rem */
font-size: min(calc(1.8rem + (2.2 - 1.8) * (100vw - 37.5rem) / 106.5), 2.2rem);

/* Small: 1.2rem → 1.4rem */
font-size: min(calc(1.2rem + (1.4 - 1.2) * (100vw - 37.5rem) / 106.5), 1.4rem);
```

### Letter Spacing
- Display text: `-0.01em`
- Body text: `0`
- Uppercase labels: `0.05em` to `0.1em`

---

## 5. Color System

### Savor Palette
| Name | Hex | Use |
|------|-----|-----|
| Dark Brown | `#370808` | Primary text, dark buttons |
| Off-White | `#fff9eb` | Primary background |
| Cream | `#f0e7d7` | Light buttons, cards |
| Yellow | `#f8e47d` | Accent, transitions, selection |
| Brown Hover | `#522925` | Dark button hover |
| Tan Hover | `#e2d4bc` | Light button hover |
| Black | `#000000` | Hero backgrounds |

### Blue Brick Adaptation
| Name | Hex | Use |
|------|-----|-----|
| Electric Blue | `#2563EB` | Primary accent |
| Blue Light | `#3B82F6` | Hover states |
| Blue Dark | `#1D4ED8` | Active states |
| Near Black | `#0a0a0a` | Background |
| Off-White | `#fafafa` | Text |
| Concrete Gray | `#27272a` | Cards, glass |
| Chrome | `#a1a1aa` | Subtle accents |

---

## 6. Layout System

### Grid Configuration
```css
:root {
  --grid-columns: 12;
  --grid-gap: 2rem;
  --grid-max-width: 144rem;  /* 1440px at 10px root */
  --grid-side-margin: clamp(2rem, calc(2rem + 2 * (100vw - 37.5rem) / 106.5), 4rem);
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--grid-gap);
  max-width: var(--grid-max-width);
  margin: 0 auto;
  padding: 0 var(--grid-side-margin);
}
```

### Sticky Section Pattern
```css
.sticky-section {
  height: 220lvh;  /* Extra height for scroll distance */
  margin-top: -100lvh;  /* Overlap previous */
}

.sticky-content {
  position: sticky;
  top: 0;
  height: 100lvh;
  display: flex;
  align-items: center;
}
```

### Navigation Heights
- Mobile: `5rem` (80px)
- Desktop: `9rem` (144px)

---

## 7. Scroll Effects Breakdown

### Hero Video Section
```jsx
// Structure
<section className="hero-video" style={{ height: '100lvh' }}>
  <video
    autoPlay
    muted
    loop
    playsInline
    style={{
      position: 'absolute',
      inset: 0,
      objectFit: 'cover',
      transform: 'scale(1.1)',  // Slight zoom for movement feel
      opacity: 0.8,
      pointerEvents: 'none'
    }}
  />
  <div className="content" style={{ position: 'relative', zIndex: 1 }}>
    {/* Logo, title, CTA */}
  </div>
</section>
```

### Parallax Image Gallery
Uses `100lvh` to `300lvh` height sections with sticky positioning inside, creating the effect of scrolling "through" images.

### Story Canvas
1000lvh tall container with:
- Multiple absolutely positioned images
- Opacity tied to scroll progress
- SVG line animations
- Text reveals at specific scroll points

---

## 8. Key Interaction Patterns

### Video Modal
- Click triggers full-screen video overlay
- Dark backdrop fades in
- Video player with controls
- Click outside or X to close

### Image Gallery Carousel
- Horizontal scroll container
- Snap-to-card behavior
- Progress indicators
- Touch/drag support

### Newsletter Signup
- Simple email input + submit button
- Success state with confirmation message
- Error states with validation

---

## 9. Application to Blue Brick

### Hero Section Recommendations
1. **Full-viewport video/image** of the blue brick wall or venue interior
2. **Animated logo reveal** — BB monogram builds brick by brick
3. **Staggered text**: "BLUE BRICK" → "Sips. Bites. Sounds." → "Break the Brick"
4. **Scroll indicator** at bottom

### Concept Section Recommendations
1. **Sticky background** with venue photo
2. **Three pillars** (Sips, Bites, Sounds) reveal as you scroll
3. **Icon animations** — glasses clinking, fork/knife, soundwave
4. **Quote reveal**: "We don't serve food. We build it."

### Menu Section Recommendations
1. **Time-based cards** (Breakfast, Lunch, Dinner) with hover effects
2. **Parallax images** of dishes
3. **Architect/museum naming** displayed elegantly
4. **Category reveal** on scroll

### Gallery Section Recommendations
1. **Grid layout** with hover zoom effects
2. **Lightbox modal** for full images
3. **Blue glass brick wall** as hero image
4. **Scroll-triggered reveals**

### Contact Section Recommendations
1. **Split layout** — info left, map right
2. **Social links** with hover animations
3. **Hours display** that highlights current time period

---

## 10. Implementation Priority

### Phase 1: Foundation
- [ ] Install Lenis for smooth scroll
- [ ] Set up scroll progress tracking
- [ ] Implement fluid typography
- [ ] Configure color system

### Phase 2: Hero
- [ ] Video/image background with scale effect
- [ ] Logo reveal animation
- [ ] Text stagger animation
- [ ] Scroll indicator

### Phase 3: Sections
- [ ] Sticky section pattern
- [ ] Scroll-triggered reveals
- [ ] Parallax images
- [ ] Hover states

### Phase 4: Polish
- [ ] Page transitions
- [ ] Loading state
- [ ] Micro-interactions
- [ ] Performance optimization

---

## 11. Code Snippets Ready to Use

### Smooth Scroll Setup (Lenis)
```bash
npm install @studio-freight/lenis
```

```tsx
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
}
```

### Scroll Progress Hook
```tsx
import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollTop / docHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
```

### Intersection Observer for Reveals
```tsx
import { useRef, useEffect, useState } from 'react';

export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView] as const;
}
```

---

## 12. Performance Considerations

- Use `will-change: transform` sparingly and only when animating
- Prefer `transform` and `opacity` for animations (GPU accelerated)
- Lazy load images below the fold
- Use `loading="lazy"` on images
- Debounce scroll handlers
- Use CSS containment where appropriate
- Test on mobile devices for frame rate

---

*This document serves as a comprehensive reference for implementing Savor.it-inspired effects on the Blue Brick website while maintaining the brand's unique identity.*
