import React from "react";

export default function HelpPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Help Center
      </h1>

      <section className="mb-10">
        <p className="text-lg text-gray-800 text-center mb-4">
          Have a question or need help? You’re in the right place. Browse our resources or reach out—your issue, big or small, matters to us.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Jobseekers Section */}
        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-3 text-blue-900">Help for Jobseekers</h2>
          <ul className="list-disc ml-6 space-y-2 text-blue-900">
            <li>How to create an account</li>
            <li>Building your profile</li>
            <li>Searching &amp; applying for jobs</li>
            <li>Uploading and managing your resume</li>
            <li>Tracking applications</li>
            <li>Troubleshooting login &amp; email issues</li>
            <li>How-to guides and FAQs</li>
          </ul>
          <a
            href="/help/jobseekers"
            className="inline-block mt-4 text-blue-700 hover:underline font-medium"
          >
            Go to Jobseeker Help Center &rarr;
          </a>
        </div>
        {/* Employers Section */}
        <div className="bg-green-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-3 text-green-900">Help for Employers</h2>
          <ul className="list-disc ml-6 space-y-2 text-green-900">
            <li>How to create a company account</li>
            <li>Posting jobs &amp; managing listings</li>
            <li>Reviewing candidate applications</li>
            <li>Shortlisting &amp; messaging talent</li>
            <li>Billing and subscription management</li>
            <li>Account &amp; privacy settings</li>
            <li>How-to guides and FAQs</li>
          </ul>
          <a
            href="/help/employers"
            className="inline-block mt-4 text-green-700 hover:underline font-medium"
          >
            Go to Employer Help Center &rarr;
          </a>
        </div>
      </div>

      <section className="bg-gray-100 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Still need help?</h3>
        <p className="mb-2 text-gray-700">If your question isn’t answered here, our support team is ready to assist:</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Email: support@yourdomain.com</li>
          <li>Chat: Available weekdays, 9am–6pm IST</li>
          <li>Visit our <a href="/contact" className="text-blue-600 hover:underline">Contact page</a></li>
        </ul>
      </section>
    </div>
  );
}
