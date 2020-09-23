import React from "react";
import "../styles/components/search_box.scss";

const SearchBox: React.FC = () => {
    return <div className="searchBox">
        <h2>Start Your Search</h2>
        <input type="text" placeholder="Search here ..." />
    </div>
}

export default SearchBox;