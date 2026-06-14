import { profile } from '../../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-6 text-center text-sm text-white/70">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </footer>
  );
}
