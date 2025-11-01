import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function CertificationCard({ cert, onOpen }) {
  return (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onOpen(cert)}
      className="group text-left w-full rounded-xl border bg-white p-3 shadow-sm hover:shadow-md transition dark:bg-gray-900/40"
      title={`${cert.title} – ${cert.issuer}`}
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 shrink-0 rounded-md border bg-white overflow-hidden">
          <img src={cert.img} alt={cert.title} className="h-full w-full object-cover" />
        </div>
        <div className="min-w-0">
          <div className="font-medium leading-tight truncate">{cert.title}</div>
          <div className="text-xs text-slate-500">{cert.issuer} • {cert.date}</div>
        </div>
        <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 text-indigo-500 transition" />
      </div>

      {cert.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {cert.tags.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-full border text-xs bg-white dark:bg-gray-900/60">
              {t}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-3 aspect-[16/10] overflow-hidden rounded-lg border bg-white/60">
        <img
          src={cert.img}
          alt={`${cert.title} preview`}
          className="h-full w-full object-contain group-hover:scale-[1.01] transition"
          loading="lazy"
        />
      </div>
    </motion.button>
  );
}
