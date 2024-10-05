# CareerFit | Internal Job Search System

This project is a simple internal job search system for employees to search and apply for internal job vacancies. The system includes a search page and a results page, and uses a CSV file as a temporary database for demo purposes.

## Project Structure


- `jobs.csv`: Contains 50 job vacancy records.
- `server.js`: Node.js server that reads the CSV file and provides an API endpoint.
- `index.html`: The search page where users can input search criteria.
- `results.html`: The results page that displays the search results.

## Prerequisites

- Node.js and npm installed on your machine.

## Setup

1. **Clone the repository** (if applicable) or download the project files.

2. **Navigate to the project directory**:
    
bash
    cd job-search-backend
    


3. **Install the necessary dependencies**:
    
bash
    npm install
    


4. **Start the Node.js server**:
    
bash
    node server.js
    


5. **Open index.html in your browser** to access the search page.

## Usage

1. **Search for jobs**:
    - Open index.html in your browser.
    - Enter search criteria such as keyword, department, location, and job type.
    - Click the "Search" button.

2. **View search results**:
    - The search results will be displayed on `results.html`.
    - Each job listing includes a title, department, location, job type, description, and a link to apply.

## Notes

- This project uses a CSV file (`jobs.csv`) as a temporary database for demo purposes.
- The server reads the CSV file and provides an API endpoint (`/api/jobs`) to fetch job data.
- The front-end pages (`index.html` and `results.html`) use JavaScript to interact with the API and display job listings.

## License

This project is licensed under the Apache License 2.0.
