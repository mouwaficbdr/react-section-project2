import React from "react"
import logoIcon from "../../public/assets/logo-icon.png"

export default function Navbar() {

  return (
    <nav>
      <div className="nav--logo-div">
        <img src={logoIcon} alt="Logo Icon" />
        <p>mytraveljournal</p>
      </div>
    </nav>
  )
}