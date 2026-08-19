import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ArrowUpRight } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';

/**
 * Artwork Schema ready for future client integration.
 * No fake data or dimensions are invented.
 */
const INITIAL_ARTWORKS = [
  {
    id: 1,
    category: "Mural Art",
    title: "The Cosmic Mandala — Journey Within",
    images: [
      "/mural-cosmic-mandala-4.jpg",
      "/mural-cosmic-mandala-1.jpg",
      "/mural-cosmic-mandala-2.jpg",
      "/mural-cosmic-mandala-3.jpg"
    ],
    size: "7sqft x 4sqft",
    price: null,
    medium: null,
    year: "2025",
    description: "A contemporary Lippan-inspired mandala representing seven chakras and the journey from the outer world to inner consciousness.",
    imageRatio: "portrait"
  },
  {
    id: 93,
    category: "Mural Art",
    title: "Reflection of awakening",
    images: [
      "/Mural Art/reflections-awakening-1a.png",
      "/Mural Art/reflections-awakening-1b.png",
      "/Mural Art/reflections-awakening-1c.png",
      "/Mural Art/reflections-awakening-1d.png"
    ],
    size: "7.5sqft x 10.5sqft",
    price: null,
    medium: null,
    year: "2026",
    description: "An intricate Lippan mirror-art work depicting an expansive Tree of Life radiates outward with a figure in meditation and the seven chakras aligned along the torso and a lotus base below.",
    imageRatio: "portrait"
  },
  {
    id: 2,
    category: "Mural Art",
    title: "A Fusion of Pichwai & Lippan",
    images: [
      "/mural-fusion-pichwai-lippan-3.jpg",
      "/mural-fusion-pichwai-lippan-1.jpg",
      "/mural-fusion-pichwai-lippan-2.jpg"
    ],
    size: "4sqft x 6sqft",
    price: null,
    medium: null,
    year: "2025",
    description: "A contemporary interpretation of the Tree of Life, blending the devotional richness of Pichwai art with the intricate mirror work of Lippan art.",
    imageRatio: "portrait"
  },
  {
    id: 3,
    category: "Mural Art",
    title: "Geometry in bloom",
    images: [
      "/mural-geometry-in-bloom-1.jpg",
      "/mural-geometry-in-bloom-2.jpg",
      "/mural-geometry-in-bloom-3.jpg",
      "/mural-geometry-in-bloom-4.jpg"
    ],
    size: "6sqft x 4sqft",
    price: null,
    medium: null,
    year: "2025",
    description: "A contemporary mural merging organic botanical elements with bold geometric forms in a harmonious composition.",
    imageRatio: "portrait"
  },
  {
    id: 4,
    category: "Mural Art",
    title: "Botanical Geometry",
    images: [
      "/mural-botanical-geometry-3.jpg",
      "/mural-botanical-geometry-1.jpg",
      "/mural-botanical-geometry-2.jpg"
    ],
    size: "10sqft x 8.5sqft",
    price: null,
    medium: null,
    year: "2024",
    description: "A contemporary mural blending geometric forms with delicate florals, creating a calm and sophisticated workspace aesthetic.",
    imageRatio: "portrait"
  },
  {
    id: 5,
    category: "Mural Art",
    title: "Windows of Wonder",
    images: [
      "/mural-windows-of-wonder-2.jpg",
      "/mural-windows-of-wonder-3.jpg",
      "/mural-windows-of-wonder-4.jpg",
      "/mural-windows-of-wonder-1.jpg"
    ],
    size: "4sqft x 5sqft",
    price: null,
    medium: null,
    year: "2024",
    description: "A vibrant triptych mural blending nature, landscapes, and abstract forms into three colorful visual stories.",
    imageRatio: "portrait"
  },
  {
    id: 6,
    category: "Mural Art",
    title: "Udipi’s Upahar",
    images: [
      "/mural-udipis-upahar-1.jpg"
    ],
    size: "6sqft x 8sqft",
    price: null,
    medium: null,
    year: "2023",
    description: "A vibrant mural celebrating the rich culture and traditional charm of South India.\nDesigned to bring a warm, authentic touch to the restaurant’s ambience.",
    imageRatio: "landscape"
  },
  {
    id: 11,
    category: "Canvas Painting",
    subcategory: "Expression Art",
    title: null,
    images: [
      "/canvas-expression-art-1b.jpg",
      "/canvas-expression-art-1a.jpg"
    ],
    size: "12 x 12 inch",
    price: null,
    medium: "Acrylics on canvas",
    year: "2026",
    description: null,
    imageRatio: "square"
  },
  {
    id: 12,
    category: "Canvas Painting",
    subcategory: "Expression Art",
    title: null,
    images: [
      "/canvas-expression-art-2b.jpg",
      "/canvas-expression-art-2a.jpg"
    ],
    size: "8 x 6 inch",
    price: null,
    medium: "Acrylics on canvas",
    year: "2026",
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 14,
    category: "Canvas Painting",
    subcategory: "Faceless Art",
    title: null,
    images: [
      "/faceless-art-2b.jpg",
      "/faceless-art-2a.jpg"
    ],
    size: "8 x 6 inch",
    price: null,
    medium: "Acrylics on canvas",
    year: "2026",
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 13,
    category: "Canvas Painting",
    subcategory: "Faceless Art",
    title: null,
    images: [
      "/faceless-art-1b.jpg",
      "/faceless-art-1a.jpg"
    ],
    size: "8 x 6 inch",
    price: null,
    medium: "Acrylics on canvas",
    year: "2026",
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 17,
    category: "Canvas Painting",
    subcategory: "Faceless Art",
    title: null,
    images: [
      "/faceless-art-5a.jpg",
      "/faceless-art-5b.jpg"
    ],
    size: "8 x 6 inch",
    price: null,
    medium: "Acrylics on canvas",
    year: "2025",
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 15,
    category: "Canvas Painting",
    subcategory: "Faceless Art",
    title: null,
    images: [
      "/faceless-art-4b.jpg",
      "/faceless-art-3a.jpg"
    ],
    size: "6 x 8 inch",
    price: null,
    medium: "Acrylics on canvas",
    year: "2025",
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 16,
    category: "Canvas Painting",
    subcategory: "Faceless Art",
    title: null,
    images: [
      "/faceless-art-3b.jpg",
      "/faceless-art-4a.jpg"
    ],
    size: "8 x 6 inch",
    price: null,
    medium: "Acrylics on canvas",
    year: "2025",
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 18,
    category: "Canvas Painting",
    subcategory: "Faceless Art",
    title: null,
    images: [
      "/faceless-art-6b.jpg",
      "/faceless-art-6a.jpg"
    ],
    size: "8 x 6 inch",
    price: null,
    medium: "Acrylics on canvas",
    year: "2025",
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 19,
    category: "3D Art",
    title: "The Golden Passage",
    images: [
      "/3D art/The Golden Passage/golden-passage-1.jpg",
      "/3D art/The Golden Passage/golden-passage-2.jpg"
    ],
    size: "12 x 12 inch",
    price: null,
    medium: "Acrylic colours, Gold Foil and clay on canvas",
    description: "A textured 3D art piece featuring embossed lines in clay and radiant gold foil to create a tactile, abstract pathway.",
    imageRatio: "square"
  },
  {
    id: 20,
    category: "3D Art",
    title: "Treasured Moments",
    images: [
      "/3D art/Treasured Moments/treasured-moments-1.jpg",
      "/3D art/Treasured Moments/treasured-moments-2.jpg",
      "/3D art/Treasured Moments/treasured-moments-3.jpg"
    ],
    size: "8 x 10 inch",
    price: null,
    medium: "Acrylic coloursand clay on MDF board",
    description: "A vibrant 3D mixed-media keepsake featuring embossed clay sculptures, colorful whimsical elements, and personal baby footprints.",
    imageRatio: "portrait"
  },
  {
    id: 24,
    category: "Charcoal Art",
    title: "Serene Wisdom",
    images: [
      "/Charcoal Art/charcoal-art-4b.jpg",
      "/Charcoal Art/charcoal-art-4a.jpg"
    ],
    size: "A4 size",
    price: null,
    medium: "Charcoal on paper",
    description: "A charcoal sketch on paper capturing the peaceful, meditative profile of Buddha accompanied by a delicate lotus flower.",
    imageRatio: "portrait"
  },
  {
    id: 22,
    category: "Charcoal Art",
    title: "Perched in Detail",
    images: [
      "/Charcoal Art/charcoal-art-2a.jpg",
      "/Charcoal Art/charcoal-art-2b.jpg"
    ],
    size: "A4 size",
    price: null,
    medium: "Charcoal on paper",
    description: "A fine graphite pencil drawing on paper highlighting the intricate patterns and textures of a crested bird perched gracefully among leafy branches.",
    imageRatio: "square"
  },
  {
    id: 23,
    category: "Charcoal Art",
    title: "Melancholic Veil",
    images: [
      "/Charcoal Art/charcoal-art-3a.jpg",
      "/Charcoal Art/charcoal-art-3b.jpg"
    ],
    size: "A4 size",
    price: null,
    medium: "Charcoal on paper",
    description: "A dramatic charcoal drawing on paper portraying an expressive face partially dissolved in dripping, emotional shadows.",
    imageRatio: "square"
  },
  {
    id: 21,
    category: "Charcoal Art",
    title: "Light and Bloom",
    images: [
      "/Charcoal Art/charcoal-art-1a.jpg",
      "/Charcoal Art/charcoal-art-1b.jpg"
    ],
    size: "A4 size",
    price: null,
    medium: "Charcoal on paper",
    description: "A graphite pencil drawing on paper exploring light and nature through detailed studies of a lightbulb and a blooming lotus.",
    imageRatio: "square"
  },
  {
    id: 25,
    category: "Customised Painting",
    title: "A Journey Inward",
    images: [
      "/custom canvas painting/journey-inward-2.png",
      "/custom canvas painting/painted-melodies-1.png"
    ],
    size: "8 x 6 inch",
    price: null,
    medium: "Acrylics on canvas",
    year: "2026",
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 26,
    category: "Customised Painting",
    title: "Canvas Painting",
    images: [
      "/custom canvas painting/canvas-painting-2.png",
      "/custom canvas painting/canvas-painting-1.png"
    ],
    size: "6 x 8 inch",
    price: null,
    medium: "Acrylics on canvas",
    year: "2025",
    description: null,
    imageRatio: "square"
  },
  {
    id: 32,
    category: "Fabric Painting",
    title: "Surrealist Love",
    images: [
      "/Fabric painting/fabric-painting-6a.png",
      "/Fabric painting/fabric-painting-6b.png",
      "/Fabric painting/fabric-painting-6c.png"
    ],
    size: null,
    price: null,
    medium: "Acrylics on blazer (fabric paints)",
    year: "2026",
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 34,
    category: "Fabric Painting",
    title: "Wings of Hamsini",
    images: [
      "/Fabric painting/fabric-painting-8a.png",
      "/Fabric painting/fabric-painting-8b.png",
      "/Fabric painting/fabric-painting-8c.png",
      "/Fabric painting/fabric-painting-8d.png"
    ],
    size: null,
    price: null,
    medium: "Acrylics on georgette saree (fabric paints)",
    year: "2025",
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 31,
    category: "Fabric Painting",
    title: "Palette of Kindness",
    images: [
      "/Fabric painting/fabric-painting-5a.png",
      "/Fabric painting/fabric-painting-5b.png",
      "/Fabric painting/fabric-painting-5c.png",
      "/Fabric painting/fabric-painting-5d.png"
    ],
    size: null,
    price: null,
    medium: "Acrylics on blazer (fabric paints)",
    year: "2025",
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 33,
    category: "Fabric Painting",
    title: "Tribute in Red",
    images: [
      "/Fabric painting/fabric-painting-7a.png",
      "/Fabric painting/fabric-painting-7b.png",
      "/Fabric painting/fabric-painting-7c.png",
      "/Fabric painting/fabric-painting-7d.png"
    ],
    size: null,
    price: null,
    medium: "Acrylics on Nylon tshirt (fabric paints)",
    year: "2026",
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 30,
    category: "Fabric Painting",
    title: "Monday Moods with Donald",
    images: [
      "/Fabric painting/fabric-painting-3a.png",
      "/Fabric painting/fabric-painting-3b.png",
      "/Fabric painting/fabric-painting-3c.png"
    ],
    size: null,
    price: null,
    medium: "Acrylics on off white denim jacket (fabric paints)",
    year: "2024",
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 28,
    category: "Fabric Painting",
    title: "Draped in Feathers",
    images: [
      "/Fabric painting/fabric-painting-1a.png",
      "/Fabric painting/fabric-painting-1b.png",
      "/Fabric painting/fabric-painting-1c.png"
    ],
    size: null,
    price: null,
    medium: "Acrylics on denim jacket (fabric paints)",
    year: "2025",
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 29,
    category: "Fabric Painting",
    title: "Inner Worlds",
    images: [
      "/Fabric painting/fabric-painting-2a.png",
      "/Fabric painting/fabric-painting-2b.png",
      "/Fabric painting/fabric-painting-2c.png",
      "/Fabric painting/fabric-painting-2d.png"
    ],
    size: null,
    price: null,
    medium: "Acrylics on cotton tote bag (fabric paints)",
    year: "2026",
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 54,
    category: "Fabric Painting",
    title: "Vibrant Kingdom",
    images: [
      "/Fabric painting/fabric-painting-9a.png",
      "/Fabric painting/fabric-painting-9b.png",
      "/Fabric painting/fabric-painting-9c.png",
      "/Fabric painting/fabric-painting-9d.png"
    ],
    size: null,
    price: null,
    medium: "Acrylics on silk envelope (fabric paints)",
    year: "2026",
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 35,
    category: "Art That Moves",
    title: "Art That Moves",
    images: [
      "/Art that moves/art-that-moves-1a.png",
      "/Art that moves/art-that-moves-1b.png",
      "/Art that moves/art-that-moves-1c.png",
      "/Art that moves/art-that-moves-1d.png",
      "/Art that moves/art-that-moves-1e.png"
    ],
    size: null,
    price: null,
    medium: "Acrylics on car",
    description: "Turning a canvas into four wheels. Collaborated with Spinny to transform a car into a movie tribute to Andhra Pradesh for 80 years of independence day.\n\nFrom Lord Venkateswara, Kuchipudi Art, and traditional welcoming couples to authentic South Indian food and Muggu (rangoli) patterns.",
    imageRatio: "landscape"
  },
  {
    id: 36,
    category: "For Sale",
    title: "Ananta Bhakti",
    images: [
      "/For sale/for-sale-1a.png",
      "/For sale/for-sale-1b.png",
      "/For sale/for-sale-1c.png",
      "/For sale/for-sale-1d.png",
      "/For sale/for-sale-1e.png"
    ],
    size: "20 x 24 inches",
    price: null,
    medium: "Acrylics on canvas",
    year: "2026",
    description: "A serene acrylic painting depicting a sacred Shiva Lingam and Nandi under a glowing full moon, accented with traditional brass bells and warm floral offerings",
    imageRatio: "portrait"
  },
  {
    id: 37,
    category: "For Sale",
    title: "The Dot Clock",
    images: [
      "/For sale/for-sale-2b.png",
      "/For sale/for-sale-2a.png",
      "/For sale/for-sale-2c.png",
      "/For sale/for-sale-2d.png",
      "/For sale/for-sale-2e.png"
    ],
    size: "14 inch",
    price: null,
    medium: "Acrylics on MDF",
    year: "2026",
    description: "A beautiful fusion of handcrafted traditional art and functional home decor featuring intricate dot mandala pattern. It is finished with light cream as base and metallic gold numerals and fully varnished, creating striking statement piece.",
    imageRatio: "portrait"
  },
  {
    id: 94,
    category: "For Sale",
    title: "Miniature Painting",
    images: [
      "/For sale/for-sale-3.png"
    ],
    size: "Customisable (any)",
    price: null,
    medium: "Acrylics on canvas",
    design: "Customisable (any)",
    description: "A curated set of hand-painted mini canvases featuring diverse themes, from serene nature and abstract patterns to vibrant pop art. Perfect for adding a unique artistic touch to any cozy corner or gallery wall.",
    imageRatio: "square"
  },
  {
    id: 38,
    category: "Knife Art",
    title: "Impasto Meadow",
    images: [
      "/Knife Art/knife-art-1a.png",
      "/Knife Art/knife-art-1b.png"
    ],
    size: "8 x 6 inch",
    price: null,
    medium: "Acrylics on stretched canvas",
    technique: "Knife art",
    description: "A vibrant impasto knife painting featuring rich, thick textures of a blooming field, lush foliage, and a rustic fence under a deep blue sky.",
    imageRatio: "square"
  },
  {
    id: 39,
    category: "Marble Art",
    title: "Marbled Flora Series",
    images: [
      "/Marble Art/marble-art-1a.png",
      "/Marble Art/marble-art-1b.png"
    ],
    size: "A5 size",
    price: null,
    medium: "Ink paints on paper",
    description: "A series of artistic explorations pairing structured, hand-painted botanical and abstract elements with fluid, marbled paper backgrounds.",
    imageRatio: "square"
  },
  {
    id: 40,
    category: "Marble Art",
    title: "Marbled Flora Series",
    images: [
      "/Marble Art/marble-art-2a.png",
      "/Marble Art/marble-art-2b.png"
    ],
    size: "A5 size",
    price: null,
    medium: "Ink paints on paper",
    description: "A series of artistic explorations pairing structured, hand-painted botanical and abstract elements with fluid, marbled paper backgrounds.",
    imageRatio: "portrait"
  },
  {
    id: 41,
    category: "Marble Art",
    title: "Marbled Flora Series",
    images: [
      "/Marble Art/marble-art-3a.png",
      "/Marble Art/marble-art-3b.png"
    ],
    size: "A5 size",
    price: null,
    medium: "Ink paints on paper",
    description: "A series of artistic explorations pairing structured, hand-painted botanical and abstract elements with fluid, marbled paper backgrounds.",
    imageRatio: "square"
  },
  {
    id: 42,
    category: "Marble Art",
    title: "Marbled Flora Series",
    images: [
      "/Marble Art/marble-art-4a.png",
      "/Marble Art/marble-art-4b.png"
    ],
    size: "A5 size",
    price: null,
    medium: "Ink paints on paper",
    description: "A series of artistic explorations pairing structured, hand-painted botanical and abstract elements with fluid, marbled paper backgrounds.",
    imageRatio: "portrait"
  },
  {
    id: 43,
    category: "Marble Art",
    title: "Marbled Flora Series",
    images: [
      "/Marble Art/marble-art-5a.png",
      "/Marble Art/marble-art-5b.png"
    ],
    size: "A5 size",
    price: null,
    medium: "Ink paints on paper",
    description: "A series of artistic explorations pairing structured, hand-painted botanical and abstract elements with fluid, marbled paper backgrounds.",
    imageRatio: "portrait"
  },
  {
    id: 44,
    category: "Marble Art",
    title: "Marbled Flora Series",
    images: [
      "/Marble Art/marble-art-6a.png",
      "/Marble Art/marble-art-6b.png"
    ],
    size: "A5 size",
    price: null,
    medium: "Ink paints on paper",
    description: "A series of artistic explorations pairing structured, hand-painted botanical and abstract elements with fluid, marbled paper backgrounds.",
    imageRatio: "portrait"
  },
  {
    id: 45,
    category: "Pencil Shading",
    title: null,
    images: [
      "/Pencil Shading/pencil-shading-1a.png",
      "/Pencil Shading/pencil-shading-1b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 46,
    category: "Pencil Shading",
    title: null,
    images: [
      "/Pencil Shading/pencil-shading-2a.png",
      "/Pencil Shading/pencil-shading-2b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 47,
    category: "Pencil Shading",
    title: null,
    images: [
      "/Pencil Shading/pencil-shading-3a.png",
      "/Pencil Shading/pencil-shading-3b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 48,
    category: "Pencil Shading",
    title: null,
    images: [
      "/Pencil Shading/pencil-shading-4a.jpg",
      "/Pencil Shading/pencil-shading-4b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 49,
    category: "Pichwai Art",
    title: "Heritage Bag",
    images: [
      "/Pichwai/pichwai-1a.jpg",
      "/Pichwai/pichwai-1b.png"
    ],
    size: "A4 Size",
    price: null,
    medium: "Acrylics on paper",
    description: "A vibrant painting of a circular handbag featuring traditional motifs, including a majestic peacock and lotus florals on a bright yellow base.",
    imageRatio: "square"
  },
  {
    id: 50,
    category: "Pichwai Art",
    title: "Chromatic Harmony",
    images: [
      "/Pichwai/pichwai-2a.jpg",
      "/Pichwai/pichwai-2b.png"
    ],
    size: "A4 Size",
    price: null,
    medium: "Water colours on paper",
    description: "A mixed-media design on a decorative cushion featuring a traditional stylized deity portrait set against a vibrant, multi-colored watercolor wash.",
    imageRatio: "square"
  },
  {
    id: 52,
    category: "Pichwai Art",
    title: "Divine Union",
    images: [
      "/Pichwai/pichwai-4a.jpg",
      "/Pichwai/pichwai-4b.png"
    ],
    size: "A4 Size",
    price: null,
    medium: "Poster colours and ink pen on paper",
    description: "A traditional circular artwork featuring three stylized white cows emerging beneath a radiant, intricately patterned orange canopy.",
    imageRatio: "square"
  },
  {
    id: 51,
    category: "Pichwai Art",
    title: "Botanical Illumination",
    images: [
      "/Pichwai/pichwai-3a.png",
      "/Pichwai/pichwai-3b.png"
    ],
    size: "A4 Size",
    price: null,
    medium: "Acrylics on paper",
    description: "A hand-painted illustration of an ornate wooden table lamp featuring a vibrant lampshade adorned with palm foliage and colourful lotus florals on the shade.",
    imageRatio: "portrait"
  },
  {
    id: 53,
    category: "Wax Painting",
    title: null,
    images: [
      "/Wax Painting/wax-painting-1a.png",
      "/Wax Painting/wax-painting-1b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 55,
    category: "Customised Painting",
    title: "Painted Melodies — Sunflowers",
    images: [
      "/custom canvas painting/journey-inward-1.png",
      "/custom canvas painting/painted-melodies-sunflowers-1.png",
      "/custom canvas painting/painted-melodies-sunflowers-2.png"
    ],
    size: null,
    price: null,
    medium: "Acrylics on wood",
    year: "2025",
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 56,
    category: "Line Art",
    title: null,
    images: [
      "/Line Art/line-art-1a.png",
      "/Line Art/line-art-1b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 57,
    category: "Line Art",
    title: null,
    images: [
      "/Line Art/line-art-2a.png",
      "/Line Art/line-art-2b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 58,
    category: "Line Art",
    title: null,
    images: [
      "/Line Art/line-art-3a.png",
      "/Line Art/line-art-3b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 59,
    category: "Line Art",
    title: null,
    images: [
      "/Line Art/line-art-4a.png",
      "/Line Art/line-art-4b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 60,
    category: "Poster Painting",
    title: null,
    images: [
      "/Poster Painting/poster-painting-1a.png",
      "/Poster Painting/poster-painting-1b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 61,
    category: "Poster Painting",
    title: null,
    images: [
      "/Poster Painting/poster-painting-2a.png",
      "/Poster Painting/poster-painting-2b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 62,
    category: "Poster Painting",
    title: null,
    images: [
      "/Poster Painting/poster-painting-3a.png",
      "/Poster Painting/poster-painting-3b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 63,
    category: "Poster Painting",
    title: null,
    images: [
      "/Poster Painting/poster-painting-4a.png",
      "/Poster Painting/poster-painting-4b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "landscape"
  },
  {
    id: 64,
    category: "Poster Painting",
    title: null,
    images: [
      "/Poster Painting/poster-painting-5a.png",
      "/Poster Painting/poster-painting-5b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 65,
    category: "Poster Painting",
    title: null,
    images: [
      "/Poster Painting/poster-painting-6a.png",
      "/Poster Painting/poster-painting-6b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 66,
    category: "Poster Painting",
    title: null,
    images: [
      "/Poster Painting/poster-painting-7a.png",
      "/Poster Painting/poster-painting-7b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 67,
    category: "Poster Painting",
    title: null,
    images: [
      "/Poster Painting/poster-painting-8a.png",
      "/Poster Painting/poster-painting-8b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "landscape"
  },
  {
    id: 68,
    category: "Poster Painting",
    title: null,
    images: [
      "/Poster Painting/poster-painting-9a.png",
      "/Poster Painting/poster-painting-9b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 69,
    category: "Poster Painting",
    title: null,
    images: [
      "/Poster Painting/poster-painting-10a.png",
      "/Poster Painting/poster-painting-10b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "landscape"
  },
  {
    id: 70,
    category: "Poster Painting",
    title: null,
    images: [
      "/Poster Painting/poster-painting-11a.png",
      "/Poster Painting/poster-painting-11b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 71,
    category: "Soft Pastels",
    title: null,
    images: [
      "/Soft Pastels/soft-pastels-1a.png",
      "/Soft Pastels/soft-pastels-1b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 72,
    category: "Thread Art",
    title: "Linear Thread Portrait",
    images: [
      "/Thread Art/thread-art-1a.png",
      "/Thread Art/thread-art-1b.png"
    ],
    size: "A4 size",
    price: null,
    medium: "sewing thread, acrylic paints on paper",
    description: "A bold abstract composition combining clean geometric colour blocking with intricate coloured thread meticulously arranged on paper with linear patterns and rich textures forming a striking stylized portrait.",
    imageRatio: "square"
  },
  {
    id: 73,
    category: "Watercolour Painting",
    title: "Grace in Motion",
    images: [
      "/Water Painting/water-painting-1a.png",
      "/Water Painting/water-painting-1b.png"
    ],
    size: "A4 size",
    price: null,
    medium: "watercolour on paper",
    description: "A graceful watercolor painting capturing a dancer in a dynamic pose, set against an expressive, multi-colored abstract wash background.",
    imageRatio: "portrait"
  },
  {
    id: 74,
    category: "Watercolour Painting",
    title: "Colorful Canine Portrait",
    images: [
      "/Water Painting/water-painting-2a.png",
      "/Water Painting/water-painting-2b.png"
    ],
    size: "A4 size",
    price: null,
    medium: "watercolour on paper",
    description: "A vibrant watercolor and ink portrait capturing a friendly dog through an expressive splash of rainbow hues and loose line work.",
    imageRatio: "portrait"
  },
  {
    id: 75,
    category: "Watercolour Painting",
    title: "Cosmic Flora",
    images: [
      "/Water Painting/water-painting-3a.png",
      "/Water Painting/water-painting-3b.png"
    ],
    size: "A4 size",
    price: null,
    medium: "watercolour on paper",
    description: "A serene ink illustration on paper featuring an expressive line art portrait of a woman surrounded by delicate blooms against an vibrant atmospheric watercolor cosmos.",
    imageRatio: "portrait"
  },
  {
    id: 76,
    category: "Watercolour Painting",
    title: "Cosmic Flora",
    images: [
      "/Water Painting/water-painting-4a.png",
      "/Water Painting/water-painting-4b.png"
    ],
    size: "A4 size",
    price: null,
    medium: "watercolour on paper",
    description: "A serene ink illustration on paper featuring an expressive line art portrait of a woman surrounded by delicate blooms against an vibrant atmospheric watercolor cosmos.",
    imageRatio: "portrait"
  },
  {
    id: 77,
    category: "Watercolour Painting",
    title: "Cosmic Flora",
    images: [
      "/Water Painting/water-painting-5a.png",
      "/Water Painting/water-painting-5b.png"
    ],
    size: "A4 size",
    price: null,
    medium: "watercolour on paper",
    description: "A serene ink illustration on paper featuring an expressive line art portrait of a woman surrounded by delicate blooms against an vibrant atmospheric watercolor cosmos.",
    imageRatio: "portrait"
  },
  {
    id: 78,
    category: "Watercolour Painting",
    title: "Cosmic Flora",
    images: [
      "/Water Painting/water-painting-6a.png",
      "/Water Painting/water-painting-6b.png"
    ],
    size: "A4 size",
    price: null,
    medium: "watercolour on paper",
    description: "A serene ink illustration on paper featuring an expressive line art portrait of a woman surrounded by delicate blooms against an vibrant atmospheric watercolor cosmos.",
    imageRatio: "portrait"
  },
  {
    id: 79,
    category: "Watercolour Painting",
    title: "Cosmic Flora",
    images: [
      "/Water Painting/water-painting-7a.png",
      "/Water Painting/water-painting-7b.png"
    ],
    size: "A4 size",
    price: null,
    medium: "watercolour on paper",
    description: "A serene ink illustration on paper featuring an expressive line art portrait of a woman surrounded by delicate blooms against an vibrant atmospheric watercolor cosmos.",
    imageRatio: "portrait"
  },
  {
    id: 80,
    category: "Watercolour Painting",
    title: "Cosmic Flora",
    images: [
      "/Water Painting/water-painting-8a.png",
      "/Water Painting/water-painting-8b.png"
    ],
    size: "A4 size",
    price: null,
    medium: "watercolour on paper",
    description: "A serene ink illustration on paper featuring an expressive line art portrait of a woman surrounded by delicate blooms against an vibrant atmospheric watercolor cosmos.",
    imageRatio: "portrait"
  },
  {
    id: 81,
    category: "Watercolour Painting",
    title: "Cosmic Brew",
    images: [
      "/Water Painting/water-painting-9a.png",
      "/Water Painting/water-painting-9b.png"
    ],
    size: "A5 size",
    price: null,
    medium: "watercolour on paper",
    description: "A whimsical watercolor painting on paper depicting a stack of colorful teacups overflowing with a starry, deep-space night sky.",
    imageRatio: "portrait"
  },
  {
    id: 82,
    category: "Watercolour Painting",
    title: "Quad-Vignette Series",
    images: [
      "/Water Painting/water-painting-10a.png",
      "/Water Painting/water-painting-10b.png"
    ],
    size: "A4 size",
    price: null,
    medium: "watercolour on paper",
    description: "A vibrant watercolor painting on paper featuring four distinct atmospheric scenes, exploring different times of day and moods.",
    imageRatio: "portrait"
  },
  {
    id: 83,
    category: "Watercolour Painting",
    title: "Moonlit Dreams",
    images: [
      "/Water Painting/water-painting-11a.png",
      "/Water Painting/water-painting-11b.png"
    ],
    size: "A4 size",
    price: null,
    medium: "watercolour on paper",
    description: "A dreamlike watercolor painting on paper depicting a figure holding balloons atop a cliff against a glowing full moon and starry cosmic sky.",
    imageRatio: "portrait"
  },
  {
    id: 84,
    category: "Watercolour Painting",
    title: "Gazing at Infinity",
    images: [
      "/Water Painting/water-painting-12a.png",
      "/Water Painting/water-painting-12b.png"
    ],
    size: "A5 size",
    price: null,
    medium: "watercolour on paper",
    description: "A mixed-media watercolor painting on paper depicting a person looking through a window into a luminous, starry night sky.",
    imageRatio: "portrait"
  },
  {
    id: 85,
    category: "Colour Pencil Shading",
    title: null,
    images: [
      "/Color Pencil Shading/color-pencil-shading-1a.png",
      "/Color Pencil Shading/color-pencil-shading-1b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 86,
    category: "Colour Pencil Shading",
    title: null,
    images: [
      "/Color Pencil Shading/color-pencil-shading-2a.png",
      "/Color Pencil Shading/color-pencil-shading-2b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "landscape"
  },
  {
    id: 87,
    category: "Doodle Art",
    title: null,
    images: [
      "/Doodle Art/doodle-art-1a.png",
      "/Doodle Art/doodle-art-1b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 88,
    category: "Doodle Art",
    title: null,
    images: [
      "/Doodle Art/doodle-art-2a.png",
      "/Doodle Art/doodle-art-2b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 89,
    category: "Dot Painting",
    title: "Enlightenend Buddha",
    images: [
      "/Dot Painting/dot-painting-1a.png",
      "/Dot Painting/dot-painting-1b.png"
    ],
    size: "12 x 12 inch",
    price: null,
    medium: "Acrylics on paper",
    description: "A vibrant dot work painting featuring a meditative face of Buddha formed entirely through meticulous multicolored pointillism patterns.",
    imageRatio: "square"
  },
  {
    id: 90,
    category: "Exploration",
    title: null,
    images: [
      "/Exploration/exploration-1.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "landscape"
  },
  {
    id: 91,
    category: "Exploration",
    title: null,
    images: [
      "/Exploration/exploration-2.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 92,
    category: "Exploration",
    title: null,
    images: [
      "/Exploration/exploration-3.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  }
];

export default function Works({ setCurrentPage }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArtwork, setActiveArtwork] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (activeArtwork) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setActiveArtwork(null);
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeArtwork]);

  const handleArtworkClick = (art) => {
    setActiveArtwork(art);
    setActiveImageIndex(0);
  };

  const handleEnquiryClick = () => {
    if (!activeArtwork) return;
    const whatsappNumber = "918639772624";
    const artworkTitle = activeArtwork.title;
    const artworkCategory = activeArtwork.subcategory
      ? `${activeArtwork.category} — ${activeArtwork.subcategory}`
      : activeArtwork.category;

    const text = artworkTitle
      ? `Hi Yashi, I would like to enquire about your artwork collection: "${artworkTitle}" (${artworkCategory}) on your website.`
      : `Hi Yashi, I would like to enquire about your "${artworkCategory}" artwork on your website.`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const categories = [
    'All',
    'Mural Art',
    'For Sale',
    'Expression Art',
    'Faceless Art',
    'Customised Painting',
    'Fabric Painting',
    'Knife Art',
    'Thread Art',
    'Watercolour Painting',
    '3D Art',
    'Dot Painting',
    'Art That Moves',
    'Charcoal Art',
    'Pichwai Art',
    'Marble Art',
    'Poster Painting',
    'Doodle Art',
    'Wax Painting',
    'Soft Pastels',
    'Colour Pencil Shading',
    'Pencil Shading',
    'Line Art',
    'Exploration'
  ];

  const filteredArtworks = selectedCategory === 'All'
    ? INITIAL_ARTWORKS
    : INITIAL_ARTWORKS.filter(art => 
        art.category === selectedCategory || 
        art.subcategory === selectedCategory
      );

  return (
    <div className="page-container container section-spacing">
      {/* Page Header */}
      <header style={{ marginBottom: 'var(--space-lg)' }}>
        <span className="script-accent" style={{ fontSize: '1.4rem', color: 'var(--color-mauve)' }}>Portfolio</span>
        <h1 style={{ marginTop: '0.25rem', marginBottom: 'var(--space-sm)' }}>Selected Artworks</h1>
        <p style={{ maxWidth: '600px', fontSize: '0.95rem' }}>
          Explore Yashita's creative outputs spanning commissioned murals, custom canvas works, and textile collaborations.
        </p>
      </header>

      {/* Filter Tabs */}
      <div style={{ 
        display: 'flex', 
        gap: 'var(--space-sm)', 
        borderBottom: '1px solid var(--color-border)', 
        paddingBottom: '0.5rem',
        marginBottom: 'var(--space-lg)',
        flexWrap: 'wrap'
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: selectedCategory === cat ? 'var(--color-mauve)' : 'var(--color-sage-dark)',
              borderBottom: `2px solid ${selectedCategory === cat ? 'var(--color-mauve)' : 'transparent'}`,
              marginBottom: '-0.6rem',
              transition: 'color var(--transition-fast)',
              fontWeight: selectedCategory === cat ? '500' : '300'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Artwork Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: 'var(--space-lg)' 
      }}>
        {filteredArtworks.map(art => (
          <article 
            key={art.id} 
            className="artwork-card"
            onClick={() => handleArtworkClick(art)}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <PlaceholderImage 
              aspectRatio={art.imageRatio} 
              title={art.title || (art.subcategory ? `${art.category} — ${art.subcategory}` : art.category)} 
              subtitle="Coming Soon"
              src={art.images ? art.images[0] : null}
            />
            <div className="artwork-info">
              {art.title && <span className="artwork-title">{art.title}</span>}
              <span className="artwork-meta">{art.category}{art.subcategory && ` — ${art.subcategory}`}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox / Details Modal */}
      {activeArtwork && createPortal(
        <div className="modal-overlay" onClick={() => setActiveArtwork(null)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              className="modal-close-btn"
              onClick={() => setActiveArtwork(null)}
              aria-label="Close details"
            >
              <X size={20} />
            </button>

            {/* Modal Body */}
            <div className="modal-grid">
              {/* Image Column */}
              <div className="modal-image-col">
                {activeArtwork.images && activeArtwork.images.length > 0 ? (
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-sm)' }}>
                    {/* Main Image Display */}
                    <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img 
                        src={activeArtwork.images[activeImageIndex]} 
                        alt={`${activeArtwork.title} - View ${activeImageIndex + 1}`}
                        className="main-art-img"
                      />
                      
                      {activeArtwork.images.length > 1 && (
                        <>
                          {/* Left Arrow */}
                          <button
                            onClick={() => setActiveImageIndex((prev) => (prev === 0 ? activeArtwork.images.length - 1 : prev - 1))}
                            style={{
                              position: 'absolute',
                              left: '10px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              background: 'rgba(255, 255, 255, 0.85)',
                              border: '1px solid var(--color-border)',
                              borderRadius: '50%',
                              width: '36px',
                              height: '36px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              color: 'var(--color-charcoal)',
                              fontSize: '1.2rem',
                              fontWeight: 'bold',
                              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                          >
                            &larr;
                          </button>
                          {/* Right Arrow */}
                          <button
                            onClick={() => setActiveImageIndex((prev) => (prev === activeArtwork.images.length - 1 ? 0 : prev + 1))}
                            style={{
                              position: 'absolute',
                              right: '10px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              background: 'rgba(255, 255, 255, 0.85)',
                              border: '1px solid var(--color-border)',
                              borderRadius: '50%',
                              width: '36px',
                              height: '36px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              color: 'var(--color-charcoal)',
                              fontSize: '1.2rem',
                              fontWeight: 'bold',
                              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                          >
                            &rarr;
                          </button>
                        </>
                      )}
                    </div>
                    
                    {/* Thumbnails Row */}
                    {activeArtwork.images.length > 1 && (
                      <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                        {activeArtwork.images.map((imgSrc, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            style={{
                              padding: 0,
                              border: `2px solid ${activeImageIndex === idx ? 'var(--color-mauve)' : 'transparent'}`,
                              backgroundColor: 'transparent',
                              cursor: 'pointer',
                              width: '50px',
                              height: '50px',
                              overflow: 'hidden',
                              transition: 'border-color var(--transition-fast)'
                            }}
                          >
                            <img 
                              src={imgSrc} 
                              alt="Thumbnail" 
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <PlaceholderImage 
                    aspectRatio={activeArtwork.imageRatio} 
                    title={activeArtwork.title || (activeArtwork.subcategory ? `${activeArtwork.category} — ${activeArtwork.subcategory}` : activeArtwork.category)} 
                    subtitle="Coming Soon"
                    style={{ width: '100%', border: 'none' }}
                  />
                )}
              </div>

              {/* Information Column */}
              <div className="modal-info-col">
                <div>
                  <span className="script-accent" style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--color-mauve)' }}>
                    {activeArtwork.category}{activeArtwork.subcategory && ` — ${activeArtwork.subcategory}`}
                  </span>
                  {activeArtwork.title && (
                    <h2 style={{ fontSize: '1.8rem', marginBottom: 'var(--space-sm)' }}>
                      {activeArtwork.title}
                    </h2>
                  )}
                  <div style={{ height: '1px', backgroundColor: 'var(--color-border)', margin: 'var(--space-sm) 0' }}></div>
                  
                  {/* Factual documentation ready states */}
                  {(activeArtwork.medium || activeArtwork.size || activeArtwork.price || activeArtwork.year || activeArtwork.location || activeArtwork.technique || activeArtwork.design) && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', margin: 'var(--space-md) 0' }}>
                      {activeArtwork.design && (
                        <div style={{ fontSize: '0.95rem' }}>
                          <span style={{ color: 'var(--color-sage-dark)', fontWeight: 600 }}>Design: </span>
                          <span style={{ color: 'var(--color-charcoal)' }}>{activeArtwork.design}</span>
                        </div>
                      )}
                      {activeArtwork.medium && (
                        <div style={{ fontSize: '0.95rem' }}>
                          <span style={{ color: 'var(--color-sage-dark)', fontWeight: 600 }}>Medium: </span>
                          <span style={{ color: 'var(--color-charcoal)' }}>{activeArtwork.medium}</span>
                        </div>
                      )}
                      {activeArtwork.technique && (
                        <div style={{ fontSize: '0.95rem' }}>
                          <span style={{ color: 'var(--color-sage-dark)', fontWeight: 600 }}>Technique: </span>
                          <span style={{ color: 'var(--color-charcoal)' }}>{activeArtwork.technique}</span>
                        </div>
                      )}
                      {activeArtwork.size && (
                        <div style={{ fontSize: '0.95rem' }}>
                          <span style={{ color: 'var(--color-sage-dark)', fontWeight: 600 }}>Dimensions: </span>
                          <span style={{ color: 'var(--color-charcoal)' }}>{activeArtwork.size}</span>
                        </div>
                      )}
                      {activeArtwork.price && (
                        <div style={{ fontSize: '0.95rem' }}>
                          <span style={{ color: 'var(--color-sage-dark)', fontWeight: 600 }}>Availability: </span>
                          <span style={{ color: 'var(--color-charcoal)' }}>{activeArtwork.price}</span>
                        </div>
                      )}
                      {activeArtwork.year && (
                        <div style={{ fontSize: '0.95rem' }}>
                          <span style={{ color: 'var(--color-sage-dark)', fontWeight: 600 }}>Year: </span>
                          <span style={{ color: 'var(--color-charcoal)' }}>{activeArtwork.year}</span>
                        </div>
                      )}
                      {activeArtwork.location && (
                        <div style={{ fontSize: '0.95rem' }}>
                          <span style={{ color: 'var(--color-sage-dark)', fontWeight: 600 }}>Location: </span>
                          <span style={{ color: 'var(--color-charcoal)' }}>{activeArtwork.location}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {activeArtwork.description && (
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--color-charcoal)' }}>
                      {activeArtwork.description}
                    </p>
                  )}
                </div>

                <div style={{ marginTop: 'var(--space-sm)' }}>
                  <button 
                    className="btn-primary" 
                    style={{ width: '100%' }}
                    onClick={handleEnquiryClick}
                  >
                    Enquire About This Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
