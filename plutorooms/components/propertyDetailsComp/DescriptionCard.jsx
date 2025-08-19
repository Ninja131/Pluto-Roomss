"use client"
import React, { useEffect, useRef, useState } from "react"
import { Button } from "../ui/button"

const COLLAPSED = 60 // px  (≈ your max-h-15)

export default function DescriptionCard({
  description = `The comforts don't end there, however. Tech integrations, like the Stanza Living - Resident App, machine learning, biometric security, and more, take boring, everyday tasks to the online world and create an effortless living experience. The comforts don't end there, however. Tech integrations, like the Stanza Living - Resident App, machine learning, biometric security, and more, take boring, everyday tasks to the online world and create an effortless living experience.`,
}) {
  const ref = useRef(null)
  const [expanded, setExpanded] = useState(false)
  const [fullHeight, setFullHeight] = useState(COLLAPSED)
  const [needsToggle, setNeedsToggle] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const measure = () => {
      const h = el.scrollHeight
      setFullHeight(h)
      setNeedsToggle(h > COLLAPSED)
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [description])

  return (
    <section className="bg-white rounded-2xl ">
      <div className="w-full flex justify-center items-start gap-4 px-6 py-10 flex-col">
        <h3 className="h3 text-grayMain-700">About this Property</h3>

        <div className="flex flex-col items-start w-full">
          <div
            ref={ref}
            className="text-grayMain-600 body-sm max-w-[600px] overflow-hidden transition-[max-height] duration-500 ease-in-out"
            style={{ maxHeight: expanded ? fullHeight : COLLAPSED }}
            aria-expanded={expanded}
          >
            <p>{description}</p>
          </div>

          {needsToggle && (
            <Button
              variant="link"
              className="px-0 text-primary-600"
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? "Show less" : "Show more"}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
