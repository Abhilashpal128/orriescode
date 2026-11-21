import { useEffect, useRef, type ReactNode } from 'react'
import { X } from 'lucide-react'

export default function Modal({ children, onClose, labelId, wide = false }: { children: ReactNode; onClose: () => void; labelId: string; wide?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = ref.current
    const active = document.activeElement as HTMLElement | null
    const oldOverflow = document.body.style.overflow
    dialog?.showModal()
    document.body.style.overflow = 'hidden'
    return () => { dialog?.close(); document.body.style.overflow = oldOverflow; active?.focus({ preventScroll: true }) }
  }, [])
  return <dialog ref={ref} className={`modal ${wide ? 'modal-wide' : ''}`} aria-labelledby={labelId} onCancel={event => { event.preventDefault(); onClose() }} onClick={event => { if (event.target === event.currentTarget) { const bounds = event.currentTarget.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose() } }}>
    <button className="modal-close" onClick={onClose} aria-label="Close dialog" autoFocus><X size={22} /></button>
    {children}
  </dialog>
}
