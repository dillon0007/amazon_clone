import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    <div className="header">
        <img className='header__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'></img>
        <div className='header__search'>
            <input className='header_searchInput' type="text"/>
            <SearchIcon className="header__searchIcon"/>
        </div>
        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Hello Guest</span>
                <span className='header__optionLineOne'>Sign In</span>


            </div>
            <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineOne'>Orders</span>


            </div>
            <div className='header__option'>
            <span className='header__optionLineOne'>Your </span>
            <span className='header__optionLineOne'>Prime</span>


            </div>
        </div>
        </div>
  )
}

export default Header