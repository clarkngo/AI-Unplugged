export default function LessonPlan({ title, objectives, materials, procedure, assessment, differentiation }) {
  return (
    <section className="lesson-plan">
      <h2>{title}</h2>
      <p><strong>Objectives:</strong> {objectives}</p>
      <p><strong>Materials:</strong> {materials}</p>
      <h3>Procedure</h3>
      <ol>
        {procedure.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      {assessment && (
        <>
          <h4>Assessment</h4>
          <p>{assessment}</p>
        </>
      )}
      <h4>Differentiation</h4>
      <p>{differentiation}</p>
    </section>
  );
}