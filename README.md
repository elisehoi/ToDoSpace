## TodoSpace – Requirements-Driven Task Management Prototype (2022)
### Team: Tasktronomy
### Role: Software Engineering & Requirements Engineering (Individual Contribution Highlighted)

TodoSpace is a conceptual task management application designed as part of a requirements engineering and software design project. The goal was to translate structured system requirements into a functional frontend prototype, following the Hermes V methodology and iterative design principles.

The application models a space-themed task organization system where:
- projects are “constellations”
- teams are “galaxies”
- tasks are “stars”

This metaphor was used to structure user interaction and improve conceptual clarity in task organization systems.

---

## Key Contributions

- Conducted **requirements elicitation and analysis** following the Hermes V methodology
- Defined system structure and user flows based on functional requirements
- Developed a **TypeScript-based frontend prototype** using Angular framework concepts
- Implemented core UI components for task creation, project organization, and user interaction
- Participated in iterative design and refinement of system specifications

---

## System Design

The system was implemented as a **frontend-only prototype** with locally managed data structures, focusing on demonstrating system design and user interaction rather than production deployment.

### Core Modules

- **ProjectFolder.ts**
  Defines project containers and hierarchical organization of tasks within folders.

- **Task.ts**
  Models task entities including name, category, description, and metadata.

- **UserAccount.ts**
  Defines user structure for authentication concept and user data handling (prototype-level).

---

## User Interface (Views)

- **index.hbs** – Landing page / system entry point
- **login.hbs** – Authentication UI prototype
- **newuser.hbs** – User creation form
- **createtask.hbs** – Task creation interface with structured input fields

---

## Technology Stack

- TypeScript
- Angular (framework structure and components)
- HTML / CSS
- Angular CLI (development environment)
- Visual Studio Code

---

## Notes

- No backend or persistent database was implemented (prototype system)
- Authentication and data persistence were conceptual / UI-level
- Focus was placed on **requirements engineering, system design, and frontend structure**

---

## What I learned

- Translating requirements into system architecture
- Structuring software systems using UML-inspired thinking (Hermes V methodology)
- Building frontend prototypes from specifications
- Designing user-centered task organization models
