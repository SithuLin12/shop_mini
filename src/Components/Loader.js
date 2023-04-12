import React from "react";

function Loader() {
  return (
    <div class="d-flex justify-content-center align-items-center h-100vh">
      <div class="spinner-border text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
