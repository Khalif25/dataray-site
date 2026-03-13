export default function AIDiseasePrediction() {
  return (
    <main className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-4xl font-semibold text-slate-950">
          AI Disease Risk Prediction
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          This demonstration illustrates how machine learning models can
          estimate chronic disease risk using lifestyle and demographic
          factors.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-950">
          Model Inputs
        </h2>

        <ul className="mt-4 space-y-3 text-slate-600">
          <li>• Age</li>
          <li>• Smoking history</li>
          <li>• Physical activity level</li>
          <li>• Body Mass Index (BMI)</li>
          <li>• Lifestyle indicators</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-slate-950">
          Model Capabilities
        </h2>

        <ul className="mt-4 space-y-3 text-slate-600">
          <li>• Risk probability estimation</li>
          <li>• Population-level health insights</li>
          <li>• Early risk detection</li>
          <li>• Decision support for healthcare planning</li>
        </ul>

      </div>
    </main>
  );
}