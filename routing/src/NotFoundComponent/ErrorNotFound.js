import './Error404.css';

export default function ErrorNotFound(){
    return (
        <div className="error-container">
          <div className="error-content">
            <div className="error-number">404</div>
            <h1 className="error-title">Page not found</h1>
            <p className="error-description">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="error-actions">
              <button className="btn-primary" onClick={() => window.history.back()}>
                Go Back
              </button>
              <button className="btn-secondary" onClick={() => window.location.href = '/'}>
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
}