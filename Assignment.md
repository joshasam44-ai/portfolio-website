# Portfolio Website Design Assignment

**Course:** Web Development Fundamentals  
**Due Date:** 18-11-2025  

---

## Assignment Overview

You will design and develop a personal portfolio website that showcases your skills, projects, and professional identity. This assignment will demonstrate your understanding of HTML structure, CSS styling, responsive design principles, and basic JavaScript interactivity.

---

## Learning Objectives

By completing this assignment, you will:
- Apply semantic HTML5 to create well-structured web pages
- Use CSS to create visually appealing and responsive layouts
- Implement JavaScript for basic interactivity and user engagement
- Understand web design principles including accessibility and user experience
- Develop a professional online presence

---

## Technical Requirements

### 1. HTML Structure

Your website must include the following pages:

- **Home/Landing Page** - Introduction and overview
- **About Page** - Personal background, skills, education
- **Projects/Portfolio Page** - Showcase at least 3 projects
- **Contact Page** - Contact form and information

**Requirements:**
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Include proper document structure with `<!DOCTYPE html>`, `<head>`, and `<body>`
- Use meaningful and descriptive meta tags (title, description, viewport)
- Implement a consistent navigation menu across all pages
- Ensure all images have descriptive `alt` attributes

### 2. CSS Styling

**Requirements:**
- Create an external CSS file (no inline or internal styles)
- Implement a cohesive color scheme (3-5 colors)
- Use web-safe fonts or Google Fonts
- Style all pages with consistent typography (headings, paragraphs, lists)
- Apply CSS Box Model properties (margin, padding, border)
- Use CSS Flexbox or Grid for layout
- Include hover effects on interactive elements
- Style the contact form with appropriate visual feedback

**Responsive Design:**
- Implement mobile-first responsive design using media queries
- Ensure website is functional on mobile (320px+), tablet (768px+), and desktop (1024px+)
- Navigation should adapt for mobile devices (hamburger menu optional but encouraged)

### 3. JavaScript Functionality

Implement at least THREE of the following features:

- **Form Validation** - Validate contact form inputs before submission
- **Smooth Scrolling** - Smooth scroll to sections when clicking navigation links
- **Dynamic Content** - Load project data dynamically or filter projects by category
- **Modal/Lightbox** - Display project details or images in a modal
- **Theme Toggle** - Dark mode / light mode switcher
- **Animated Elements** - Scroll-triggered animations or interactive components
- **Responsive Navigation** - Hamburger menu that opens/closes with JavaScript

### 4. Content Requirements

- **Home Page:** Welcome message, brief introduction, call-to-action
- **About Page:** Professional summary, skills list (HTML, CSS, JS, etc.), education/experience
- **Projects Page:** Minimum 3 projects with:
  - Project title and description
  - Technologies used
  - Screenshots or images
  - Links to live demo or GitHub repository (can be placeholder)
- **Contact Page:** Working contact form with fields for name, email, subject, and message

### 5. Design & Usability

- Clean, professional, and visually appealing design
- Consistent styling across all pages
- Intuitive navigation and user experience
- Proper whitespace and visual hierarchy
- Loading performance (optimized images)
- Cross-browser compatibility (Chrome, Firefox, Safari)

---

## Submission Guidelines

1. **File Structure:** Organize your files properly
   ```
   portfolio-website/
   ├── index.html
   ├── about.html
   ├── projects.html
   ├── contact.html
   ├── css/
   │   └── style.css
   ├── js/
   │   └── script.js
   ├── images/
   │   └── [your images]
   └── README.md
   ```

2. **README.md:** update the README.md to include:
   - Your name 
   - Brief description of your portfolio
   - List of JavaScript features implemented
   - Any external libraries or resources used
   - Instructions to run the website

3. **Code Quality:**
   - Use proper indentation and formatting
   - Include comments explaining complex code
   - Use meaningful variable and class names


---

## Git Instructions

Follow these steps to work with Git for this assignment. Replace placeholders like `<repo-url>` and `<your-folder>` with your actual values.

### 1) Clone the repository
```bash
git clone <repo-url>
cd <your-folder>
```

Optional: configure your identity (set once per machine):
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### 2) Create and switch to the 'develop' branch
```bash
git checkout -b develop
```

Verify you are on the correct branch:
```bash
git branch --show-current
```

### 3) Do your work on develop branch and commit regularly.
Stage all changes and commit with a clear message:
```bash
git add -A
git commit -m "feat: initial portfolio structure"
```

Repeat `add` + `commit` as you progress (small, frequent commits).

### 4) Push the develop branch to the remote
```bash
git push -u origin develop

If you need to switch branches later:
```bash
git switch main      # go to main
git switch develop   # come back to develop
```

Only commit and push code on the `develop` branch for this assignment.

---

## Resources

- **HTML/CSS Reference:** MDN Web Docs (developer.mozilla.org)
- **Color Palettes:** Coolors.co, Adobe Color
- **Fonts:** Google Fonts (fonts.google.com)
- **Icons:** Font Awesome, Feather Icons
- **Images:** Unsplash, Pexels (for placeholders)
- **Validation:** W3C Validator (validator.w3.org)

---

## Tips for Success

1. **Start with a plan:** Map out your plan to learn the basics of the web languages before coding
2. **Mobile-first approach:** Design for mobile, then scale up
3. **Keep it simple:** A clean, simple design is better than a cluttered complex one
4. **Test frequently:** Check your website on different browsers and view-ports
5. **Commit regularly:**  commit your changes frequently

---

## Project Integrity

This is an individual assignment. While you may discuss concepts with AI agents, all code and design must be your own work. Properly cite any code snippets, tutorials, or resources used. 

---


Good luck, and happy coding!