export default function Footer() {
  return (
    <section
      id="footer"
      className="flex flex-col md:flex-row bg-(--color-primary) text-white md:items-center py-4 md:pt-8 md:pb-5"
    >
      {/* Footer Container */}
      <div className="mx-auto flex flex-col space-y-3 md:flex-row md:justify-between mb-2 md:mb-0">
        {/* Footer Menu */}
        <div className="flex flex-col items-center space-y-3 text-md md:flex-row md:space-x-3 md:space-y-0">
          <a href="/#produse" className="hover:text-(--color-accent)">
            Produse
          </a>

          <a href="/contact" className="hover:text-(--color-accent)">
            Contact
          </a>
          {/* Media Icons Menu */}
        </div>
      </div>
      <div className="text-gray-400 mx-auto text-sm">
        <p>Design by: florin.ciortan@hotmail.com</p>
      </div>
    </section>
  );
}
