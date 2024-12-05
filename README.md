# Recipe App with NuxtJS and Storybook

## Project Overview

This project is a Recipe Application built using **NuxtJS** and **Storybook**. The primary goal of this project is to demonstrate proficiency in implementing reusable components and integrating a design system while following best practices. The project uses **Tailwind CSS** for styling and adheres to **atomic design principles**.

## Features

1. **Reusable Components:**
   - Implemented 5+ reusable components based on component library best practices.
   - Components include:
     - FilterButton
     - FilterGroup
     - RecipeCard
     - RecipePagination
     - CategoryFilter (Complex Component with Multiple Variants)
2. **External Library Integration:**
   - Integrated **Element Plus** for Nuxt/Vue from the `@element-plus/nuxt` package.
   - Example usage: Implemented pagination using Element Plus components.
3. **Styling:**
   - Used **Tailwind CSS** for consistent and modern styling.
   - Applied **design tokens** for colors and spacing for better scalability.
4. **Storybook Setup:**
   - Storybook configured for component documentation and examples.
   - Each component is documented with props, states, and usage examples.
   - Includes stories for active/inactive states and multiple variants.
5. **Atomic Design:**
   - Followed **Atomic Design Principles** for component organization:
     - **Atoms:** FilterButton
     - **Molecules:** FilterGroup
     - **Organisms:** CategoryFilter
6. **Complex Component:**
   - `CategoryFilter` as a complex component with multiple interactive variants (e.g., filtering by categories like Vegetarian).

## Technologies Used

- **NuxtJS**: Framework for building modern Vue applications.
- **Storybook**: Tool for developing and documenting UI components in isolation.
- **Tailwind CSS**: Utility-first CSS framework.
- **Element Plus**: Vue 3 component library.
- **Design Tokens**: For consistent design language.

## Project Structure

```plaintext
📂 aladia-challenge
├── 📂 assets
├── 📂 components
│   ├── 📂 atoms
│   │   └── FilterButton.vue
│   ├── 📂 molecules
│   │   └── FilterGroup.vue
│   ├── 📂 organisms
│   │   └── CategoryFilter.vue
├── 📂 layouts
├── 📂 pages
├── 📂 public
├── 📂 stories
│   ├── FilterButton.stories.js
│   ├── CategoryFilter.stories.js
├── 📂 templates
├── nuxt.config.ts
├── tailwind.config.js
└── package.json
```

## How to Run the Project

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-link>
   ```
2. Navigate to the project directory:
   ```bash
   cd aladia-challenge
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

```bash
npm run dev
```

Access the app at `http://localhost:3000`.

### Running Storybook

```bash
npm run storybook
```

Access Storybook at `http://localhost:6006`.

## Components Overview

### FilterButton

- **Props:**
  - `label`: Text label for the button.
  - `isActive`: Boolean indicating active state.
- **Variants:** Active, Inactive

### FilterGroup

- A collection of FilterButtons.

### RecipeCard

- Displays a recipe’s details.

### RecipePagination

- Pagination component built with Element Plus.

### CategoryFilter

- A complex component allowing users to filter recipes by categories (e.g., Vegetarian, Vegan).

## Bonus Features

- **Design Tokens:** Implemented using Tailwind CSS for consistent spacing, colors, and typography.
- **Atomic Design:** Ensures scalable and maintainable component architecture.

## Video Presentation

- Video Link: [Your Video Link Here]

## Additional Documentation

- Storybook provides detailed documentation for each component.
- Tailwind CSS styles and tokens are documented in the `tailwind.config.js` file.

## Conclusion

This project demonstrates the ability to build a scalable, maintainable, and visually appealing UI using NuxtJS and Storybook. The focus on reusable components, design principles, and thorough documentation ensures that the project is production-ready and easy to extend.
