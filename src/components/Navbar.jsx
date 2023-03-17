// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// const Navbar = () => {
//     const state = useSelector(state => state.handleCart)
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
//             <div className="container">
//                 <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> Flipkart Clone</NavLink>
//                 <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav m-auto my-2 text-center">
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/product">All Products</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/contact">Contact</NavLink>
//                         </li>
//                     </ul>
//                     <div className="buttons text-center">
//                         <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
//                         <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
//                         <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
//                     </div>
//                 </div>


//             </div>
//         </nav>
//     )
// }

// export default Navbar




// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// const Navbar = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const state = useSelector(state => state.handleCart);

//     const handleSearch = e => {
//         setSearchTerm(e.target.value);
//     }

//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-primary py-3 sticky-top">
//             <div className="container">
//                 {/* <NavLink className="navbar-brand" to="/">
//                     <img src="" alt="Flipkart Logo" />
//                 </NavLink> */}
//                 <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav m-auto my-2 text-center">
//                     <li className="nav-item">
//                     <h1 className='nav-link fw-bold display-10 text-light mb-0' style={{ fontSize: '22px' }}>Flipkart</h1>
//                         </li>
//                         {/* <li className="nav-item">
//                             <NavLink className="nav-link" to="/product">Products</NavLink>
//                         </li> */}
//                         {/* <li className="nav-item">
//                             <NavLink className="nav-link" to="/contact">Contact</NavLink>
//                         </li> */}
//                     </ul>
//                     <div className="input-group mx-auto col-lg-6 col-md-6 col-sm-12 col-xs-12">
//                         <input type="text" className="form-control" placeholder="Search for products, brands and more" value={searchTerm} onChange={handleSearch} />
//                         <div className="input-group-append">
//                             <button className="btn btn-dark" type="button">Search</button>
//                         </div>
//                     </div>
//                     <div className="buttons text-center">
//                         <NavLink to="/login" className="btn btn-outline-light m-2">Login</NavLink>
//                         <NavLink to="/register" className="btn btn-outline-light m-2">Register</NavLink>
//                         <NavLink to="/cart" className="btn btn-outline-light m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar




import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import styled from 'styled-codiv

// const StyledTypography = styled.h1`
//     font-size: 22px;
//     color: white;
//     margin: 0;
//     padding: 0;
// `;

// const PlusLogo = styled.img`
//     width: 25px;
//     height: 25px;
//     margin-left: 5px;
// `;

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const state = useSelector(state => state.handleCart);

    const handleSearch = e => {
        setSearchTerm(e.target.value);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary py-3 sticky-top">
            <div className="container">
                <div style={{display: 'flex', alignItems: 'center', justifyItems: 'center'}} >
                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart Plus logo" style={{height: '25px'}}/>
                    <div style={{fontSize: '18px', color: 'white', margin: '0', padding: '0'}}>
                        <NavLink className="nav-link fw-bold display-10 text-light mb-0" to="/" style={{ textDecoration: 'none'}}>
                        <div component="span" style={{color: 'white', display: 'inline-block', fontSize:'15px', marginTop: '32px',marginRight: '5px', height: '20px'}}>Explore</div>
                            <div component="span" style={{color: 'white', display: 'inline-block', fontSize:'15px', marginTop: '32px', fontStyle: 'italic',color:'yellow'}}>plus</div> 
                            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="Flipkart Plus logo" style={{width: '25px',height: '25px', marginLeft: '5px'}} />
                        </NavLink>
                    </div>
                </div>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product" style={{fontWeight: '600', fontSize: '18px'}}>Products</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li> */}
                    </ul>
                    <div className="input-group mx-auto col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input type="text" className="form-control" placeholder="Search for products, brands and more" value={searchTerm} onChange={handleSearch} />
                        <div className="input-group-append">
                            <button className="btn btn-dark" type="button">Search</button>
                        </div>
                    </div>
                    <div className="buttons text-center">
                        <NavLink to="/login" className="btn btn-outline-light m-2">Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-light m-2">Register</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-light m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
