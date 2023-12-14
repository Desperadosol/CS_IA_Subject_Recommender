import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container py-4" style={{minWidth: "90%"}}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <a href="/">
              <img
                src="/logo-white.svg" 
                alt="Logo"
                style={{ width: '120px', height: '60px' }}
              />
            </a>
          </div>
          <div>
            <a href="https://github.com/Desperadosol" className="text-white link-offset-1 mx-3 custom-link fs-5" target="_blank"  rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/igor-homichenko-a76b88266" className="text-white link-offset-1 custom-link fs-5" target="_blank"  rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-link {
          text-decoration: none;
        }
        .custom-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
}