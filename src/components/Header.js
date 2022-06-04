import React from 'react';
import logo from '../assets/logo.svg';

export default function Header(){
  return(
    <nav>
      <a href="#" id="nav-logo">
        <img src={logo} alt="codees-academy-logo"/>
      </a>
      <a href="#" class="nav-text">Kelas</a>
      <a href="#" class="nav-text">Acara</a>
      <a href="#" class="nav-text">Beasiswa</a>
      <a href="#" class="nav-text">Kontak</a>
      <a href="#" id="login">Masuk</a>
    </nav>
  );
}