import React from "react"
import { Route } from "react-router-dom"
import Layout from "dumbComponents/common/Layout"
import Navbar from "dumbComponents/common/Navbar"
import Food from "dumbComponents/Food"

const Router = () => (
  <Layout>
    <Navbar />
    <Route path="/" component={Food} />
  </Layout>
)

export default Router
