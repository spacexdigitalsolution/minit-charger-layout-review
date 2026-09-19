import DynamicForm from "./_components/DynamicForm";

export const metadata = {
  title: "Contact Us | Minit Charger",
  description: "Get in touch with Minit Charger Sales, Service, or Customer Support.",
};

export default function ContactPage() {
  return (
    <main className="bg-white dark:bg-black min-h-screen pt-32 pb-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="lg:grid lg:grid-cols-12 lg:gap-24 items-start">

          <div className="lg:col-span-4 mb-16 lg:mb-0 lg:sticky lg:top-40">
            <h1 className="font-display text-5xl md:text-5xl font-black  uppercase text-zinc-900 dark:text-white mb-6 ">
              Contact Us
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light  mb-12">
              Select the nature of your inquiry to ensure it reaches the right team immediately.
            </p>

            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 hidden lg:block">
              <h2 className="text-xs font-bold text-zinc-900 dark:text-white uppercase  mb-6">
                Direct Contact
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-zinc-600 dark:text-zinc-400 uppercase  mb-2">Sales Inquiries</h3>
                  <p className="font-medium">
                    <a href="mailto:sales@minitcharger.com" className="text-zinc-900 dark:text-zinc-300 hover:text-green-600 dark:hover:text-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 rounded-sm transition-colors">
                      sales@minitcharger.com
                    </a>
                  </p>
                  <p className="font-light text-sm mt-1">
                    <a href="tel:+18005550199" aria-label="1 8 0 0. 5 5 5. 0 1 9 9" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 rounded-sm transition-colors">
                      +1 (800) 555-0199
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-zinc-600 dark:text-zinc-400 uppercase  mb-2">Technical Support</h3>
                  <p className="font-medium">
                    <a href="mailto:support@minitcharger.com" className="text-zinc-900 dark:text-zinc-300 hover:text-green-600 dark:hover:text-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 rounded-sm transition-colors">
                      support@minitcharger.com
                    </a>
                  </p>
                  <p className="font-light text-sm mt-1">
                    <a href="tel:+18005550200" aria-label="1 8 0 0. 5 5 5. 0 2 0 0" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 rounded-sm transition-colors">
                      +1 (800) 555-0200
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-zinc-600 dark:text-zinc-400 uppercase  mb-2">Global Headquarters</h3>
                  <address className="not-italic">
                    <p className="text-zinc-900 dark:text-zinc-300 font-medium">123 Industrial Parkway</p>
                    <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm mt-1">Suite 100<br />Tech City, TC 90210</p>
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <DynamicForm />
          </div>

        </div>

      </div>
    </main>
  );
}
