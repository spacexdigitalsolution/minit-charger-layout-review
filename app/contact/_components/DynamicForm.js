"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { UploadCloud, X, CheckCircle2 } from "lucide-react";

const requestTypes = [
  { id: "sales", label: "Sales", desc: "Get a quote or sizing for your fleet" },
  { id: "service", label: "Service", desc: "Report an issue or request maintenance" },
  { id: "customer_service", label: "Customer Service", desc: "General inquiries and parts" }
];

// Placeholder pipeline options
const pipelineOptions = [
  "Direct Sales",
  "Partner / Dealer",
  "OEM",
  "Other"
];

const InputField = ({ label, name, type = "text", required = false, isTextArea = false }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase  mb-2 flex justify-between">
      {label} {required && <span className="text-zinc-500 dark:text-zinc-400 font-light lowercase normal-case ">(required)</span>}
    </label>
    {isTextArea ? (
      <textarea
        id={name}
        name={name}
        required={required}
        aria-required={required}
        rows={4}
        className="w-full bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-sm px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors resize-y"
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        aria-required={required}
        className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 rounded-none px-0 py-2 text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors"
      />
    )}
  </div>
);

export default function DynamicForm() {
  const [requestType, setRequestType] = useState(null);
  const [pipeline, setPipeline] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [files, setFiles] = useState([]);

  const formContainerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (requestType) {
        gsap.from(".form-anim", {
          y: 20,
          autoAlpha: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          clearProps: "all"
        });
      }
    });
  }, { dependencies: [requestType], scope: formContainerRef });

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (idx) => {
    setFiles(files.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="py-16 text-center border-t border-zinc-200 dark:border-zinc-800" role="alert" aria-live="polite">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 mb-6">
          <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
        </div>
        <h2 className="font-display text-3xl font-black uppercase  text-zinc-900 dark:text-white mb-4">
          Request Received
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 font-light text-lg">
          Our team has received your details and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full" ref={formContainerRef}>

      {/* Top Level Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-12">

        {/* Pipeline Selector (Global context) */}
        <div>
          <label htmlFor="pipeline" className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase  mb-4 block">
            How did you hear about us? (Pipeline) <span className="text-zinc-500 dark:text-zinc-400 font-light normal-case ">(required)</span>
          </label>
          <select
            id="pipeline"
            value={pipeline}
            required
            aria-required="true"
            onChange={(e) => setPipeline(e.target.value)}
            className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 rounded-none px-0 py-2 text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors cursor-pointer"
          >
            <option value="" disabled>Select an option...</option>
            {pipelineOptions.map(opt => <option key={opt} value={opt} className="text-zinc-900">{opt}</option>)}
          </select>
        </div>

        {/* Request Type Selector */}
        <div>
          <label htmlFor="requestType" className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase  mb-4 block">
            What can we help you with? <span className="text-zinc-500 dark:text-zinc-400 font-light normal-case ">(required)</span>
          </label>
          <select
            id="requestType"
            value={requestType || ""}
            required
            aria-required="true"
            onChange={(e) => setRequestType(e.target.value)}
            className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 rounded-none px-0 py-2 text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors cursor-pointer"
          >
            <option value="" disabled>Select a request type...</option>
            {requestTypes.map(type => <option key={type.id} value={type.id} className="text-zinc-900">{type.label} - {type.desc}</option>)}
          </select>
        </div>

      </div>

      {/* Dynamic Form Reveal */}
      <div
        aria-live="polite"
        className={`grid transition-all duration-500 ease-in-out ${requestType ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          {requestType && (
            <form onSubmit={handleSubmit} className="pt-4">
              <fieldset>
                <legend className="sr-only">Request Details</legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-12">

                  {/* --- SALES FORM --- */}
                  {requestType === "sales" && (
                    <>
                      <div className="md:col-span-2 form-anim">
                        <label className="text-xs font-bold text-zinc-500 uppercase  mb-2 flex justify-between">
                          Product Type
                        </label>
                        <select className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 rounded-none px-0 py-2 text-zinc-900 dark:text-white focus:outline-none focus:border-green-600 transition-colors">
                          <option value="">General Inquiry</option>
                          <option value="altus">Altus II (GSE)</option>
                          <option value="magnus">Magnus (Universal Fleet)</option>
                          <option value="mobilus">Mobilus (Mobile)</option>
                          <option value="cumulus">Cumulus (Software)</option>
                        </select>
                      </div>
                      <div className="form-anim"><InputField label="Fleet Size" name="fleetSize" required /></div>
                      <div className="form-anim"><InputField label="Location" name="location" required /></div>
                      <div className="form-anim"><InputField label="Company Name" name="company" required /></div>
                      <div className="form-anim"><InputField label="Contact Name" name="name" required /></div>
                      <div className="form-anim"><InputField label="Phone" name="phone" type="tel" required /></div>
                      <div className="form-anim"><InputField label="Email" name="email" type="email" required /></div>
                    </>
                  )}

                  {/* --- SERVICE FORM --- */}
                  {requestType === "service" && (
                    <>
                      <div className="form-anim"><InputField label="Customer (Name/Account)" name="customer" required /></div>
                      <div className="form-anim"><InputField label="Site Identifier / Location" name="site" required /></div>
                      <div className="md:col-span-2 form-anim"><InputField label="Product Name & Serial No." name="serial" required /></div>
                      <div className="md:col-span-2 form-anim"><InputField label="Complaint Details" name="details" isTextArea required /></div>

                      {/* File Upload */}
                      <div className="md:col-span-2 form-anim">
                        <label className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase  mb-2 block">
                          Attachments
                        </label>
                        <div className="border border-dashed border-zinc-300 dark:border-zinc-700 p-8 flex flex-col items-center justify-center text-center group hover:border-green-600 transition-colors cursor-pointer relative focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 dark:focus-within:ring-offset-black">
                          <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            aria-label="Upload files"
                          />
                          <UploadCloud className="w-8 h-8 text-zinc-400 group-hover:text-green-600 transition-colors mb-4" strokeWidth={1.5} />
                          <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 group-hover:decoration-green-600">Browse files</span>
                          <span className="text-xs text-zinc-500 mt-2 font-light">or drag and drop here</span>
                        </div>

                        {files.length > 0 && (
                          <div className="mt-4 space-y-2">
                            {files.map((file, idx) => (
                              <div key={idx} className="flex items-center justify-between py-2 px-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm">
                                <span className="truncate text-zinc-700 dark:text-zinc-300">{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>
                                <button type="button" aria-label={`Remove ${file.name}`} onClick={() => removeFile(idx)} className="text-zinc-400 hover:text-red-500 ml-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm">
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="md:col-span-2 form-anim border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-4"><h3 className="text-xs font-bold text-zinc-900 dark:text-white uppercase ">Contact Info</h3></div>
                      <div className="form-anim"><InputField label="Contact Name" name="name" required /></div>
                      <div className="form-anim"><InputField label="Phone" name="phone" type="tel" required /></div>
                      <div className="form-anim"><InputField label="Email" name="email" type="email" required /></div>
                    </>
                  )}

                  {/* --- CUSTOMER SERVICE FORM --- */}
                  {requestType === "customer_service" && (
                    <>
                      <div className="md:col-span-2 form-anim"><InputField label="Inquiry Details" name="details" isTextArea required /></div>
                      <div className="form-anim"><InputField label="Part No." name="part" /></div>
                      <div className="form-anim"><InputField label="PO No." name="po" /></div>

                      <div className="md:col-span-2 form-anim border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-4"><h3 className="text-xs font-bold text-zinc-900 dark:text-white uppercase ">Contact Info</h3></div>
                      <div className="form-anim"><InputField label="Contact Name" name="name" required /></div>
                      <div className="form-anim"><InputField label="Phone" name="phone" type="tel" required /></div>
                      <div className="form-anim"><InputField label="Email" name="email" type="email" required /></div>
                    </>
                  )}
                </div>
              </fieldset>

              <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-end form-anim">
                <button
                  type="submit"
                  disabled={isSubmitting || !pipeline}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold uppercase r text-sm px-12 py-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>

    </div>
  );
}
