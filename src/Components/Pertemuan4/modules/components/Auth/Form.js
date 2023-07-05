
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [showErrorModal, setShowErrorModal] = useState(false); // State untuk menampilkan pop-up kesalahan

  const navigate = useNavigate(); // Menggunakan useNavigate untuk mengarahkan pengguna

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3100/signup/findOne', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Login berhasil, arahkan pengguna ke halaman Home
        navigate('/home');
      } else {
        // Login gagal, tampilkan pop-up kesalahan
        setShowErrorModal(true);
        console.log('Login failed');
      }
    } catch (error) {
      // Tangani kesalahan jaringan atau kesalahan lainnya
      console.error('Login failed:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseModal = () => {
    setShowErrorModal(false);
  };

  return (
    <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
      <Link to={"/"} className="mb-12">
        <img src="https://www.ibik.ac.id/wp-content/uploads/2023/03/logo-ibik-web.png" alt="logo-ibik" className='h-40px' />
      </Link>
      <div className="w-lg-500px rounded shadow-sm p-10 p-lg-15 mx-auto" style={{ backgroundColor:"#80008008" }}>
        <form onSubmit={handleSubmit} className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework' autoComplete='off'>
          <div className="text-center mb-10">
            <h1 className="text-dark mb-3">Sign In to Portal</h1>
            <div className="text-gray-400 fw-bold fs-4">
              New Here ?
              <Link to={"/signup"} className="ms-2 text-decoration-none">Create an account</Link>
            </div>
          </div>
          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="form-label fs-6 fw-bolder text-dark">Username</label>
            <input
              type="text"
              name="username"
              className='form-control form-control-lg'
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="form-label fs-6 fw-bolder text-dark">Password</label>
            <input
              type="password"
              name="password"
              className='form-control form-control-lg'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <button className="btn btn-lg btn-primary w-100 mb-5" type='submit'>Continue</button>
          </div>
        </form>
      </div>
      {showErrorModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Error</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">Invalid username or password.</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
