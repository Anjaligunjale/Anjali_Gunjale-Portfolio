import React, { useState } from "react";
import { Link } from "react-scroll"; // For smooth scrolling
import { Github, Linkedin, Download } from "lucide-react";
import CertificationsPage from "./pages/Certifications";
import { CERTIFICATIONS } from "./data/certifications";
import './index.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#2c3e50' }}>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-teal-600 text-white z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo or Title */}
            <div className="text-3xl font-bold">
              <a href="#home" className="text-white">Anjali's Portfolio</a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10">
              <Link to="home" smooth={true} className="text-white hover:text-teal-200">Home</Link>
              <Link to="about-me" smooth={true} className="text-white hover:text-teal-200">About</Link>
              <Link to="skills" smooth={true} className="text-white hover:text-teal-200">Skills</Link>
              <Link to="projects" smooth={true} className="text-white hover:text-teal-200">Projects</Link>
              <Link to="certifications" smooth={true} className="text-white hover:text-teal-200">Certifications</Link>
              
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="md:hidden bg-teal-600 text-white py-4 px-6">
              <Link to="home" smooth={true} onClick={() => setIsOpen(false)} className="block py-2">Home</Link>
              <Link to="about-me" smooth={true} onClick={() => setIsOpen(false)} className="block py-2">About</Link>
              <Link to="skills" smooth={true} onClick={() => setIsOpen(false)} className="block py-2">Skills</Link>
              <Link to="projects" smooth={true} onClick={() => setIsOpen(false)} className="block py-2">Projects</Link>
              <Link to="certifications" smooth={true} onClick={() => setIsOpen(false)} className="block py-2">Certifications</Link>
             
            </div>
          )}
        </div>
      </nav>

      {/* Header Section */}
      <header className="py-12 mt-14 bg-[#0f172a] text-white" id="home">
      
        <div className="flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center px-6 md:px-20">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 flex justify-center">
            <img
              src="/public/Profile.jpg"  // Path to your profile image
              alt="Professional image related to coding or technology"
              className="rounded-tl-3xl rounded-br-3xl w-full object-cover h-full shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:border-teal-500 border-4 border-transparent"
            />
          </div>

          <div className="text-center md:text-left md:ml-6 md:flex-1">
            <h1 className="text-5xl font-bold">Anjali Nandlal Gunjale</h1>
            <p className="text-xl mt-2">BTech in Computer Science & Engineering</p>
            <p className="text-lg mt-2">Marathwada Institute of Technology (2022-2025)</p>
            <div className="mt-4">
              <p>+91 9307656794 | <a href="mailto:gunjaleanjali@gmail.com" className="text-teal-200">gunjaleanjali@gmail.com</a></p>
              <p>
                <a href="https://www.linkedin.com/in/anjali-gunjale" className="underline text-teal-200">LinkedIn Profile</a>
                <tab>   <a href="https://github.com/Anjaligunjale" className="underline text-teal-200"> Github Profile</a> </tab>
              </p>
              <p>
                
              </p>
            </div>

            <div className="mt-6 flex justify-center md:justify-start space-x-6">
              <a href="mailto:gunjaleanjali@gmail.com" className="text-teal-200 text-2xl hover:text-teal-500 transition-all duration-300">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="tel:+919307656794" className="text-teal-200 text-2xl hover:text-teal-500 transition-all duration-300">
                <i className="fas fa-phone-alt"></i>
              </a>
              <a href="https://www.linkedin.com/in/anjali-gunjale" className="text-teal-200 text-2xl hover:text-teal-500 transition-all duration-300">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Anjaligunjale" className="text-teal-200 text-2xl hover:text-teal-500 transition-all duration-300">
                <i className="fab fa-github"></i>
              </a>
            </div>

            <button className="mt-6 py-2 px-6 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
              <a href="/public/Anjali_Gunjale_Resume.pdf" download>Download CV</a>
            </button>
          </div>
        </div>
      </header>

  {/* About Section */}
  <section id="about-me" className="py-16 bg-[#0f172a] text-white">
  <h2 className="text-4xl font-bold text-center mb-10 text-teal-400">
    <span className="text-teal-500">About Me</span>
  </h2>

  <div className="flex flex-col md:flex-row justify-center md:space-x-10 px-6 md:px-20">

    {/* Image Section with Hover Effect */}
    <div className="w-full md:w-1/3 mb-6 md:mb-0">
      <img 
        src="/about me.jpg"  // Path to your image that matches your About Section
        alt="Professional image related to coding or technology"
        className="rounded-xl w-full object-cover h-full shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-teal-500"
      />
    </div>
          {/* About Text */}
          <div className="bg-[#1e293b] p-8 rounded-xl border border-teal-600 shadow-lg mb-6 md:mb-0 
          hover:scale-105 hover:shadow-xl hover:border-teal-500 transition-all duration-300 w-full md:w-2/3">
            <h2 className="text-2xl font-bold text-teal-400 mb-4">Hello!</h2>
            <h2 className="text-2xl font-bold text-teal-400 mb-4">I'm Anjali Gunjale</h2>
            <p className="text-lg">
              I’m a Computer Science and Engineering graduate from Marathwada Institute of Technology, Chh. Sambhajinagar with a passion for creating innovative software solutions. Throughout my academic journey, I’ve developed a strong foundation in both front-end and back-end technologies.
            </p>

            <p className="mt-4 text-lg">
              I have experience working with Java, Python, JavaScript, and tools like Power BI and MySQL. I’ve also had the opportunity to work on several personal projects and internships where I applied these skills to solve real-world challenges, particularly in web development and data analysis.
            </p>

            <p className="mt-4 text-lg">
              I am deeply passionate about software development, and I am always eager to learn and explore new technologies. I aspire to contribute to impactful projects and work with a dynamic team to build software that makes a difference.
            </p>
          </div>
        </div>
      </section>




      {/* Education Section */}
      
      <section id="education" className="py-16 bg-[#0f172a] text-white">
        <h2 className="text-4xl font-bold text-center mb-10">
          <span className="text-teal-400">Education</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
          
          {/* BTech Card */}
          <div className="p-6 bg-[#1e293b] border border-teal-600 rounded-xl shadow-lg 
          hover:scale-105 hover:border-teal-500 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-teal-400 mb-4">BTech - Computer Science & Engineering</h3>
            <p>Marathwada Institute of Technology</p>
            <p className="mt-2">CGPA: 7.2 (2022-2025)</p>
          </div>

          {/* Diploma Card */}
          <div className="p-6 bg-[#1e293b] border border-teal-600 rounded-xl shadow-lg
          hover:scale-105 hover:border-teal-500 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-teal-400 mb-4">Diploma - Information Technology</h3>
            <p>Government Polytechnic</p>
            <p className="mt-2">Aggregate: 82.82% (2019-2022)</p>
          </div>

          {/* 10th Grade Card */}
          <div className="p-6 bg-[#1e293b] border border-teal-600 rounded-xl shadow-lg
          hover:scale-105 hover:border-teal-500 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-teal-400 mb-4">10th Grade</h3>
            <p>Ellora English High School</p>
            <p className="mt-2">Percentage: 84.80%</p>
          </div>

        </div>
      </section>



    {/* Work History Section */}
    
      <section id="work-history" className="py-16 bg-[#0f172a] text-white">
        <h2 className="text-4xl font-bold text-center mb-10">
          <span className="text-teal-400">Work History</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20">
          
          {/* Work Intern Card */}
          <div className="p-6 bg-[#1e293b] border border-teal-600 rounded-xl shadow-lg 
          hover:scale-105 hover:border-teal-500 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-teal-400 mb-4">Work & Assist Technical Intern</h3>
            <p>National Institute of Electronics & Information Technology (NIELIT)</p>
            <p className="mt-2">Feb – Aug 2025</p>
            <ul className="mt-4 list-disc pl-5">
              <li>Contributed to AI/ML software applications using Java and Python.</li>
              <li>Assisted with Java-based testing and validation scripts.</li>
              <li>Led a 3-month Bootcamp for Army Education Officers.</li>
            </ul>
          </div>

          {/* Web Development Intern Card */}
          <div className="p-6 bg-[#1e293b] border border-teal-600 rounded-xl shadow-lg 
          hover:scale-105 hover:border-teal-500 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-teal-400 mb-4">Web Development Intern</h3>
            <p>Sumago-Infotech</p>
            <p className="mt-2">Aug – Sep 2021</p>
            <ul className="mt-4 list-disc pl-5">
              <li>Developed responsive class website using HTML, CSS, JavaScript, and Bootstrap.</li>
              <li>Collaborated to solve technical issues with JavaScript.</li>
            </ul>
          </div>

        </div>
      </section>



      {/* Skills Section */}
      <section id="skills" className="py-16 bg-[#0f172a] text-white">
        <h2 className="text-4xl font-bold text-center">
          <span className="text-teal-400">Skills</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
          
          <div className="p-6 bg-[#1e293b] rounded-xl border border-gray-700 
          hover:scale-105 hover:border-teal-400 hover:shadow-teal-400/40 
          hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-teal-400 mb-3">Programming</h3>
            <p>Java, Python, C, C++, JDBC, OOPs, Exception Handling, Collections</p>
          </div>

          <div className="p-6 bg-[#1e293b] rounded-xl border border-gray-700
          hover:scale-105 hover:border-teal-400 hover:shadow-teal-400/40 
          hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-teal-400 mb-3">Web Development</h3>
            <p>HTML, CSS, JavaScript, Bootstrap, React</p>
          </div>

          <div className="p-6 bg-[#1e293b] rounded-xl border border-gray-700
          hover:scale-105 hover:border-teal-400 hover:shadow-teal-400/40 
          hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-teal-400 mb-3">Databases & Tools</h3>
            <p>MySQL, PostgreSQL, Power BI, Excel, Git, VS Code</p>
          </div>

        </div>
      </section>

      {/* Latest Projects Section */}
      <section id="projects" className="py-16 bg-[#0f172a] text-white">
        <h2 className="text-4xl font-bold text-center">
          <span className="text-teal-400">Projects</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">

          {/* Project 1 */}
          <div className="relative bg-[#1e293b] p-6 rounded-xl border border-gray-700 hover:scale-105 hover:border-teal-400 hover:shadow-teal-400/40 hover:shadow-xl transition-all duration-300">
            <img src="/public/Leaf.png" className="rounded-md mb-4 w-full object-cover h-48" alt="AI Leaf Disease Detection" />

            {/* Project Description on Hover */}
            <div className="absolute inset-0 bg-[#0f172a] bg-opacity-80 opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4 rounded-md">
              <div className="text-center">
                <h3 className="font-bold text-xl text-teal-400">AI Leaf Disease Detection</h3>
                <p className="text-gray-400 mt-2">
                  A model designed to detect and classify diseases in plant leaves using deep learning methodologies.<br />
                  • Implemented a deep-learning system using Python and Java-based backend scripts to classify 7 distinct plant diseases with 92% accuracy.<br />
                  • Applied testing and debugging techniques to ensure smooth model performance and UI responsiveness.
                </p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative bg-[#1e293b] p-6 rounded-xl border border-gray-700 hover:scale-105 hover:border-teal-400 hover:shadow-teal-400/40 hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-xl text-teal-400">Staff Recruitment Portal</h3>
            <p className="text-gray-400 mt-2">
              A recruitment platform that facilitates the hiring process for organizations.<br />
              • Developed a web-based platform using Bootstrap (frontend), MySQL (backend), and Java for logic implementation.<br />
              • Designed test cases and performed UI validation to ensure functionality and smooth integration.
            </p>

            {/* Project Description on Hover */}
            <div className="absolute inset-0 bg-[#0f172a] bg-opacity-80 opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4 rounded-md">
              <div className="text-center">
                <h3 className="font-bold text-xl text-teal-400">Staff Recruitment Portal</h3>
                <p className="text-gray-400 mt-2">
                  A recruitment platform designed to streamline the hiring process with integrated features for job postings and candidate tracking.
                </p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="relative bg-[#1e293b] p-6 rounded-xl border border-gray-700 hover:scale-105 hover:border-teal-400 hover:shadow-teal-400/40 hover:shadow-xl transition-all duration-300">
            <img src="/public/PowerBIDash.png" className="rounded-md mb-4 w-full object-cover h-48" alt="Sales Dashboard" />

            {/* Project Description on Hover */}
            <div className="absolute inset-0 bg-[#0f172a] bg-opacity-80 opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4 rounded-md">
              <div className="text-center">
                <h3 className="font-bold text-xl text-teal-400">Sales Dashboard</h3>
                <p className="text-gray-400 mt-2">
                  An interactive dashboard for visualizing sales data and analytics for a superstore.<br />
                  • Created interactive dashboards in Power BI; incorporated Java and SQL logic for backend data processing and validation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* Certifications Section */}

        <section id="certifications" className="py-16 bg-[#0f172a] text-white">
          <h2 className="text-4xl font-bold text-center mb-6">
          <span className="text-teal-400">Certifications</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">

            {/* NIELIT AI & Machine Learning Certificate */}
            <div className="bg-[#1e293b] p-6 rounded-xl border border-teal-600 text-center
            hover:scale-105 hover:border-teal-500 hover:shadow-xl transition-all duration-300">
              <a href="/certifications/nielit-aiml.jpg" target="_blank" rel="noopener noreferrer">
                <img src="/certifications/nielit-aiml.jpg" className="rounded-md h-40 w-full object-cover"/>
              </a>
              <p className="mt-4 font-semibold">Artificial Intelligence & Machine Learning</p>
            </div>
            
            {/* Data Analysis with Python Certificate */}
            <div className="bg-[#1e293b] p-6 rounded-xl border border-teal-600 text-center 
            hover:scale-105 hover:border-teal-500 hover:shadow-xl transition-all duration-300">
              <a href="/certifications/data-analysis-ibm.jpg" target="_blank" rel="noopener noreferrer">
                <img src="/certifications/data-analysis-ibm.jpg" className="rounded-md h-40 w-full object-cover"/>
              </a>
              <p className="mt-4 font-semibold">Data Analysis with Python</p>
            </div>
            
            {/* Sumago Industrial Training Certificate */}
            <div className="bg-[#1e293b] p-6 rounded-xl border border-teal-600 text-center 
            hover:scale-105 hover:border-teal-500 hover:shadow-xl transition-all duration-300">
              <a href="/certifications/Sumagocer.jpg" target="_blank" rel="noopener noreferrer">
                <img src="/certifications/Sumagocer.jpg" className="rounded-md h-40 w-full object-cover"/>
              </a>
              <p className="mt-4 font-semibold">Industrial Training</p>
            </div>

          </div>
        </section>

{/* Footer Section */}
<footer className="bg-[#0f172a] text-white py-6">
  <div className="flex justify-center items-center space-x-6 mb-4">
    {/* GitHub Link */}
    <a 
      href="https://github.com/Anjaligunjale" 
      className="text-xl hover:text-teal-500 transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-github"></i> {/* Font Awesome GitHub Icon */}
    </a>

    {/* LinkedIn Link */}
    <a 
      href="https://linkedin.com/in/anjaligunjale" 
      className="text-xl hover:text-teal-500 transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-linkedin"></i> {/* Font Awesome LinkedIn Icon */}
    </a>
  </div>

  {/* Footer Text */}
  <div className="mt-4 text-sm text-center">
    <p>© 2025 Anjali Nandlal Gunjale. All rights reserved.</p>
  </div>
</footer>

      </div>
    
  );
}

export default App;
