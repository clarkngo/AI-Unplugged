import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import LessonPlan from '../components/LessonPlan';

export default function K9to12() { // eslint-disable-line
  return (
    <>
      <div className="header">
        <h1>🚀 K 9–12: Advanced AI Explorations</h1>
        <p>Deeper explorations of models, ethics, and creative AI — activities that prepare students for advanced study.</p>
      </div>
      <Breadcrumbs trail="STEM K-12 > K 9–12" />
      <div className="container">
        <div className="lesson-content">
          <h1>Advanced Pathway: Ages 14–18</h1>
          <p>Deeper activities exploring models, ethics, and creative AI — suitable for older learners preparing for further study.</p>
          <LessonPlan
            title="Lesson 1 — AI Ethics Scenario (45–60 min)"
            objectives="Identify ethical issues, stakeholders and propose mitigation approaches."
            materials="Printed case studies, stakeholder cards, chart paper, markers."
            procedure={[
              'Present a short case study involving algorithmic decisions (10 minutes).',
              'Groups identify stakeholders, likely harms, and propose mitigations (20–30 minutes).',
              'Class shares proposals and compares trade-offs (10–15 minutes).',
            ]}
            assessment="Students submit a one-paragraph proposal outlining a mitigation and who it helps/harms."
            differentiation="Provide guiding question sheets for students who need structure; offer independent research extensions for advanced learners."
          />
          <LessonPlan
            title="Lesson 2 — Generative Project (60–90 min)"
            objectives="Understand prompt design, controlled experimentation, and result analysis."
            materials="Web generation tools or guided notebooks, prompt templates, output recording sheets."
            procedure={[
              'Introduce the tool and safety constraints; show examples (10 minutes).',
              'Students design prompts, run experiments, and record outputs (30–50 minutes).',
              'Analyze patterns in results and iterate on prompt design (15–20 minutes).',
            ]}
            assessment="Students submit a short lab-style report: prompt, outputs and a short analysis."
            differentiation="Offer scaffolded prompt templates for beginners and open-ended creative goals for advanced students."
          />
          <LessonPlan
            title="Lesson 3 — Design a Robot (45-60 min)"
            objectives="Apply systems thinking to a design problem, identifying sensors, actuators, and control logic."
            materials="Large paper or whiteboard, markers, design prompt (e.g., 'Design a robot to help a visually impaired person navigate a library')."
            procedure={[
              "Introduce the design challenge and constraints (5 minutes).",
              "In groups, students brainstorm and sketch a robot, labeling its sensors (inputs), actuators (outputs), and the 'brain' (processing logic) (25-35 minutes).",
              "Each group presents their design, explaining how the parts work together to solve the problem (10-15 minutes).",
            ]}
            assessment="Evaluate the coherence of the system design: do the sensors, logic, and actuators work together to meet the goal?"
            differentiation="Provide a component library (list of sensors, motors, etc.) for groups that need more structure."
          />
          <button className="print-btn" onClick={() => window.print()}>Printable pack (K 9–12)</button>
          <p className="muted">Teacher guides include assessment prompts and extension ideas for advanced classes.</p>
          <Link to="/k12" className="back-link">Back to STEM K-12 Pathways</Link>
        </div>
      </div>
    </>
  );
}