

# Plan: Video Background Hero Section

## Overview
Transform the current static hero image into an immersive, looping video background while maintaining accessibility, performance, and the existing parallax effect.

---

## Current State
- Hero uses a static JPG image (`hero-villa.jpg`) with CSS parallax
- Overlay gradients for text readability
- Animated content (headline, CTAs) with staggered fade-up
- Scroll indicator at bottom

---

## Implementation Steps

### 1. Create Custom Hook for Reduced Motion Detection

**File:** `src/hooks/useReducedMotion.ts`

A React hook that detects the user's `prefers-reduced-motion` preference:
- Returns `true` if user prefers reduced motion
- Listens for changes in real-time
- Used to conditionally show video or static poster

---

### 2. Update HeroSection Component

**File:** `src/components/home/HeroSection.tsx`

**Changes:**
- Import the new `useReducedMotion` hook
- Add video element with HTML5 video attributes
- Conditional rendering based on motion preference

**Video Element Structure:**
```text
+------------------------------------------+
|  <video>                                 |
|    - autoPlay (auto-start)               |
|    - loop (seamless replay)              |
|    - muted (required for autoplay)       |
|    - playsInline (iOS compatibility)     |
|    - poster={heroImage} (fallback)       |
|                                          |
|    <source src="...mp4" type="video/mp4">|
|    <source src="...webm" type="video/webm">|
|  </video>                                |
+------------------------------------------+
```

**Accessibility Logic:**
- If `prefers-reduced-motion: reduce` → Show static poster image
- If motion allowed → Show autoplaying video
- Video pauses when tab is not visible (optional optimization)

---

### 3. Add Video-Specific CSS

**File:** `src/index.css`

New utility classes for video hero:
- `.hero-video` - Full-cover video positioning
- Media query override for `prefers-reduced-motion`
- Ensure video doesn't interfere with parallax transforms

---

### 4. Video Asset Placeholder

**File:** `src/assets/hero-video.mp4` (placeholder)

Since we don't have a real video yet, the implementation will:
- Use the existing `hero-villa.jpg` as the poster/fallback
- Accept video URL as a prop or import
- Work seamlessly once a real video is added

---

## Technical Specifications

### Video Requirements
| Attribute | Value |
|-----------|-------|
| Format | MP4 (H.264) + WebM (VP9) |
| Duration | 10-20 seconds |
| Resolution | 1920x1080 (Full HD) |
| Frame Rate | 24fps (cinematic) |
| File Size | Under 15MB |
| Loop Point | Seamless start/end |

### HTML5 Video Attributes
| Attribute | Purpose |
|-----------|---------|
| `autoPlay` | Start playing immediately |
| `loop` | Restart when finished |
| `muted` | Required for autoplay in browsers |
| `playsInline` | Prevent fullscreen on iOS |
| `poster` | Fallback image while loading |

### Accessibility Features
- Respects `prefers-reduced-motion` system setting
- Static image fallback for reduced motion users
- No audio (muted) - no sound controls needed
- Poster image loads instantly before video

---

## Component Architecture

```text
HeroSection
├── useReducedMotion() hook
├── useEffect() for scroll parallax
│
├── Conditional Background
│   ├── if (reducedMotion) → <img poster>
│   └── else → <video autoPlay loop muted>
│
├── Overlay Gradients (unchanged)
│
├── Content Container
│   ├── Eyebrow text
│   ├── Headline
│   ├── Subheadline
│   └── CTA Buttons
│
└── Scroll Indicator
```

---

## Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `src/hooks/useReducedMotion.ts` | Create | Hook for motion preference detection |
| `src/components/home/HeroSection.tsx` | Modify | Add video element with conditional rendering |
| `src/index.css` | Modify | Add video-specific styles |

---

## Performance Considerations

1. **Lazy Loading**: Video only loads when hero is in viewport
2. **Poster First**: Static image shows instantly while video buffers
3. **Mobile**: Consider disabling video on mobile for bandwidth (optional)
4. **Preload**: Use `preload="metadata"` to load only video info initially

---

## Future Enhancements (Not in this implementation)

- Add play/pause toggle button for user control
- Implement intersection observer to pause video when out of view
- Add multiple video sources for different viewport sizes
- Consider WebM for better compression on supported browsers

