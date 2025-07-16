import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import NewExpense from './expense/NewExpense'
import Expenses from './expense/Expenses'
import Reports from './report/Reports'

const MainRouter = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* Untuk route private, bungkus dengan komponen PrivateRoute sebagai element */}
        <Route path="/user/edit/:userId" element={<PrivateRoute><EditProfile /></PrivateRoute>} />
        <Route path="/user/:userId" element={<Profile />} />
        <Route path="/expenses/all" element={<PrivateRoute><Expenses /></PrivateRoute>} />
        <Route path="/expenses/new" element={<PrivateRoute><NewExpense /></PrivateRoute>} />
        <Route path="/expenses/reports" element={<PrivateRoute><Reports /></PrivateRoute>} />
      </Routes>
    </div>
  )
}

export default MainRouter