"use client";

type SheetProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Sheet = ({ isOpen, onClose, children }: SheetProps) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      <div
        className={`fixed top-0 right-0 z-50 flex h-full w-[300px] max-w-[85%] flex-col bg-accent text-white shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default Sheet;
