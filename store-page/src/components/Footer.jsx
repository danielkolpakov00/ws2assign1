
function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 My Store. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
          </li>
          <li>
            <a href="#terms" className="hover:underline">Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
