import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { useEffect } from "react";

export default function CertificationModal({ open, cert, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && cert && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4 no-print"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            onMouseDown={(e) => e.stopPropagation()}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            className="w-full max-w-3xl rounded-2xl bg-white p-4 sm:p-6 shadow-2xl border dark:bg-gray-900"
            role="dialog" aria-modal="true" aria-label={cert.title}
          >
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 shrink-0 rounded-md border bg-white overflow-hidden">
                <img src={cert.img} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-md p-2 hover:bg-slate-100 dark:hover:bg-gray-800"
                aria-label="Close"
              >
                <X size={18}/>
              </button>
            </div>

            <div className="mt-4 aspect-[16/10] rounded-xl border bg-white overflow-hidden">
              <img src={cert.img} alt={`${cert.title} full view`} className="h-full w-full object-contain" />
            </div>

            {cert.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {cert.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-full border text-xs bg-white dark:bg-gray-900/60">
                    {t}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:opacity-95"
              >
                <ExternalLink size={16}/> Verify
              </a>
              <button onClick={onClose} className="px-4 py-2 rounded-lg border shadow-sm hover:shadow">
                Close
              </button>
            </div>

            <p className="sr-only print:not-sr-only print:mt-2 print:text-xs print:text-black">
              Verify: {cert.url}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
