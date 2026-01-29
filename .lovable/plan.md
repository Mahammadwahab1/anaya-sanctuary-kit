
# Amenities Page Implementation Plan

## Overview
Create a visually stunning, image-first `/amenities` page that showcases the lifestyle at Anaya Sanctuary. Following the user's direction for "more images, less content," this page will be a visual experience with minimal text, using the uploaded architectural renders.

---

## Design Philosophy
- **Image-first approach**: Large, full-width visuals with minimal overlaid text
- **Less content**: Short, evocative phrases instead of paragraphs
- **Luxury aesthetic**: Consistent with existing site (Forest Green, Cream, Gold)
- **Scroll-driven narrative**: Each amenity category revealed as user scrolls

---

## Page Structure

```text
1. Hero Banner (full-width image with minimal text)
2. Nature & Wellness Gallery (image grid with hover overlays)
3. Community Spaces (alternating image/text layout)
4. Villa Living (full-bleed showcase)
5. Safety & Infrastructure (subtle icons section)
6. CTA (Schedule a Visit)
```

---

## Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `src/assets/amenity-exterior.jpg` | Copy | Villa exterior render for hero |
| `src/assets/amenity-outdoor.jpg` | Copy | Outdoor living collage image |
| `src/assets/amenity-night.jpg` | Copy | Night ambience render |
| `src/pages/Amenities.tsx` | Create | Full amenities page component |
| `src/App.tsx` | Modify | Add `/amenities` route |

---

## Component Implementation

### Hero Section
- Full-width hero image (villa exterior render)
- Minimal overlay text: "Life at Anaya" + "Where every detail enhances the everyday"
- No CTA button in hero (clean visual)

### Nature & Wellness Gallery
- 3-column masonry-style grid
- Hover effect reveals amenity name
- Images: Landscaped gardens, walking trails, meditation spaces
- Uses the outdoor living collage image

### Community Section  
- Alternating layout: large image left, small text right (then swap)
- Clubhouse, seating zones, kids play area
- Short phrases only (5-10 words max per item)

### Villa Living Showcase
- Full-bleed section with the night render
- Text overlay: "Designed for Quiet Moments"
- Highlights: Private gardens, outdoor terraces, natural light

### Infrastructure (Minimal)
- Small, elegant icon row
- Gated entry, power backup, underground utilities
- Subtle, not dominant

### Final CTA
- "Experience Anaya in Person"
- Single button to Contact page

---

## Technical Implementation

### Assets
Copy uploaded images to `src/assets/`:
- `amenity-exterior.jpg` - Villa daylight exterior
- `amenity-outdoor.jpg` - Outdoor living collage
- `amenity-night.jpg` - Evening villa render

### Page Component (`src/pages/Amenities.tsx`)
```typescript
// Imports
import Navigation, Footer, useScrollReveal, Button
import images from @/assets/

// Sections:
// - Hero (full-width image banner)
// - NatureWellness (image grid)
// - CommunitySpaces (alternating layout)
// - VillaLiving (full-bleed showcase)
// - Infrastructure (icon row)
// - CTA section
```

### Routing Update (`src/App.tsx`)
```typescript
import Amenities from "./pages/Amenities";

<Route path="/amenities" element={<Amenities />} />
```

---

## Visual Layout Sketches

### Hero Section
```text
+--------------------------------------------------+
|                                                  |
|                 [FULL-WIDTH IMAGE]               |
|                                                  |
|           Life at Anaya                          |
|     Where every detail enhances the everyday     |
|                                                  |
+--------------------------------------------------+
```

### Nature Gallery (3-column)
```text
+----------------+----------------+----------------+
|                |                |                |
|  Landscaped    |   Walking      |   Meditation  |
|   Gardens      |    Trails      |    Spaces     |
|                |                |                |
+----------------+----------------+----------------+
```

### Alternating Layout
```text
+---------------------------+-------------+
|                           |  Clubhouse  |
|     [LARGE IMAGE]         |  Where      |
|                           |  community  |
|                           |  gathers    |
+---------------------------+-------------+

+-------------+---------------------------+
|   Kids      |                           |
|   Play      |     [LARGE IMAGE]         |
|   Area      |                           |
|             |                           |
+-------------+---------------------------+
```

---

## Styling Notes
- Use existing `section-padding`, `container-wide` classes
- Apply `useScrollReveal` hook for scroll animations
- Maintain `font-display` for headings, `font-body` for body
- Image overlays: subtle gradient, not heavy dark overlays
- Hover effects: scale + slight opacity change (existing pattern)

---

## Mobile Responsiveness
- Hero: full-height on mobile with centered text
- Gallery: single column stack on mobile
- Alternating sections: image on top, text below on mobile
- Touch-friendly spacing throughout
