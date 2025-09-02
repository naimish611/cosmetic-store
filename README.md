Project Flow
Home Page
Displays cards/carousel for the top 7 cosmetic brands: Annabelle, Covergirl, Dior, Glossier, L'Oreal, Maybelline, Revlon.
Users can click any brand card/logo to navigate to the selected Brand Page.

Brand Page
Shows all products for the selected brand via API.
Products displayed as animated, responsive cards (image, name, price, description).
Includes a header with the brand name.

Filters & Search
Users can filter products by product type, price range, and rating range.
Products update instantly as filters change.
Includes a search bar to lookup products by name.

Loading State & No Results
A loading spinner is displayed while products fetch.
If no products match filters, a friendly message appears.

Responsive UI
Layout adjusts for all screen sizes (mobile, tablet, desktop).
Cards and controls scale and reflow for best user experience.

Animations & Polish
Cards and page sections have smooth entry and hover animations for a modern look.
Navigation and controls are touch-friendly and accessible.

Tech Stack
React.js
Material UI (MUI)
React Router DOM (routing)
Axios (API fetching)
react-slick (carousel)

How to Run
Clone the repository.
Install dependencies with npm install.
Start development server with npm start.
Access at http://localhost:3000.

Features
Modern, animated and responsive interface
Cosmetic brands carousel & click navigation
Product filtering and search
API integration with real products
Loading and error state handling
Clean, flexible MVP code structure