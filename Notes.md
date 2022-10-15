 # Criar um projeto do zero - Ecma Script Bundler
 
 npm create vite@latest

# TSX Type script + JSX - JSX (XML Dentro do JS)

 import ReactDOM from 'react-dom/client'
                             vr
                             mobile
                             etc



# Tailwind CSS

npm i tailwindcss postcss autoprefixer -D
npx tailwindcss init -p

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


# tailwind.config.js

# Remover CSS e SVG

# VSCODE Extensions
postcss language support
GraphQL                 Branco e rosa
Tailwind CSS IntelliSense
Mdx (Storybook)


----- STORYBOOK
npx sb init --builder @storybook/builder-vite --use-npm

npm run storybook

gh repo create

gh repo view -w

# TESTS

npm install @storybook/testing-library @storybook/jest @storybook/addon-interactions @storybook/test-runner --save-dev

npm run test-storybook -- --watch

