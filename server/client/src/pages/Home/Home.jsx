import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import UserForm from "../../components/UserForm/UserForm";
import FormSection from "../../components/FormSection/FormSection";
import CasteDivSection from "../../components/CasteDivSection/CasteDivSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <UserForm />
      <FormSection />
      <CasteDivSection />
    </div>
  );
};

export default Home;
