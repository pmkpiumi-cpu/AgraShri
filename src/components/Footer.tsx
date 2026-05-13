import Link from "next/link";
import { Mail, Phone, MapPin, Clock, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#14532D] pt-16 pb-8 text-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-green-900" />
              </div>
              <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">AgraShri</h2>
            </div>
            <p className="mb-6 max-w-md font-light leading-relaxed text-green-300">
              Empowering Minds, Building Futures. A modern learning and counseling ecosystem 
              dedicated to academic excellence, student wellbeing, and professional growth.
            </p>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-xs text-yellow-400 font-bold uppercase tracking-widest">Enrollment Open 2026</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.3em]">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/#about" className="hover:text-yellow-400 transition-colors">Philosophy</Link></li>
              <li><Link href="/#courses" className="hover:text-yellow-400 transition-colors">Our Programs</Link></li>
              <li><Link href="/enroll" className="hover:text-yellow-400 transition-colors">Enrollment</Link></li>
              <li><Link href="/join" className="hover:text-yellow-400 transition-colors">Join Faculty</Link></li>
              <li><Link href="/#community" className="hover:text-yellow-400 transition-colors">Community</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.3em]">Contact</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>076 828 5067</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                <a href="mailto:agrashri.info@gmail.com" className="hover:text-yellow-400 transition-colors break-all">agrashri.info@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>09:00 am – 04:00 pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-green-400">
          <p>© {new Date().getFullYear()} AgraShri Educational Institute. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="text-yellow-400 font-bold uppercase text-xs tracking-widest">Excellence in Education</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
