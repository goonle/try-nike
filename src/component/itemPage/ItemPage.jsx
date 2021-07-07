import React from "react";
import Header from "../Header";
import NavBar from "../nav/NavBar";
import ItemNav from "./ItemNav";
import ItemSidebar from "./ItemSidebar";
import ItemList from "./ItemList";

export default function ItemPage() {
  return (
    <div className="item-page">
      <Header />
      <NavBar />
      <div id="bodyBlur">
        <div className="only-item-page">
          <ItemNav />

          <ItemSidebar />
          <ItemList />
        </div>
      </div>
    </div>
  );
}
