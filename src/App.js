import React from "react";
import AppContent from "./components/AppContent";
import AppHeader from "./components/AppHeader";
import PageTitle from "./components/PageTitle";
import styles from "./styles/modules/app.module.scss";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO List</PageTitle>
        <div className={ styles.app__wrapper }>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="top-right"
        toastOptions={ {
          style: {
            fontsize: "1.5rem",
          }
        }}
      />
    </>
  );
}

export default App;
