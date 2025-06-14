"use client"
import React, { useState, useEffect } from 'react';

export default function Goals() {
  const [followPos, setFollowPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setFollowPos({ x: e.pageX, y: e.pageY });
    }

    window.addEventListener('mousemove', handleMouseMove);


    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
  return (
    <main className="min-h-screen bg-gray-950 text-white font-mono px-6 py-10">
      <div
        style={{
          top: `${followPos.y}px`,
          left: `${followPos.x}px`,
          transform: 'translate(-50%, -50%)',
          pointerEvents: "none",
          zIndex: 50
        }}
        className="rounded-full absolute h-3 w-3 bg-orange-200"
      />
      <div
        style={{
          top: `${followPos.y}px`,
          left: `${followPos.x}px`,
          transform: 'translate(-50%, -50%)',
          pointerEvents: "none",
          zIndex: 49
        }}
        className="rounded-full absolute h-4 w-4 bg-orange-400"
      />
      <div
        style={{
          top: `${followPos.y}px`,
          left: `${followPos.x}px`,
          transform: 'translate(-50%, -50%)',
          pointerEvents: "none",
          zIndex: 48
        }}
        className="rounded-full absolute h-5 w-5 bg-orange-600"
      />
      <section className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-orange-400 text-center mb-10">
          Goals / Learning Objectives
        </h1>

        <div className="space-y-12">
          {/* Objective 1 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
            <h2 className="text-3xl font-bold text-orange-400 mb-2">
              Objective #1
            </h2>
            <p className="text-lg text-white font-semibold mb-4">
              Implement a new internal tool or improvement that supports payment rail systems used by Gemini by August 9.
            </p>
            <h3 className="text-xl text-gray-300 font-bold mb-1">Learning Activities:</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I will review current documentation and internal tooling used by the Funding team. I will meet with my mentor weekly to identify a part of the payment processing pipeline where efficiency or usability can be improved. I will then design and implement a tool or enhancement (e.g., improved logging, automated testing, or a developer-facing UI component) based on team priorities. I will use GitHub for version control, participate in code reviews, and present my changes to the team for feedback.
            </p>
            <h3 className="text-xl text-gray-300 font-bold mb-1">Evaluation:</h3>
            <p className="text-gray-300 leading-relaxed">
              I will be successful if I contribute at least one functional tool or backend improvement that is approved and merged into the team’s main codebase by August 9. Success will be determined by the completion of this feature, feedback from code reviewers, and confirmation from my mentor or team lead that it improves workflow or system performance.
            </p>
          </div>

          {/* Objective 2 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
            <h2 className="text-3xl font-bold text-orange-400 mb-2">
              Objective #2
            </h2>
            <p className="text-lg text-white font-semibold mb-4">
              Improve code quality and readability in at least three core components of the funding services by conducting refactors or writing new documentation by August 9.
            </p>
            <h3 className="text-xl text-gray-300 font-bold mb-1">Learning Activities:</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I will review the Funding team’s backend services and identify areas of technical debt or unclear logic. I will use Gemini’s engineering style guide to revise and refactor code for improved readability, modularity, and performance. In cases where the code is already sound but lacks documentation, I will write or update internal documentation to assist future developers. I will request peer reviews and incorporate feedback to ensure that my improvements align with team standards.
            </p>
            <h3 className="text-xl text-gray-300 font-bold mb-1">Evaluation:</h3>
            <p className="text-gray-300 leading-relaxed">
              I will be successful if I complete at least three pull requests addressing code clarity or documentation, and each is approved by the team and merged into the main branch by August 9. These will be verified through GitHub pull request history and confirmed by my mentor or code reviewers.
            </p>
          </div>

          {/* Objective 3 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
            <h2 className="text-3xl font-bold text-orange-400 mb-2">
              Objective #3
            </h2>
            <p className="text-lg text-white font-semibold mb-4">
              Deploy at least one backend service or feature to staging or production environments independently using Gemini’s CI/CD pipeline by August 9.
            </p>
            <h3 className="text-xl text-gray-300 font-bold mb-1">Learning Activities:</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I will complete onboarding tasks related to the CI/CD tools used by Gemini (such as Jenkins or GitHub Actions). I will shadow a teammate during their deployment process and take detailed notes. Once I understand the deployment flow, I will independently prepare, test, and deploy my own code changes to the staging or production environment following all security and approval procedures. I will also document the deployment steps in a personal guide for future reference.
            </p>
            <h3 className="text-xl text-gray-300 font-bold mb-1">Evaluation:</h3>
            <p className="text-gray-300 leading-relaxed">
              I will be successful if I complete one verified deployment to staging or production that follows Gemini’s internal protocols. My team lead will evaluate the deployment and confirm it meets all requirements and is executed without errors or rollbacks.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
