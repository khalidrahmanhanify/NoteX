# 🚀 NoteX

[![Astro Version](https://shields.io/badge/^7.0.6-EA580C.svg?style=flat-square\&logo=astro\&logoColor=white)](https://astro.build)
[![NPM](https://shields.io/badge/NPM-EA580C.svg?style=flat-square\&logo=npm\&logoColor=white)](https://npmjs.com)
[![MIT License](https://shields.io/badge/MIT-EA580C.svg?style=flat-square\&logo=opensourceinitiative\&logoColor=white)](https://github.com)
[![TypeScript](https://shields.io/badge/TypeScript-EA580C.svg?style=flat-square\&logo=typescript\&logoColor=white)](https://www.typescriptlang.org)

**NoteX** is a modern, fast, and lightweight academic notes platform built with **Astro**. It is designed to organize university notes by semester and subject while providing a clean reading experience for technical and mathematics-heavy content.

The project uses Markdown-based notes, allowing content to be written and maintained as simple files while Astro handles routing, rendering, and static site generation.

---

## ✨ Features

* **⚡ Fast & Lightweight** — Built with Astro for efficient static page generation and minimal client-side JavaScript.
* **📝 Markdown Notes** — Write and organize notes using Markdown files.
* **🧩 MDX Support** — Supports MDX for notes that require interactive or reusable components.
* **🧮 Mathematical Notation** — Supports LaTeX-style mathematical expressions through KaTeX.
* **🎓 Semester Organization** — Notes are organized by semester and subject for easy navigation.
* **📚 Subject-Based Structure** — Each subject has its own dedicated collection of notes and resources.
* **🖼️ Subject Covers** — Dedicated cover images are available for subjects.
* **🔗 Dynamic Routing** — Semester and subject pages are generated using Astro's dynamic routing system.
* **📱 Responsive Interface** — Designed to provide a comfortable reading experience across different screen sizes.

---

## 🛠️ Tech Stack

### Core

* **Framework:** [Astro](https://astro.build)
* **Language:** [TypeScript](https://www.typescriptlang.org)
* **Styling:** CSS
* **Content:** Markdown / MDX

### Content & Rendering

* `@astrojs/mdx` — Adds MDX support to Astro.
* `katex` — Renders mathematical expressions.
* `remark-math` — Parses mathematical notation in Markdown.
* `rehype-katex` — Converts parsed mathematical expressions into KaTeX-rendered HTML.
* `astro-icon` — Provides icon support throughout the interface.

---

## 📂 Project Structure

The project is organized around semesters, subjects, and their associated notes.

```text
NoteX/
└── src/
    ├── assets/
    │   └── images/
    │       └── subjectsCovers/
    │
    ├── components/
    │   └── ...
    │
    ├── data/
    │   └── notes/
    │       ├── semester-2/
    │       │   ├── biography-of-prophet-pbuh/
    │       │   ├── data-communication-and-networking/
    │       │   ├── digital-logic-and-design/
    │       │   ├── object-oriented-programming/
    │       │   ├── principles-of-software-engineering/
    │       │   └── worship-system-of-islam/
    │       │
    │       ├── semester-3/
    │       │   ├── advance-computer-networking/
    │       │   │   └── images/
    │       │   ├── data-structures-and-algorithms/
    │       │   ├── ethical-system-of-islam/
    │       │   ├── linear-algebra/
    │       │   ├── modern-programming-languages/
    │       │   └── social-system-of-islam/
    │       │
    │       └── semester-4/
    │           ├── database-administration/
    │           ├── english-language/
    │           ├── ideological-studies/
    │           ├── operating-system-concepts/
    │           ├── religions-and-sects/
    │           └── web-technologies/
    │
    ├── icons/
    │
    ├── pages/
    │   ├── semesters/
    │   │   └── [slug]/
    │   │       └── [subject]/
    │   │
    │   └── ...
    │
    └── styles/
```

### Directory Overview

| Directory                               | Purpose                                          |
| --------------------------------------- | ------------------------------------------------ |
| `src/assets/`                           | Images and other assets processed by Astro       |
| `src/assets/images/subjectsCovers/`     | Cover images for individual subjects             |
| `src/components/`                       | Reusable Astro/UI components                     |
| `src/data/notes/`                       | Academic notes organized by semester and subject |
| `src/icons/`                            | Project icons                                    |
| `src/pages/`                            | Astro pages and dynamic routes                   |
| `src/pages/semesters/[slug]/[subject]/` | Dynamic subject note pages                       |
| `src/styles/`                           | Global and component-related styles              |

---

## 📚 Notes Organization

Notes are organized hierarchically:

```text
Semester
   ↓
Subject
   ↓
Notes / Resources
```

For example:

```text
src/data/notes/
└── semester-3/
    └── linear-algebra/
        ├── ...
        └── ...
```

This structure makes it possible to keep every subject independent while still providing a consistent navigation system throughout the website.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* **Node.js:** 22.x or newer
* **npm:** 10.x or newer
* **Git**

Check your installed versions:

```bash
node --version
npm --version
git --version
```

### Installation

Clone the repository:

```bash
git clone https://github.com/khalidrahmanhanify/NoteX.git
```

Navigate into the project:

```bash
cd NoteX
```

Install the dependencies:

```bash
npm install
```

---

## 💻 Development

Start the local development server:

```bash
npm run dev
```

Astro will start the development server, normally available at:

```text
http://localhost:4321
```

The development server automatically reloads when files are changed.

---

## 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

The generated files will be placed in:

```text
dist/
```

---

## 🔍 Preview Production Build

After creating a production build, you can preview it locally:

```bash
npm run preview
```

This allows you to verify the production version before deployment.

---

## ⚙️ Configuration

The main Astro configuration is located at:

```text
astro.config.mjs
```

Other important project configuration files include:

```text
package.json
tsconfig.json
```

### `astro.config.mjs`

Contains the Astro configuration, integrations, Markdown/MDX configuration, and other framework-level settings.

### `package.json`

Contains project metadata, dependencies, and npm scripts.

### `tsconfig.json`

Contains TypeScript compiler configuration and project-wide type-checking settings.

---

## 📝 Adding Notes

New notes can be added to the appropriate semester and subject directory inside:

```text
src/data/notes/
```

For example, a new note for Linear Algebra would belong under:

```text
src/data/notes/semester-3/linear-algebra/
```

Keeping notes separated by semester and subject makes the content easier to maintain and allows the application to generate the appropriate pages automatically.

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes.
4. Commit your changes:

```bash
git commit -m "feat: add new feature"
```

5. Push the branch:

```bash
git push origin feature/your-feature-name
```

6. Open a Pull Request.

---

## 📄 License

NoteX is distributed under the **MIT License**.

See the [`LICENSE`](LICENSE) file for the complete license text.

---

## 👤 Author

**Khalid Rahman Hanify**

* GitHub: [@khalidrahmanhanify](https://github.com/khalidrahmanhanify)

---

## 🌟 NoteX

Built to make university notes **organized, accessible, and easy to learn from.**
