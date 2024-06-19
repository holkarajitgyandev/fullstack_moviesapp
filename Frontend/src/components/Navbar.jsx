import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiClapperboardFill } from "react-icons/ri";
import { PiSquaresFour ,PiTelevision} from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa";
import { RiFilmFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { firebaseAuth } from "../utils/firebase-config";
import { FaPowerOff, FaSearch } from "react-icons/fa";
export default function Navbar({ isScrolled }) {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const links = [
    { name: <PiSquaresFour style={{width:"20px",height:"20px"}}/>, link: "/" },
    { name: <RiFilmFill/>, link: "/movies" },
    { name: <PiTelevision/>, link: "/tvshows" },
    { name: <FaRegBookmark/>, link: "/bookmarkedmovies" },
  ];

  return (
    <Container>
      <nav className={`${isScrolled ? "scrolled" : ""} flex`}>
        <div className="left">
          
            <RiClapperboardFill style={{color:"red",width:"20px",height:"20px",paddingTop:"40px",paddingLeft:"37px"}}/>
          
          <ul className="links">
            {links.map(({ name, link }) => {
              return (
                <li key={name} >
                  <Link to={link} >{name}</Link>
                  <br />
                  <br />
                </li>
              );
            })}
            
          </ul>
          <br /><br /><br />
          <button className="poweroff" onClick={() => signOut(firebaseAuth)}>
            <FaPowerOff style={{color:"red",width:"20px",height:"20px"}}/>
          </button>
        </div>
        <div className="right ">
          <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) {
                  setShowSearch(false);
                }
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
          
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 2rem;
    width: 100vh;
    justify-content: space-between;
    
    top: 0;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left {
      gap: 2rem;
      display: flex;
      flex-direction: column;
      

      border:transparent;
      border-radius: 25px;
      width: 80px;
      height: 100vh;
      background-color: #473f47;
    top: 0;
    left: 0;
    position: fixed;
    
      .brand {
        img {
          height: 4rem;
        }
      }
      .links {
        list-style-type: none;
        gap: 2rem;
        li {
          a {
            color: white;
            text-decoration: none;
            gap: 10rem;
            
          }
        }
      }
    }
    .right {
      display: flex;
      
      gap: 1rem;
      button {
        background-color: transparent;
        border: solid;
        padding-left: 200px;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f34242;
          font-size: 1.2rem;
        }
      }
      
      }
      .search {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        padding-top: 25px;
        padding-left: 0.5rem;
        position: fixed;
        button {
          background-color: transparent;
          border: none;
          &:focus {
            outline: none;
          }
          svg {
            color: white;
            font-size: 1.2rem;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visibility: hidden; 
          transition: 0.3s ease-in-out;
          background-color:  #473f47;
          border: none;
          color: white;
          &:focus {
            outline: none;
          }
        }
      }
      .show-search {
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0.6);
        input {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.3rem;
        }
      }
    }
  
`;