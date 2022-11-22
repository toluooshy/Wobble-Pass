import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import UnknownPage from "./pages/UnknownPage";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
import { useWindowDimensions } from "./utils/CustomHooks";

import Web3Modal from "web3modal";
import { ethers } from "ethers";
import Web3 from "web3";
import { abi } from "./blockchain/contracts/wobblepass_core/abi.js";

const web3 = new Web3(Web3.givenProvider);
const address = "";
const contract = new web3.eth.Contract(abi, address);

const App = () => {
  const [selectedAddress, setSelectedAddress] = useState("");
  const [transactionHash, setTransactionHash] = useState("");

  const [isAuthenicating, setAuthenicating] = useState(true);

  const dimensions = useWindowDimensions();

  const params = new URLSearchParams(window.location.pathname);

  const providerOptions = {};

  const connectWallet = async () => {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });
      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider = new ethers.providers.Web3Provider(
        web3ModalInstance
      );

      setSelectedAddress(web3ModalProvider.provider.selectedAddress);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Header params={params} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<UnknownPage />} />
      </Routes>
      <Navbar />
    </div>
  );
};

export default App;
