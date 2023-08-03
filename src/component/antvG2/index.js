import React from 'react'
import { Outlet } from "react-router-dom";

export default function G2Wrapper() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
