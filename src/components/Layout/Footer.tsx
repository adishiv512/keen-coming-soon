
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-keen-dark text-white py-8">
      <div className="keen-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Keen</h3>
            <p className="text-sm text-gray-300">
              AI-powered education platform for students and teachers.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-3">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="hover:text-keen-accent">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-keen-accent">Pricing</Link></li>
              <li><Link to="/testimonials" className="hover:text-keen-accent">Testimonials</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="hover:text-keen-accent">Help Center</Link></li>
              <li><Link to="/blog" className="hover:text-keen-accent">Blog</Link></li>
              <li><Link to="/faqs" className="hover:text-keen-accent">FAQs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-keen-accent">Contact Us</Link></li>
              <li><a href="mailto:support@keen-edu.com" className="hover:text-keen-accent">support@keen-edu.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Keen Education. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-sm text-gray-300 hover:text-keen-accent">Terms</Link>
            <Link to="/privacy" className="text-sm text-gray-300 hover:text-keen-accent">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
