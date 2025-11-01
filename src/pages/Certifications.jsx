import { useState } from "react";
import { CERTIFICATIONS } from "../data/certifications";
import CertificationCard from "../components/CertificationCard";
import CertificationModal from "../components/CertificationModal";

export default function CertificationsPage() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const onOpen = (cert) => { setActive(cert); setOpen(true); };
  const onClose = () => { setOpen(false); setActive(null); };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <h1 className="text-3xl font-bold mb-6">Certifications</h1>
      <p className="text-slate-600 dark:text-slate-300 mb-6">
        Hover a card for a preview. Click to open details and verification link.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((c) => (
          <CertificationCard key={c.id} cert={c} onOpen={onOpen} />
        ))}
      </div>

      <CertificationModal open={open} cert={active} onClose={onClose} />
    </div>
  );
}
