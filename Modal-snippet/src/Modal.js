import React from "react";
import "./modal.css";

export default function Modal({
  isVisible = false,
  title,
  content,
  footer,
  onClose
}) {
  React.useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  function keydownHandler({ key }) {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  }

  return !isVisible ? null : (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content">{content}</div>
        </div>
        {footer && (
          <div className="modal-footer" onClick={onClose}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
