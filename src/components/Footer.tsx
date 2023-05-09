import { memo } from "react";

const Footer = (props) => {
  return (
    <footer className="border-dark-700 bg-dark-900 border-t">
      <div className="container mx-auto px-8 py-8">
        <h2 className="text-black">Footer</h2>
      </div>
    </footer>
  );
};

export default memo(Footer);
