import { MessageCircleMore, PhoneCall, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-gray-300 py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">SQUARE FOUNDRY</h2>
            <p className="text-sm leading-relaxed">
              Dedicated to delivering exceptional castings that exceed customer
              expectations with quality, innovation, and a commitment to
              excellence always.
            </p>
          </div>

          {/* Industry Solutions */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">INDUSTRY SOLUTIONS</h2>
            <nav className="flex flex-col space-y-2">
              {["Automotive", "Construction", "Agriculture", "Water Management"].map((item, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-sm hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* About/Contact */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">ABOUT</h2>
            <address className="not-italic space-y-2 text-sm">
              <p>
                <span className="font-semibold">Address:</span> Survey No: 275/P-27, Plot No - 4, Hadamtala Industrial Area, Rajkot, Gujarat 360024, India
              </p>
              <p>
                <span className="font-semibold">Phone:</span> 
                <a href="tel:+919924870978" className="hover:text-red-400 hover:underline ml-1">
                  +91 99248 70978
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span> 
                <a href="mailto:squarefoundry@gmail.com" className="hover:text-red-400 hover:underline ml-1">
                  squarefoundry@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-700">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { href: "mailto:squarefoundry@gmail.com", icon: Mail, label: "Email Us" },
                { href: "tel:+919924870978", icon: PhoneCall, label: "Call Us" },
                { href: "/Contact", icon: MessageCircleMore, label: "LinkedIn Profile" }
              ].map(({ href, icon: Icon, label }, index) => (
                <a 
                  key={index} 
                  href={href} 
                  className="bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>

            {/* Copyright Text */}
            <p className="text-sm text-gray-400">
              Square Foundry Pvt. Ltd. © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}