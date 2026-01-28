
# Comprehensive Website Redesign Plan: Anaya Sanctuary

## Overview
Transform the current website from a "template feel" to a premium, calm, nature-centric luxury villa experience. This plan addresses all 10 requirement areas with focus on lead generation, emotional connection, and HNI buyer psychology.

---

## Current State Analysis

### What Exists:
- Hero section with video/image + parallax effect
- ProofSection (stats bar with 42 villas, 18 acres, etc.)
- WhyAnayaSection (5 benefit cards)
- DesignSection (architecture philosophy)
- AmenitiesSection (horizontal scroll gallery)
- LocationSection (basic location benefits)
- GalleryTeaser (placeholder gallery)
- BookingSection (lead capture form)
- Navigation + Footer

### Key Issues to Address:
- Generic headline ("Where Architecture Meets Forest")
- Too many CTAs in hero (2 buttons)
- Missing: Master Plan, Villa Typology, Developer section
- Amenities too generic without proper categorization
- No embedded Google Map
- Form has too many fields
- Missing "About the Project" story section
- No trust-building developer credentials

---

## Implementation Plan

### Phase 1: Hero Section Redesign

**File:** `src/components/home/HeroSection.tsx`

**Changes:**
1. Replace headline with premium, clear messaging:
   - Main: "Anaya Sanctuary"
   - Subhead: "Luxury Villas Crafted in Harmony with Nature"
   - Tagline: "Limited premium villas | Thoughtfully designed | Peaceful gated living"

2. Single CTA button only:
   - "Schedule a Private Site Visit" (remove "Speak with Us" button)

3. Remove eyebrow text ("A BrikBuild Sanctuary") - too promotional

4. Keep video background with parallax (already implemented)

---

### Phase 2: New "About the Project" Section

**File:** `src/components/home/StorySection.tsx` (NEW)

**Content Structure:**
```text
Heading: "A Sanctuary, Not Just a Home"

Key Points (emotional, not salesy):
- Low density development (42 families in 18 acres)
- Privacy and space to breathe
- Nature, silence, fresh air
- Stress-free living away from city chaos
- Designed for families seeking permanence

Tone: Premium, calm, confident
Avoid: "affordable", "cheap", "best investment"
```

**Placement:** After Hero, before ProofSection

---

### Phase 3: Master Plan and Villa Typology Section

**File:** `src/components/home/MasterPlanSection.tsx` (NEW)

**Structure:**
```text
Section 1: Master Plan
- Full-width high-resolution master layout image
- Key stats below:
  - Total land area: 18 acres
  - Number of villas: 42
  - Open spaces: 60%+
  - Internal roads width: X ft

Section 2: Villa Types (Card Layout)
Each villa type card shows:
- Villa Type Name (e.g., "Aravali" / "Sahyadri")
- Built-up area (sqft)
- Plot size
- Number of bedrooms
- Private garden / sit-out details
- Clean, no-animation-overload design
```

**Note:** Will use placeholder data until real villa specs provided

---

### Phase 4: Refactor Amenities Section

**File:** `src/components/home/AmenitiesSection.tsx` (MODIFY)

**Current:** 5 generic amenities in horizontal scroll
**New:** Grouped into 3 clear buckets with vertical layout

```text
Nature & Wellness:
- Landscaped gardens
- Walking trails  
- Meditation spaces

Community:
- Clubhouse
- Seating zones
- Kids play area

Safety & Infrastructure:
- Gated entry with security
- Power backup
- Underground utilities
```

**Design:** Clean cards, no scroll overload, icon + title + short description

---

### Phase 5: Location Section with Embedded Map

**File:** `src/components/home/LocationSection.tsx` (MODIFY)

**Changes:**
1. Embed actual Google Maps iframe (placeholder until real coordinates)
2. Replace vague text with specific distances:
   - "X mins to ORR"
   - "X mins to schools"
   - "X mins to hospitals"
   - "X mins to IT hubs"

3. Add disclaimer: "Actual distances may vary"

---

### Phase 6: "Why Choose Anaya" Trust Builder Section

**File:** `src/components/home/WhyAnayaSection.tsx` (MODIFY)

**Current:** "Built for Families Who Value Time" with 5 benefits
**Rename to:** "Why Choose Anaya Sanctuary?"

**New Points:**
- Low density planning
- Premium specifications
- Thoughtful design
- Clear documentation
- Peaceful community living

---

### Phase 7: Developer/Promoter Section

**File:** `src/components/home/DeveloperSection.tsx` (NEW)

**Content:**
```text
Heading: "About BrikBuild"

- Short, professional introduction
- Years of experience / credibility
- Focus on quality & transparency
- Past projects (if any - placeholder)
- Philosophy: "We build with intention"
```

**Avoid:** Exaggerated claims, superlatives

---

### Phase 8: Simplified Lead Form

**File:** `src/components/home/BookingSection.tsx` (MODIFY)

**Current Fields:** Name, Phone, Email, City, Budget, Visit Date, Message (7 fields)
**New Fields (3 only):**
- Name
- Mobile number
- Interested in (dropdown: Site Visit / Pricing / Floor Plans / Other)

**CTA:** "Book a Site Visit" (single, clear)

**Add:** WhatsApp click button below form

---

### Phase 9: Gallery Section Refinement

**File:** `src/components/home/GalleryTeaser.tsx` (MODIFY)

**Current:** 3 placeholder gradient boxes
**New:** 3 categories with real uploaded images:
1. Exterior Views (use uploaded villa exterior image)
2. Landscapes (use uploaded outdoor seating image)
3. Sample Interiors (placeholder until provided)

**Rules:**
- Use the actual uploaded images (villa exterior, outdoor views)
- Consistent lighting & tone
- No Pinterest/stock images

---

### Phase 10: Technical & UX Improvements

**Files:** Multiple

1. **Mobile responsiveness** - Review all components for mobile-first
2. **Image optimization** - Ensure lazy loading on all images
3. **Remove unused sections** - Clean up DesignSection (merge into StorySection)
4. **Consistent font** - Already using Cormorant Garamond + Inter (keep)
5. **Color refinement** - Use calmer, earthy tones (already in place)

---

## File Changes Summary

| File | Action | Description |
|------|--------|-------------|
| `src/components/home/HeroSection.tsx` | Modify | New headline, single CTA, cleaner messaging |
| `src/components/home/StorySection.tsx` | Create | "A Sanctuary, Not Just a Home" emotional section |
| `src/components/home/MasterPlanSection.tsx` | Create | Master plan image + villa typology cards |
| `src/components/home/AmenitiesSection.tsx` | Modify | 3 category buckets, vertical layout |
| `src/components/home/LocationSection.tsx` | Modify | Embedded Google Map + specific distances |
| `src/components/home/WhyAnayaSection.tsx` | Modify | Rename + update trust points |
| `src/components/home/DeveloperSection.tsx` | Create | BrikBuild credibility section |
| `src/components/home/BookingSection.tsx` | Modify | Simplified 3-field form + WhatsApp |
| `src/components/home/GalleryTeaser.tsx` | Modify | Use uploaded images, 3 categories |
| `src/pages/Index.tsx` | Modify | Reorder sections, add new components |
| `src/assets/` | Add | Copy uploaded villa images to assets |

---

## New Section Order on Homepage

```text
1. Navigation (unchanged)
2. HeroSection (modified - cleaner headline)
3. StorySection (NEW - "A Sanctuary, Not Just a Home")
4. ProofSection (unchanged - stats bar)
5. MasterPlanSection (NEW - layout + villa types)
6. WhyAnayaSection (modified - trust points)
7. AmenitiesSection (modified - 3 categories)
8. LocationSection (modified - embedded map)
9. GalleryTeaser (modified - real images)
10. DeveloperSection (NEW - BrikBuild intro)
11. BookingSection (modified - simplified form)
12. Footer (unchanged)
```

---

## Assets to Copy

The 3 uploaded images will be used as:
1. Villa exterior render → Gallery + possibly hero fallback
2. Outdoor living/interiors collage → Gallery
3. Night villa render → Optional secondary visual

---

## Technical Notes

- All new sections will use existing `useScrollReveal` hook for animations
- Maintain existing color scheme (Forest Green, Cream, Gold)
- Keep typography: Cormorant Garamond (headlines) + Inter (body)
- Ensure all images have proper alt text for accessibility
- Mobile-first approach on all new components
- Form validation already uses Zod - will simplify schema

---

## Content Placeholders Needed

The following require real data from the client:
1. Actual villa specifications (sqft, bedrooms, plot sizes)
2. Master plan high-resolution image
3. Real location coordinates for Google Map
4. Actual distances to key landmarks
5. Developer/BrikBuild company history and credentials
6. RERA registration number (when available)

Current implementation will use realistic placeholder data that can be swapped.
