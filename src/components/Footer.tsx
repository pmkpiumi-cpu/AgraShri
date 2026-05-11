import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-black text-white mb-6 uppercase italic tracking-tighter">AgraShri</h2>
            <p className="mb-6 max-w-md font-light leading-relaxed">
              Empowering Minds, Building Futures. A modern learning and counseling ecosystem 
              dedicated to academic excellence, student wellbeing, and professional growth.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.3em]">Blueprints</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/#about" className="hover:text-blue-400 transition-colors">Philosophy</Link></li>
              <li><Link href="/#courses" className="hover:text-blue-400 transition-colors">Mastery Levels</Link></li>
              <li><Link href="/enroll" className="hover:text-blue-400 transition-colors">Enrollment</Link></li>
              <li><Link href="/join" className="hover:text-blue-400 transition-colors">Join Faculty</Link></li>
              <li><Link href="/#community" className="hover:text-blue-400 transition-colors">Community</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.3em]">Portal</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3 italic">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>076 828 5067</span>
              </li>
              <li className="flex items-center gap-3 tracking-tighter">
                <Mail className="w-4 h-4 text-blue-500" />
                <a href="mailto:agrashri.info@gmail.com" className="hover:text-blue-400 transition-colors">agrashri.info@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 opacity-60">
                <Clock className="w-4 h-4" />
                <span>09:00 am – 04:00 pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} AgraShri Educational Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
