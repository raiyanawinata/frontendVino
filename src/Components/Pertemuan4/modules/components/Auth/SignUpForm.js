// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { createBrowserHistory } from 'history';

// const SignUpForm = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     firstName: '',
//     lastName: '',
//     username: '',
//     password: '',
//   });

//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:3100/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         // Berhasil mendaftar, arahkan pengguna ke halaman login
//         const history = createBrowserHistory();
//         history.push('/login');
//         console.log('Sign up successful');
//       } else {
//         // Gagal mendaftar, tangani kesalahan seperti menampilkan pesan kesalahan atau mengambil respons dari server
//         const errorData = await response.json();
//         console.log('Sign up failed:', errorData.message);
//       }
//     } catch (error) {
//       // Tangani kesalahan jaringan atau kesalahan lainnya
//       console.error('Sign up failed:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
//       <Link to={"/"} className="mb-12">
//         <img src="https://www.ibik.ac.id/wp-content/uploads/2023/03/logo-ibik-web.png" alt="logo-ibik" className='h-40px' />
//       </Link>
//       <div className="w-lg-500px rounded shadow-sm p-10 p-lg-15 mx-auto" style={{ backgroundColor:"#80008008" }}>
//         <form onSubmit={handleSignUp} className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework' autoComplete='off'>
//           <div className="text-center mb-10">
//             <h1 className="text-dark mb-3">Sign Up</h1>
//             <div className="text-gray-400 fw-bold fs-4">
//               Already have an account?
//               <Link to={"/login"} className="ms-2 text-decoration-none">Sign In</Link>
//             </div>
//           </div>
//           <div className="fv-row mb-10 fv-plugins-icon-container">
//             <label className="form-label fs-6 fw-bolder text-dark">Email</label>
//             <input
//               type="email"
//               name="email"
//               className='form-control form-control-lg'
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="fv-row mb-10 fv-plugins-icon-container">
//             <label className="form-label fs-6 fw-bolder text-dark">First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               className='form-control form-control-lg'
//               value={formData.firstName}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="fv-row mb-10 fv-plugins-icon-container">
//             <label className="form-label fs-6 fw-bolder text-dark">Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               className='form-control form-control-lg'
//               value={formData.lastName}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="fv-row mb-10 fv-plugins-icon-container">
//             <label className="form-label fs-6 fw-bolder text-dark">Username</label>
//             <input
//               type="text"
//               name="username"
//               className='form-control form-control-lg'
//               value={formData.username}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="fv-row mb-10 fv-plugins-icon-container">
//             <label className="form-label fs-6 fw-bolder text-dark">Password</label>
//             <input
//               type="password"
//               name="password"
//               className='form-control form-control-lg'
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="text-center">
//             <button className="btn btn-lg btn-primary w-100 mb-5" type='submit'>Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false); // State untuk menampilkan popup sukses

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3100/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Berhasil mendaftar, tampilkan popup sukses
        setShowSuccessModal(true);
        console.log('Sign up successful');
      } else {
        // Gagal mendaftar, tangani kesalahan seperti menampilkan pesan kesalahan atau mengambil respons dari server
        const errorData = await response.json();
        console.log('Sign up failed:', errorData.message);
      }
    } catch (error) {
      // Tangani kesalahan jaringan atau kesalahan lainnya
      console.error('Sign up failed:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
      <Link to={"/"} className="mb-12">
        <img src="https://www.ibik.ac.id/wp-content/uploads/2023/03/logo-ibik-web.png" alt="logo-ibik" className='h-40px' />
      </Link>
      <div className="w-lg-500px rounded shadow-sm p-10 p-lg-15 mx-auto" style={{ backgroundColor:"#80008008" }}>
        <form onSubmit={handleSignUp} className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework' autoComplete='off'>
          <div className="text-center mb-10">
            <h1 className="text-dark mb-3">Sign Up</h1>
            <div className="text-gray-400 fw-bold fs-4">
              Already have an account?
              <Link to={"/login"} className="ms-2 text-decoration-none">Sign In</Link>
            </div>
          </div>
          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="form-label fs-6 fw-bolder text-dark">Email</label>
            <input
              type="email"
              name="email"
              className='form-control form-control-lg'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="form-label fs-6 fw-bolder text-dark">First Name</label>
            <input
              type="text"
              name="firstName"
              className='form-control form-control-lg'
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="form-label fs-6 fw-bolder text-dark">Last Name</label>
            <input
              type="text"
              name="lastName"
              className='form-control form-control-lg'
              value={formData.lastName}
              onChange={handleChange}
            />
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
            <button className="btn btn-lg btn-primary w-100 mb-5" type='submit'>Sign Up</button>
          </div>
        </form>
      </div>

      {/* Popup Sukses */}
      {showSuccessModal && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Success</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">Account successfully created.</div>
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

export default SignUpForm;
