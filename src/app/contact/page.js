"use client";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import ContactForm from "../components/contactForm";

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-(--color-primary) text-center mb-14">
            Contact
          </h1>

          {/* Contact Card */}
          <div className="bg-white shadow-xl rounded-3xl p-8 md:p-14">
            {/* Intro */}
            <p className="text-gray-700 mb-12 text-lg md:text-2xl text-center md:leading-relaxed">
              Pentru orice întrebare sau pentru a plasa o comandă, ne poți
              contacta telefonic. Răspundem rapid și te ajutăm cu cele mai bune
              soluții.
            </p>

            {/* Contact Info */}
            <div className="space-y-10 md:space-y-14">
              {/* Phone */}
              <div className="flex items-start gap-4 md:gap-6">
                <Phone className="text-(--color-accent) w-7 h-7 md:w-10 md:h-10" />
                <div>
                  <h3 className="font-semibold text-xl md:text-3xl mb-1">
                    Telefon
                  </h3>
                  <p className="text-gray-700 text-lg md:text-2xl leading-relaxed">
                    <a href="tel:+40xxxxxxxxx" className="hover:underline">
                      +40 751 518 506
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 md:gap-6">
                <Mail className="text-(--color-accent) w-7 h-7 md:w-10 md:h-10" />
                <div>
                  <h3 className="font-semibold text-xl md:text-3xl mb-1">
                    Email
                  </h3>
                  <p className="text-gray-700 text-lg md:text-2xl">
                    <a
                      href="mailto:contact@smartcontainer.ro"
                      className="hover:underline"
                    >
                      viorelciortan2@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 md:gap-6">
                <MapPin className="text-(--color-accent) w-7 h-7 md:w-10 md:h-10" />
                <div>
                  <h3 className="font-semibold text-xl md:text-3xl mb-1">
                    Adresă
                  </h3>
                  <p className="text-gray-700 text-lg md:text-2xl leading-relaxed">
                    Calea Smardan nr. 2
                    <br />
                    Galați, România
                  </p>
                </div>
              </div>
            </div>

            {/* How to Order */}
            <div className="mt-16 p-8 md:p-12 bg-(--color-primary) text-white rounded-2xl shadow-lg">
              <h3 className="text-2xl md:text-4xl font-bold mb-3">
                Cum plasezi o comandă?
              </h3>
              <p className="text-white/90 text-lg md:text-2xl leading-relaxed">
                Momentan comenzile se plasează{" "}
                <strong>exclusiv telefonic</strong>. Sună-ne, iar noi te vom
                ajuta cu toate detaliile necesare!
                <br></br>
                Ne poti contacta și prin email pentru întrebări suplimentare folosind formularul de mai jos.
                
              </p>

              <a
                href="tel:+40751518502"
                className="inline-flex items-center gap-2 md:gap-3 mt-6 text-white font-semibold underline text-lg md:text-2xl hover:opacity-80"
              >
                Sună acum <ArrowRight size={22} className="md:w-8 md:h-8" />
              </a>
            </div>

            <div className="mt-15">
            <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
