import React from "react";
import "../css/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import { useStateValue } from "../redux/StateProvider";

function Header() {
  const [{basket}, dispatch] = useStateValue();


  return (
    <div className="header">
      <Link to='/'>
      <img 
      className="header__logo"
      src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" 
      />
      </Link>
      <div className="header_search">
        <input className="header__searchInput" type="text" />
        <SearchIcon
        className="header__searchIcon"
        />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hola, invitado</span>
          <span className="header__optionLineTwo">Iniciar Sesion</span>
        </div>
        <div className="header__option">
        <span className="header__optionLineOne">Devoluciones</span>
          <span className="header__optionLineTwo"> & Ordenes</span>
        
        </div>


        <div className="header__option">
        <div className="header__optionProfile">
        <PersonIcon/>
        
        </div> 
        </div>

        <Link to='/checkout'>
        <div className="header__optionBasket">
        <ShoppingCartIcon/>
        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div> 
        </Link>
        </div>
    </div>
  );
}

export default Header;
