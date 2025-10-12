import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Wrench, Home, Hammer, DollarSign, Shield, Star, Settings, Zap, Heart, Users } from 'lucide-react';
import Footer from '../components/Footer';

const MobileHandymanServices: React.FC = () => {
  const services = [
    {
      category: 'Senior Safety & Accessibility Services',
      seniorFocused: true,
      items: [
        { service: 'Grab Bar Installation', priceRange: '$85 - $175', time: '1-2 hours', description: 'ADA-compliant grab bars for bathrooms, hallways, stairs', seniorBenefit: 'Prevents falls and supports independent living' },
        { service: 'Handrail Installation', priceRange: '$150 - $400', time: '2-4 hours', description: 'Interior and exterior handrails for stairs and ramps', seniorBenefit: 'Essential for aging in place safely' },
        { service: 'Stair Tread Repair & Non-Slip', priceRange: '$125 - $300', time: '2-3 hours', description: 'Fix squeaky stairs, add non-slip treads', seniorBenefit: 'Reduces fall risk on stairs' },
        { service: 'Lever Handle Installation', priceRange: '$75 - $150', time: '1-2 hours', description: 'Replace round doorknobs with easy-grip levers', seniorBenefit: 'Easier for arthritic hands' },
        { service: 'Threshold Ramp Installation', priceRange: '$100 - $250', time: '1-2 hours', description: 'Small ramps over door thresholds for walkers', seniorBenefit: 'Wheelchair and walker accessibility' },
        { service: 'Motion Sensor Lighting', priceRange: '$100 - $200', time: '1-2 hours', description: 'Automatic lights for hallways, bathrooms, stairs', seniorBenefit: 'Prevents nighttime falls' },
        { service: 'Raised Toilet Seat Installation', priceRange: '$75 - $150', time: '1 hour', description: 'Install comfort-height toilet or seat riser', seniorBenefit: 'Easier sitting and standing' }
      ]
    },
    {
      category: 'Door Services',
      items: [
        { service: 'Interior Door Repair/Adjustment', priceRange: '$75 - $150', time: '1-2 hours', description: 'Fix sticking doors, adjust hinges, tighten hardware', seniorBenefit: 'Easier door operation for limited mobility' },
        { service: 'Exterior Door Repair', priceRange: '$100 - $250', time: '1-3 hours', description: 'Weather seal replacement, hardware repair, alignment', seniorBenefit: 'Improved home security and energy efficiency' },
        { service: 'Door Lock Installation', priceRange: '$85 - $175', time: '1 hour', description: 'Install new deadbolts, handle sets, smart locks', seniorBenefit: 'Keyless entry for seniors who lose keys' },
        { service: 'Screen Door Repair', priceRange: '$65 - $140', time: '1 hour', description: 'Replace screens, adjust closers, fix latches' },
        { service: 'Sliding Door Repair', priceRange: '$125 - $300', time: '2-3 hours', description: 'Roller replacement, track cleaning, lock repair', seniorBenefit: 'Easier sliding for limited strength' },
        { service: 'Door Widening Consultation', priceRange: '$150 - $300', time: '2 hours', description: 'Assess and quote wheelchair accessibility modifications' }
      ]
    },
    {
      category: 'Window Services',
      items: [
        { service: 'Window Screen Repair', priceRange: '$50 - $100', time: '30 min - 1 hour', description: 'Patch or replace torn screens, fix frames' },
        { service: 'Window Balance Replacement', priceRange: '$100 - $200 per window', time: '1-2 hours', description: 'Fix stuck or falling windows', seniorBenefit: 'Easier window operation without strength' },
        { service: 'Window Caulking/Weather Sealing', priceRange: '$75 - $150', time: '1-2 hours', description: 'Seal drafty windows, improve energy efficiency', seniorBenefit: 'Lower heating bills on fixed income' },
        { service: 'Window Lock/Hardware Repair', priceRange: '$60 - $120', time: '30 min - 1 hour', description: 'Replace broken locks, handles, latches', seniorBenefit: 'Better home security' }
      ]
    },
    {
      category: 'Carpentry & Trim Work',
      items: [
        { service: 'Baseboard Installation', priceRange: '$150 - $400 per room', time: '2-4 hours', description: 'Install new baseboards, paint-grade or stain-grade' },
        { service: 'Crown Molding Installation', priceRange: '$200 - $600 per room', time: '3-5 hours', description: 'Decorative crown molding, custom cuts' },
        { service: 'Trim Repair/Replacement', priceRange: '$100 - $250', time: '1-3 hours', description: 'Fix damaged window/door trim, casing' },
        { service: 'Chair Rail Installation', priceRange: '$175 - $350 per room', time: '2-3 hours', description: 'Decorative wall trim at chair height' },
        { service: 'Handrail Installation', priceRange: '$200 - $500', time: '3-5 hours', description: 'Interior/exterior handrails for safety', seniorBenefit: 'Critical fall prevention for aging in place' }
      ]
    },
    {
      category: 'Drywall Services',
      items: [
        { service: 'Small Drywall Hole Repair', priceRange: '$75 - $150', time: '1-2 hours', description: 'Patch holes up to 6 inches' },
        { service: 'Large Drywall Repair', priceRange: '$150 - $400', time: '2-4 hours', description: 'Replace damaged sections, texture matching' },
        { service: 'Drywall Anchor Installation', priceRange: '$50 - $100', time: '30 min - 1 hour', description: 'Heavy-duty anchors for TVs, shelves, grab bars', seniorBenefit: 'Secure grab bar mounting' },
        { service: 'Wall Texturing', priceRange: '$125 - $350', time: '2-3 hours', description: 'Match existing texture, orange peel, knockdown' }
      ]
    },
    {
      category: 'Painting Services',
      items: [
        { service: 'Room Painting (Small)', priceRange: '$200 - $400', time: '4-6 hours', description: 'Single room up to 12x12, walls only' },
        { service: 'Room Painting (Medium)', priceRange: '$350 - $650', time: '6-8 hours', description: 'Bedroom or living room, walls and trim' },
        { service: 'Ceiling Painting', priceRange: '$150 - $350', time: '2-4 hours', description: 'Standard 10x12 ceiling' },
        { service: 'Cabinet Painting', priceRange: '$400 - $1,200', time: '1-2 days', description: 'Kitchen cabinet refresh, professional finish' },
        { service: 'Deck Staining', priceRange: '$500 - $1,500', time: '1-2 days', description: 'Pressure wash, stain, seal' },
        { service: 'Touch-Up Painting', priceRange: '$75 - $150', time: '1-2 hours', description: 'Minor wall repairs and paint matching' },
        { service: 'High-Contrast Painting', priceRange: '$250 - $500', time: '4-6 hours', description: 'Contrasting colors for visual impairment', seniorBenefit: 'Better visibility for aging eyes' }
      ]
    },
    {
      category: 'Fixture Installation',
      items: [
        { service: 'Light Fixture Installation', priceRange: '$85 - $175', time: '1-2 hours', description: 'Ceiling lights, chandeliers, vanity lights', seniorBenefit: 'Brighter lighting for safety' },
        { service: 'Ceiling Fan Installation', priceRange: '$125 - $250', time: '1-2 hours', description: 'Install new fan with light kit' },
        { service: 'Outlet/Switch Installation', priceRange: '$75 - $150', time: '1 hour', description: 'Add new electrical outlets or switches', seniorBenefit: 'Rocker switches easier than toggle' },
        { service: 'Towel Bar/Grab Bar Installation', priceRange: '$65 - $125', time: '30 min - 1 hour', description: 'Secure bathroom hardware mounting', seniorBenefit: 'Essential bathroom safety' },
        { service: 'Toilet Installation', priceRange: '$150 - $300', time: '2-3 hours', description: 'Remove old, install comfort-height toilet', seniorBenefit: 'Easier for seniors to use' },
        { service: 'Faucet Replacement', priceRange: '$125 - $250', time: '1-2 hours', description: 'Kitchen or bathroom faucet swap', seniorBenefit: 'Lever handles easier than knobs' },
        { service: 'Garbage Disposal Installation', priceRange: '$150 - $300', time: '1-2 hours', description: 'Install new disposal unit' }
      ]
    },
    {
      category: 'Floor Services',
      items: [
        { service: 'Floor Squeaks Repair', priceRange: '$100 - $250', time: '1-2 hours', description: 'Secure loose floorboards, eliminate noise' },
        { service: 'Transition Strip Installation', priceRange: '$75 - $150', time: '1 hour', description: 'Install threshold between floor types', seniorBenefit: 'Smooth transitions prevent tripping' },
        { service: 'Baseboard Shoe Molding', priceRange: '$100 - $250', time: '2-3 hours', description: 'Quarter round or shoe molding for flooring' },
        { service: 'Hardwood Floor Repair (Small)', priceRange: '$150 - $350', time: '2-3 hours', description: 'Replace damaged boards, refinish' },
        { service: 'Non-Slip Floor Treatment', priceRange: '$150 - $400', time: '2-4 hours', description: 'Apply slip-resistant coating to tile/hardwood', seniorBenefit: 'Critical fall prevention' }
      ]
    },
    {
      category: 'Shelving & Storage',
      items: [
        { service: 'Shelf Installation (per shelf)', priceRange: '$60 - $125', time: '30 min - 1 hour', description: 'Floating shelves, bracket shelves at accessible heights', seniorBenefit: 'Lower shelves reduce reaching' },
        { service: 'Closet Rod Installation', priceRange: '$75 - $150', time: '1 hour', description: 'Install single or double closet rods', seniorBenefit: 'Lower rod for easy reach' },
        { service: 'Garage Storage System', priceRange: '$200 - $600', time: '3-5 hours', description: 'Wall-mounted organization system' },
        { service: 'TV Wall Mounting', priceRange: '$125 - $250', time: '1-2 hours', description: 'Professional TV mounting, cable management' }
      ]
    },
    {
      category: 'Exterior Services',
      items: [
        { service: 'Gutter Cleaning', priceRange: '$100 - $250', time: '1-2 hours', description: 'Clean gutters and downspouts', seniorBenefit: 'Prevent water damage concerns' },
        { service: 'Minor Gutter Repair', priceRange: '$125 - $300', time: '1-3 hours', description: 'Fix leaks, reattach sections' },
        { service: 'Pressure Washing (Small)', priceRange: '$150 - $350', time: '2-3 hours', description: 'Deck, patio, or walkway cleaning', seniorBenefit: 'Remove slippery algae and moss' },
        { service: 'Mailbox Installation', priceRange: '$85 - $175', time: '1-2 hours', description: 'Post mount or wall mount mailbox at accessible height', seniorBenefit: 'Easier mail access without bending' },
        { service: 'House Numbers Installation', priceRange: '$50 - $100', time: '30 min', description: 'Mount large, high-contrast address numbers', seniorBenefit: 'Better visibility for emergency services' },
        { service: 'Gate Repair', priceRange: '$100 - $250', time: '1-2 hours', description: 'Fix sagging gates, replace hardware' }
      ]
    },
    {
      category: 'Assembly Services',
      items: [
        { service: 'Furniture Assembly (Small)', priceRange: '$75 - $150', time: '1-2 hours', description: 'Chairs, small tables, nightstands' },
        { service: 'Furniture Assembly (Medium)', priceRange: '$125 - $250', time: '2-3 hours', description: 'Beds, dressers, bookshelves' },
        { service: 'Furniture Assembly (Large)', priceRange: '$200 - $400', time: '3-5 hours', description: 'Entertainment centers, wardrobes' },
        { service: 'Medical Equipment Assembly', priceRange: '$100 - $200', time: '1-2 hours', description: 'Hospital beds, shower chairs, walkers', seniorBenefit: 'Professional setup for safety' }
      ]
    },
    {
      category: 'Miscellaneous Services',
      items: [
        { service: 'Smoke Detector Installation', priceRange: '$50 - $100', time: '30 min', description: 'Hardwired or battery-operated', seniorBenefit: 'Critical safety for seniors' },
        { service: 'Carbon Monoxide Detector', priceRange: '$60 - $120', time: '30 min', description: 'Install CO detectors throughout home', seniorBenefit: 'Life-saving protection' },
        { service: 'Weather Stripping', priceRange: '$75 - $150', time: '1-2 hours', description: 'Seal doors and windows', seniorBenefit: 'Lower energy bills' },
        { service: 'Caulking Services', priceRange: '$100 - $200', time: '1-2 hours', description: 'Bathroom, kitchen, window caulking' },
        { service: 'Minor Plumbing Repair', priceRange: '$100 - $250', time: '1-2 hours', description: 'Fix leaks, replace washers, unclog drains' },
        { service: 'Vent Cover Installation', priceRange: '$60 - $120', time: '1 hour', description: 'HVAC vent covers and registers' },
        { service: 'Mirror Installation', priceRange: '$85 - $175', time: '1 hour', description: 'Wall-mounted mirrors at appropriate heights', seniorBenefit: 'Full-length mirrors for mobility device users' },
        { service: 'Child Safety Installation', priceRange: '$100 - $200', time: '2-3 hours', description: 'Cabinet locks, outlet covers, gates' }
      ]
    }
  ];

  const serviceAreas = [
    'Buffalo, NY',
    'Amherst, NY',
    'Tonawanda, NY',
    'North Tonawanda, NY',
    'Kenmore, NY',
    'Cheektowaga, NY',
    'West Seneca, NY',
    'Williamsville, NY',
    'Lancaster, NY',
    'Depew, NY',
    'Clarence, NY',
    'Orchard Park, NY',
    'Hamburg, NY',
    'East Amherst, NY'
  ];

  const seniorBenefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Aging in Place Expertise',
      description: 'We specialize in home modifications that help seniors live independently and safely in their own homes for years to come.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Senior-Friendly Service',
      description: 'Patient, respectful service with clear communication. We take time to explain all work and answer questions.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Fall Prevention Focus',
      description: 'Every modification prioritizes safety. Grab bars, handrails, non-slip surfaces, and proper lighting reduce fall risks.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: 'Senior Discounts',
      description: '10% discount for seniors 65+ and veterans on most handyman services. Fixed-income friendly pricing.'
    }
  ];

  const faqs = [
    {
      question: 'What is mobile handyman service for seniors?',
      answer: 'Mobile handyman service for seniors means we come to your Buffalo home with all tools and equipment to complete repairs, safety modifications, and aging-in-place improvements. We specialize in grab bar installation, handrail mounting, door hardware updates, lighting improvements, and other modifications that help seniors live independently at home.'
    },
    {
      question: 'How much does a handyman cost in Buffalo for senior services?',
      answer: 'Handyman rates in Buffalo for senior services range from $50-$150 per hour. We offer 10% senior discounts (65+) and bundle pricing for multiple jobs. Grab bar installation runs $85-$175, handrails $150-$400, and lever handle replacement $75-$150. Service call fee ($75) waived for jobs over $300.'
    },
    {
      question: 'Do you provide handyman services for aging in place?',
      answer: 'Yes, aging-in-place modifications are our specialty. We install grab bars, handrails, ramps, lever door handles, motion-sensor lighting, raised toilets, non-slip flooring treatments, and other modifications that help Buffalo seniors maintain independence and safety at home.'
    },
    {
      question: 'What handyman services do seniors need most?',
      answer: 'Buffalo seniors most commonly need grab bar installation (bathrooms, hallways), handrail mounting (stairs, ramps), stair repair with non-slip treads, lever door handle replacement, motion-sensor lighting, gutter cleaning, smoke detector installation, and general maintenance tasks that become difficult with age.'
    },
    {
      question: 'Does Medicare or insurance cover handyman services for seniors?',
      answer: 'Some aging-in-place modifications may be covered by Medicare Advantage plans, Medicaid waivers, or long-term care insurance. We provide detailed invoices and work documentation needed for insurance claims. Always check with your insurance provider about coverage for home safety modifications.'
    },
    {
      question: 'How quickly can you help with senior safety modifications?',
      answer: 'We prioritize senior safety jobs and often provide same-day or next-day service for urgent needs like grab bar installation after a fall, handrail repairs, or door lock issues. Standard projects are typically scheduled within 2-3 days.'
    },
    {
      question: 'Do you offer senior home safety assessments?',
      answer: 'Yes, we provide free in-home safety assessments for Buffalo seniors. We identify fall hazards, recommend modifications, and provide detailed estimates for aging-in-place improvements including grab bars, handrails, lighting, flooring, and accessibility modifications.'
    },
    {
      question: 'What makes your handyman service different for seniors?',
      answer: 'We specialize in aging-in-place modifications with 25+ years experience. Our team understands senior needs, communicates clearly, works patiently, respects your home, offers senior discounts, and focuses on safety-critical improvements that enable independent living.'
    },
    {
      question: 'Can you install medical equipment and mobility aids?',
      answer: 'Yes, we install grab bars, handrails, shower seats, toilet safety frames, bed rails, and other medical equipment. We ensure proper mounting into studs for maximum safety and weight capacity. We also assemble hospital beds, lift chairs, and other medical furniture.'
    },
    {
      question: 'Do you work with occupational therapists and case managers?',
      answer: 'Absolutely. We regularly coordinate with OTs, case managers, and home health agencies serving Buffalo seniors. We follow their recommendations for safety modifications and provide documentation for insurance and care plans.'
    },
    {
      question: 'What areas do you serve for senior handyman services?',
      answer: 'We provide senior-focused handyman services throughout Western New York including Buffalo, Amherst, Tonawanda, Kenmore, Cheektowaga, West Seneca, Williamsville, and surrounding communities within a 20-mile radius.'
    },
    {
      question: 'How do I schedule handyman services for my elderly parent?',
      answer: 'Call 716-533-7108 to schedule. We can work directly with adult children, case managers, or POA holders. We provide clear communication to all parties and can coordinate timing around caregiver schedules or doctor appointments.'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: '25+ Years Experience',
      description: 'Trusted Buffalo contractor with decades of home repair and aging-in-place modification expertise'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Aging in Place Specialists',
      description: 'Specialized training in senior home safety, fall prevention, and accessibility modifications'
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: 'Same-Day Service Available',
      description: 'Priority scheduling for urgent senior safety needs throughout Buffalo and WNY'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: 'Senior Discounts',
      description: '10% off for seniors 65+ and veterans. Clear pricing before work begins'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Fully Insured',
      description: 'Licensed, bonded, and insured for your peace of mind and protection'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: 'Quality Guaranteed',
      description: 'Workmanship warranty on all repairs and safety installations'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mobile Handyman Services Buffalo NY | Senior & Aging in Place Specialists</title>
        <meta name="description" content="Mobile handyman serving Buffalo NY seniors. Aging in place specialists. Grab bars, handrails, safety modifications. Senior discounts. Same-day service. Call 716-533-7108." />
        <meta name="keywords" content="mobile handyman buffalo ny, handyman for seniors, aging in place handyman, senior handyman services, grab bar installation buffalo, handrail installation, handyman buffalo seniors, mobile repair buffalo, handyman near me buffalo" />
        <link rel="canonical" href="https://aaronmichaelservices.com/services/mobile-handyman-services" />

        <meta property="og:title" content="Mobile Handyman Services Buffalo NY | Senior & Aging in Place Experts" />
        <meta property="og:description" content="Professional mobile handyman serving Buffalo & WNY seniors. Aging in place specialists. Grab bars, handrails, safety mods. Senior discounts. Free estimates." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aaronmichaelservices.com/services/mobile-handyman-services" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Mobile Handyman Services for Seniors and Aging in Place",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Aaron Michael Services",
              "image": "https://aaronmichaelservices.com/logo.png",
              "telephone": "716-533-7108",
              "priceRange": "$50-$1500",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Buffalo",
                "addressRegion": "NY",
                "addressCountry": "US"
              },
              "areaServed": serviceAreas.map(area => ({
                "@type": "City",
                "name": area
              })),
              "audience": {
                "@type": "PeopleAudience",
                "suggestedMinAge": 65
              }
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "50",
              "highPrice": "1500"
            },
            "additionalType": [
              "Aging in Place Services",
              "Senior Home Modifications",
              "Grab Bar Installation",
              "Handrail Installation",
              "Fall Prevention Services"
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                  <Wrench className="w-16 h-16" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Mobile Handyman Services for Buffalo Seniors
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-green-50">
                Aging in Place Specialists | Fall Prevention | Home Safety
              </p>
              <p className="text-lg mb-8 text-green-100">
                Professional Home Repairs & Senior Safety Modifications with Transparent Pricing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="tel:716-533-7108"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call (716) 533-7108
                </a>
                <Link
                  to="/contact"
                  className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-900 transition-all duration-300 shadow-lg"
                >
                  Free Safety Assessment
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Same Day Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Senior Discounts 10%</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Aging in Place Certified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap justify-around gap-6 text-center">
              <div className="flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-500" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">Senior Focused</div>
                  <div className="text-sm text-gray-600">Aging in Place</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-green-600" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">Fast Service</div>
                  <div className="text-sm text-gray-600">Same/Next Day</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-green-600" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">From $50</div>
                  <div className="text-sm text-gray-600">10% Senior Discount</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-green-600" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">Buffalo & WNY</div>
                  <div className="text-sm text-gray-600">20 Mile Radius</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">Fully Insured</div>
                  <div className="text-sm text-gray-600">Licensed & Bonded</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Aging in Place & Senior Home Safety Services
                </h2>
                <p className="text-xl text-gray-600 mb-4">
                  Specialized modifications helping Buffalo seniors live independently and safely at home
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <Link to="/services/aging-in-place" className="text-blue-600 hover:text-blue-800 font-medium underline">
                    Learn About Aging in Place
                  </Link>
                  <Link to="/services/accessible-bathrooms" className="text-blue-600 hover:text-blue-800 font-medium underline">
                    Accessible Bathroom Modifications
                  </Link>
                  <Link to="/services/wheelchair-ramps" className="text-blue-600 hover:text-blue-800 font-medium underline">
                    Wheelchair Ramp Installation
                  </Link>
                  <Link to="/services/handrails" className="text-blue-600 hover:text-blue-800 font-medium underline">
                    Handrails & Grab Bars
                  </Link>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {seniorBenefits.map((benefit, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Complete Handyman Services with Clear Pricing
                </h2>
                <p className="text-xl text-gray-600">
                  Professional mobile repair services throughout Buffalo and Western New York
                </p>
              </div>

              <div className="space-y-8">
                {services.map((category, idx) => (
                  <div key={idx} className={`rounded-xl shadow-lg overflow-hidden ${category.seniorFocused ? 'border-4 border-red-500' : 'bg-white'}`}>
                    <div className={`px-6 py-4 ${category.seniorFocused ? 'bg-gradient-to-r from-red-600 to-red-700 text-white' : 'bg-gradient-to-r from-green-600 to-green-700 text-white'}`}>
                      <h3 className="text-2xl font-bold flex items-center gap-3">
                        <Hammer className="w-6 h-6" />
                        {category.category}
                        {category.seniorFocused && <Heart className="w-6 h-6 ml-2" />}
                      </h3>
                      {category.seniorFocused && (
                        <p className="text-sm mt-2 text-red-100">Priority services for senior safety and aging in place</p>
                      )}
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Service</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price Range</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Time</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Description</th>
                            {category.seniorFocused && <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Senior Benefit</th>}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {category.items.map((item, itemIdx) => (
                            <tr key={itemIdx} className="hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4 text-gray-900 font-medium">{item.service}</td>
                              <td className="px-6 py-4 text-green-600 font-bold whitespace-nowrap">{item.priceRange}</td>
                              <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{item.time}</td>
                              <td className="px-6 py-4 text-gray-600">{item.description}</td>
                              {(category.seniorFocused || item.seniorBenefit) && (
                                <td className="px-6 py-4 text-blue-700 text-sm italic">{item.seniorBenefit || '-'}</td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Pricing Notes:</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• <strong>10% Senior Discount</strong> for clients 65+ and veterans</li>
                      <li>• Prices include labor, standard materials, and service call within Buffalo city limits</li>
                      <li>• Additional trip fee may apply outside 10-mile radius</li>
                      <li>• Specialty materials or custom parts billed at cost</li>
                      <li>• Bundle multiple jobs for better rates</li>
                      <li>• Free estimates on all jobs over $300</li>
                      <li>• <strong>Priority scheduling available for senior safety emergencies</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Why Buffalo Seniors Choose Aaron Michael Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                Related Aging in Place Services
              </h2>
              <p className="text-center text-gray-600 mb-12">
                Comprehensive home modifications for seniors throughout Buffalo and Western New York
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/services/wheelchair-ramps" className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-xl transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">Wheelchair Ramp Installation</h3>
                  <p className="text-gray-600 text-sm mb-3">ADA-compliant ramps for home accessibility and independence</p>
                  <span className="text-blue-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/accessible-bathrooms" className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-xl transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600">Accessible Bathroom Remodeling</h3>
                  <p className="text-gray-600 text-sm mb-3">Walk-in tubs, roll-in showers, grab bars, comfort-height toilets</p>
                  <span className="text-green-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/aging-in-place" className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-xl transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Aging in Place Upgrades</h3>
                  <p className="text-gray-600 text-sm mb-3">Comprehensive home modifications for senior independence</p>
                  <span className="text-purple-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/handrails" className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-xl transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600">Handrails & Grab Bars</h3>
                  <p className="text-gray-600 text-sm mb-3">Professional installation for bathrooms, stairs, hallways</p>
                  <span className="text-orange-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/door-widening" className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl hover:shadow-xl transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600">Door Widening Services</h3>
                  <p className="text-gray-600 text-sm mb-3">Expand doorways for wheelchair and walker accessibility</p>
                  <span className="text-red-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/disability-modifications" className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl hover:shadow-xl transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600">Disability Modifications</h3>
                  <p className="text-gray-600 text-sm mb-3">Specialized accessibility solutions for all disabilities</p>
                  <span className="text-teal-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/slip-resistant-flooring" className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl hover:shadow-xl transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600">Slip-Resistant Flooring</h3>
                  <p className="text-gray-600 text-sm mb-3">Non-slip flooring solutions to prevent falls</p>
                  <span className="text-indigo-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/kitchen-modifications" className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl hover:shadow-xl transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-700">Accessible Kitchen Modifications</h3>
                  <p className="text-gray-600 text-sm mb-3">Lower counters, accessible cabinets, easy-reach appliances</p>
                  <span className="text-yellow-700 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/flooring-transitions" className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl hover:shadow-xl transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Seamless Flooring Transitions</h3>
                  <p className="text-gray-600 text-sm mb-3">Level transitions to prevent tripping hazards</p>
                  <span className="text-pink-600 font-medium text-sm">Learn More →</span>
                </Link>
              </div>

              <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Aging in Place Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Aaron Michael Services provides comprehensive home modifications that enable Buffalo seniors to age in place safely and independently. From simple grab bar installation to complete bathroom remodels, we specialize in creating accessible, senior-friendly living spaces throughout Western New York.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Safety Modifications:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Grab bar installation (bathrooms, hallways, stairs)</li>
                      <li>• Handrail mounting (interior and exterior)</li>
                      <li>• Non-slip flooring treatments</li>
                      <li>• Motion-sensor lighting installation</li>
                      <li>• Lever door handle replacement</li>
                      <li>• Stair repair with anti-slip treads</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Accessibility Improvements:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Wheelchair ramp construction</li>
                      <li>• Doorway widening for mobility devices</li>
                      <li>• Walk-in tub and roll-in shower installation</li>
                      <li>• Comfort-height toilet installation</li>
                      <li>• Kitchen counter lowering</li>
                      <li>• Accessible storage solutions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Serving Buffalo & Western New York
              </h2>
              <div className="flex items-center justify-center gap-2 mb-8">
                <MapPin className="w-6 h-6 text-green-600" />
                <p className="text-lg text-gray-600">Mobile handyman service throughout WNY for seniors and all homeowners</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {serviceAreas.map((area, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-3 text-gray-700 font-medium hover:bg-green-50 transition-colors">
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions - Senior Handyman Services
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 pl-7">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make Your Home Safer for Aging in Place?
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Call now for same-day service or schedule your free safety assessment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:716-533-7108"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                (716) 533-7108
              </a>
              <Link
                to="/contact"
                className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-900 transition-all duration-300 shadow-lg"
              >
                Request Free Safety Assessment
              </Link>
            </div>
            <p className="mt-6 text-green-100">
              Serving Buffalo, Amherst, Tonawanda, Kenmore, West Seneca, and all of Western New York
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default MobileHandymanServices;
