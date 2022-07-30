import React from 'react'
import {User} from '../models/user'
import { useRouter } from "next/router"
import { useState } from "react"


export default function Profile ({user}) {

      return (
          <div>
              <div className ="profile-card card">
  <div className = "col-4 d-none d-sm-block">
  </div>

     <div className ="card-body card-content profilecard-content">
        <h1 className ="card-title">Welcome,</h1>
        <button id="create-button">Create New Blog</button>
     </div>
</div>
          </div>
      )

}