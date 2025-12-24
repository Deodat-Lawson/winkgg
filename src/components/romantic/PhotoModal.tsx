"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  description: string;
}

export function PhotoModal({ isOpen, onClose, imageSrc, title, description }: PhotoModalProps) {
  const [render, setRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setRender(true);
    else {
      const t = window.setTimeout(() => setRender(false), 200);
      return () => window.clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!render) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/90 backdrop-blur-sm transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
        <div
          className={`relative max-w-5xl w-full transform transition-all duration-200 ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-[#D4AF37] transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <img
            src={imageSrc}
            alt={title}
            className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
          />

          <div
            className={`mt-6 text-center transition-all duration-200 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <h3 className="font-['Dancing_Script'] text-[2.5rem] text-[#D4AF37] mb-2">{title}</h3>
            <p className="font-['Crimson_Text'] text-[1.2rem] text-[#FFFDF7]/80">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}


