import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bottom-0 bg-zinc-800 text-gray-300 py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                Automotive
              </a>
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                Construction
              </a>
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                Agriculture
              </a>
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                Water Management
              </a>
            </nav>
          </div>

          {/* About/Contact */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">ABOUT</h2>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">Address:</span> Survey No : 275/
                P-27, Plot No - 4, Hadamtala Industrial Area, Rajkot, Gujarat
                360001, India
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +91 99248 70978
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                squarefoundry@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-700">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Square Foundry Pvt. Ltd. © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
