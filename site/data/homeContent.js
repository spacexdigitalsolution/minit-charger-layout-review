import { blogs } from "@/data/blogs";

export const featuredBlogs = blogs.slice(0, 2).map((blog) => ({
  id: blog.id,
  name: blog.title,
  kicker: blog.category,
  image: blog.thumbnailImage,
  link: `/blogs/${blog.slug}`
}));

export const homeFaqs = [
  {
    question: "We run a very specific type of fleet. How do you know what we actually need?",
    answer: "We don't sell one charger and adapt your operation to it. Airport GSE runs on tight turnaround windows and lives outdoors, warehouse MHE runs multiple shifts in a fixed footprint, commercial EV fleets have entirely different duty cycles. Every configuration starts with how your fleet actually moves, not a generic spec sheet."
  },
  {
    question: "Will installation disrupt our operation, and what if our facility doesn't fit a standard setup?",
    answer: "Installation is scoped to your site before anything is ordered, not figured out after equipment shows up. Wall-mount, pedestal, or fleet-bay options exist specifically because no two facilities are laid out the same way, and disruption gets planned around your operating hours, not the installer's schedule."
  },
  {
    question: "How do we know the system is actually working correctly before we depend on it?",
    answer: "Every unit is verified and connected to our cloud platform before go-live, so performance is confirmed against your equipment, not assumed. You're not finding out something's wrong the first time your fleet actually needs it."
  },
  {
    question: "When something goes wrong, how fast can we tell what's actually broken, and do we need to wait for someone to fly out and fix it?",
    answer: "On-screen diagnostics tell you immediately whether the problem is the charger or the battery, so you're not guessing while equipment sits idle. Most issues are visible and addressable without waiting on an outside technician, and predictive alerts are designed to catch developing problems before they become a shutdown at all."
  },
  {
    question: "We already have more dashboards than we can use. What makes this data actually useful?",
    answer: "This isn't a separate system to check, it plugs into what you already use, ERP, CMMS, existing fleet workflows, so charging and battery data shows up where your team already makes decisions instead of living in one more tab nobody opens."
  },
  {
    question: "Do you publish pricing online?",
    answer: "No. Charging infrastructure isn't a fixed-price product, it depends on fleet size, chemistry, voltage, and site conditions, so pricing comes from a scoped, tailored quote rather than a public price list."
  }
];

