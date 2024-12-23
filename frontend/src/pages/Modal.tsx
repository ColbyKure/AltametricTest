// Modal.tsx
import React from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  invoice: any | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, invoice }) => {
  if (!isOpen || !invoice) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Invoice Details</h2>
        <p><strong>Invoice ID:</strong> {invoice.id}</p>
        <p><strong>Vendor Name:</strong> {invoice.vendor_name}</p>
        <p><strong>Amount:</strong> ${invoice.amount}</p>
        <p><strong>Details:</strong> {invoice.details}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
