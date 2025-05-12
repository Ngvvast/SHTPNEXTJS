"use client";

const Section = ({ 
  children, 
  className = "",
  bgColor = "bg-white",
  padding = "py-16 md:py-24",
  container = true
}) => {
  return (
    <section className={`${bgColor} ${padding} ${className}`}>
      {container ? (
        <div className="container mx-auto px-4">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;