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
                style={{ width: '120px', height: '50px' }}
              />
            </a>
          </div>
          <div className="d-flex ">
            <a href="https://github.com/Desperadosol" className="mx-2 custom-link fs-5" target="_blank"  rel="noopener noreferrer" style={{width: "50px", height: "50px", borderRadius: "30%"}}>
              <img src="/github.png" width="50px"/>
            </a>
            <div className="vertical-line"></div>
            <a href="https://www.linkedin.com/in/igor-homichenko-a76b88266" className="mx-2 custom-link fs-5" target="_blank"  rel="noopener noreferrer" style={{width: "50px", height: "50px", borderRadius: "30%"}}>
              <img src="/linkedin.png" width="50px"/>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .vertical-line {
          border-left: 1px solid white;
          height: 50px; /* Adjust the height as needed */
        }
        .custom-link {
          background-color: #bbbbbb;
        }
        .custom-link:hover {
          background-color: #ffffff;
        }
      `}</style>
    </footer>
  );
}