import React from 'react'
import { Outlet } from "react-router-dom";

export default function S2Wrapper() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
