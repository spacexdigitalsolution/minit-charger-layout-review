// section: input-field
export const requestTypes = [
  { id: "sales", label: "Sales", desc: "Get a quote or sizing for your fleet" },
  { id: "service", label: "Service", desc: "Report an issue or request maintenance" },
  { id: "customer_service", label: "Customer Service", desc: "General inquiries and parts" }
];

export const pipelineOptions = [
  "Direct Sales",
  "Partner / Dealer",
  "OEM",
  "Other"
];

export const InputField = ({ label, name, type = "text", required = false, isTextArea = false }) => (
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
