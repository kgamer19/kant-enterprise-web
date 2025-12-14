"use client";

import { useEffect, useState } from "react";

export const dynamic = "force-static";

export default function Contact() {
  const [open, setOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <h1 className="h1">Contact</h1>

      <p className="p">
        Use the form below contact us
      </p>

      <button
        type="button"
        className="btn"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        Open contact form
      </button>

      {open && (
        <div
          className="modalOverlay"
          role="dialog"
          aria-modal="true"
          aria-label="Contact form"
          onClick={() => setOpen(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <div>
                <div className="modalTitle">Contact</div>
                <div className="modalSub">
                  Please don’t include sensitive information.
                </div>
              </div>

              <button
                type="button"
                className="iconBtn"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setOpen(false);
              }}
            >
              <label className="field">
                <span className="label">Name</span>
                <input className="input" name="name" placeholder="Lorem Ipsum" />
              </label>

              <label className="field">
                <span className="label">Organization</span>
                <input className="input" name="org" placeholder="Dolor Sit" />
              </label>

              <label className="field">
                <span className="label">Topic</span>
                <select className="input" name="topic" defaultValue="General">
                  <option>General</option>
                  <option>Kant Technologies</option>
                  <option>Kant Energy</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="field">
                <span className="label">Message</span>
                <textarea
                  className="textarea"
                  name="message"
                  rows={6}
                  placeholder="Lorem ipsum dolor sit amet…"
                />
              </label>

              <div className="actions">
                <button
                  type="button"
                  className="btnGhost"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}


